<template>
  <div id="carouselExampleControls" class=" container-md carousel slide carouselDiv" data-bs-ride="carousel">
    <div class="carousel-inner bg-danger bg-gradient">
      <div class="carousel-item " :class="latestPic">
          <div class="container d-flex justify-content-center p-4 infoContainer border">
            <div class="row d-flex justify-content-center">
              <div @click="updateStatus('Bot')">
                {{ content[counter].city + content[counter].place }}
                <a v-if="content[counter].link !== ''" :href="content[counter].link"> Mehr Informationen </a>
              </div>
            </div>
          </div>
      </div>
    </div>
    <button @click="prevItem" class="carousel-control-prev" type="button">
      <span class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button @click="nextItem" class="carousel-control-next" type="button">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
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
        if (counter.value < content.length-1) {
          counter.value++;
          console.log(counter.value)
        }else{
          counter.value = 0;
        }
    }

    const prevItem = () => {
      if (counter.value > 0) {
        counter.value--;
        console.log(counter.value)
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

<style lang="css" scoped>

.carouselDiv{
  margin-top: 100px;
  color:white;
}

@media (min-width: 320px)  {
  .carouselDiv{
    margin-top: 110px;
  }
}
@media (min-width: 425px)  {
  .carouselDiv{
    margin-top: 110px;
  }
}

@media (min-width: 768px)  {
  .carouselDiv{
    margin-top: 105px;
  }
}

@media (min-width: 992px) {
  .carouselDiv{
    margin-top: 100px;
  }
}

@media (min-width: 1200px)  {
  .carouselDiv{
    margin-top: 100px;
  }
}

@media (min-width: 1400px)  {
  .carouselDiv{
    margin-top: 100px;
  }
}

</style>






