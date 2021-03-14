<template>
  <div>
    <img src="../../assets/images/youth-climate-strike-aus.jpg" class="bigPic" alt="Klimastreik"/>
    <div class="container d-flex justify-content-center align-items-center position-absolute top-50% start-50 translate-middle">
      <div class="text-center d-flex justify-content-center align-items-center Banner mt-4">
        <h1 class="text-white">
          Was wir fordern!
        </h1>
      </div>
    </div>
    <div class="d-flex flex-row flex-wrap justify-content-center infoDiv">
      <div class="container d-flex justify-content-center p-4 infoContainer">
        <div class="row d-flex justify-content-center">
          <h5 class="fw-bold">
            1.Erderhitzung stoppen
          </h5>
          <div class="row d-flex justify-content-centers">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center p-4 infoContainer">
        <div class="row d-flex justify-content-center">
          <h5 class="fw-bold">
            2. Pariser Klimaschutzabkommen einhalten
          </h5>
          <div class="row d-flex justify-content-centers">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center p-4 infoContainer">
        <div class="row d-flex justify-content-center">
          <h5 class="fw-bold">
            3.Lorem Ipsum
          </h5>
          <div class="row d-flex justify-content-centers">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center p-4 infoContainer">
        <div class="row d-flex justify-content-center">
          <h5 class="fw-bold">
            4.Lorem Ipsum
          </h5>
          <div class="row d-flex justify-content-centers">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center p-4 infoContainer">
        <div class="row d-flex justify-content-center">
          <h5 class="fw-bold">
            5.Lorem Ipsum
          </h5>
          <div class="row d-flex justify-content-centers">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center p-4 infoContainer">
        <div class="row d-flex justify-content-center">
          <h5 class="fw-bold">
            6.Lorem Ipsum
          </h5>
          <div class="row d-flex justify-content-centers">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container d-flex justify-content-center p-4 infoContainerDown border">
      <div class="row d-flex justify-content-center align-items-center">
        <!-- Text links-->
        <div class="col-md-6 paddy">
          <ul class="list-unstyled mb-0">
            <li>
              <h4 class="fw-bold">DIE FORDERUNGEN</h4>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <ul class="list-unstyled">
            <li>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Goals"
});
</script>

<style scoped>

.Banner {
  height: 100px;
  width: 800px;
  background-color: #67bb7d;
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 49px;
}

.infoDiv{
  margin-top: 90px;
}

.infoContainer {
  width: 40%;
  height: 300px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  border-style: dashed;
  border-color: #67bb7d;

  margin: 10px;
}

.infoContainerDown {
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top:50px;
  margin-bottom: 50px;
}

.paddy{
  padding-right:10%;
}

.bigPic{
  width: 1400px;
  height: 650px;
  margin-top: -40px;
}

.Banner {
  top:460px;
  width: 700px;
}


@media (min-width: 320px)  {
  .bigPic{
    width: 375px;
    height: 250px;
    margin-top: -40px;
  }
}
@media (min-width: 425px)  {
  .bigPic{
    width: 425px;
    height: 280px;
    margin-top: -40px;
  }
}

@media (min-width: 768px)  {
  .bigPic{
    width: 768px;
    height: 400px;
    margin-top: -40px;
  }
}

@media (min-width: 992px) {
  .bigPic{
    width: 768px;
    height: 400px;
    margin-top: -40px;
  }
}

@media (min-width: 1200px)  {
  .bigPic{
    width: 1200px;
    height: 550px;
    margin-top: -40px;
  }
}

@media (min-width: 1400px)  {
  .bigPic{
    width: 1400px;
    height: 600px;
    margin-top: -40px;
  }
}

</style>