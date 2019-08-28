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
  margin-top: 60px;
}
.tab-bar {
  background-color: white;
  height: 54px;
  border: 0 solid rgb(210, 210, 210);
  border-top-width: 1px;
  position: fixed;
  margin: auto;
  bottom: 0;
  width: 100%;
}

.tab-bar-item {
  height: 54px;
}

i {
  font-size: 25px;
}
</style>
