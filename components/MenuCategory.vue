<template>
    <div v-if="items.length > 0" class="mt-1">
        <h3 class="pl-2 py-1 text-white">{{ category | capitalize }}</h3>
        <b-container>
            <b-row>
            <div class="col-12 col-sm-6 py-2" v-for="item in items" :key="item.slug">
                <b-card :title="item.title">
                    <b-row>
                        <div class="col-12 col-sm-6" v-for="(opcion, idx) in item.opciones" :key="idx">
                            <b-card-text>
                                <small>
                                    <strong>{{opcion.tamano}}</strong>...{{opcion.precio}} lps
                                </small>
                            </b-card-text>
                        </div>       
                    </b-row>
                </b-card>
            </div>
        </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    props: {
        category: String,
        menuItems: Array
    },
    computed: {
       items() {
           let ownCategory = this.category
            // console.log("ownCategory: " + ownCategory)
            return this.menuItems.filter(function(e) {
                // console.log("e.category: " + e.category)
                // console("ownCategory: " + ownCategory)
                return e.category == ownCategory
            })
        }
    },
    filters: {
        capitalize: function(value) {
            if (!value) return
            return value.toString().charAt(0).toUpperCase() + value.slice(1)
        }
    }    
}
</script>

<style scoped>
h3 {
    background-color: #DC3545;
}
.card-title {
    font-size: 1.25em;
    margin-bottom: 2px;
    font-weight: bold;
}
</style>
