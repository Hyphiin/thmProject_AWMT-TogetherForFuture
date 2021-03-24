<template>
  <div>
    <!--img-->
    <img src="../../assets/images/baumherz.jpg" class="bigPic" alt="Baum mit Herz"/>

    <!--Green Banner-->
    <div
        class="container d-flex justify-content-center align-items-center position-absolute top-50% start-50 translate-middle">
      <div class="text-center d-flex justify-content-center align-items-center Banner mt-4">
        <h1 class="text-white">
          Spenden
        </h1>
      </div>
    </div>

    <!--Text Card-->
    <div class="container infoContainer border flex-column">
      <div class="row justify-content-between">
        <!-- Text links-->
        <div class="col p-5">
          <ul class="list-unstyled">
            <li>
              <p>
                Wir freuen uns über Ihre Spende zugunsten unserer Arbeit für nachhaltigen Klimaschutz!
                <br> <br>
                Über das online Spendentool können Sie einfach und sicher per Lastschrift, Kreditkarte oder PayPal
                spenden.
                <br> <br>
                Oder Sie überweisen Ihren Wunschbetrag direkt auf unser Spendenkonto bei der GLS Bank • IBAN: DE85 4306
                0967
                1015 9672 00
                <br> <br>
                Zuwendungsbestätigungen senden wir Ihnen zeitnah zu. Bitte teilen Sie uns hierfür Ihre vollständige
                Postanschrift
                mit!
              </p>
            </li>
            <li>
              <div class="container d-flex justify-content-center p-4 infoContainer border">
                <ul class="list-unstyled">
                  <li>
                    <div class="row">
                      <div class="col">
                        <img src="../../assets/images/MBeezie.jpg" alt="Testimonial 1" class="testimonial-pic">
                      </div>
                      <div class="col">
                        <p class="spenden-text mt-4">
                          <b>Money Boy:</b>
                          <br>
                          <br>
                          "Diese Spende bringt mehr als jede Insta Story, yo!"
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="row mt-4">
                      <div class="col">
                        <p class="spenden-text mt-4">
                          <b>Prof. Dr. Klima:</b>
                          <br>
                          <br>
                          "Alleine 10 Euro führen zu 1 Gigatonne weniger CO2!"
                        </p>
                      </div>
                      <div class="col">
                        <img src="../../assets/images/klimaexperte.jpg" alt="Testimonial 1" class="testimonial-pic">
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <!--Text rechts-->

        <div v-if="selectedComponent==='start' " class="container justify-content-center infoContainerRight border col">
          <ul class="list-unstyled">
            <div class="col p-5">
              <h5 class="light-bg text-white">
                Ihre Spende zählt!
              </h5>
              <br>
              <p class="spenden-text text-center">
                Bitte geben Sie einen Spendenbetrag ein
              </p>
              <input type="text" v-model="donSum">
              <input type="range" class="form-control-range" min="5" max="500" step="1" id="formControlRange"
                     v-model="donSum">
              <br> <br>
              <p class="spenden-text text-center">
                Wählen sie einen Spendenrhythmus:
              </p>
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-secondary btn-success" :class="active[0]" @click="repeat = 'Einmalig' ; updateActive(0)">Einmalig</button>
                <button type="button" class="btn btn-secondary btn-success" :class="active[1]" @click="repeat = 'Wiederkehrend'; updateActive(1)">Wiederkehrend</button>
              </div>
              <br> <br>
              <p class="spenden-text text-center">
                Ihr Spendenzweck:
              </p>
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-secondary btn-success" :class="active[2]" @click="purpose = 'Tiere'; updateActive(2)">Tiere</button>
                <button type="button" class="btn btn-secondary btn-success" :class="active[3]" @click="purpose = 'Wald'; updateActive(3)">Wald</button>
                <button type="button" class="btn btn-secondary btn-success" :class="active[4]" @click="purpose = 'Demos'; updateActive(4)">Demos</button>
              </div>
              <br> <br>
              <button type="button" class="btn btn-secondary" @click="updateComponent('donate')">JETZT SPENDEN</button>
              <br> <br>
              <p> Ein Service der
                <a href="https://www.gls.de/gemeinnuetzige-kunden/zahlungsverkehr/gls-espende/" class="linktext">
                  <img src="../../assets/images/logos/gls-bank-logo-blog.png" alt="GLS Bank" class="zertifikat-img">
                  <br>
                  Datenschutz
                </a>
              </p>
              <br>
              <div class="dreieck2"></div>
              <p>
                Noch unsicher wegen der Spende?
                <br>
                <strong>Sie können ihre Spende noch bis zu zwei Wochen lang zurückziehen!</strong>
              </p>
            </div>
          </ul>
        </div>

        <div v-if="selectedComponent==='donate' " class="container justify-content-center infoContainerRight border  mt-5 col">
          <button @click="updateComponent('start')" type="button" class="btn btn-secondary btn-success btn-back">Zurück</button>
          <ul class="list-unstyled">
            <div class="col p-5">
              <h5 class="light-bg text-white">
                {{ donSum }}€ für {{ purpose }}
              </h5>
              <h3>
                {{ repeat }}
              </h3>
              <br>
              <p class="spenden-text text-center">
                Bitte Zahlungsart wählen
              </p>
              <button @click="updateComponent('sepa')" type="button" class="btn btn-secondary btn-success">SEPA Lastschrift</button>
              <button @click="updateComponent('paypal')" type="button" class="btn btn-secondary btn-success">Paypal</button>
              <button @click="updateComponent('überweisung')" type="button" class="btn btn-secondary btn-success">Überweisung
              </button>
              <br> <br>
              <p> Ein Service der
                <a href="https://www.gls.de/gemeinnuetzige-kunden/zahlungsverkehr/gls-espende/" class="linktext">
                  <img src="../../assets/images/logos/gls-bank-logo-blog.png" alt="GLS Bank" class="zertifikat-img">
                  <br>
                  Datenschutz
                </a>
              </p>
              <br>
              <div class="dreieck2"></div>
              <p>
                Noch unsicher wegen der Spende?
                <br>
                <strong>Sie können ihre Spende noch bis zu zwei Wochen lang zurückziehen!</strong>
              </p>
            </div>
          </ul>
        </div>

        <div v-if="selectedComponent==='sepa' " class="container justify-content-center infoContainerRight border  mt-5 col">
          <button @click="updateComponent('donate')" type="button" class="btn btn-secondary btn-success btn-back">Zurück</button>
          <ul class="list-unstyled">
            <div class="col p-5">
              <div class="card formular">
                <div class="card-body">
                  <form class="contact-form" @submit.prevent="sendDonation">
                    <div class="form-group">
                      <input v-model="deposit_owner" name="deposit_owner" type="text" class="form-control"
                             id="deposit_owner"
                             aria-describedby="deposit_owner_help" placeholder="Kontoinhaber/-in Vor- und Nachname"
                             required>
                    </div>
                    <div class="form-group">
                      <input v-model="owner_email" name="owner_mail" type="email" class="form-control" id="owner_mail"
                             aria-describedby="owner_mail_help" placeholder="E-Mail-Adresse" required>
                    </div>
                    <div class="form-group">
                      <input v-model="owner_iban" name="owner_iban" type="text" class="form-control" id="owner_iban"
                             aria-describedby="owner_iban_help" placeholder="IBAN" required>
                    </div>
                    <div class="form-group">
                      <input v-model="owner_bic" name="owner_bic" type="text" class="form-control" id="owner_bic"
                             aria-describedby="owner_bic_help" placeholder="BIC" required>
                    </div>
                    <div class="form-group mt-3">
                      <input v-model="accepted" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">
                        Ich akzeptiere die Bedingungen für den <a href="">SEPA-Lastschrifteinzug.</a>
                      </label>
                    </div>
                    <button type="submit" value="Abschicken" class="btn btn-secondary btn-success mt-3"> {{ donSum }}€ für {{ purpose }}
                      Spenden
                    </button>
                  </form>
                </div>
              </div>
              <p> Ein Service der
                <a href="https://www.gls.de/gemeinnuetzige-kunden/zahlungsverkehr/gls-espende/" class="linktext">
                  <img src="../../assets/images/logos/gls-bank-logo-blog.png" alt="GLS Bank" class="zertifikat-img">
                  <br>
                  Datenschutz
                </a>
              </p>
              <br>
              <div class="dreieck2"></div>
              <p>
                Noch unsicher wegen der Spende?
                <br>
                <strong>Sie können ihre Spende noch bis zu zwei Wochen lang zurückziehen!</strong>
              </p>
            </div>
          </ul>
        </div>

        <div v-if="selectedComponent==='paypal' " class="container justify-content-center infoContainerRight border  mt-5 col">
          <button @click="updateComponent('donate')" type="button" class="btn btn-secondary btn-success btn-back">Zurück</button>
          <ul class="list-unstyled">
            <div class="col p-5">
              <h5 class="light-bg text-white">
                Bitte E-Mail-Adresse für die Bestätigung eingeben
              </h5>
              <div class="card formular">
                <div class="card-body">
                  <form class="contact-form" @submit.prevent="sendDonation">
                    <div class="form-group">
                      <input v-model="owner_email" name="owner_email" type="text" class="form-control" id="owner_email2"
                             aria-describedby="owner_email" placeholder="Email-Adresse" required>
                    </div>
                    <p class="spenden-text mt-3">
                      Für die Zahlung erfolgt im nächsten Schritt die Weiterleitung zu PayPal. Alle Daten werden
                      verschlüsselt übermittelt.
                    </p>
                    <button type="submit" value="Abschicken" class="btn btn-secondary btn-success mt-3"> {{ donSum }}€ für {{ purpose }}
                      Spenden
                    </button>
                  </form>
                </div>
              </div>
              <p> Ein Service der
                <a href="https://www.gls.de/gemeinnuetzige-kunden/zahlungsverkehr/gls-espende/" class="linktext">
                  <img src="../../assets/images/logos/gls-bank-logo-blog.png" alt="GLS Bank" class="zertifikat-img">
                  <br>
                  Datenschutz
                </a>
              </p>
              <br>
              <div class="dreieck2"></div>
              <p>
                Noch unsicher wegen der Spende?
                <br>
                <strong>Sie können ihre Spende noch bis zu zwei Wochen lang zurückziehen!</strong>
              </p>
            </div>
          </ul>
        </div>

        <div v-if="selectedComponent==='überweisung' " class="container justify-content-center infoContainerRight border  mt-5 col">
          <button @click="updateComponent('donate')" type="button" class="btn btn-secondary btn-success btn-back">Zurück</button>
          <ul class="list-unstyled">
            <div class="col p-5">
              <h5 class="light-bg text-white">
                Bitte E-Mail-Adresse für die Bestätigung eingeben
              </h5>
              <div class="card formular">
                <div class="card-body">
                  <form class="contact-form" @submit.prevent="sendDonation">
                    <div class="form-group">
                      <input v-model="owner_email" name="owner_email" type="text" class="form-control" id="owner_email3"
                             aria-describedby="owner_email" placeholder="Email-Adresse" required>
                    </div>
                    <p class="spenden-text mt-3">
                      Alle Daten für die Überweisung senden wir per E-Mail zu.
                    </p>
                    <button type="submit" value="Abschicken" class="btn btn-secondary btn-success mt-2"> {{ donSum }}€ für {{ purpose }}
                      Spenden
                    </button>
                  </form>
                </div>
              </div>
              <p> Ein Service der
                <a href="https://www.gls.de/gemeinnuetzige-kunden/zahlungsverkehr/gls-espende/" class="linktext">
                  <img src="../../assets/images/logos/gls-bank-logo-blog.png" alt="GLS Bank" class="zertifikat-img">
                  <br>
                  Datenschutz
                </a>
              </p>
              <br>
              <div class="dreieck2"></div>
              <p>
                Noch unsicher wegen der Spende?
                <br>
                <strong>Sie können ihre Spende noch bis zu zwei Wochen lang zurückziehen!</strong>
              </p>
            </div>
          </ul>
        </div>
      </div>
    </div>


    <div class="container d-flex justify-content-center p-4 infoContainer2 border mb-5">
      <div class="row d-flex justify-content-center">
        <p>
          <b>Transparenz</b> ist uns wichtig. Deshalb haben wir uns der Initiative Transparente Zivilgesellschaft
          angeschlossen.
          Wir verpflichten uns diese <a href="#" @click="updateStatus('Transparenz')" class="linktext">zehn</a> Informationen der
          Öffentlichkeit zur Verfügung zu stellen und aktuell
          zu halten.
        </p>
      </div>
    </div>

    <div class="row project-row1 ">
      <div class="dreieck"></div>
      <div class="description-text pt-2 pb-3">
        <a href="#" class="linktext">
          <img src="../../assets/images/csm_Transparente_ZivilgesellschaftPNG_c0c522c331.png" class="img-fluid"
               alt="Transparenz"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: "Donations",
  setup(props, context) {
    const status = ref<string>("Donation");
    const donSum = ref<number>(0);

    const repeat = ref<string>("");
    const purpose = ref<string>("");

    const deposit_owner = ref<string>("");
    const owner_email = ref<string>("");
    const owner_iban = ref<string>("");
    const owner_bic = ref<string>("");

    const accepted = ref<boolean>(false);

    const selectedComponent = ref<string>("start");

    const active = ref<string[]>(['','','','','','','','']);

    const updateStatus = (label: string) => {
      status.value = label;
      context.emit('updateStatus', status.value);
      return status.value;
    };

    const updateComponent = (value: string) => {
      selectedComponent.value = value;
      return selectedComponent.value
    }

    const sendDonation = () => {
      if (accepted.value === true) {
        alert("Spenden erfolgreich!");
      } else {
        alert("Akzeptiere bitte die Bedingungen!");
      }

    }

    const updateActive = (index: number) => {
      if (active.value[index] === 'active') {
        active.value[index] = '';
      } else {
        active.value[index] = 'active';
      }
    }

    return {
      status,
      donSum,
      repeat,
      purpose,
      deposit_owner,
      owner_email,
      owner_iban,
      owner_bic,
      accepted,
      selectedComponent,
      updateStatus,
      updateComponent,
      sendDonation,
      active,
      updateActive
    }
  }
});
</script>

<style scoped>

.spenden-text {
  text-align: left;
}

.testimonial-pic {
  height: 200px;
  width: auto;
}

.zertifikat-img {
  height: 40px;
  width: auto;
}

.light-bg{
  background-color: #67bb7d;
}

.btn-back{
  margin-bottom: -20px;
}

.active{
  background-color: #67bb7d;
  color: #67bb7d;
}

.infoContainer {
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 90px;
}
.infoContainerRight {
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 20px;
  height: 750px;
}


.infoContainer2 {
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 40px;
}

.project-row1 {
  background-color: #f5f5f5;
}

h5 {
  padding: 10px;
  background-color: #f5f5f5;
}

.Banner {
  height: 100px;
  width: 800px;
  background-color: #67bb7d;
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 49px;
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

div.dreieck2 {
  width: 0;
  height: 0;
  padding: 0;
  margin-top: -5px;
  margin-bottom: 20px;
  border-left: 320px solid #67bb7d8a;
  border-right: 0px solid transparent;
  border-bottom: 10px solid transparent;
}

.btn{
  background-color: #387046;
}

.bigPic {
  width: 1400px;
  height: 700px;
  margin-top: -120px;
}

.linktext {
  color: #67bb7d;
  text-decoration: none;
}

@media (min-width: 320px) {
  .bigPic {
    width: 320px;
    height: auto;
    margin-top: -22px;
  }

  div.dreieck {
    border-left: 296px solid #67bb7d8a;
    border-right: 0 solid transparent;
  }
  div.dreieck2{
    border-left: 296px solid #67bb7d8a;
    border-right: 0 solid transparent;
    margin-left: -60px;
  }
}

@media (min-width: 425px) {
  .bigPic {
    width: 425px;
    height: auto;
    margin-top: -40px;
  }

  div.dreieck {
    border-left: 401px solid #67bb7d8a;
    border-right: 0 solid transparent;
  }
  div.dreieck2 {
    border-left: 320px solid #67bb7d8a;
    border-right: 0 solid transparent;
    margin-left: -20px;
  }
}

@media (min-width: 768px) {
  .bigPic {
    width: 768px;
    height: 400px;
    margin-top: -80px;
  }
  div.dreieck {
    border-left: 644px solid #67bb7d8a;
    border-right: 100px solid transparent;
  }
  div.dreieck2 {
    border-left: 600px solid #67bb7d8a;
    border-right: 0 solid transparent;
    margin-left: 0;
  }
}

@media (min-width: 992px) {
  .bigPic {
    width: 992px;
    height: 450px;
    margin-top: -80px;
  }
  div.dreieck {
    border-left: 868px solid #67bb7d8a;
  }
  div.dreieck2 {
    border-left: 850px solid #67bb7d8a;
    border-right: 0 solid transparent;
    margin-left: 10px;
  }
}

@media (min-width: 1200px) {
  .bigPic {
    width: 1200px;
    height: 580px;
    margin-top: -110px;
  }
  div.dreieck {
    border-left: 1076px solid #67bb7d8a;
  }
  div.dreieck2 {
    border-left: 500px solid #67bb7d8a;
    border-right: 0 solid transparent;
    margin-left: 0;
  }
}

@media (min-width: 1400px) {
  .bigPic {
    width: 1400px;
    height: 700px;
    margin-top: -120px;
  }
  div.dreieck {
    border-left: 1276px solid #67bb7d8a;
  }
  div.dreieck2 {
    border-left: 500px solid #67bb7d8a;
    border-right: 0 solid transparent;
    margin-left: 0;
  }
}
</style>