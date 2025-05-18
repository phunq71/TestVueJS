<template>
    <div class="text-start my-4">
    <h1 class="text-danger">Trang đăng bài</h1>
      <hr>
    <form @submit.prevent="submitblog" class="was-validated text-start" ref="form">
    <div class="row">
      <div class="col-sm-8">
        <h4 class="form-h4" for="title">Tiêu đề</h4>
        <input type="text" v-model="blog.title" id="title" class="form-control mb-2" required>
        <div class="invalid-feedback">Vui lòng nhập tiêu đề</div>

        <h4 class="form-h4" for="content">Nội dung</h4>
        <textarea v-model="blog.content" id="content" rows="16" style="width: 100%;" class="form-control" required></textarea>
        <div class="invalid-feedback">Vui lòng nhập nội dung</div>
      </div>
      <div class="col-sm-4">
        <h4 for="img" class="form-h4">Thêm poster</h4>
        <input type="file" id="img" @change="handleImageUpload" title="Ảnh này sẽ là ảnh chính của blog" class="form-control mb-2" required>
        <div class="invalid-feedback">Vui lòng thêm ảnh chính</div>
        <div v-if="blog.image" class="card text-center mt-5 p-0">
          <img  :src="blog.image" alt="anh" class="w-100">
        </div>
      </div>
    </div>
    <button class="btn btn-primary mt-2">Đăng bài</button>
  </form>

</div>
</template>


<script>
import { listBlog } from '../data/data.js';
import { account } from '../data/data.js';

export default {
  data() {
    return {
        blog:{ id: null,
      title: '',
      content:'',
      image: null,
      isNB: false,
      cmt: 0,
      emailAuthor: ''}
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.blog.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    submitblog() {
      this.blog.id = listBlog.length + 1;
      this.blog.emailAuthor = account.email;  
      listBlog.push({ ...this.blog });
      alert('Bài viết đã được đăng thành công!');
      this.resetForm();
    },
    resetForm() {
      this.blog = {
        title: '',
      content:'',
      image: '',
      isNB: false,
      cmt: 0,
      emailAuthor: ''
      };
      this.$refs.form.reset();
    }
  }
};
</script>