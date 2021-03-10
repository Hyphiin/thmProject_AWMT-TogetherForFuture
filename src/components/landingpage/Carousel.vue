<template>

  <!--Angefangen, hiervon kopiert: https://bootstrap-vue.org/docs/components/carousel# -->

  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >

      <b-carousel-slide>
      <div class="container bg-danger">
        <h2>Grüne Demo</h2>
        <p>Am 24.09.2021 in München!</p>
      </div>
      </b-carousel-slide>

      <b-carousel-slide>
        <div class="container bg-info">
          <h2>Blau Demo</h2>
          <p>Am 24.09.2021 in München!</p>
        </div>
      </b-carousel-slide>

      <b-carousel-slide>
        <div class="container bg-warning">
          <h2>Gelbe Demo</h2>
          <p>Am 24.09.2021 in München!</p>
        </div>
      </b-carousel-slide>

      <a href="#" role="button" aria-controls="carousel-1___BV_inner_" class="carousel-control-prev" aria-disabled="true">
        <span aria-hidden="true" class="carousel-control-prev-icon"></span>
        <span class="sr-only">Previous slide</span>
      </a>
      <a href="#" role="button" aria-controls="carousel-1___BV_inner_" class="carousel-control-next">
        <span aria-hidden="true" class="carousel-control-next-icon"></span>
        <span class="sr-only">Next slide</span>
      </a>

      <ol id="carousel-1___BV_indicators_" aria-hidden="false" aria-label="Select a slide to display" aria-owns="carousel-1___BV_inner_" class="carousel-indicators">
        <li role="button" id="carousel-1___BV_indicator_1_" tabindex="0" aria-current="true" aria-label="Goto slide 1" aria-controls="carousel-1___BV_inner_" class="active" aria-describedby="__BVID__518"></li>
        <li role="button" id="carousel-1___BV_indicator_2_" tabindex="0" aria-current="false" aria-label="Goto slide 2" aria-controls="carousel-1___BV_inner_" class="" aria-describedby="__BVID__519"></li>
        <li role="button" id="carousel-1___BV_indicator_3_" tabindex="0" aria-current="false" aria-label="Goto slide 3" aria-controls="carousel-1___BV_inner_" class="" aria-describedby="__BVID__520"></li>
      </ol>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      if (slide) {
        this.sliding = true
      }
    },
    onSlideEnd(slide) {
      if (slide) {
        this.sliding = false
      }
    }
  }
}
</script>