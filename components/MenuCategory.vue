<template>
    <div v-if="items.length > 0" class="mt-1">
        <h3 class="pl-2 py-1 text-white">{{ category | capitalize }}</h3>
        <b-container>
            <b-row>
            <div class="col-12 col-sm-6 py-2" v-for="item in items" :key="item.slug">
                <h5><ins>{{item.title}}</ins></h5>
                <b-row>
                    <div class="col-12 col-sm-6" v-for="(opcion, idx) in item.opciones" :key="idx">
                        <p>
                            <strong>{{opcion.tamano}}</strong>...{{opcion.precio}} lps
                        </p>
                    </div>       
                </b-row>
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
            return value.split("_").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(" ")



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
