<template>
    <div>
        HELLO
        <p>{{ category | capitalize }}</p>
    </div>
</template>

<script>
export default {
    props: {
        category: String,
    },
    data: function () {
        return {
            category: this.category
        }
    },
    filters: {
        capitalize: function(value) {
            if (!value) return
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }    
}
</script>
