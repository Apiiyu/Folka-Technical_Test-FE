<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container ">
                <div class="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto my-2">
                        <div class="input-group mx-2">
                            <input type="text" class="form-control search" placeholder="Cari Produk" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <span class="input-group-text bg-primary-color" id="basic-addon2">
                                <img src="@/assets/icons/search.svg" alt="icon">
                            </span>
                        </div>

                        <li class="nav-item mx-2">
                            <a class="nav-link active" aria-current="page" href="#">
                                <img src="@/assets/icons/love.svg" alt="icon">
                            </a>
                        </li>
                        
                        <li class="nav-item mx-2">
                            <a class="nav-link" href="#">
                                <img src="@/assets/icons/bag.svg" alt="icon">

                            </a>
                        </li>
                        
                        <li class="nav-item mx-2">
                            <div class="dropdown">
                                <button class="btn btn-secondary bg-light border-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="@/assets/icons/user.svg" alt="icon">
                                </button>

                                 <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li class="dropdown-item" @click="logout()">
                                        Keluar
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            <div class="row">
                <div class="col-2">
                    <div class="categories">
                        <div class="d-flex justify-content-center align-items-center bg-primary-color" style="height: 64px">
                            <h4 class="title text-white text-uppercase me-2">Belanja</h4>
                            <img src="@/assets/icons/arrow-down.svg" alt="icon">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { createAlert } from '@/helpers/alert'

export default {
    name: 'HeaderComponent',
    methods: {
        logout() {
            this.$store.dispatch('logout')
                .then(() => {
                    createAlert('success', 'Sukses', 'Berhasil keluar dari akun!')
                    setTimeout(() => {
                        this.$router.push({ name: 'auth-login' })
                    }, 1000)
                })
                .catch((error) => {
                    console.log(error)
                    createAlert('error', 'Gagal', 'Gagal keluar dari akun!')
                })
        }
    }
}
</script>