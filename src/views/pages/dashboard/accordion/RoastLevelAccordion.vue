<template>
    <section id="roastLevelAccordion">
        <div class="row mt-3">
            <div class="col-12">
                <div class="accordion" id="accordionRoastLevel">
                    <div class="accordion-item ">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#contentAccordionRoastLevel" aria-expanded="true" aria-controls="contentAccordionRoastLevel">
                                Roast Level
                            </button>
                        </h2>
                        
                        <div id="contentAccordionRoastLevel" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionRoastLevel">
                            <div class="accordion-body">
                                <div class="d-flex justify-content between">
                                    <div class="input-group">
                                        <input class="form-check-input me-3" type="checkbox" value="" aria-label="Checkbox for following text input">
                                        <label for="" class="text-muted">Light Roast</label>
                                    </div>

                                    <div class="text-muted">
                                        (8)
                                    </div>
                                </div>
                                
                                <div class="d-flex justify-content between">
                                    <div class="input-group">
                                        <input class="form-check-input me-3" type="checkbox" value="" aria-label="Checkbox for following text input">
                                        <label for="" class="text-muted">Medium Roast</label>
                                    </div>

                                    <div class="text-muted">
                                        (2)
                                    </div>
                                </div>
                                
                                <div class="d-flex justify-content between">
                                    <div class="input-group">
                                        <input class="form-check-input me-3" type="checkbox" value="" aria-label="Checkbox for following text input">
                                        <label for="" class="text-muted">Dark Roast</label>
                                    </div>

                                    <div class="text-muted">
                                        (7)
                                    </div>
                                </div> 

                                <div class="d-flex justify-content between">
                                    <div class="input-group">
                                        <input class="form-check-input me-3" type="checkbox" value="" aria-label="Checkbox for following text input">
                                        <label for="" class="text-muted">Light to Medium Roast</label>
                                    </div>

                                    <div class="text-muted">
                                        (5)
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