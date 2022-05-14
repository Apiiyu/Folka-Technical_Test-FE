<template>
    <section id="speciesAccordion">
        <div class="row mt-3">
            <div class="col-12">
                <div class="accordion" id="accordionSpecies">
                    <div class="accordion-item ">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#contentAccordionSpecies" aria-expanded="true" aria-controls="contentAccordionSpecies">
                                Species
                            </button>
                        </h2>
                        
                        <div id="contentAccordionSpecies" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionSpecies">
                            <div class="accordion-body">
                                <div class="d-flex justify-content between">
                                    <div class="input-group">
                                            <input class="form-check-input me-3" type="checkbox" value="" aria-label="Checkbox for following text input">
                                            <label for="" class="text-muted">Arabika</label>
                                    </div>

                                    <div class="text-muted">
                                        (128)
                                    </div>
                                </div>
                                
                                <div class="d-flex justify-content between">
                                    <div class="input-group">
                                            <input class="form-check-input me-3" type="checkbox" value="" aria-label="Checkbox for following text input">
                                            <label for="" class="text-muted">Robusta</label>
                                    </div>

                                    <div class="text-muted">
                                        (23)
                                    </div>
                                </div>
                                
                                <div class="d-flex justify-content between">
                                    <div class="input-group">
                                            <input class="form-check-input me-3" type="checkbox" value="" aria-label="Checkbox for following text input">
                                            <label for="" class="text-muted">Blend</label>
                                    </div>

                                    <div class="text-muted">
                                        (9)
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>
</template>