<template>
  <div>
    <slider v-if="getSearchWord.length == 0"/>
    <div class="container">  
    <menu-category 
      v-for="category in categories" 
      :key="category" 
      :category="category"
      :menuItems="filteredMenuItems"/>
  </div> </div> 
</template>

<script>
import MenuCategory from '~/components/MenuCategory.vue'
import Slider from '~/components/Slider.vue'

export default {
  components: {
    MenuCategory,
    Slider
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
        // return (item.title.toLowerCase().match(word))
        return (item.title.toLowerCase().includes(word) || item.category.toLowerCase().match(word))
      })
    },
    categories() {
      // return Array.from(new Set(this.$store.state.menuItems.map(x => x.category).filter(function(e){return e})))
      return ["entradas", "sopas", "arroz", "tallarin_de_arroz", "chop_suey", "chaumin", "pollo", "cerdo", "res", "camaron"]
    },
    getSearchWord() {
      return this.$store.getters.getSearchWord
    },
  },
}
</script>

<style lang="scss">

</style>
