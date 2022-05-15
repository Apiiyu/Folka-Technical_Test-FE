<template>
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
                         <b-form-input id="range-2" v-model="priceValue" class="form-range" type="range" min="50000" max="2000000" step="5000"></b-form-input>
                    </div>
                    
                    <div class="d-flex justify-content-center align-items-center mt-2">
                        Rp <input type="text" id="min_price" class="form-control mx-2" value="0">
                        - Rp <input type="text" id="max_price" class="form-control mx-2" :value="priceValue">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import $ from 'jquery'
window.$ = $

export default {
    name: 'rangePrice',
    props: { 
        priceValue: {
            type: Number,
            default: 0
        }
    },
    mounted(){
        this.$emit('priceValue', this.priceValue);

    }
    
}
</script>