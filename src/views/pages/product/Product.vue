<template>
    <section id="product">  
        <HeaderComponent />

        <section id="main-content" class="bg-light">
            <div class="container">
                <!-- Breadcrumb Start -->
                        <nav style="--bs-breadcrumb-divider: '>>';" aria-label="breadcrumb">
                            <ol class="breadcrumb pt-5">
                                <li class="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>

                                <li class="breadcrumb-item">
                                    <router-link :to="{ name: 'dashboard'}">
                                        Produk
                                    </router-link>
                                </li>

                                <li class="breadcrumb-item active" aria-current="page">
                                    {{ keyword }}
                                </li>
                            </ol>
                        </nav>
                <!-- Breadcrumb End -->

                <section id="content">
                    <div class="row">
                        <div class="col-6">
                            <div class="ms-5 mt-5">
                                <div class="row">
                                    <div class="col-12">
                                        <img :src="products[0].images[0].image_url" alt="" class="img-product">
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-12">
                                        <Carousel :loop="true" :margin="20" :items="3">
                                            <CarouselItem v-for="(item, index) in products[0].images" :key="index" :src="item.image_url" :alt="item.image_url">
                                                <img :src="item.image_url" alt="images">
                                            </CarouselItem>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="ms-2 mt-5">
                                <h1 class="title text-uppercase">
                                    {{ products[0].name }}
                                </h1>
                                <p class="name-production mt-4">
                                    Seller ID : {{ products[0].seller_id }} (Tidak ada data seller, hanya ada fk saja)
                                </p>

                                <div class="ratings d-flex align-items-center justify-content-start">
                                    <div class="stars">
                                        <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                        <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                        <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                        <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                        <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                    </div>

                                    ({{ products[0].id }})
                                </div>

                                <div class="d-flex justify-content-between mt-2">
                                    <h6 class="price">Rp. {{ formatRupiah(products[0].price) }}</h6>

                                    <div class="stock text-primary">
                                        <img src="@/assets/icons/checklist.svg" alt="icon">
                                        <span class="text-capitalize">
                                            Stok Tersedia
                                        </span>
                                    </div>
                                </div>

                                <div class="d-flex box-actions mt-4">
                                    <div class="box-counter-min d-flex justify-content-center align-content-center" @click="valueQty--">
                                        <b class="m-auto">-</b>
                                    </div>
                                    <div class="box-value d-flex justify-content-center align-content-center">
                                        <b class="m-auto">{{ valueQty }}</b>
                                    </div>
                                    <div class="box-counter-plus d-flex justify-content-center align-content-center" @click="valueQty++">
                                        <b class="m-auto">+</b>
                                    </div>

                                    <button class="btn btn-primary bg-primary-color text-uppercase border-0 ms-3">
                                        Tambah ke Keranjang
                                    </button>

                                    <div class="box-favorite d-flex justify-content-center align-content-center ms-2">
                                        <img src="@/assets/icons/love-primary.svg" alt="icon" class="m-auto">
                                    </div>
                                </div>

                                <div class="short-description mt-3">
                                    <p>
                                        {{ products[0].short_description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section id="description">
                        <div class="row">
                            <div class="col-12">
                                <div class="ms-5 mt-5">
                                    <div class="d-flex justify-content-center">
                                        <div class="box-description active text-uppercase ms-3 d-flex justify-content-center align-items-center">
                                            <h5>Deskripsi</h5>
                                        </div>
    
                                        <div class="box-information text-uppercase ms-3 d-flex justify-content-center align-items-center">
                                            <h5>Informasi</h5>
                                        </div>
                                    </div>

                                    <div class="description mt-3 active">
                                        <p>
                                            {{ products[0].description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="recommendation" class="mt-5">
                        <div class="row">
                            <div class="col-12">
                                <div class="ms-5 mt-5">
                                    <div class="d-flex justify-content-center mt-5">
                                        <h5 class="text-uppercase">
                                            Rekomendasi untuk anda
                                        </h5>

                                    </div>
                                    <center>
                                        <hr class="line mt-3">
                                    </center>

                                    <div class="row">
                                        <div class="col-4" v-for="(item, index) in products_recommendation" :key="index">
                                            <div class="card" v-if="index <= 2">
                                                <img :src="item.images[0].image_url" alt="product" class="card-img-top">
                                                <div class="card-body">
                                                    <div class="text-center">
                                                        <h5 class="title text-uppercase">{{ item.name }}</h5>
                                                        <p class="name-production text-uppercase">Ubrukopi</p>
                                                        <div class="ratings mt-2 d-flex justify-content-center align-items-center">
                                                            <div class="stars">
                                                                <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                                                <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                                                <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                                                <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                                                <img src="@/assets/icons/star.svg" alt="" class="me-1">
                                                            </div>
                                                            <p class="text-muted pt-2">(7)</p>
                                                        </div>
                                                        <h6 class="price mt-4">Rp. {{ formatRupiah(item.price, '') }}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    </section>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent'
import Carousel from 'vue-owl-carousel'
import { getDataProduct, getDataProductByKeyword } from '@/services/product/product.service'
import $ from 'jquery'
window.$ = $

export default {
    name: 'product',
    components: {
        HeaderComponent,
        Carousel
    },
    data() {
        return {
            products: {},
            products_recommendation: [],
            keyword: '',
            page: 1,
            perPage: 10,
            valueQty: 1,
            indexLooping: 99
        }
    },
    mounted(){
        $('body').addClass('bg-secondary')
        this.getData()
    },
    methods: {
        getData(){
            this.$vs.loading({
                type: 'sound'
            });

            // --> Get data route params
            this.keyword = this.$route.params.product_name

            let params = {
                page: this.page,
                perPage: this.perPage,
                keyword: this.keyword,
            }
            
            getDataProductByKeyword(params.keyword, params.page, params.perPage)
                .then((result) => {
                    this.$vs.loading.close()
                    this.products = result.data.list
                    console.log(this.products, 'data')
                })
                .catch((error) => {
                    this.$vs.loading.close()
                    this.$vs.notify({
                        title: 'Error',
                        text: error.response.data.message,
                        color: 'danger',
                        iconPack: 'feather',
                        icon: 'icon-alert-circle'
                    })
                })
            
            getDataProduct(params.page, params.perPage)
                .then((result) => {
                    this.$vs.loading.close()
                    this.products_recommendation = (result.data.list).sort((a, b) => { return b.updatedAt - a.updatedAt })
                    console.log(this.products_recommendation, 'data recommendation')
                })
                .catch((error) => {
                    this.$vs.loading.close()
                    this.$vs.notify({
                        title: 'Error',
                        text: error.response.data.message,
                        color: 'danger',
                        iconPack: 'feather',
                        icon: 'icon-alert-circle'
                    })
                })
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
        }
    }
}
</script>

<style scoped>
.card-footer {
    background-color: transparent;
    border-bottom: 1px solid lightgrey;
    padding: 10px;
    border-top:0px;
}
.nav-link {
    border-radius: 4px 0 0 0 !important;
    background: transparent !important;
    border:0px !important;
    font-size: 15px;
    font-weight: 500;
}
.tab-content {
    border:0px !important;
} 
.nav-link.active{
    color:#b8454d !important;
    border-bottom:2px solid #b8454d !important;
    font-size: 15px;
    font-weight: 600;
}
.tab-content {
    padding: 2rem 0rem;
}
</style>