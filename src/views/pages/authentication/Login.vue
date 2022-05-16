<template>
    <section id="auth-login">
        <div class="container">
            <div class="row justify-content-center align-items-center" style="height: 100vh;">
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="p-3">
                                <form action="" method="post" @submit.prevent="login()">
                                    <h1 class="title txt-primary-color">
                                        Masuk
                                    </h1>

                                    <div class="row my-4">
                                        <div class="col-12">
                                            <div class="input-group">
                                                <input type="email" class="form-control" placeholder="Email" v-model="formData.email">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row my-4">
                                        <div class="col-12">
                                            <div class="input-group">
                                                <input type="password" class="form-control" placeholder="Password" v-model="formData.password">
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-sm bg-primary-color">
                                        Selanjutnya
                                    </button>

                                    <div class="row justify-content-center mt-3">
                                        <div class="col-8">
                                            <hr id="line">

                                            <div class="text-muted text-center">
                                                Belum punya akun? 
                                                <router-link :to="{ name : 'auth-register'}" class="txt-primary-color text-bold">
                                                    Daftar Sekarang
                                                </router-link>
                                            </div>    
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { createAlert } from '@/helpers/alert'
import $ from 'jquery'
window.$ = $

export default {
    name: 'auth-login',
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    mounted(){
        $('body').removeClass('bg-secondary')
    },
    methods: {
        login(){
            this.$vs.loading({
                type: 'sound'
            })

            let email = this.formData.email
            let password = this.formData.password

            this.$store.dispatch('login', { email, password })
                .then(() => {
                    this.$vs.loading.close()
                    createAlert('success', 'Login Success', 'Sukses login kedalam akun anda!')

                    setTimeout(() => {
                        this.$router.push({ name: 'dashboard' })
                    }, 1000)
                })
                .catch(() => {
                    this.$vs.loading.close()
                    createAlert('error', 'Login Failed', 'Email atau password salah!')
                })
        }
    }
}
</script>