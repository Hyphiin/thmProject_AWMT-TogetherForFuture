<template>
  <!--Text Card-->
  <div v-for="city in content" :key="city.city" class="container d-flex justify-content-center p-4 infoContainer border">
    <div class="row d-flex justify-content-center">
      <!-- Text links-->
      <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
        <ul class="list-unstyled mb-0">
          <li>
            <p>
              {{ city.city + city.place }}
              <a v-if="city.link !== ''" :href="city.link"> Mehr Informationen </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
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