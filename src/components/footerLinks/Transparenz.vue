<template>
  <div>

    <!--<div id="app">
      <div v-for="(key, value) in titles" :key="key" class="toggle" :class="{ active: isActive }">
        <div class="toggle-title border-bottom font-weight-bolder text-secondary" @click="toggleContent">
          <h5 name="title" class="fw-bold title">{{key}}</h5>
        </div>
        <transition name="fadeHeight" mode="out-in">
          <div class="toggle-content py-3 content" v-if="isActive">
            <slot name="content">{{ content[value] }}</slot>
          </div>
        </transition>
      </div>
    </div>-->

    <div id="app" class="pt-5">
      <div class="container container-sm toggle transparanzContainer mb-3 pt-2 pb-2" :class="{ active: isActive[0] }">
        <div class="toggle-title font-weight-bolder text-secondary" @click="toggleContent(0)">
          <h5 name="title" class="fw-bold text-center">Transparenz</h5>
        </div>
        <transition name="fadeHeight" mode="out-in">
          <div class="toggle-content py-3 mb-3" v-if="isActive[0]">
            <slot name="">Transparenz ist uns wichtig. Deshalb haben wir uns der Initiative Transparente Zivilgesellschaft angeschlossen. Wir verpflichten uns die folgenden zehn Informationen der Öffentlichkeit zur Verfügung zu stellen und aktuell zu halten.</slot>
          </div>
        </transition>
      </div>
      <div class="toggle container container-sm transparanzContainer mb-3 pt-2 pb-2" :class="{ active: isActive[1] }">
        <div class="toggle-title font-weight-bolder text-secondary" @click="toggleContent(1)">
          <h5 name="title" class="fw-bold text-center">Name, Sitz, Anschrift, Gündungsjahr</h5>
        </div>
        <transition name="fadeHeight" mode="out-in">
          <div class="toggle-content py-3 mb-3" v-if="isActive[1]">
            <div class="text-center">
              <ul class="list-unstyled">
                <li>
                  <p class="fw-bold">{{evName}}</p>
                </li>
                <li>
                  <p>{{address}}</p>
                </li>
                <li>
                  <p>{{plz}}</p>
                </li>
                <li>
                  <p>{{info}}</p>
                </li>
                <li>
                  <p></p>
                </li>
                <li>
                  <p>Ansprechpartnerin</p>
                </li>
                <li>
                  <a href="mailto:kontakt@togetherfuture.com" class="linktext">Anna Schwanhäuser</a>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
      <div class="toggle container container-sm transparanzContainer mb-3 pt-2 pb-2" :class="{ active: isActive[2] }">
        <div class="toggle-title font-weight-bolder text-secondary" @click="toggleContent(2)">
          <h5 name="title" class="fw-bold text-center">Satzung</h5>
        </div>
        <transition name="fadeHeight" mode="out-in">
          <div class="toggle-content py-3 mb-3" v-if="isActive[2]">
            <div class="container d-flex justify-content-center p-4 infoContainer">
              <div class="row d-flex justify-content-center">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <ul class="list-unstyled">
                    <li>
                      <p>Together for Future ist ein junger, gemeinnütziger Verein mit Sitz in Berlin. Wir arbeiten für eine lebenswerte, gerechte und zukunftssichere Welt mit Fokus Klimaschutz. Durch Mobilisierung, faktenbasierte Aufklärung und Vernetzung setzen wir uns dafür ein, dass das völkerrechtlich verbindliche Pariser Klimaschutzabkommen eingehalten wird.</p>
                    </li>
                  </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">

                  <ul class="list-unstyled">
                    <li>
                      <p>Wir, das sind Studierende und Auszubildende, Angestellte und UnternehmerInnen, Frauen und Männer, Singles, Eltern, Tanten und Onkel, egal – wir haben ein gemeinsames Ziel:</p>
                    </li>
                    <li>
                      <p>Klimaschutz jetzt! Hier und weltweit.

                        Unsere vollständige Satzung findest Du unter folgendem <a href="https://togetherforfuture.org/wp-content/uploads/2020/12/Satzung-Together-for-Future-e.V..pdf" class="linktext">Link</a> </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="toggle container container-sm transparanzContainer mb-3 pt-2 pb-2" :class="{ active: isActive[3] }">
        <div class="toggle-title font-weight-bolder text-secondary" @click="toggleContent(3)">
          <h5 name="title" class="fw-bold text-center">Bescheid des Finanzamtes</h5>
        </div>
        <transition name="fadeHeight" mode="out-in">
          <div class="toggle-content py-3 mb-3" v-if="isActive[3]">
            <slot name="content">Der Verein ist nach §§ 51, 59, 60 und 61 AO vom Finanzamt für Körperschaften I Berlin, StNr. 27/678/57847, mit Bescheid vom 4. November 2019 nach § 60a AO als gemeinnützig anerkannt. </slot>
          </div>
        </transition>
      </div>
      <div class="toggle container container-sm transparanzContainer mb-3 pt-2 pb-2" :class="{ active: isActive[4] }">
        <div class="toggle-title font-weight-bolder text-secondary" @click="toggleContent(4)">
          <h5 name="title" class="fw-bold text-center">Name und Funktion wesentlicher Entscheidungsträger*innen</h5>
        </div>
        <transition name="fadeHeight" mode="out-in">
          <div class="toggle-content py-3 mb-3" v-if="isActive[4]">
            <div class="text-center">
              <ul class="list-unstyled mb-0">
                <li>
                  <p>1. Vorstand: Torben Greve</p>
                </li>
                <li>
                  <p>Geschäftsführend im Vorstand: Anna Schwanhäußer </p>
                </li>
                <li>
                  <p>Schatzmeister: Panya Putsathit </p>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
      <div class="toggle container container-sm transparanzContainer mb-3 pt-2 pb-2" :class="{ active: isActive[5] }">
        <div class="toggle-title font-weight-bolder text-secondary" @click="toggleContent(5)">
          <h5 name="title" class="fw-bold text-center">Bericht über Tätigkeiten</h5>
        </div>
        <transition name="fadeHeight" mode="out-in">
          <div class="toggle-content py-3 mb-3" v-if="isActive[5]">
            <slot name="content">Einen Überblick über unsere Projekte findest Du <a href="https://togetherforfuture.org/wp-content/uploads/2020/12/Ta%CC%88tigkeitsbericht-TFF-2019_signedtogorg.pdf" class="linktext">hier.</a> </slot>
          </div>
        </transition>
      </div>
      <div class="toggle container container-sm transparanzContainer mb-3 pt-2 pb-2" :class="{ active: isActive[6] }">
        <div class="toggle-title font-weight-bolder text-secondary" @click="toggleContent(6)">
          <h5 name="title" class="fw-bold text-center">Personalstruktur</h5>
        </div>
        <transition name="fadeHeight" mode="out-in">
          <div class="toggle-content py-3 mb-3" v-if="isActive[6]">
            <slot name="content">Insgesamt: 3 Vollzeitangestellte, 5 Teilzeitangestellte und 3 Ehrenamtliche</slot>
          </div>
        </transition>
      </div>
      <div class="toggle container container-sm transparanzContainer mb-3 pt-2 pb-2" :class="{ active: isActive[7] }">
        <div class="toggle-title font-weight-bolder text-secondary" @click="toggleContent(7)">
          <h5 name="title" class="fw-bold text-center">Mittelherkunft 2019</h5>
        </div>
        <transition name="fadeHeight" mode="out-in">
          <div class="toggle-content py-3 mb-3" v-if="isActive[7]">
            <slot name="content">Die Daten zur Mittelherkunft findest Du <a href="https://togetherforfuture.org/wp-content/uploads/2020/12/Together-for-Future-e.V.-Gewinnermittlung-2019-11.pdf" class="linktext">hier.</a> </slot>
          </div>
        </transition>
      </div>
      <div class="toggle container container-sm transparanzContainer mb-3 pt-2 pb-2" :class="{ active: isActive[8] }">
        <div class="toggle-title font-weight-bolder text-secondary" @click="toggleContent(8)">
          <h5 name="title" class="fw-bold text-center">Mittelverwendung 2019</h5>
        </div>
        <transition name="fadeHeight" mode="out-in">
          <div class="toggle-content py-3 mb-3" v-if="isActive[8]">
            <slot name="content">Die Daten zur Mittelverwendung findest Du <a href="https://togetherforfuture.org/wp-content/uploads/2020/12/Together-for-Future-e.V.-Gewinnermittlung-2019-11.pdf" class="linktext">hier.</a> </slot>
          </div>
        </transition>
      </div>
      <div class="toggle container container-sm transparanzContainer mb-3 pt-2 pb-2" :class="{ active: isActive[9] }">
        <div class="toggle-title font-weight-bolder text-secondary" @click="toggleContent(9)">
          <h5 name="title" class="fw-bold text-center">Gesellschaftsrechtliche Verbundenheit mit Dritten</h5>
        </div>
        <transition name="fadeHeight" mode="out-in">
          <div class="toggle-content py-3 mb-3" v-if="isActive[9]">
            <div class="text-center">
              <ul class="list-unstyled">
                <li>
                  <p>Teil des for Future-Bündnisses  </p>
                </li>
                <li>
                  <p>Mitgliedschaft in der Klima-Allianz Deutschland </p>
                </li>
                <li>
                  <p>Mitgliedschaft in der Allianz “Rechtssicherheit für politische Willensbildung” </p>
                </li>
                <li>
                  <p>Unterstützer der Initiative Neues Wirtschaftswunder </p>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
      <div class="toggle container container-sm transparanzContainer mb-3 pt-2 pb-2" :class="{ active: isActive[10] }">
        <div class="toggle-title font-weight-bolder text-secondary" @click="toggleContent(10)">
          <h5 name="title" class="fw-bold text-center">Namen von Personen, deren jährliche Zuwendung mehr als zehn Prozent der gesamten Jahreseinnahmen ausmachen</h5>
        </div>
        <transition name="fadeHeight" mode="out-in">
          <div class="toggle-content py-3 mb-5" v-if="isActive[10]">
            <div class="text-center">
              <ul class="list-unstyled">
                <li>
                  <p>Morgengrün Stiftung  </p>
                </li>
                <li>
                  <p>LilyPut Beteiligungs GmbH </p>
                </li>
                <li>
                  <p>ECF</p>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>

      <a href="#">
        <img src="../../assets/images/csm_Transparente_ZivilgesellschaftPNG_c0c522c331.png" class="img-fluid" alt="Transparenz"/>
      </a>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: "Transparenz",
  setup() {
    //const isActive = ref<boolean>(false);
    const evName = ref<string>("Together For Future e.V.");
    const address = ref<string>("Neue Schönhauser Str.20");
    const plz = ref<string>("10178 Berlin");
    const info = ref<string>("Gründungsdatum: 10. April 2019 in Berlin");

    const isActive = ref<boolean[]>([false,false,false,false,false,false,false,false,false,false,false]);

    const titles = ref<string[]>(["Transparenz","Name, Sitz, Anschrift, Gündungsjahr","Satzung", "Bescheid des Finanzamtes", "Name und Funktion wesentlicher Entscheidungsträger*innen",
    "Bericht über Tätigkeiten", "Personalstruktur", "Mittelherkunft 2019", "Mittelverwendung 2019", "Gesellschaftsrechtliche Verbundenheit mit Dritten", "Namen von Personen, deren jährliche Zuwendung mehr als zehn Prozent der gesamten Jahreseinnahmen ausmachen"]);

    const content = ref<string[]>(["Inhalt1","Inhalt2","Inhalt3","Inhalt4","Inhalt5","Inhalt6","Inhalt7","Inhalt8","Inhalt9","Inhalt10", "Inhalt11"]);

    const toggleContent = (index: number) => {
      isActive.value[index] = !isActive.value[index]
    }
    return {
      isActive,
      titles,
      content,
      evName,
      address,
      plz,
      info,
      toggleContent
    }
  }
});
</script>

<style scoped>

.toggle-title {
  text-align: start;
  position: relative;
  cursor: pointer;
}

.toggle-title:before {
  content: " ";
  position: absolute;
  top: calc(50% + 1px);
  right: 14px;
  border-color: #ccc;
  border-top: 1px solid;
  border-right: 1px solid;
  width: 8px;
  height: 8px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform .3s, top .3s;
  transform: rotate(-45deg) translate3d(0, -50%, 0);
  transform-origin: 35%;
}

.toggle.active > .toggle-title:before {
  top: calc(50% - 8px);
  transform: rotate(135deg);
}

.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 0.3s;
  max-height: 230px;
}

.fadeHeight-enter,
.fadeHeight-leave-to {
  opacity: 0;
  max-height: 0px;
}

.title{
  background-color: whitesmoke;
}
.content{
  background-color: beige;
}
.linktext{
  text-decoration: none;
  color: #67bb7d;
}

.transparanzContainer{
  box-shadow: 2px 1px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 49px;
  width: 50%;
}

@media (min-width: 320px){
  .transparanzContainer{
    width: 100%;
  }
}

@media (min-width: 425px){
  .transparanzContainer{
    width: 100%;
  }
}

@media (min-width: 768px){
  .transparanzContainer{
    width: 100%;
  }
}

@media (min-width: 992px) {
  .transparanzContainer{
    width: 70%;
  }
}

@media (min-width: 1200px)  {
  .transparanzContainer{
    width: 60%;
  }
}

@media (min-width: 1400px)  {
  .transparanzContainer{
    width: 50%;
  }
}

</style>