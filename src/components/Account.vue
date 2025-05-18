<template>
    <div class="row text-start">
        <aside class="col-sm-4 pe-0">
            <h2 class="text-info mb-2">Về bạn</h2>
                <div class="card m-1 p-1">
                    <div class="card-body p-0 text-center" >
                        <img :src="account2.avatar" class="card-img-top rounded-circle m-4 p-4" alt="..." style="width: 300px; height: 300px;">
                        <form @submit.prevent="updateAc" class="was-validation text-start">
                            <!-- Họ và Tên -->
                            <div class="mb-3">
                                <label for="fullname" class="form-label" >Họ và Tên</label>
                                <input v-model="account2.fullName" type="text" class="form-control" id="fullname" placeholder="Nhập họ và tên" required>
                              </div>

                            <!-- Email   -->
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input v-model="account2.email" type="email" class="form-control" id="email" placeholder="Nhập email"  readonly>
                            </div>

                            <!-- Mật khẩu -->
                            <div class="mb-3">
                                <label for="password" class="form-label">Mật khẩu</label>
                                <input v-model="account2.password" type="text" class="form-control" id="password" placeholder="Nhập mật khẩu" >
                            </div>

                            <!-- Xác nhận Mật khẩu -->
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Xác Nhận Mật Khẩu</label>
                                <input v-model="ps2" type="password" class="form-control" id="confirmPassword" placeholder="Xác nhận mật khẩu">
                            </div>

                            <!-- Nghề nghiệp -->
                            <div class="mb-3">
                                <label for="job" class="form-label">Nghề nghiệp</label>
                                <input v-model="account2.occupation" type="text" class="form-control" id="job" placeholder="Không bắt buộc">
                            </div>

                            <!-- Mô tả -->
                            <div class="mb-3">
                                <label for="description" class="form-label">Mô tả</label>
                                <textarea v-model="account2.description" class="form-control" id="description" rows="3" placeholder="Không bắt buộc"></textarea>
                            </div>

                            <!-- Ảnh đại diện -->
                            <div class="mb-3">
                                <label for="avatar" class="form-label">Ảnh đại diện</label>
                                <input @change="handleImageUpload" class="form-control" type="file" id="avatar" data-bs-browse="Chọn tệp">
                            </div>

                            <!-- Nút lưu thay đổi -->
                            <button type="submit" class="btn btn-primary w-100">Lưu Thay Đổi</button>
                        </form>
                    </div>
                </div>
            </aside>

        <section class="col-sm-8">
        <h2 class="text-info mb-2">Bài viết của bạn</h2>
        <div class="list-group rounded-2 bg-secondary bg-opacity-10 py-3 g-0 mt-2">
          <div class="row g-3 px-3">
            <!-- Card 1 -->
            <router-link  class="col-sm-6 text-decoration-none" v-for="(blog, index) in listBlogA" :key="index" :to="`/detail/${blog.id}`">
              <div class="list-group-item card p-0 rounded-2">
                <div class="card-header">
                  <h4 class="card-title">
                    {{ blog.title }}
                    <small><i class="fa-solid fa-message"></i> {{ blog.cmt }} </small>
                  </h4>
                </div>
                <div class="card-body">
                  <img :src="blog.image" class="card-img rounded-0" alt="...">
                  <p class="card-text fw-normal">
                    {{ blog.content.substring(0, 90) }}...
                  </p>
                  <RouterLink class="d-flex justify-content-end text-decoration-none" :to="`/update/${blog.id}`"><i class="fa-solid fa-pen"></i></RouterLink> 
                </div>
              </div>
            </router-link>

          </div>
        </div>
        <ul class="pagination mt-3 justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#">
              <i class="fas fa-arrow-left arrow-icon"></i> <!-- Mũi tên trái -->
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <i class="fas fa-arrow-right arrow-icon"></i> <!-- Mũi tên phải -->
            </a>
          </li>
        </ul>
      </section>
    </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { reactive } from 'vue';
  import { user, account, listBlog } from '../data/data';
  
  var account2 = reactive({ ...account });
  const listBlogA = listBlog.filter(post => post.emailAuthor == account.email);

  var ps2 = ref('');

  function handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          account2.avatar = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }

  function updateAc() {
    if(account.password != account2.password){
      if(ps2.value == account2.password){
        const index = user.findIndex((u) => u.fullName === account.fullName);
        if (index !== -1) {
          alert("Đã lưu thay đổi!");
          console.log("chạy");
          user[index] = { ...account2 }; // Replace the user entry with a new object copy
          Object.assign(account, account2);// Cập nhật user trong mảng          
          ps2.value = '';
        }
      }else if(ps2.value != account2.password){
        alert("Xác nhận lại mật khẩu mới không đúng!");
      }else{
        alert("Vui lòng nhập xác nhận lại mật khẩu!")
      }
    }else{
      const index = user.findIndex((u) => u.fullName === account.fullName);
        if (index !== -1) {
          alert("Đã lưu thay đổi!");
          console.log("chạy");
          user[index] = { ...account2 }; // Replace the user entry with a new object copy
          Object.assign(account, account2); // Cập nhật user trong mảng          
          ps2.value = '';
        }
    }
    
  }
</script>