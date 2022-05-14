<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container ">
                <div class="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto my-2">
                        <div class="input-group mx-2">
                            <input type="text" class="form-control search" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <span class="input-group-text bg-primary-color" id="basic-addon2">
                                <img src="@/assets/icons/search.svg" alt="icon">
                            </span>
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
                            <a class="nav-link" href="#">
                                <img src="@/assets/icons/user.svg" alt="icon">
                            </a>
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
</template>