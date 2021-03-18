<template>
    <div>
        <h1> Demos </h1>
        <ul>
        <li v-for="city in content" :key="city.city">{{ city.city + city.place }} <a v-if="city.link != ''" :href="city.link" > Mehr Informationen </a>       </li>
        </ul>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import botdata from '../../../bot/result/OrteAm19Maerz.json';

export default defineComponent({
  name: "Bot",
  setup(){
  var content = botdata;
  

  return{
      content
  }
  }

    
});
</script>