<template>
  <div class="container">
    <div v-for="item in menuItems" :key="item.message">
        <li>{{item}}</li>
        <!-- <menu-category :category="item.category" /> -->
    </div>
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
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  computed: {
    menuItems() {
      return this.$store.state.menuItems;
    },
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.container {
  h3 {
    color: green;
    span {
      background-color: tomato;
      &:hover {
        color:yellow;
        cursor: wait;
      }
    }
  }
}
</style>
