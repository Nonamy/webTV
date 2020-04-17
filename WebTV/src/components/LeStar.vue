<template>

<div id="trafic">
    <p v-if="loading">Loading...</p>
    <section class="star-container">
        <section class="star-container-items" ref="slider">
            <aside ref="slides" class="slide" v-for="slide in obj.tab" :key="slide.ID">
                <div class="content">
                  <div class="star-container-items-img">
                    <img :src="getSrc(slide.Name)" alt="bus" class="imgs"/>
                  </div>
                  <div>
                    <p><strong>Départ :</strong> {{slide.Dep}}</p>
                    <p><strong>Déstination :</strong> {{slide.Dest}}</p>
                    <p><strong>Arrêt :</strong> {{slide.Art}}</p>
                  </div>
                </div>
            </aside>
        </section>
    </section>
</div>
</template>
<script>
import {bus} from '../assets/scripts/star.js'
export default {
  name: 'LeStar',
  data() {
    return {
      loading: false,
      getTrafics: [],
      obj: Object,
      
    }
  },
  methods: {
    getSrc(name) {
        var images = require.context('../assets/Bus/', false, /\.png$/);
        return images('./' + name + ".png")
    },
  },
  created: function() {
    this.loading = true
    axios
    .get('https://data.explore.star.fr/api/records/1.0/search/?dataset=tco-bus-circulation-passages-tr&q=clos+courtel&facet=idligne&facet=nomcourtligne&facet=sens&facet=destination&facet=precision')
    .then(response => {
        this.loading = false
        this.getTrafics = response.data
        this.obj = new bus()
        this.obj.data(this.getTrafics.records)
    })     
  }
}
</script>
<style lang="scss" scoped>
    .star-container {
        border: tomato solid;
        &-items{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            align-content: center;
            aside {
              border-radius: 10px;
              background-color: #f2f2f4;
              box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);
              -webkit-box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);
              margin: 1em .5em;
              width: 10%;
              padding: 1em;
                .imgs {
                  width: 100%;
                }
                p{
                  word-wrap: break-word;
                  line-height: 1.5em;
                  font-family: 'Raleway', sans-serif;
                  strong{
                    display: block;
                  }
                }
            }
        }
    }

</style>