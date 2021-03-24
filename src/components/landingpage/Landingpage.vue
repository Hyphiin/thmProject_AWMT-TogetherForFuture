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

    <div class="card">
      <div class="container">
        <img src="../../assets/images/Icebear.jpg" class="eisbärPic" alt="...">
      <div class="card-img-overlay eisbärContainer container">
        <h5 class="card-title"><strong>Klima oder doch Wetter?</strong></h5>
        <p class="card-text">Alles was du über die Klimakrise wissen musst!</p>
        <a href="#/Klimafakten" @click="startFacts" class="btn text-white" style="background-color: #67bb7d">Jetzt Lesen!</a>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';


export default defineComponent({
  name: "Landingpage",

  setup(props, context){
    const facts = ref<string>("Facts");

    const startFacts = () => {
      context.emit('startFacts', facts.value);
      return facts.value;
    };

    return{
      facts,
      startFacts
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

.container{
  margin-bottom: 25px;
}

.infoContainer {
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top:90px;
}

.bigPic{
  width: 1400px;
  height: 650px;
  margin-top: -80px;
  transform:scaleX(-1);
  border-radius: 10px;
}
.eisbärContainer{
  background-color: #F5F5F5;
  width: 25%;
  height: 25%;
  padding: 30px;
  color: #303030;
  opacity: 0.8;
  margin-top: 5%;
}
.eisbärPic{
  height: 650px;
  width: 1200px;
  margin-top: 15px;
  border-radius: 10px;
}

.card{
  border: 0;
}


@media (min-width: 320px)  {
  .bigPic{
    width: 320px;
    height: 230px;
    margin-top: -80px;
  }
  .eisbärPic{
    height: auto;
    width: 295px;
  }
  .eisbärContainer {
    width: 98%;
    height: 60%;
    padding: 3px;
    margin-top: 50px;
  }
  .card-text{
    margin-bottom: 2px;
  }

}
@media (min-width: 425px)  {
  .bigPic{
    width: 425px;
    height: 240px;
    margin-top: -80px;
  }
  .eisbärPic{
    height: auto;
    width: 400px;
  }
  .eisbärContainer {
    width: 90%;
    height: 36%;
    padding: 3px;
    margin-top: 20px;
  }
  .card-text{
    margin-bottom: 2px;
  }
}

@media (min-width: 768px)  {
  .bigPic{
    width: 100%;
    height: 500px;
    margin-top: -350px;
  }
  .eisbärPic{
    height: 430px;
    width: 700px;
  }
  .eisbärContainer {
    width: 50%;
    height: 24%;
    padding: 5px;
    margin-top: 8%;
  }
}

@media (min-width: 992px) {
  .bigPic{
    width: 100%;
    height: 600px;
    margin-top: -400px;
  }
  .eisbärPic{
    height: 450px;
    width: 850px;
  }
  .eisbärContainer {
    width: 40%;
    height: 24%;
    padding: 5px;
    margin-top: 6%;
  }
}

@media (min-width: 1200px)  {
  .bigPic{
    width: 100%;
    height: 600px;
    margin-top: -400px;
  }
  .eisbärPic{
    height: 550px;
    width: 1000px;
  }
  .eisbärContainer {
    width: 30%;
    height: 22%;
    padding-top: 15px;
    padding-bottom: 10px;
    margin-top: 6%;
  }
}

@media (min-width: 1400px)  {
  .bigPic{
    width: 100%;
    height: 800px;
    margin-top: -400px;
  }
  .eisbärPic{
    height: 650px;
    width: 1200px;
  }
  .eisbärContainer {
    width: 30%;
    height: 19%;
    padding-top: 15px;
    padding-bottom: 10px;
    margin-top: 6%;
  }
}

</style>