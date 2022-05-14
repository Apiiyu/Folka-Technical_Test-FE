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
                        <input type="range" class="form-range" min="50000" max="3000000" step="5000" id="customRange3">
                        
                    </div>
                    
                    <div class="d-flex justify-content-center align-items-center mt-2">
                        Rp <input type="text" class="form-control mx-2" value="50.000">
                        - Rp <input type="text" class="form-control mx-2" value="2.500.000">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>