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
    <div class="container infoContainer border">
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
              <div class="container d-flex justify-content-between p-4 infoContainer border">
                <div class="row">
                  <div class="col">
                    <img src="../../assets/images/MBeezie.jpg" alt="Testimonial 1" class="testimonial-pic">
                  </div>
                  <div class="col">
                    <p class="spenden-text">
                      <b>Money Boy:</b>
                      <br>
                      <br>
                      Diese Spende bringt mehr als jede Insta Story, yo!
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <p class="spenden-text">
                      <b>Prof. Dr. Klima:</b>
                      <br>
                      <br>
                      Alleine 10 Euro führen zu 1 Gigatonne weniger CO2!
                    </p>
                  </div>
                  <div class="col">
                    <img src="../../assets/images/klimaexperte.jpg" alt="Testimonial 1" class="testimonial-pic">
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!--Text rechts-->
        <div v-if="selectedComponent==='start' " class="col">
          <ul class="list-unstyled">
            <div class="col p-5">
              <h5>
                Ihre Spende zählt!
              </h5>
              <br>
              <p class="spenden-text">
                Bitte geben Sie einen Spendenbetrag ein
              </p>
              <input type="text" v-model="donSum">
              <input type="range" class="form-control-range" min="5" max="500" step="1" id="formControlRange"
                     v-model="donSum">
              <br> <br>
              <p class="spenden-text">
                Wählen sie einen Spendenrhythmus:
              </p>
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-secondary" @click="repeat = 'Einmalig'">Einmalig</button>
                <button type="button" class="btn btn-secondary" @click="repeat = 'Wiederkehrend'">Wiederkehrend</button>
              </div>
              <br> <br>
              <p class="spenden-text">
                Ihr Spendenzweck:
              </p>
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-secondary" @click="purpose = 'Tiere'">Tiere</button>
                <button type="button" class="btn btn-secondary" @click="purpose = 'Wald'">Wald</button>
                <button type="button" class="btn btn-secondary" @click="purpose = 'Demos'">Demos</button>
              </div>
              <br> <br>
              <button type="button" class="btn btn-secondary" @click="updateComponent('donate')">JETZT SPENDEN</button>
              <br> <br>
              <p> Ein Service der
                <a href="https://www.gls.de/gemeinnuetzige-kunden/zahlungsverkehr/gls-espende/">
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
                Sie können ihre Spende noch bis zu zwei Wochen lang zurückziehen!
              </p>
            </div>
          </ul>
        </div>

        <div v-if="selectedComponent==='donate' " class="col">
          <button @click="updateComponent('start')" type="button" class="btn btn-secondary">Zurück</button>
          <ul class="list-unstyled">
            <div class="col p-5">
              <h5>
                {{ donSum }}€ für {{ purpose }}
              </h5>
              <h3>
                {{ repeat }}
              </h3>
              <br>
              <p class="spenden-text">
                Bitte Zahlungsart wählen
              </p>
              <button @click="updateComponent('sepa')" type="button" class="btn btn-secondary">SEPA Lastschrift</button>
              <button @click="updateComponent('paypal')" type="button" class="btn btn-secondary">Paypal</button>
              <button @click="updateComponent('überweisung')" type="button" class="btn btn-secondary">Überweisung
              </button>
              <br> <br>
              <p> Ein Service der
                <a href="https://www.gls.de/gemeinnuetzige-kunden/zahlungsverkehr/gls-espende/">
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
                Sie können ihre Spende noch bis zu zwei Wochen lang zurückziehen!
              </p>
            </div>
          </ul>
        </div>

        <div v-if="selectedComponent==='sepa' " class="col">
          <button @click="updateComponent('donate')" type="button" class="btn btn-secondary">Zurück</button>
          <ul class="list-unstyled">
            <div class="col p-5">
              <div class="card formular">
                <div class="card-body">
                  <form class="contact-form" @submit.prevent="sendDonation">
                    <div class="form-group">
                      <input v-model="deposit_owner" name="deposit_owner" type="text" class="form-control" id="deposit_owner"
                             aria-describedby="deposit_owner_help" placeholder="Kontoinhaber/-in Vor- und Nachname" required>
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
                    <div class="form-group">
                      <input v-model="accepted" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">
                        Ich akzeptiere die Bedingungen für den <a href="">SEPA-Lastschrifteinzug.</a>
                      </label>
                    </div>
                    <button type="submit" value="Abschicken" class="btn btn-secondary"> {{donSum}}€ für {{purpose}} Spenden</button>
                  </form>
                </div>
              </div>
              <p> Ein Service der
                <a href="https://www.gls.de/gemeinnuetzige-kunden/zahlungsverkehr/gls-espende/">
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
                Sie können ihre Spende noch bis zu zwei Wochen lang zurückziehen!
              </p>
            </div>
          </ul>
        </div>

        <div v-if="selectedComponent==='paypal' " class="col">
          <button @click="updateComponent('donate')" type="button" class="btn btn-secondary">Zurück</button>
          <ul class="list-unstyled">
            <div class="col p-5">
              <h5>
                Bitte E-Mail-Adresse für die Bestätigung eingeben
              </h5>
              <div class="card formular">
                <div class="card-body">
                  <form class="contact-form" @submit.prevent="sendDonation">
                    <div class="form-group">
                      <input v-model="owner_email" name="owner_email" type="text" class="form-control" id="owner_email2"
                             aria-describedby="owner_email" placeholder="Email-Adresse" required>
                    </div>
                    <p class="spenden-text">
                      Für die Zahlung erfolgt im nächsten Schritt die Weiterleitung zu PayPal. Alle Daten werden verschlüsselt übermittelt.
                    </p>
                    <button type="submit" value="Abschicken" class="btn btn-secondary"> {{donSum}}€ für {{purpose}} Spenden</button>
                  </form>
                </div>
              </div>
              <p> Ein Service der
                <a href="https://www.gls.de/gemeinnuetzige-kunden/zahlungsverkehr/gls-espende/">
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
                Sie können ihre Spende noch bis zu zwei Wochen lang zurückziehen!
              </p>
            </div>
          </ul>
        </div>

        <div v-if="selectedComponent==='überweisung' " class="col">
          <button @click="updateComponent('donate')" type="button" class="btn btn-secondary">Zurück</button>
          <ul class="list-unstyled">
            <div class="col p-5">
              <h5>
                Bitte E-Mail-Adresse für die Bestätigung eingeben
              </h5>
              <div class="card formular">
                <div class="card-body">
                  <form class="contact-form" @submit.prevent="sendDonation">
                    <div class="form-group">
                      <input v-model="owner_email" name="owner_email" type="text" class="form-control" id="owner_email3"
                             aria-describedby="owner_email" placeholder="Email-Adresse" required>
                    </div>
                    <p class="spenden-text">
                      Alle Daten für die Überweisung senden wir per E-Mail zu.
                    </p>
                    <button type="submit" value="Abschicken" class="btn btn-secondary"> {{donSum}}€ für {{purpose}} Spenden</button>
                  </form>
                </div>
              </div>
              <p> Ein Service der
                <a href="https://www.gls.de/gemeinnuetzige-kunden/zahlungsverkehr/gls-espende/">
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
                Sie können ihre Spende noch bis zu zwei Wochen lang zurückziehen!
              </p>
            </div>
          </ul>
        </div>
      </div>
    </div>


    <div class="container d-flex justify-content-center p-4 infoContainer border">
      <div class="row d-flex justify-content-center">
        <p>
          <b>Transparenz</b> ist uns wichtig. Deshalb haben wir uns der Initiative Transparente Zivilgesellschaft
          angeschlossen.
          Wir verpflichten uns diese <a href="#" @click="updateStatus('Transparenz')">zehn</a> Informationen der
          Öffentlichkeit zur Verfügung zu stellen und aktuell <!-- TODO: Link zur Transparenz Seite -->
          zu halten.
        </p>
      </div>
    </div>

    <div class="row project-row1 ">
      <div class="dreieck"></div>
      <div class="description-text pt-2 pb-3">
        <a href="#">
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

    const updateStatus = (label: string) => {
      status.value = label;
      context.emit('updateStatus', status.value);
      return status.value;
    };

    const updateComponent = (value: string) => {
      selectedComponent.value = value;
      console.log(selectedComponent.value);
      return selectedComponent.value
    }

    const sendDonation = () => {
      if(accepted.value === true){
        alert("Spenden erfolgreich!");
      }else{
        alert("Akzeptiere bitte die Bedingungen!");
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
      sendDonation
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

.infoContainer {
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 90px;
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


.bigPic {
  width: 1400px;
  height: 650px;
  margin-top: -80px;
}

@media (min-width: 320px) {
  .bigPic {
    width: 320px;
    height: 230px;
    margin-top: -80px;
  }

  div.dreieck {
    border-left: 296px solid #67bb7d8a;
    border-right: 0 solid transparent;
  }
}

@media (min-width: 425px) {
  .bigPic {
    width: 425px;
    height: 240px;
    margin-top: -80px;
  }

  div.dreieck {
    border-left: 401px solid #67bb7d8a;
    border-right: 0 solid transparent;
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
}

@media (min-width: 1200px) {
  .bigPic {
    width: 1200px;
    height: 550px;
    margin-top: -80px;
  }

  div.dreieck {
    border-left: 1076px solid #67bb7d8a;
  }
}

@media (min-width: 1400px) {
  .bigPic {
    width: 1400px;
    height: 600px;
    margin-top: -80px;
  }

  div.dreieck {
    border-left: 1276px solid #67bb7d8a;
  }
}
</style>