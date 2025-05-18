<template>
    <div class="row text-start mt-4">
      <div class="col-sm-8 border-1 border-end">
        <h2 class="text-info text-center mb-4">{{ post.title }}</h2>
        <img :src="post.image" class="w-100 mb-3" alt="">
        <p>{{ post.content }}</p>
      </div>
      <div class="col-sm-4">
        <h4>Bình luận bài viết tại đây</h4>
        <form @submit.prevent="submitComment" class="needs-validation">
          <textarea v-model="noiDung" placeholder="Nhập bình luận của bạn" class="form-control" required></textarea>
          <button class="btn btn-success mt-2">Gửi bình luận</button>
        </form>
        <h4>Danh sách các bình luận:</h4>
        <ul>
          <li v-for="(cmt, index) in cmts" :key="index">
            <b>{{ cmt.fullName }} :</b> {{ cmt.content }}
            <br><small>{{ cmt.date }}</small>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref } from "vue";
import { listBlog, listCmt } from "../data/data.js"; 
import { account } from '../data/data'; 
import { useRouter } from "vue-router";


const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
});

// Lấy thông tin bài viết từ id
const post = listBlog.find(post => post.id == props.id) || {};

// Lưu danh sách bình luận cho bài viết
const cmts = ref(listCmt.filter(cmt => cmt.idBlog == post.id));

// Biến lưu trữ nội dung bình luận
const noiDung = ref('');
const router = useRouter();

// Hàm xử lý gửi bình luận
const submitComment = () => {
  if (account && account.fullName) {
    if (noiDung.value) {
      const today = new Date();
      const day2 = today.getDate().toString().padStart(2, '0'); // Đảm bảo ngày có 2 chữ số
      const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Đảm bảo tháng có 2 chữ số
      const year = today.getFullYear();
      const user = account.fullName; // Sử dụng fullName của tài khoản đăng nhập

      // Thêm bình luận mới vào danh sách
      listCmt.push({
        idBlog: post.id,
        fullName: user,
        content: noiDung.value,
        date: `${day2}/${month}/${year}`,  // Định dạng ngày
      });

      // Cập nhật danh sách bình luận sau khi gửi
      cmts.value = listCmt.filter(cmt => cmt.idBlog == post.id);
      noiDung.value = '';  // Xóa nội dung sau khi gửi
    }
  } else {
    // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
    alert("Vui lòng đăng nhập để bình luận.");
    router.push(`/detail/cmt/${post.id}`);
  }
}
</script>

  