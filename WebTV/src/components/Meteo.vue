<template>
    <section class="weather">
        <aside> 
            <div>
              <img :src="imgSrc(weather[1])" alt="icon"/>
            </div>
            <div>Description :{{weather[0]}}</div>
            <div>Détails :{{weather[2]}}</div>
        </aside>
    </section>   
</template>
<script>
import {meteo} from '../assets/scripts/meteo.js'
export default {
  name: 'Meteo',
  data() {
    return {
      getWeather: [],
      obj: Object,
      weather: [],
    }
  },
  methods: {
    imgSrc(name){
      let first = "http://openweathermap.org/img/w/"
      let sec = ".png"
      let final = first + name + sec
      return final
    }
  },
  created: function() {
    axios
    .get('http://api.openweathermap.org/data/2.5/weather?q=Rennes,fr&appid=467f3439227d2ae2ae4fd23a9ebc545c')
    .then(response => {
        this.loading = false
        this.getWeather = response.data
        this.obj = new meteo()
        this.weather = this.obj.weather(this.getWeather.weather)
    })     
  },
}
</script>