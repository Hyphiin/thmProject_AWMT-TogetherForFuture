<template>

  <div class="container searchContainer">
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
  </div>
  <div class="container-md">
  <table class="table table-success table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">Stadt</th>
      <th scope="col">Wann & Wo</th>
      <th scope="col">Link</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="city in content" :key="city.city">
      <th scope="row"> {{ city.city }}</th>
      <td>{{ city.place }}</td>
      <td><a v-if="city.link !== ''" :href="city.link"> Mehr Informationen </a></td>
    </tr>
    </tbody>
  </table>
  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
import botdata from '../../../bot/result/OrteAm19Maerz.json';

export default defineComponent({
  name: "Bot",
  setup() {
    var content = botdata;


    return {
      content
    }
  }
});
</script>

<style scoped>
.searchContainer{
  width: 50%;
  margin-top:120px;
  margin-bottom: 2%;
}

@media (min-width: 320px)  {
  .searchContainer{
    width: 100%;
    margin-top:120px;
    margin-bottom: 2%;
  }
}
@media (min-width: 425px)  {
  .searchContainer{
    width: 90%;
    margin-top:120px;
    margin-bottom: 2%;
  }
}

@media (min-width: 768px)  {
  .searchContainer{
    width: 70%;
    margin-top:110px;
    margin-bottom: 2%;
  }
}

@media (min-width: 992px) {
  .searchContainer{
    width: 50%;
    margin-top:95px;
    margin-bottom: 2%;
  }
}

@media (min-width: 1200px)  {
  .searchContainer{
    width: 50%;
    margin-top:95px;
    margin-bottom: 2%;
  }
}

@media (min-width: 1400px)  {
  .searchContainer{
    width: 50%;
    margin-top:100px;
    margin-bottom: 2%;
  }
}
</style>