<template>
    <section id="auth-register">
        <div class="container">
            <div class="row justify-content-center align-items-center" style="height: 100vh;">
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="p-3">
                                <form action="" method="post" @submit.prevent="postData()">
                                    <div class="form" v-if="!nextStep">
                                        <h1 class="title txt-primary-color">
                                            Daftar Sekarang
                                        </h1>
                                        
                                        <div class="row my-4 mt-5">
                                            <div class="col-12">
                                                <div class="input-group ">
                                                    <input type="text" class="form-control" placeholder="Nama Depan" v-model="first_name">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row my-4">
                                            <div class="col-12">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Nama Belakang" v-model="last_name">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row my-4">
                                            <div class="col-12">
                                                <div class="input-group">
                                                    <input type="email" class="form-control" placeholder="Email" v-model="formData.email">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="btn btn-sm bg-primary-color btn-next" @click="actionButton">
                                            Selanjutnya
                                        </div>
                                    </div>

                                    <div class="form" v-else>
                                        <h1 class="title txt-primary-color d-flex btn-back" @click="actionButton(); return false;">
                                            <img src="@/assets/icons/arrow-left.svg" alt="icon" class="me-3">
                                            Kembali
                                        </h1>
                                        
                                        <div class="row my-4 mt-5">
                                            <div class="col-12">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Nomor Telepon" v-model="formData.phone">
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

                                        <div class="row mt-4 mb-3">
                                            <div class="col-12">
                                                <div class="input-group">
                                                    <input type="password" class="form-control" placeholder="Konfirmasi Password" v-model="password_confirmation">
                                                </div>

                                                <div class="text-danger text-left d-block" v-if="formData.password != password_confirmation">
                                                    <small>
                                                        Password tidak sesuai!
                                                    </small>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" class="btn btn-sm bg-primary-color">
                                            Selanjutnya
                                        </button>
                                    </div>

                                    <div class="row justify-content-center mt-3">
                                        <div class="col-8">
                                            <hr id="line">

                                            <div class="text-muted text-center">
                                                Sudah punya akun? 
                                                <router-link :to="{ name : 'auth-login'}" class="txt-primary-color text-bold">
                                                    Masuk
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
import { registerAccount } from "@/services/authentication/auth.service"
import { createAlert } from '@/helpers/alert'
import $ from 'jquery'
window.$ = $

export default {
    name: 'auth-register',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                phone: '',
                password: '',
            },
            password_confirmation: '',
            first_name: '',
            last_name: '',
            nextStep: false
        }
    },
    mounted(){
        $('body').removeClass('bg-secondary')
    },
    methods: {
        actionButton(){
            if(this.nextStep){
                this.nextStep = false
            } else {
                this.nextStep = true
                $('button').attr({
                    type: 'submit'
                })
                
            }
        },
        postData(){
            if(this.last_name){
                this.formData.name = this.first_name + ' ' + this.last_name
            } else {
                this.formData.name = this.first_name
            }

            if(this.formData.password != this.password_confirmation){
                createAlert('error', 'Gagal', 'Password tidak sesuai!')
                return false
            }

            this.$vs.loading({
                type: 'sound'
            })

            registerAccount(this.formData)
                .then((result) => {
                    this.$vs.loading.close()

                    if(result.code === 200) {
                        createAlert('success', 'Sukses', 'Akun berhasil dibuat!')

                        this.$router.push({ name: 'auth-login' })
                    } else {
                        createAlert('error', 'Gagal', 'Gagal Membuat Akun, Periksa Kembali Data Anda!')
                    }

                
                })
                .catch(() => {
                    this.$vs.loading.close()

                    createAlert('danger', 'Gagal', 'Akun gagal dibuat!')
                })
        }
    }
}
</script>