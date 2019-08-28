<template>
  <div id="app">
    <router-view/>
    <bottomNavigation></bottomNavigation>
  </div>
</template>

<script>
import bottomNavigation from '@/components/BottomNavigation'
export default {
  name: 'App'
    ,
    components: {
        // shareContent,
        bottomNavigation,
        // pickerComponent,
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
i {
  font-size: 25px;
}
</style>
