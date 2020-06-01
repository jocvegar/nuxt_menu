<template>
    <div>
        <transition name="search-bar">
            <b-navbar key=1 v-if="!searching" toggleable="lg" type="dark" variant="danger">
                <b-navbar-brand href="#">
                    <img src="~/static/icon.png" alt="Logo">
                    <span class= "d-none d-sm-inline-block">Restaurante</span>
                    <span class="font-weight-bold">Siu</span>
                </b-navbar-brand>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-button pill @click="searching = true" variant="light">
                        <i class="search_icon fas fa-search"></i>
                    </b-button>
                </b-navbar-nav>
            </b-navbar>

            <b-navbar key=2 v-else toggleable="lg" type="dark" variant="danger">
                <b-col cols="12" md="8" offset-md="2"> 
                    <b-input-group class="pb-2"> 
                        <b-input-group-prepend>
                            <span class="input-group-text"><i class="search_icon fas fa-search"></i></span>
                        </b-input-group-prepend>
                        <b-form-input 
                            id="search" 
                            placeholder="Busqueda"
                            v-on:input="search"
                            autofocus>
                        </b-form-input>
                        <b-input-group-append>
                            <b-button variant="light" @click="cancelSearch">
                                <i class="fas fa-times text-danger"></i>
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-col>   
            </b-navbar> 
        </transition>
    </div>
</template>

<script>
export default {
    // computed: {
    //     getSearchWord() {
    //         return this.$store.getters.getSearchWord
    //     },
    // },
    data() {
        return {
            searching: false
        }
    },
    methods: {
        search(e) {
            let searchTerm = this.$store.dispatch('setSearchWord', event.target.value.toLowerCase().trim())
            // this.$store.dispatch('filterMenuItems', searchTerm)
        },
        cancelSearch() {
            this.$store.dispatch('setSearchWord', "")
            this.searching = false
        }
    }
}
</script>

<style scoped lang="scss">
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

.input-group-text {
  width: 45px;
  border-right: none;
  background-color: #ffffff;
}

.search-bar-enter-active, .search-bar-leave-active {
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-out;
}
.search-bar-enter-active {
    transition-delay: 0.2s;
}
.search-bar-enter {
    opacity: 0;
    transform: translateX(-100px);
}

.search-bar-enter-to {
    opacity: 1;
    transform: translateX(0px);
}

.search-bar-leave {
    opacity: 1;
    transform: translateX(0px);
}
.search-bar-leave-to {
    opacity: 0;
    transform: translateX(100px);
}
</style>
