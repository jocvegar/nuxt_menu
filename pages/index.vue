<template>
  <div class="container">
    <h3>{{categories}}</h3>
    <menu-category 
      v-for="category in categories" 
      :key="category" 
      :category="category"
      :menuItems="filteredMenuItems"/>
  </div>  
</template>

<script>
import MenuCategory from '~/components/MenuCategory.vue'

export default {
  components: {
    MenuCategory
  },
  head() {
    return {
      title: "Restaurante Siu",
      meta: [
        { hid: 'description', name: 'description', content: 'Restaurante Siu' }
      ],
      link:[
        {
          rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
          integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ", crossorigin: "anonymous"
        },
      ],
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  computed: {
    filteredMenuItems() {
      let word = this.$store.getters.getSearchWord
      return this.$store.state.menuItems.filter((item) => {
        return (item.title.toLowerCase().match(word) || item.category.toLowerCase().match(word))
      })
    },
    categories() {
      return Array.from(new Set(this.$store.state.menuItems.map(x => x.category).filter(function(e){return e})))
    }
  },
}
</script>

<style lang="scss">

</style>
