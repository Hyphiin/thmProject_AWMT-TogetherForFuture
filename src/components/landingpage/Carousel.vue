<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="carouselBanner carouselText text-center justify-content-center align-items-center">
      <h3 class="text-white pt-2">Nächste Demo am 19.03. in deiner Nähe! :</h3>
    </div>
  </div>
  <div id="carouselExampleControls" class="container-md carousel slide carouselDiv" data-bs-ride="carousel">
    <div class="carousel-inner bg-danger bg-gradient carouselRound ">
      <div class="carousel-item " :class="latestPic">
        <div class="container d-flex justify-content-center p-4 infoContainer border">
          <div class="row d-flex justify-content-center pe-auto">
            <div @click="updateStatus('Bot')">
              <strong class="pointerDiv"> {{ content[counter].city + content[counter].place }} </strong>
              <br>
              <a v-if="content[counter].link !== ''" :href="content[counter].link" class="linktext"> Mehr Informationen </a>
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

    const nextItem = () => {
        if (counter.value < content.length-1) {
          counter.value++;
        }else{
          counter.value = 0;
        }
    };

    setInterval(function() {
      // alle 3 Sekunden ausführen
      nextItem();
    }, 3000);

    const prevItem = () => {
      if (counter.value > 0) {
        counter.value--;
      }else{
        counter.value = content.length;
      }
    };

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
      updateStatus,
      setInterval
    }
  }

});
</script>

<style lang="css" scoped>

.carouselDiv {
  margin-top: 10px;
  color: white;
  margin-bottom: 50px;
}

.carouselText {
  margin-top: 50px;
}

.carouselBanner {
  height: 50px;
  width: 600px;
  background-color: #67bb7d;
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 49px;
}

.pointerDiv {
  cursor: pointer;
}

.carouselRound{
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.linktext {
  color: #67bb7d;
  text-decoration: none;
}

@media (min-width: 320px) {
  .carouselDiv {
    margin-top: 5px;
  }
  .carouselText {
    margin-top: 60px;
  }
  .carouselBanner {
    height: 70px;
    width: 320px;
    margin-bottom: 10px;
  }
}

@media (min-width: 425px) {
  .carouselDiv {
    margin-top: 5px;
  }
  .carouselText {
    margin-top: 60px;
  }
  .carouselBanner {
    height: 50px;
    width: 600px;
  }
}

@media (min-width: 768px) {
  .carouselDiv {
    margin-top: 5px;
  }
  .carouselText {
    margin-top: 55px;
  }
}

@media (min-width: 992px) {
  .carouselDiv {
    margin-top: 5px;
  }
  .carouselText {
    margin-top: 50px;
  }
}

@media (min-width: 1200px) {
  .carouselDiv {
    margin-top: 5px;
  }
  .carouselText {
    margin-top: 50px;
  }
}

@media (min-width: 1400px) {
  .carouselDiv {
    margin-top: 5px;
  }
  .carouselText {
    margin-top: 50px;
  }
}

</style>






