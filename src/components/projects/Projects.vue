<template>
  <div id="projects-container">
    <div class="image-container">
      <img src="../../assets/images/fghtfor1.5_small.jpg" class="onefive bigPic" alt="fightfor1.5">
    </div>
    <div
        class="container d-flex justify-content-center align-items-center position-absolute top-50% start-50 translate-middle">
      <div class="text-center d-flex justify-content-center align-items-center Banner mt-4">
        <h1 class="text-white">
          Projekte und Kooperationen
        </h1>
      </div>
    </div>

    <div class="container d-flex mt-5 pt-5 p-4">
      <div class="row d-flex ms-4 ps-5">
        <h4 class="fw-bold" style="text-align: right;">PROJEKTE</h4>
      </div>
    </div>

    <div class="container pt-3 pb-1">

      <div class="row mx-auto project-row1">
        <div class="col pt-3 px-3 mx-3">
          <img src="../../assets/images/logos/forfuture2048x2048-980x980.png" class="img-fluid img-logo"
               alt="for-future-bund">
        </div>
        <div class="col pt-5 px-5 mx-5 description-text">
          <h4 class="project-header">FOR FUTURE-BÜNDNIS</h4>
          <p>
            Als For Future-Bündnis vernetzen und aktivieren wir die Gesellschaft in all ihren Facetten; dabei
            unterstützen
            wir die Forderungen von Fridays for Future für Klimaschutz und Klimagerechtigkeit! Über 30 aktive Gruppen
            sind bereits
            mit dabei.
          </p>
          <a href="https://www.for-future-buendnis.de/" class="btn mb-3" style="background-color: #67bb7d">Zum Projekt!</a>
        </div>
      </div>

      <div class="row mx-auto project-row2">
        <div class="col pt-3 px-3 mx-3">
          <img src="../../assets/images/logos/klimastreik-hero-earh-980x890.jpg" class="img-fluid img-logo"
               alt="for-future-bund">
        </div>
        <div class="col description-text pt-5 px-5 mx-5">
          <h4 class="project-header">SEI DABEI – FÜR EINE ZUKUNFT OHNE KLIMAKRISE!</h4>
          <p>
            <b>Die Klimakrise macht keine Pause! </b> Wir nähern uns immer weiter dem Point of no return, deswegen
            müssen die
            Entscheidungsträger*innen jetzt handeln! Debatten über 2050 bringen uns nicht weiter. Daher ist am 19.03 der
            nächste
            globale Klimastreik. Aufgrund der derzeitigen Corona-Situation natürlich mit Abstand und vielfältigen
            Aktionen.
            <a href="https://twitter.com/hashtag/NoMoreEmptyPromises?src=hashtag_click" class="linktext">#NoMoreEmptyPromises</a>
          </p>
          <a href="https://www.for-future-buendnis.de/" class="btn mb-3" style="background-color: #67bb7d">Zum Projekt!</a>
        </div>
      </div>

      <div class="row mx-auto project-row1">
        <div class="col pt-3 px-3 mx-3">
          <img src="../../assets/images/logos/H4FLogoInstaHighRes-980x980.png" class="img-fluid img-logo"
               alt="help-for-future">
        </div>
        <div class="col description-text pt-5 px-5 mx-5">
          <h4 class="project-header">HELP FOR FUTURE</h4>
          <p>
            Help for Future ist eine Non-profit-Plattform, die Aktivisti und Unterstützer*innen zusammenbringt. Jede*r
            kann jetzt direkt und unkompliziert Unterstützung über das Schwarze Brett für die for Future-Bewegung
            anbieten oder für seine Gruppe suchen!
            <br>
            <br>
            Die Nutzung der Plattform ist komplett kostenlos. Viel Spaß beim Helfen und Klima retten!
          </p>
          <a href="https://www.for-future-buendnis.de/" class="btn mb-3" style="background-color: #67bb7d">Zum Projekt!</a>
        </div>
      </div>

      <div class="row mx-auto project-row2">
        <div class="col pt-3 px-3 mx-3">
          <img src="../../assets/images/logos/schwarm-for-future-logo.png" class="img-fluid img-logo"
               alt="schwarm-for-future">
        </div>
        <div class="col description-text pt-5 px-5 mx-5">
          <h4 class="project-header">SCHWARM FOR FUTURE</h4>
          <p>
            HALLO BUNDESTAG, WIR MÜSSEN ÜBER KLIMA-TATEN REDEN!
            <br>
            <br>
            Der ‚Schwarm for Future‘, das sind wir alle: Bundesweit schwärmen jetzt Parents, Entrepreneurs und viele
            andere For-Future-Gruppen hundertfach zu „ihren“ Abgeordneten im Bundestag aus. </p>
          <a href="https://www.for-future-buendnis.de/" class="btn mb-3" style="background-color: #67bb7d">Zum Projekt!</a>
        </div>
      </div>
    </div>

    <div class="row mx-auto project-row1">
      <div class="col pt-3 px-3 mx-3">
      </div>
      <div class="col description-text pt-5 px-5 mx-5">
        <h4 class="project-header">UNTERSTÜTZUNG VON FRIDAYS FOR FUTURE</h4>
        <p>
          Wir unterstützen Fridays for Future nach Möglichkeit, z.B. bei der Durchführung von Kongressen,
          Demonstrationen,
          online Marketingkampagnen usw. Anfragen bitte über das <a href="#" class="linktext" @click="getContact">Kontaktformular</a>
          an uns senden! </p> <!-- TODO Link zum Kontakt -->
      </div>
    </div>

    <div class="dreieck"></div>

    <div class="container d-flex p-4">
      <div class="row d-flex">
        <h4 class="fw-bold" style="text-align: right;">KOOPERATIONEN</h4>
      </div>
    </div>

    <div class="container-fluid p-4 ">
      <div class="row project-row2">
        <div class="col pt-3 px-3 mx-3 pb-3">
          <a href="https://www.klima-allianz.de/" class="linktext">
            <img src="../../assets/images/logos/Logo_Klima-Allianz_Deutschland.jpg" class="img-fluid"
                 alt="klima-allianz">
          </a>
        </div>
        <div class="col description-text pt-5 px-5 mx-5">
          <p>
            Die Klima-Allianz Deutschland ist das breite gesellschaftliche Bündnis für den Klimaschutz.
            Mit über 120 Mitgliedsorganisationen aus den Bereichen Umwelt, Kirche, Entwicklung, Bildung, Kultur,
            Gesundheit, Verbraucherschutz, Jugend und Gewerkschaften setzt sie sich für eine ambitionierte Klimapolitik
            und eine erfolgreiche Energiewende auf lokaler, nationaler, europäischer und internationaler Ebene ein.
            Ihre Mitgliedsorganisationen repräsentieren zusammen rund 25 Millionen Menschen.
          </p>
        </div>
      </div>

      <div class="row project-row1">
        <div class="col pt-3 px-3 mx-3 pb-3">
          <a href="https://neues-wirtschaftswunder.de/" class="linktext">
            <img src="../../assets/images/logos/Logo_Initiative_Neues_Wirtschaftswunder-1280x1161.png"
                 class="img-fluid img-logo" alt="Initiative-Wirtschaftswunder">
          </a>
        </div>
        <div class="col description-text pt-5 px-5 mx-5">
          <p>
            Das Neue Wirtschaftswunder will mit einer breiten Allianz die Debatte um nachhaltige
            und sozial gerechte Investitionen im Rahmen notwendiger <b>Finanzhilfen</b> stärken
            und vorantreiben. Ziel ist auch, die Dringlichkeit aufzuzeigen, Konjunkturpakete als sozio-ökologische
            Transformationspakete auszugestalten, um notwendige Finanzhilfen im Zusammenhang mit der Corona-Krise
            nutzen. Dabei soll
            <b>Beteiligung</b> und <b>Transparenz</b> des Transformationspakets erreicht werden.
          </p>
        </div>
      </div>

      <div class="row project-row2">
        <div class="col pt-3 px-3 mx-3 pb-3">
          <a href="https://www.zivilgesellschaft-ist-gemeinnuetzig.de/" class="linktext">
            <img src="../../assets/images/logos/allianz-logo-pur-sw.jpg" class="img-fluid "
                 alt="allianz-rechtssicherheit">
          </a>
        </div>
        <div class="col description-text pt-5 px-5 mx-5">
          <p>
            Wir sind Mitglied der Allianz “Rechtssicherheit für politische Willensbildung”, um gemeinsam mit
            anderen Organisationen das Gemeinnützigkeitsrecht zu ändern. Zivilgesellschaft ist gemeinnützig
            – doch Organisationen der Zivilgesellschaft, die sich politisch äußern, sind ständig der Gefahr ausgesetzt,
            ihre Gemeinnützigkeit zu verlieren. Das wollen wir ändern und Rechtssicherheit schaffen durch gesetzliche
            Klarstellungen.
          </p>
        </div>
      </div>

      <div class="row project-row1">
        <div class="col pt-5 mt-4 px-3 mx-3 pb-3">
          <a href="https://klima-mitbestimmung.jetzt/" class="linktext">
            <img src="../../assets/images/logos/klimamitbestimmung-logo-.png" class="img-fluid "
                 alt="klima-mitbestimmung">
          </a>
        </div>
        <div class="col description-text pt-5 px-5 mx-5">
          <p>
            Wir unterstützen die Initiative “Klima-Mitbestimmung JETZT”. Deutschland braucht mehr Mitbestimmung beim
            Klimaschutz.
            Aus diesem Grund hat die Inititiative eine 2020 eine Petition mit der Forderung eines Bürger*innenrates
            gestartet,
            die es zu mehr als 70.000 Unterschriften und damit in den Bundestag geschafft hat. Wie es nun mit dem
            Bürger*innenrat weitergeht erfährst du auf der Website von <a href="https://klima-mitbestimmung.jetzt/"
                                                                          class="linktext">“Klima-Mitbestimmung
            JETZT”</a>.
            <br> <br>
            Darüber hinaus sind wir mit 183 weiteren Organisationen Mitzeichner des <a href="https://klima-rat.org/"
                                                                                       class="linktext">offenen
            Briefs</a> an den Ausschuss für Umwelt, Naturschtz und nukleare Sicherheit, der ebenfalls die Dringlichkeit
            des Bürger*innenrates unterstreicht.
          </p>
        </div>
      </div>

      <div class="row project-row2">
        <div class="col pt-3 px-3 mx-3 pb-3">
          <a href="https://www.stopecocide.de/" class="linktext">
            <img src="../../assets/images/logos/Ecocide-logo-1280x716.png" class="img-fluid img-logo2"
                 alt="klima-mitbestimmung">
          </a>
        </div>
        <div class="col description-text pt-5 px-5 mx-5">
          <p>
            Wir unterstützen die gemeinnützige Stiftung “Stop Ecocide Foundation”, die 2017 von der visionären
            Rechtsanwältin
            (und mittlerlerweile leider verstorbenen) Polly Higgins und der Umweltaktivistin Jojo Mehta ins Leben
            gerufen wurde.
            Ziel der NGO ist es die Aufnahme von Ökozid als internationales Verbrechen zu unterstützen , um weitere
            Zerstörung
            des Lebens auf der Erde zu verbieten und zu verhindern.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: "Projects",
  setup(props, context) {
    const contact = ref<string>("Kontakt");

    const getContact = () => {
      context.emit('getContact', contact.value);
    };
    return {
      contact,
      getContact
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

.project-row1 {
  background-color: #f5f5f5;
}

.project-row2 {
  background-color: white;
}

.onefive {
  height: 70%;
  width: 70%;
}

.img-logo {
  height: 200px;
  width: 210px;
}

.img-logo2 {
  height: 170px;
  width: 210px;
}

.description-text {
  text-align: left;
}

.project-header {
  font-weight: bold;
}

.bigPic {
  width: 1400px;
  height: 650px;
  margin-top: -40px;
  border-radius: 10px;
}

.linktext {
  color: #67bb7d;
  text-decoration: none;
}


div.dreieck {
  width: 0;
  height: 0;
  padding: 0;
  margin-bottom: 10px;
  border-left: 1276px solid #67bb7d8a;
  border-right: 100px solid transparent;
  border-bottom: 10px solid transparent;
}

.test {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2JjZGJjNCI+PHBhdGggZD0iTTAgMTQwaDEyODBDNTczLjA4IDE0MCAwIDAgMCAweiIvPjwvZz48L3N2Zz4=);
  background-size: 100% 10px;
  bottom: 0;
  height: 10px;
  z-index: 1;
}

@media (min-width: 320px) {
  .bigPic {
    width: 320px;
    height: 250px;
    margin-top: -40px;
  }
  div.dreieck {
    border-left: 196px solid #67bb7d8a;
  }
  .img-logo {
    height: auto;
    width: auto;
  }
}

@media (min-width: 425px) {
  .bigPic {
    width: 425px;
    height: auto;
    margin-top: -60px;
  }
  div.dreieck {
    border-left: 301px solid #67bb7d8a;
  }
  .img-logo {
    height: auto;
    width: auto;
  }
}

@media (min-width: 768px) {
  .bigPic {
    width: 768px;
    height: auto;
    margin-top: -60px;
  }
  div.dreieck {
    border-left: 644px solid #67bb7d8a;
  }
  .img-logo {
    height: auto;
    width: auto;
  }
}

@media (min-width: 992px) {
  .bigPic {
    width: 992px;
    height: auto;
    margin-top: -100px;
  }
  div.dreieck {
    border-left: 868px solid #67bb7d8a;
  }
  .img-logo {
    height: 200px;
    width: 210px;
  }

}

@media (min-width: 1200px) {
  .bigPic {
    width: 1200px;
    height: 550px;
    margin-top: -40px;
  }
  div.dreieck {
    border-left: 1076px solid #67bb7d8a;
  }
}

@media (min-width: 1400px) {
  .bigPic {
    width: 1400px;
    height: auto;
    margin-top: -125px;
  }
  div.dreieck {
    border-left: 1276px solid #67bb7d8a;
  }
}

</style>