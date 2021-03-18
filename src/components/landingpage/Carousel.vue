<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="city in content" :key="city.city" class="carousel-item" :class="latestPic">
          <div class="container d-flex justify-content-center p-4 infoContainer border">
            <div class="row d-flex justify-content-center">
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
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>


<script lang="ts">
import botdata from "../../../bot/result/OrteAm19Maerz.json";
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "Carousel",
  setup() {
    const content = ref<string[]>([botdata]);
    const latestPic = ref<string>("active");

    const nextItem = () => {
        latestPic.value = "";
    }

    return {
      content,
      latestPic,
      nextItem
    }
  }

});
</script>






