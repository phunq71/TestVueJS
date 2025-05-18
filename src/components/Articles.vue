<template>
    <div class="row text-start  ">
      <aside class="col-sm-4">
        <h3 class="text-info mt-2">Chuyên mục</h3>
        <ul class="list-group">
          <li
            class="list-group-item active list-group-item-success d-flex list-group-item-action justify-content-between align-items-center">
            <a class="nav-link" href="#">Tất cả</a>
            <span class="badge bg-primary rounded-pill">99+</span>
          </li>
          <li
            class="list-group-item d-flex list-group-item-action justify-content-between list-group-item-success align-items-center">
            <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
            <span class="badge bg-primary rounded-pill">15</span>
          </li>
          <li
            class="list-group-item d-flex list-group-item-action justify-content-between list-group-item-success align-items-center">
            <a class="nav-link" href="#">Chế độ tập luyện thể thao</a>
            <span class="badge bg-primary rounded-pill">15</span>
          </li>
          <li
            class="list-group-item d-flex list-group-item-action list-group-item-success justify-content-between align-items-center">
            <a class="nav-link" href="#">Cẩm nang cuộc sống</a>
            <span class="badge bg-primary rounded-pill">98</span>
          </li>
  
          <li
            class="list-group-item d-flex list-group-item-action list-group-item-success justify-content-between align-items-center">
            <a class="nav-link" href="#">Sức khoẻ tâm hồn</a>
            <span class="badge bg-primary rounded-pill">98</span>
          </li>
        </ul>
        <div class="card mt-4 p-0">
          <div class="card-header">
            <h3 class="card-title text-info">Bài viết nổi bật</h3>
          </div>
          <div class="card-body list-group mb-3">

            <!--Hiện bài viết nổi bật-->
            <router-link v-for="(post, index) in filteredListBlog" :key="index" :to="`/detail/${post.id}`" class="list-group-item list-group-item-action border-0">
                <img :src="post.image" class="w-25 float-start rounded-circle" alt="">
                <div class="float-end w-75 ps-4">
                  <h5 class="card-title mb-1">{{ post.title }}</h5>
                  <p class="card-text fw-normal">
                    {{ post.content.substring(0, 90) }}...
                  </p>
                </div>
            </router-link>

            <div class="text-center m-4"> 
              <button class="btn bg-info" type="button">Xem thêm</button>
            </div>
          </div>
        </div>
      </aside>
      <section class="col-sm-8">
        <h2 class="text-info mb-2">Tất cả bài viết</h2>
        <div class="list-group rounded-2 bg-secondary bg-opacity-10 py-3 g-0 mt-2">
          <div class="row g-3 px-3">

            <!-- Hiện bài viết -->
            <div v-for="(post, index) in listBlogShow" :key="index" class="col-sm-6">
              
              <RouterLink :to="`/detail/${post.id}`" v-if="post.isNB==false" class="list-group-item card p-0 rounded-2 text-dark">                
                <div class="card-header">
                  <h4 class="card-title">
                    {{ post.title }}
                    <small><i class="fa-solid fa-message"></i>{{ post.cmt }} </small>
                  </h4>
                </div>
                <div class="card-body">
                  <img :src="post.image" class="card-img rounded-0" alt="...">
                  <p class="card-text fw-normal">
                    {{ post.content.substring(0, 100) }}...
                  </p>
                </div>
              </RouterLink>
            </div>

          </div>
        </div>
        <ul class="pagination mt-3 justify-content-center">
          <li class="page-item">
            <a class="page-link"  style="cursor: pointer;" @click="lui()">
              <i class="fas fa-arrow-left arrow-icon"></i> <!-- Mũi tên trái -->
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" style="cursor: pointer;" @click="next()">
              <i class="fas fa-arrow-right arrow-icon"></i> <!-- Mũi tên phải -->
            </a>
          </li>
        </ul>
      </section>
    </div>
  </template>
<script setup>
  import { ref } from 'vue';
  import router from '../router';
  import { listBlog } from '../data/data.js';
  const trang = ref(1);
  const listBlogShow = ref([]);

  listBlogShow.value = listBlog.filter((blog) => blog.isNB === false).slice((trang.value - 1) * 4, trang.value * 4);

  const filteredListBlog = listBlog.filter((post) => post.isNB == true);
  var max = ref(filteredListBlog/4);
  function next() {
    if(trang <= max){
    trang.value += 1;
    listBlogShow.value = listBlog.filter((blog) => blog.isNB === false).slice((trang.value - 1) * 4, trang.value * 4);
    }
  }

  function lui() {
    if (trang.value > 1) {
      trang.value -= 1;
      listBlogShow.value = listBlog.filter((blog) => blog.isNB === false).slice((trang.value - 1) * 4, trang.value * 4);
    }
  }

</script>