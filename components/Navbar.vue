<template functional>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="danger">
            <b-navbar-brand href="#">
                <img src="~/static/icon.png" alt="Logo">
                <span class= "d-none d-sm-inline-block">Restaurante</span>
                <span class="font-weight-bold">Siu</span>
            </b-navbar-brand>
            <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
            <!-- <b-collapse id="nav-collapse" is-nav> -->
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-input-group>
                            <b-form-input id="search" size="sm" placeholder="Busqueda"></b-form-input>
                            <b-input-group-append>
                                <b-button size="sm" variant="secondary">
                                    <i class="search_icon fas fa-search"></i>
                                </b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-nav-form>
                </b-navbar-nav>
            <!-- </b-collapse> -->
        </b-navbar>
    </div>
</template>


<style lang="scss">
.navbar-brand {
    font-size: 24px;
    img {
        height: 35px;
        /* put value of image height as your need */
        float: left;
        margin-right: 7px;
    }
}

@media (max-width: 767px) {  
 #search {
     width: 9rem;
 }
}

</style>
