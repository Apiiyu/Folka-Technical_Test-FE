<template>
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
                                        <RangePriceComponent />
                                    
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
</template>

<script>
import RangePriceComponent from '@/components/filters/range-price/RangePriceComponent'
import OriginAccordion from '@/components/filters/accordion/OriginAccordion'
import SpeciesAccordion from '@/components/filters/accordion/SpeciesAccordion'
import RoastLevelAccordion from '@/components/filters/accordion/RoastLevelAccordion'
import TastedAccordion from '@/components/filters/accordion/TastedAccordion'
import ProcessingAccordion from '@/components/filters/accordion/ProcessingAccordion'

export default {
    name: 'FiltersComponent',
    components: {
        RangePriceComponent,
        OriginAccordion,
        SpeciesAccordion,
        RoastLevelAccordion,
        TastedAccordion,
        ProcessingAccordion
    }
}
</script>