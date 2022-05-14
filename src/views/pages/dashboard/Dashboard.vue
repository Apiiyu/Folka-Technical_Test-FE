<template>
    <section id="dashboard">
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
                                    <a href="#">Produk</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>
                <!-- Breadcrumb End -->

                <section id="content">
                    <div class="row">
                        <!-- Section Filters Start -->
                            <Filters />
                        <!-- Section Filters End-->
                        <div class="col-9">
                            
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </section>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent'
import Filters from '@/components/filters/Filters'
import $ from 'jquery'

window.$ = $

export default {
    name: 'dashboard',
    components: {
        HeaderComponent,
        Filters
    },
    data() {
        return {

        }
    },
    mounted(){
        $('body').addClass('bg-secondary')
    }
}

</script>