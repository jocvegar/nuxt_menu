<template>
    <div v-if="items.length > 0">
        <h3>{{ category | capitalize }}</h3>
        <div v-for="item in items" :key="item.slug">
            <h5>{{item.title}}</h5>
            <div v-for="(opcion, idx) in item.opciones" :key="idx">
                <ul>
                    <li>{{opcion.tamano}}  cuesta {{opcion.precio}}</li>
                </ul>
            </div>
        </div>
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
