<template>
    <div class="row text-start my-3">
        <div class="col-sm-6">
            <form @submit.prevent="updateBlog" class="was-validated">
            <!-- Tiêu đề -->
            <div class="mb-3">
                <h4 for="title" class="form-h4">Tiêu đề:</h4>
                <input type="text" v-model="post.title" class="form-control" id="title" placeholder="Nhập tiêu đề bài viết" value="Phương pháp tập Pilates giúp phục hồi chấn thương cột sống">
            </div>

            <!-- Nội dung -->
            <div class="mb-3">
                <h4 for="content" class="form-h4">Nội dung:</h4> 
                <textarea v-model="post.content" class="form-control" id="content" rows="25"  placeholder="Nhập nội dung bài viết" value="" ></textarea>
            </div>

            <!-- Hình ảnh minh họa -->
            <div class="mb-3">
                <h4 for="image" class="form-h4">Hình ảnh minh họa:</h4>
                <input class="form-control" type="file" id="image" @change="handleImageUpload"  data-bs-browse="Chọn tệp">
            </div>


            <!-- Nút lưu -->
            <button  class="btn btn-primary">Lưu thay đổi</button>
        </form>
          <button  class="btn btn-danger mt-3" @click="xoa()">Xoá bài viết!</button>
        </div>
        <div class="col-sm-6 text-start border-1 border-start">
            <h2 class="text-info text-start mb-4">{{ post.title }}</h2>
            <img :src="post.image" class="w-50 mb-3" alt="">
            <p> {{ post.content }} </p>
        </div>
    </div>
</template>
<script setup>
import { listBlog} from '../data/data';
import { pushScopeId, reactive } from 'vue';
import router from '../router';
const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
});
function handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          post.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }

var post = reactive(listBlog.find(post => post.id == props.id) || {});

function updateBlog(){
    const index = listBlog.findIndex((b) => b.id == post.id);
    listBlog[index] = { ...post };
    alert('Bài viết đã được chỉnh sửa (>_<)');
    console.log(listBlog);
}
function xoa(){
  const index = listBlog.findIndex((b) => b.id == post.id);
if (index !== -1) { // Kiểm tra nếu tìm thấy index
  listBlog.splice(index, 1); // Xóa 1 phần tử tại vị trí index
  alert('Xoá bài viết thành công!');
  router.push('/account');
} else {
  console.log('Không tìm thấy bài viết để xóa');
}
}
</script>