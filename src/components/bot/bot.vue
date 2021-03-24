<template>

  <div class="container searchContainer">
    <div class="input-group mb-3">
      <input v-model="searchText" @input="searchTextChanged" type="text" class="form-control" placeholder="Suche nach deiner Stadt..."
             aria-label="Suche nach deiner Stadt..." aria-describedby="button-addon2">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Daten von: <a href="https://fridaysforfuture.de/allefuer1komma5/" class="linktext">Fridays For Future</a>
      </button>
    </div>
  </div>
  <div class="container-md">
    <table class="table table-success table-striped table-hover" v-if="loading && Events.length > 0">
      <thead>
      <tr>
        <th scope="col">Stadt</th>
        <th scope="col">Wann & Wo</th>
        <th scope="col">Link</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="city in Events" :key="city.city">
        <th scope="row"> {{ city.city }}</th>
        <td>{{ city.place }}</td>
        <td><a v-if="city.link !== ''" :href="city.link" class="linktext2"> Mehr Informationen </a></td>
      </tr>
      </tbody>
    </table>
    <p v-else>Leider keine passenden Ergebnisse gefunden!</p>
  </div>
</template>


<script lang="ts">
import {computed, defineComponent, ref} from 'vue';
import botdata from '../../../bot/result/OrteAm19Maerz.json';

export default defineComponent({
  name: "Bot",
  setup() {

    let content = botdata;

    let tempEvents = content;

    const searchText = ref<string>("");

    const loading = ref<boolean>(true);

    const searchTextChanged = () => {
      loading.value = false;
      searchResult();
      loading.value = true;
    };

    const searchResult = () => {
      loading.value = false;

      if (searchText.value != '' && searchText.value && searchText.value.length > 0) {
        setTimeout(() => {
          loading.value = true;
        }, 950);

        tempEvents = content.filter((item) => {
          return item.city
              .toUpperCase()
              .includes(searchText.value.toUpperCase())
        })
      } else {
        loading.value = true;
        tempEvents = content;
      }
      loading.value = false;
      return tempEvents
    };

    const Events = computed(() => {
      loading.value;
      return tempEvents;
    })

    return {
      content,
      searchText,
      tempEvents,
      loading,
      searchResult,
      searchTextChanged,
      Events
    }
  }
});
</script>

<style scoped>
.searchContainer {
  width: 50%;
  margin-top: 120px;
  margin-bottom: 2%;
}

.linktext {
  color: #67bb7d;
  text-decoration: none;
}

.linktext2{
  color: #387046;
}

@media (min-width: 320px) {
  .searchContainer {
    width: 100%;
    margin-top: 120px;
    margin-bottom: 2%;
  }
}

@media (min-width: 425px) {
  .searchContainer {
    width: 90%;
    margin-top: 120px;
    margin-bottom: 2%;
  }
}

@media (min-width: 768px) {
  .searchContainer {
    width: 70%;
    margin-top: 110px;
    margin-bottom: 2%;
  }
}

@media (min-width: 992px) {
  .searchContainer {
    width: 50%;
    margin-top: 95px;
    margin-bottom: 2%;
  }
}

@media (min-width: 1200px) {
  .searchContainer {
    width: 50%;
    margin-top: 95px;
    margin-bottom: 2%;
  }
}

@media (min-width: 1400px) {
  .searchContainer {
    width: 50%;
    margin-top: 100px;
    margin-bottom: 2%;
  }
}
</style>