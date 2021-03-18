<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner bg-danger bg-gradient">
      <div class="carousel-item " :class="latestPic">
          <div class="container d-flex justify-content-center p-4 infoContainer border">
            <div class="row d-flex justify-content-center">
              <button @click="prevItem" class="carousel-control-prev" type="button">
                <span class="carousel-control-prev-icon"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <div @click="updateStatus('Bot')" class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <ul class="list-unstyled mb-0">
                  <li>
                    <p>
                      {{ content[counter].city + content[counter].place }}
                    </p>
                    <p>
                      <a v-if="content[counter].link !== ''" :href="content[counter].link"> Mehr Informationen </a>
                    </p>
                  </li>
                </ul>
              </div>
              <button @click="nextItem" class="carousel-control-next" type="button">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import botdata from "../../../bot/result/places.json";
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "Carousel",
  setup(props, context) {
    const content = botdata;
    const latestPic = ref<string>("active");
    const counter = ref<number>(0);
    const status = ref<string>("Home");

    console.log(content[counter.value])

    const nextItem = () => {
        if (counter.value <= content.length) {
          counter.value++;
          console.log(content[counter.value])
        }else{
          counter.value = 0;
        }
    }

    const prevItem = () => {
      if (counter.value >= 0) {
        counter.value--;
        console.log(content[counter.value])
      }else{
        counter.value = content.length;
      }
    }

    const updateStatus = (label: string) => {
      status.value = label;
      context.emit('clickedCarousel', status.value);
      return status.value;
    };

    return {
      content,
      latestPic,
      nextItem,
      counter,
      prevItem,
      updateStatus
    }
  }

});
</script>






