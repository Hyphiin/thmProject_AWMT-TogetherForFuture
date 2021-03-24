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

    <div  v-if="type === 'large'" class="d-flex flex-row flex-wrap justify-content-center infoDiv">
      <div class="container d-flex justify-content-center p-4 infoContainer">
        <div class="row d-flex justify-content-center">
          <h5 class="fw-bold">
            1.Erderhitzung stoppen
          </h5>
          <div class="row d-flex justify-content-centers">
            <p>Existenzgrundlage für diese lebenswerte, gerechte und zukunftssichere Welt ist das schnelle Stoppen der
              Erderhitzung.</p>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center p-4 infoContainer">
        <div class="row d-flex justify-content-center">
          <h5 class="fw-bold">
            2. Pariser Klimaschutzabkommen einhalten
          </h5>
          <div class="row d-flex justify-content-centers">
            <p>All unsere Aktivitäten sind deswegen darauf ausgerichtet, dass das völkerrechtlich verbindliche Pariser
              Klimaschutzabkommen eingehalten wird. Für diese Aufgabe der Generationengerechtigkeit ist die Politik in
              der Verantwortung, die notwendigen lenkenden Rahmenbedingungen sozial gerecht herzustellen.</p>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center p-4 infoContainer">
        <div class="row d-flex justify-content-center">
          <h5 class="fw-bold">
            3.Kräfte bündeln
          </h5>
          <div class="row d-flex justify-content-centers">
            <p>Als kleiner und agiler Verein konzentrieren wir uns darauf, zu vernetzen, Kräfte zu bündeln und dadurch
              die Klimabewegung in Deutschland voranzubringen.</p>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center p-4 infoContainer">
        <div class="row d-flex justify-content-center">
          <h5 class="fw-bold">
            4.Lücken schließen
          </h5>
          <div class="row d-flex justify-content-centers">
            <p>Dabei ist es unser Ziel, neue Wege zu gehen und durch gezielte Projekte gemeinsam mit
              Kooperationspartnern Lücken zu schließen.</p>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center p-4 infoContainer">
        <div class="row d-flex justify-content-center">
          <h5 class="fw-bold">
            5.Politik im Fokus
          </h5>
          <div class="row d-flex justify-content-centers">
            <p>Zusammen mit Klimaschutzbewegungen und -organisationen fordern wir durch Protest aber auch im Dialog die
              politischen Akteure zum schnellen und zielführenden Handeln auf.</p>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center p-4 infoContainer">
        <div class="row d-flex justify-content-center">
          <h5 class="fw-bold">
            6.Kernforderungen erfüllen
          </h5>
          <div class="row d-flex justify-content-centers">
            <p>Im Einklang mit Fridays for Future und den Erwachsenen for Future-Gruppen unterstützen wir die von den
              Scientists for Future mitentwickelten Forderungen.</p>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center p-4 infoContainer">
        <div class="row d-flex justify-content-center">
          <h5 class="fw-bold">
            7.Wissenschaft und Fakten
          </h5>
          <div class="row d-flex justify-content-centers">
            <p>Durch die Bereitstellung von wissenschaftlich fundierten Fakten klären wir auf und fördern die breite
              gesellschaftliche Unterstützung für den erforderlichen Wandel. Besagte Daten vermitteln ein positives
              Weltbild für die klimaneutrale Gesellschaft der Zukunft.</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="type === 'small'" class="accordion list-group" id="accordionExample" >
      <div class="accordion-item" @click="toggleContent(0)">
        <h2 class="accordion-header">
          <button class="accordion-button" :class="collapsed[0]" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="{{expanded}}" aria-controls="collapseOne">
            <strong>1.Erderhitzung stoppen</strong>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" :class="isShow[0]" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Existenzgrundlage für diese lebenswerte, gerechte und zukunftssichere Welt ist das schnelle Stoppen der Erderhitzung.</strong>
          </div>
        </div>
      </div>
      <div class="accordion-item" @click="toggleContent(1)">
        <h2 class="accordion-header">
          <button class="accordion-button" :class="collapsed[1]" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="{{expanded}}" aria-controls="collapseTwo">
            <strong>2. Pariser Klimaschutzabkommen einhalten</strong>
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" :class="isShow[1]" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>All unsere Aktivitäten sind deswegen darauf ausgerichtet, dass das völkerrechtlich verbindliche Pariser
            Klimaschutzabkommen eingehalten wird. Für diese Aufgabe der Generationengerechtigkeit ist die Politik in
            der Verantwortung, die notwendigen lenkenden Rahmenbedingungen sozial gerecht herzustellen.</strong>
          </div>
        </div>
      </div>
      <div class="accordion-item" @click="toggleContent(2)">
        <h2 class="accordion-header">
          <button class="accordion-button" :class="collapsed[2]" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="{{expanded}}" aria-controls="collapseTwo">
            <strong>3.Kräfte bündeln</strong>
          </button>
        </h2>
        <div class="accordion-collapse collapse" :class="isShow[2]" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Als kleiner und agiler Verein konzentrieren wir uns darauf, zu vernetzen, Kräfte zu bündeln und dadurch
            die Klimabewegung in Deutschland voranzubringen.</strong>
          </div>
        </div>
      </div>
      <div class="accordion-item" @click="toggleContent(3)">
        <h2 class="accordion-header">
          <button class="accordion-button" :class="collapsed[3]" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="{{expanded}}" aria-controls="collapseTwo">
            <strong>4.Lücken schließen</strong>
          </button>
        </h2>
        <div class="accordion-collapse collapse" :class="isShow[3]" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Dabei ist es unser Ziel, neue Wege zu gehen und durch gezielte Projekte gemeinsam mit
            Kooperationspartnern Lücken zu schließen.</strong>
          </div>
        </div>
      </div>
      <div class="accordion-item" @click="toggleContent(4)">
        <h2 class="accordion-header">
          <button class="accordion-button" :class="collapsed[4]" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="{{expanded}}" aria-controls="collapseTwo">
            <strong>5.Politik im Fokus</strong>
          </button>
        </h2>
        <div class="accordion-collapse collapse" :class="isShow[4]" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Zusammen mit Klimaschutzbewegungen und -organisationen fordern wir durch Protest aber auch im Dialog die
            politischen Akteure zum schnellen und zielführenden Handeln auf.</strong>
          </div>
        </div>
      </div>
      <div class="accordion-item" @click="toggleContent(5)">
        <h2 class="accordion-header">
          <button class="accordion-button" :class="collapsed[5]" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="{{expanded}}" aria-controls="collapseTwo">
            <strong>6.Kernforderungen erfüllen</strong>
          </button>
        </h2>
        <div class="accordion-collapse collapse" :class="isShow[5]" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Im Einklang mit Fridays for Future und den erwachsenen for Future-Gruppen unterstützen wir die von den
            Scientists for Future mitentwickelten Forderungen.</strong>
          </div>
        </div>
      </div>
      <div class="accordion-item" @click="toggleContent(6)">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button" :class="collapsed[6]" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="{{expanded}}" aria-controls="collapseTwo">
            <strong>7.Wissenschaft und Fakten</strong>
          </button>
        </h2>
        <div class="accordion-collapse collapse" :class="isShow[6]" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Durch die Bereitstellung von wissenschaftlich fundierten Fakten klären wir auf und fördern die breite
            gesellschaftliche Unterstützung für den erforderlichen Wandel. Besagte Daten vermitteln ein positives
            Weltbild für die klimaneutrale Gesellschaft der Zukunft.</strong>
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
              <p>Wir fordern die Einhaltung des Pariser Klimaschutzabkommens. Dies bedeutet insbesondere alle
                Anstrengungen zu unternehmen, die Erderwärmung auf deutlich unter 2 Grad, möglichst auf 1,5 Grad zu
                begrenzen. Deutschland hat als reiche Industrienation dabei die historische Verpflichtung, besondere
                Verantwortung bei der Reduktion des CO2 Ausstoßes und beim Aufbau einer ressourcenschonenden Wirtschaft
                zu übernehmen.</p>
            </li>
            <li>
              <p>Nur die Politiker*innen sind in der Lage, die notwendigen und reichweitenden Rahmenbedingungen hierfür
                festzulegen. Sie sind dafür verantwortlich, internationale Vereinbarungen wie das Pariser
                Klimaschutzabkommen einzuhalten. Weder die momentane Gesetzgebung noch die Pläne des Klimakabinetts
                reichen annähernd aus, um dieses Ziel zu erreichen. Wir finden: Dieses Verhalten ist fahrlässig
                gegenüber den zukünftigen Generationen weltweit.</p>
            </li>
            <li>
              <p>Außerdem ist es erforderlich, dass die Bundesregierung ihren Einfluss auf die anderen Länder der UN
                nutzt, ebenfalls ausreichende Maßnahmen zu entwickeln und umzusetzen, um das 1,5-Grad-Ziel einzuhalten
                und gegebenenfalls hierbei zu unterstützen.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {computed, onMounted, onUnmounted, ref} from "vue"


export default defineComponent({
  name: "Goals",
  setup() {
    let windowWidth = ref(window.innerWidth)

    const onWidthChange = () => windowWidth.value = window.innerWidth
    onMounted(() => window.addEventListener('resize', onWidthChange))
    onUnmounted(() => window.removeEventListener('resize', onWidthChange))

    const isShow = ref<String[]>(['', '', '', '', '', '', '']);
    const collapsed = ref<String[]>(['collapsed', 'collapsed', 'collapsed', 'collapsed', 'collapsed', 'collapsed', 'collapsed']);
    const expanded = ref<boolean[]>([false, false, false, false, false, false, false]);

    const toggleContent = (index: number) => {
      for(var i=0; i < expanded.value.length; i++){
        if(expanded.value[i] === true){
          isShow.value[i] = 'noShow';
          expanded.value[i] = !expanded.value[i];
          collapsed.value[i] = 'collapsed';
        }
      }
      isShow.value[index] = 'show';
      expanded.value[index] = !expanded.value[index];
      collapsed.value[index] = '';
    }

    const type = computed(() => {
      if (windowWidth.value < 992) return 'small'
      else return 'large'
    })

    const width = computed(() => windowWidth.value)

    return {
      width,
      type,
      isShow,
      toggleContent,
      expanded,
      collapsed
    }
  }
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

.list-group{
  margin-top: 10%;
  width: 80%;
  margin-left: 10%;
}

.infoDiv {
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
  margin-top: 50px;
  margin-bottom: 50px;
}

.paddy {
  padding-right: 10%;
}

.bigPic {
  width: 1400px;
  height: 650px;
  margin-top: -40px;
  filter: grayscale(100%);
  border-radius: 10px;
}

.Banner {
  top: 460px;
  width: 700px;
}

.accordion-button:not(.collapsed) {
  color: #67bb7d;
  background-color: #67bb7d52;
}

@media (min-width: 320px) {
  .bigPic {
    width: 320px;
    height: 200px;
    margin-top: -40px;
  }
  .list-group{
    margin-top: 20%;
  }
}

@media (min-width: 425px) {
  .bigPic {
    width: 425px;
    height: 260px;
    margin-top: -40px;
  }
  .list-group{
    margin-top: 20%;
  }
}

@media (min-width: 768px) {
  .bigPic {
    width: 768px;
    height: auto;
    margin-top: -100px;
  }
  .list-group{
    margin-top: 10%;
  }
}

@media (min-width: 992px) {
  .bigPic {
    width: 992px;
    height: auto;
    margin-top: -200px;
  }
}

@media (min-width: 1200px) {
  .bigPic {
    width: 1200px;
    height: auto;
    margin-top: -200px;
  }
}

@media (min-width: 1400px) {
  .bigPic {
    width: 1400px;
    height: 700px;
    margin-top: -100px;
  }
}

</style>