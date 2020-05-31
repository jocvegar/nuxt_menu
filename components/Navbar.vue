<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="danger">
            <b-navbar-brand href="#">
                <img src="~/static/icon.png" alt="Logo">
                <span class= "d-none d-sm-inline-block">Restaurante</span>
                <span class="font-weight-bold">Siu</span>
                <!-- {{getSearchWord}} -->
            </b-navbar-brand>
            <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
            <!-- <b-collapse id="nav-collapse" is-nav> -->
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-input-group>
                            <b-form-input 
                                id="search" 
                                size="sm" 
                                placeholder="Busqueda"
                                v-on:input="search"></b-form-input>
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

<script>
export default {
    // computed: {
    //     getSearchWord() {
    //         return this.$store.getters.getSearchWord
    //     },
    // },
    methods: {
        search(e) {
            let searchTerm = this.$store.dispatch('setSearchWord', event.target.value.toLowerCase().trim())
            // this.$store.dispatch('filterMenuItems', searchTerm)
        }
    }
}
</script>

<style lang="scss">
.navbar-brand {
    font-size: 24px;
    img {
        height: 35px;
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
