<template>
    <section id="dashboard">
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container ">
                    <div class="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto my-2">
                            <div class="input-group mx-2">
                                <form action="" method="post" @submit.prevent="searchData()" class="d-flex">
                                    <input type="search" v-model="keyword" placeholder="Cari Produk" class="form-control search">
                                    <button type="submit" class="input-group-text bg-primary-color">
                                            <img src="@/assets/icons/search.svg" alt="icon">
                                    </button>
                                </form> 
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
                                    <button class="btn btn-secondary bg-light border-0 dropdown-toggle d-flex" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="@/assets/icons/user.svg" alt="icon">
                                        <img src="@/assets/icons/arrow-dropdown-down.svg" alt="icon" style="margin: 0.5rem;">
                                    </button>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li class="dropdown-item " @click="logout()">
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

        <section id="main-content" class="bg-light">
            <div class="container">
                <!-- Breadcrumb Start -->
                        <nav style="--bs-breadcrumb-divider: '>>';" aria-label="breadcrumb">
                            <ol class="breadcrumb pt-5">
                                <li class="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>

                                <li class="breadcrumb-item active" aria-current="page">Produk</li>
                            </ol>
                        </nav>
                <!-- Breadcrumb End -->

                <section id="content">
                    <div class="row">
                        <!-- Section Filters Start -->
                        <div class="col-3">
                            <section id="filters">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="accordion" id="accordionProcessing">
                                            <div class="accordion-item ">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#contentFiltersAccordion" aria-expanded="true" aria-controls="contentFiltersAccordion">
                                                        Urutkan Berdasarkan
                                                    </button>
                                                </h2>
                                                
                                                <div id="contentFiltersAccordion" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionProcessing">
                                                    <div class="accordion-body">
                                                        <!-- Filter by price -->
                                                            <section id="rangePrice">
                                                                <div class="row mt-1 range-price">
                                                                    <div class="col-12">
                                                                        <div class="p-2">
                                                                            <div class="text-left">
                                                                                <h5 class="title">
                                                                                    Harga
                                                                                </h5>
                                                                            </div>

                                                                            <div class="input-group">
                                                                                <b-form-input id="range-2" v-model="maximumPrice" @change="getData()" class="form-range" type="range" min="50000" max="2000000" step="5000"></b-form-input>
                                                                            </div>
                                                                            
                                                                            <div class="d-flex justify-content-center align-items-center mt-2">
                                                                                Rp <input type="text" id="min_price" class="form-control mx-2" :value="minimumPrice">
                                                                                - Rp <input type="text" id="max_price" class="form-control mx-2" :value="maximumPrice">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        
                                                        <!-- Filter by Origin -->
                                                            <OriginAccordion />
                        
                                                        <!-- Filter by Species -->
                                                            <SpeciesAccordion />
                        
                                                        <!-- Filter by Roast Level -->
                                                            <RoastLevelAccordion />
                        
                                                        <!-- Filter by Tasted -->
                                                            <TastedAccordion />
                        
                                                        <!-- Filter by Processing -->
                                                            <ProcessingAccordion />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <!-- Section Filters End-->
                        <div class="col-9">
                            <section id="header-filter">
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex">
                                        Menampilkan
                                        <select id="product_types" class="mx-2" v-model="perPage" @change="getData()">
                                            <option value="" selected="true">12</option>
                                            <option value="">24</option>
                                            <option value="">36</option>
                                            <option value="">48</option>
                                            <option value="">64</option>
                                        </select> 
                                        &nbsp;dari 132 data
                                    </div>

                                    <div class="d-flex">
                                        Urutkan Berdasarkan
                                        <select id="product_types" class="mx-2" v-model="filterProduct" @change="getData()">
                                            <option value="product_name" selected="true">Nama Produk</option>
                                            <option value="product_type">Tipe Produk</option>
                                            <option value="price">Harga</option>
                                        </select> 
                                    </div>
                                </div>
                            </section>

                            <section id="product" class="mt-5">
                                <div class="row">
                                    <div class="col-4 mb-3" v-for="(item, index) in products" :key="index">
                                        <router-link :to="{ name: 'product', params: { slug: item.slug, product_name: item.name }}">
                                            <div class="card">
                                                <img :src="item.images[0].image_url" alt="product" class="card-img-top">
                                                <div class="card-body">
                                                    <div class="text-center">
                                                        <h5 class="title text-uppercase">{{ item.name }}</h5>
                                                        <p class="name-production text-uppercase">Ubrukopi</p>
                                                        <div class="ratings d-flex justify-content-center align-items-center">
                                                            <div class="stars">
                                                                <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                                                <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                                                <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                                                <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                                                <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                                            </div>
                                                            <p class="text-muted pt-2">({{ item.id }})</p>
                                                        </div>
                                                        <h6 class="price mt-3">Rp. {{ formatRupiah(item.price, '') }}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </section>
</template>

<script>
import { createAlert } from '@/helpers/alert'
import OriginAccordion from '@/components/filters/accordion/OriginAccordion'
import SpeciesAccordion from '@/components/filters/accordion/SpeciesAccordion'
import RoastLevelAccordion from '@/components/filters/accordion/RoastLevelAccordion'
import TastedAccordion from '@/components/filters/accordion/TastedAccordion'
import ProcessingAccordion from '@/components/filters/accordion/ProcessingAccordion'
import $ from 'jquery'
import { getDataProduct, getDataProductByKeyword, getDataProductByKeywordAndPrice, getDataProductByPrice, getDataProductByOrders } from '@/services/product/product.service'

window.$ = $

export default {
    name: 'dashboard',
    components: {
        OriginAccordion,
        SpeciesAccordion,
        RoastLevelAccordion,
        TastedAccordion,
        ProcessingAccordion
    },
    data() {
        return {
            products: [],
            keyword: '',
            page: 1,
            perPage: 10,
            pageOptions: [
                { text: '12', value: 12 },
                24, 48, 64
            ],
            pageOptionsFilter: [
                { text: 'Semua', value: 'all' },
                { text: 'Nama Produk', value: 'name' },
                { text: 'Terlaris', value: 'popular' }
            ],
            minimumPrice: 10000,
            maximumPrice: 0,
            filterProduct: ''
        }
    },
    mounted(){
        $('body').addClass('bg-secondary')
        this.getData()
        console.log(localStorage.getItem('token'), 'token')
    },
    methods: {
        getData(){
            this.$vs.loading({
                type: 'sound'
            });
            
            let params = {
                page: this.page,
                perPage: this.perPage,
                keyword: this.keyword,
                minimumPrice: this.minimumPrice,
                maximumPrice: this.maximumPrice,
                orders: this.filterProduct
            }

            console.log('params order', params.orders)
            if(params.order){
                alert('masuk')
            }
            
            if(params.keyword && params.minimumPrice && params.maximumPrice){
                getDataProductByKeywordAndPrice(params.keyword, params.minimumPrice, params.maximumPrice, params.page, params.perPage)
                    .then((result) => {
                        this.$vs.loading.close();
                        this.products = (result.data.list).sort((a, b) => { return b.updatedAt - a.updatedAt })
                    })
                    .catch((error) => {
                        console.log('error', error)
                    })
            } else if (params.keyword){
                getDataProductByKeyword(params.keyword, params.page, params.perPage)
                    .then((result) => {
                        this.$vs.loading.close();
                        this.products = (result.data.list).sort((a, b) => { return b.updatedAt - a.updatedAt })
                    })
                    .catch((error) => {
                        console.log('error', error)
                    })
            } else if (params.minimumPrice && params.maximumPrice) {
                getDataProductByPrice(params.minimumPrice, params.maximumPrice, params.page, params.perPage)
                    .then((result) => {
                        this.$vs.loading.close();
                        this.products = (result.data.list).sort((a, b) => { return b.updatedAt - a.updatedAt })
                    })
                    .catch((error) => {
                        console.log('error', error)
                    })
            } else if(params.orders){
                console.log(params.orders, 'masuk order')
                getDataProductByOrders(params.orders, params.page, params.perPage)
                    .then((result) => {
                        this.$vs.loading.close();
                        this.products = (result.data.list).sort((a, b) => { return b.updatedAt - a.updatedAt })
                    })
                    .catch((error) => {
                        console.log('error', error)
                    })
            } else {
                getDataProduct(params.page, params.perPage)
                    .then((result) => {
                        this.$vs.loading.close();
                        this.products = (result.data.list).sort((a, b) => { return b.updatedAt - a.updatedAt })
                    })
                    .catch((error) => {
                        console.log('error', error)
                    })
            }
        },
        searchData(){
            this.$vs.loading({
                type: 'sound'
            });
            
            let params = {
                page: this.page,
                perPage: this.perPage,
                keyword: this.keyword,
                minimumPrice: this.minimumPrice,
                maximumPrice: this.maximumPrice,
            }

            if(params.keyword && params.minimumPrice && params.maximumPrice){
                getDataProductByKeywordAndPrice(params.keyword, params.minimumPrice, params.maximumPrice, params.page, params.perPage)
                    .then((result) => {
                        this.$vs.loading.close();
                        this.products = (result.data.list).sort((a, b) => { return b.updatedAt - a.updatedAt })
                    })
                    .catch((error) => {
                        console.log('error', error)
                    })
            } else {
                getDataProductByKeyword(params.keyword, params.page, params.perPage)
                    .then((result) => {
                        this.$vs.loading.close();
                        this.products = (result.data.list).sort((a, b) => { return b.updatedAt - a.updatedAt })
                    })
                    .catch((error) => {
                        console.log('error', error)
                    })
            }
        },
        formatRupiah(angka, prefix){
            var number_first = ""+angka+""
            var number_string = number_first.replace(/[^,\d]/g, '').toString(),
            split   		= number_string.split(','),
            sisa     		= split[0].length % 3,
            rupiah     		= split[0].substr(0, sisa),
            ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

            // tambahkan titik jika yang di input sudah menjadi angka ribuan
            if(ribuan){
                var separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }

            rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
            return prefix == undefined ? rupiah : (rupiah ? '' + rupiah : '');
        },
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