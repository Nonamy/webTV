<template>
  <div id="app">
    <router-view/>
    <Meteo/>
  </div>
</template>

<script>
import LeStar from './components/LeStar'
import Meteo from './components/Meteo'
export default {
  name: 'App',
  components: {
    LeStar,
    Meteo,
  }
}
</script>
<style lang="scss">
*{
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
