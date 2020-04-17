<template>
    <div id="fete">
        <div v-for="item in response.data" :key="item.day">
            {{item.day}}
        </div>
    </div>
</template>
<script>
export default {
  name: 'FeteJour',
  data() {
    return {
      getFete: [],
    }
  },
  created: function() {
    axios
    .get('http://fetedujour.fr/api/v2/VOTRECLE/text-normal')
    .then(response => {
        this.getFete = response
        console.log(this.getFete)
    })     
  }
}
</script>