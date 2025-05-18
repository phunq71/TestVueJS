<template>
  <nav class="navbar navbar-expand-sm text-light bg-info border sticky-top py-0">
    <div class="container">
        <a class="navbar-brand">
            <img src="../assets/images/logo.png" alt="Logo" style="width: 150px;" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav me-auto mt-1">
                <li class="nav-item">
                    <RouterLink class="text-decoration-none" to="/">
                        <a class="nav-link fs-4 fw-bold"><i class="fa-solid fa-list"></i> Bài viết</a>
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="text-decoration-none" to="/post">
                        <a class="nav-link fs-4 fw-bold"><i class="fa-solid fa-pen-fancy"></i> Đăng bài</a>
                    </RouterLink>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-success fs-4 fw-bold" role="button"
                        data-bs-toggle="dropdown">
                        <i class="fa-solid fa-user"></i>Tài khoản</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#myModal">
                                <span v-if="flag == false " style="cursor: pointer;">Đăng nhập</span>
                                <span v-else style="cursor: pointer;">Đăng nhập với tài khoản khác</span>
                            </a></li>
                        <li v-if="flag == false"><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#myModal" style="cursor: pointer;">Đăng ký
                                thành viên</a></li>
                        <li v-if="flag == true"><a class="dropdown-item" @click="dangxuat()" style="cursor: pointer;">Đăng xuất</a></li>
                        <li>
                            <RouterLink class="text-decoration-none" to="/account">
                                <a class="dropdown-item"  style="cursor: pointer;">Trang thông tin cá nhân</a>
                            </RouterLink>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="navbar-nav d-flex">
                <li class="nav-item">
                    <a class="nav-link fs-5 fw-bold"><img src="../assets/images/vn.png" style="width: 40px;"
                            class="rounded-2 mx-2" alt="">Tiếng Việt</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link fs-5 fw-bold"><img src="../assets/images/hoaky.jpg" style="width: 40px;"
                            class="rounded-2 mx-2" alt="">Tiếng Anh</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../assets/images/banner2.jpg" class="d-block w-100" alt="banner1.jpg">
        </div>
        <div class="carousel-item">
            <img src="../assets/images/banner1.jpg" class="d-block w-100" alt="banner2.jpg">
        </div>
        <div class="carousel-item">
            <img src="../assets/images/banner3.jpg" class="d-block w-100" alt="banner3.jpg">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

<!--Modal cho 2 chức năng đăng ký/ đăng nhập-->
<div class="modal" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content text-start">
            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Đăng nhập/ Đăng ký</h4>
                <button class="btn-close" data-bs-dismiss="modal" @click="loseModal('myModal')"></button>
            </div>
            <div class="modal-body">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-bs-toggle="tab" data-bs-target="#login" style="cursor: pointer;">Đăng nhập</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" data-bs-target="#register" style="cursor: pointer;">Đăng ký</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div id="login" class=" tab-pane active"><br>
                        <div>
                            <h4>Form Đăng nhập</h4>
                            <form class="was-validated card p-3" @submit.prevent="login">
                                <div class="mb-3 mt-3">
                                    <label for="login-email" class="form-label">Email</label>
                                    <input type="email" v-model="loginForm.email" class="form-control" id="login-email"
                                        placeholder="Nhập email" required>
                                    <div class="valid-feedback">Hợp lệ</div>
                                    <div class="invalid-feedback">Vui lòng nhập trường này</div>
                                </div>
                                <div class="mb-3">
                                    <label for="login-password" class="form-label">Mật Khẩu</label>
                                    <input type="password" v-model="loginForm.password" class="form-control"
                                        id="login-password" placeholder="Nhập mật khẩu" required>
                                    <div class="valid-feedback">Hợp lệ</div>
                                    <div class="invalid-feedback">Vui lòng nhập trường này</div>
                                </div>
                                <button type="submit" class="btn btn-primary">Đăng Nhập</button>
                            </form>
                        </div>
                    </div>
                    <div id="register" class="tab-pane fade"><br>
                        <div>
                            <h4>Form Đăng Ký Thông Tin</h4>
                            <form @submit.prevent="register" class="was-validated card p-3" novalidate>
                                <div class="mb-3 mt-3">
                                    <label for="fullname" class="form-label">Họ và Tên</label>
                                    <input v-model="form.fullname" type="text" class="form-control" id="fullname"
                                        placeholder="Nhập họ và tên" required>
                                    <div class="valid-feedback">Hợp lệ</div>
                                    <div class="invalid-feedback">Vui lòng nhập trường này</div>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input v-model="form.email" type="email" class="form-control" id="email"
                                        placeholder="Nhập email" required>
                                    <div class="valid-feedback">Hợp lệ</div>
                                    <div class="invalid-feedback">Vui lòng nhập trường này</div>
                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Số Điện Thoại</label>
                                    <input v-model="form.phone" type="number" class="form-control" id="phone"
                                        placeholder="Nhập số điện thoại" required>
                                    <div class="valid-feedback">Hợp lệ</div>
                                    <div class="invalid-feedback">Vui lòng nhập trường này</div>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Mật Khẩu</label>
                                    <input v-model="form.password" type="password" class="form-control" id="password"
                                        placeholder="Nhập mật khẩu" required>
                                    <div class="valid-feedback">Hợp lệ</div>
                                    <div class="invalid-feedback">Vui lòng nhập trường này</div>
                                </div>
                                <div class="mb-3">
                                    <label for="confirm-password" class="form-label">Xác Nhận Mật Khẩu</label>
                                    <input v-model="form.confirmPassword" type="password" class="form-control"
                                        id="confirm-password" placeholder="Xác nhận mật khẩu" required>
                                    <div class="valid-feedback">Hợp lệ</div>
                                    <div class="invalid-feedback">Vui lòng nhập trường này</div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Giới Tính:</label>
                                    <div>
                                        <input v-model="form.gender" type="radio" id="male" name="gender" value="male">
                                        <label for="male">Nam</label>
                                        <input v-model="form.gender" type="radio" id="female" name="gender"
                                            value="female">
                                        <label for="female">Nữ</label>
                                    </div>
                                </div>
                                <div class="mb-3 ">
                                    <label for="language" class="form-label">Ngôn Ngữ</label>
                                    <select v-model="form.language" class="form-select" id="language">
                                        <option>Tiếng Trung</option>
                                        <option>Tiếng Nga</option>
                                        <option>English</option>
                                        <option selected>Tiếng Việt</option>
                                    </select>
                                </div>
                                <div class="mb-3 form-check">
                                    <input v-model="form.terms" type="checkbox" class="form-check-input" id="terms"
                                        required>
                                    <label class="form-check-label" for="terms">Tôi đồng ý với các điều khoản và điều
                                        kiện</label>
                                    <div class="valid-feedback">Hợp lệ</div>
                                    <div class="invalid-feedback">Tick vào hộp thoại để xác nhận!</div>
                                </div>
                                <button type="submit" class="btn btn-primary">Đăng Ký</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="modal-footer">
                <button class="btn btn-danger" data-bs-dismiss="modal" @click="loseModal('myModal')">Đóng</button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { user, nextUri , account } from '../data/data'; 

const router = useRouter();

var flag = ref( account != null ? true: false );


// Khởi tạo đối tượng người dùng và form đăng nhập
const loginForm = reactive({
  email: '',
  password: ''
});



// Hàm đăng nhập
function login() {
  // Tìm người dùng trong mảng 'user' có email và mật khẩu khớp
  const loggedInUser = user.find(u => u.email == loginForm.email && u.password == loginForm.password);

  if (loggedInUser) {      
    Object.assign(account, loggedInUser);
    console.log(account.fullName);
    alert("Chào mừng, bạn đã đăng nhập thành công!");
    const uri = window.location.pathname;
    router.push(uri);
    flag.value = true;
  } else {
    alert("Thông tin đăng nhập sai! Vui lòng thử lại.");
  }
}

function loseModal(id) {
  const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
        const uri = window.location.pathname;
        loginForm.email = '';
        loginForm.password = '';
        const regex = /^\/detail\/[a-zA-Z0-9]+$/;
        if(regex.test(uri)){
            return;
        }

        if(account.fullName){
            console.log(nextUri.value);
            if(nextUri.value == "/post"){
                console.log(1);
                router.push("/post");
            }else if(nextUri.value == "/account"){
                router.push("/account");
            }
        }else{
            router.push("/");
        }
    }
  
}
//Hàm đăng xuất
function dangxuat(){
    if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
        Object.keys(account).forEach(key => {
        account[key] = ''; // Reset tất cả các thuộc tính trong account
        });
        alert("Đăng xuất thành công");
        router.push({ name: "Home" });
        flag.value = false;
    } else {
        
    }
}

const form = ref({
  fullname: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  gender: 'male',
  language: 'Tiếng Việt',
  terms: false
});

// Hàm xử lý đăng ký
const register = () => {
    const userN = user.find(u => u.email == loginForm.email);
  if(userN!= null){
    alert('Email này đã có tài khoản!');
  }else{
        if (form.value.password !== form.value.confirmPassword) {
        alert('Mật khẩu không khớp! Vui lòng kiểm tra lại.');
        }else if (!form.value.terms) {
        alert('Vui lòng đồng ý với các điều khoản và điều kiện!');
        }else {
        alert('Chào mừng' + form.value.fullname + ', bạn đã đăng ký thành công!');
        const newUser = {
            fullName: form.value.fullname,
            email: form.value.email,
            password: form.value.password,
            occupation: '',
            description: '',
            avatar: '',
            phone: form.value.phone,
            gender: form.value.gender
        };
        user.push(newUser);
        console.log(user);
        form.fullname = '';
        form.email = '';
        form.phone = '';
        form.password = '';
        form.confirmPassword = '';
        form.gender = 'male';
        form.language = 'Tiếng Việt';
        form.terms = false;
        const modal = document.getElementById('myModal');

        }
    }
};


</script>