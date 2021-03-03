<template>
  <div>
    <img src="../../assets/images/Hambacher_Forst.jpeg" class="img-thumbnail" alt="Hambacher Forst"/>
    <div class="container d-flex justify-content-center align-items-center">
      <div class="text-center d-flex justify-content-center align-items-center Banner">
        <h1 class="text-white">
          Another World is possible!
        </h1>
      </div>
    </div>
    <div class="container d-flex justify-content-center p-4 infoContainer">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <ul class="list-unstyled mb-0">
            <li>
              <p>Together for Future ist ein junger, gemeinnütziger Verein mit Sitz in Berlin. Wir arbeiten für eine
                lebenswerte, gerechte und zukunftssichere Welt mit Fokus Klimaschutz. Durch Mobilisierung,
                faktenbasierte Aufklärung und Vernetzung setzen wir uns dafür ein, dass das völkerrechtlich verbindliche
                Pariser Klimaschutzabkommen eingehalten wird.</p>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">

          <ul class="list-unstyled">
            <li>
              <p>Wir, das sind Studierende und Auszubildende, Angestellte und UnternehmerInnen, Frauen und Männer,
                Singles, Eltern, Tanten und Onkel, egal – wir haben ein gemeinsames Ziel:</p>
            </li>
            <li>
              <p>Klimaschutz jetzt! Hier und weltweit.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr/>
    <div class="container d-flex justify-content-center">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="../../assets/images/Icebear.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title fw-bold">Klima oder doch Wetter?</h5>
          <p class="card-text">Alles was du über die Klimakrise wissen musst!</p>
          <a href="#" class="btn btn-primary" style="background-color: #67bb7d">Spenden</a>
        </div>
      </div>
    </div>
    <div>
      <p>
        Socials
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Landingpage"
})
</script>

<style scoped>

.Banner {
  top: 550px;
  height: 150px;
  width: 800px;
  background-color: #67bb7d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 49px;
}

.infoContainer {
  width: 800px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
}

</style>