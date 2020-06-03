<template>
    <div>
        <b-navbar v-if="!searching" toggleable="lg" type="dark" variant="danger">
            <b-navbar-brand href="#">
                <img src="~/static/icon.png" alt="Logo">
                <span class= "d-none d-sm-inline-block">Restaurante</span>
                <span class="font-weight-bold">Siu</span>
            </b-navbar-brand>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                 <b-button-group>
                    <b-button href="tel:31709868" pill variant="light mr-2">
                        <i class="search_icon fas fa-phone"></i>
                    </b-button>
                    <b-button pill @click="searching = true" variant="light">
                        <i class="search_icon fas fa-search"></i>
                    </b-button>
                 </b-button-group>    
            </b-navbar-nav>
        </b-navbar>
        <b-navbar v-else toggleable="lg" type="dark" variant="danger">
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
</style>
