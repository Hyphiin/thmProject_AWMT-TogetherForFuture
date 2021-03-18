<template>
  <div>

    <!--img-->
    <img src="../../assets/images/Hambacher_Forst.jpeg" class="bigPic" alt="Hambacher Forst"/>

    <!--Green Banner-->
    <div class="container d-flex justify-content-center align-items-center position-absolute top-50% start-50 translate-middle">
      <div class="text-center d-flex justify-content-center align-items-center Banner mt-4">
        <h1 class="text-white">
          Another World is possible!
        </h1>
      </div>
    </div>

    <!--Text Card-->
    <div class="container d-flex justify-content-center p-4 infoContainer border">
      <div class="row d-flex justify-content-center">
        <!-- Text links-->
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
        <!--Text rechts-->
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

    <!--Eisbärding-->
    <div class="container d-flex justify-content-center mt-5">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="../../assets/images/Icebear.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title fw-bold">Klima oder doch Wetter?</h5>
          <p class="card-text">Alles was du über die Klimakrise wissen musst!</p>
          <button @click="startDonation" class="btn btn-primary" style="background-color: #67bb7d">Spenden</button>
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
import {defineComponent, ref} from 'vue';


export default defineComponent({
  name: "Landingpage",

  setup(props, context){
    const donate = ref<string>("Donation");

    const startDonation = () => {
      context.emit('startDonation', donate.value);
      return donate.value;
    };

    return{
      donate,
      startDonation
    }
  }
})
</script>

<style scoped>

.Banner {
  height: 100px;
  width: 800px;
  background-color: #67bb7d;
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 49px;
}

.infoContainer {
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top:90px;
}

.bigPic{
  width: 1400px;
  height: 650px;
  margin-top: -40px;
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