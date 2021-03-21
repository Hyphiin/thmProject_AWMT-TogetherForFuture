<template>
  <div class="spenden-container">
    <div class="image-container">
      <img src="../../assets/images/baumherz.jpg" class="img-thumbnail img-header" alt="Baum mit Herz">
    </div>
    <div class="container d-flex justify-content-center align-items-center">
      <div class="text-center d-flex justify-content-center align-items-center Banner">
        <h1 class="text-white">
          SPENDEN
        </h1>
      </div>
    </div>
    <div class="container d-flex justify-content-left p-4">
      <div class="flex-row flex-wrap d-flex">
        <h4 class="fw-bold">Spenden</h4>
      </div>
    </div>
    <hr/>
    <div class="container">
      <div class="row">
        <div class="col-6 spenden-text">
          <p>
            Wir freuen uns über Ihre Spende zugunsten unserer Arbeit für nachhaltigen Klimaschutz!
            <br> <br>
            Über das online Spendentool können Sie einfach und sicher per Lastschrift, Kreditkarte oder PayPal spenden.
            <br> <br>
            Oder Sie überweisen Ihren Wunschbetrag direkt auf unser Spendenkonto bei der GLS Bank • IBAN: DE85 4306 0967
            1015 9672 00
            <br> <br>
            Zuwendungsbestätigungen senden wir Ihnen zeitnah zu. Bitte teilen Sie uns hierfür Ihre vollständige Postanschrift
            mit!
          </p>
          <div class="row">
            <div class="col-6">
              <img src="../../assets/images/MBeezie.jpg" alt="Testimonial 1" class="testimonial-pic">
            </div>
            <div class="col-6 ">
              <p class="spenden-text">
                <b>Money Boy:</b>
                <br>
                <br>
                Diese Spende bringt mehr als jede Insta Story, yo!
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <p class="spenden-text">
                <b>Prof. Dr. Klima:</b>
                <br>
                <br>
                Alleine 10 Euro führen zu 1 Gigatonne weniger CO2!
              </p>
            </div>
            <div class="col-6 ">
              <img src="../../assets/images/klimaexperte.jpg" alt="Testimonial 1" class="testimonial-pic">
            </div>
          </div>
        </div>
        <div class="col-6">
          <h5>
            Ihre Spende zählt!
          </h5>
          <br>
          <p class="spenden-text">
            Bitte geben Sie einen Spendenbetrag ein
          </p>
              <input type="text" v-model="donSum">
              <input type="range" class="form-control-range" min="5" max="500" step="1" id="formControlRange" v-model="donSum">
          <br> <br>
          <p class="spenden-text">
          Wählen sie einen Spendenrhythmus:
        </p>
          <div class="btn-group" role="group" >
            <button type="button" class="btn btn-secondary">Einmalig</button>
            <button type="button" class="btn btn-secondary">Wiederkehrend</button>
          </div>
          <br> <br>
          <p class="spenden-text">
           Ihr Spendenzweck:
          </p>
          <div class="btn-group" role="group" >
            <button type="button" class="btn btn-secondary">Tiere</button>
            <button type="button" class="btn btn-secondary">Wald</button>
            <button type="button" class="btn btn-secondary">Demos</button>
          </div>
          <br> <br>
          <button type="button" class="btn btn-secondary">JETZT SPENDEN</button>
          <br> <br>
          <p> Ein Service der
            <a href="https://www.gls.de/gemeinnuetzige-kunden/zahlungsverkehr/gls-espende/">
              <img src="../../assets/images/logos/gls-bank-logo-blog.png" alt="GLS Bank" class="zertifikat-img">
              <br>
              Datenschutz
            </a>
          </p>
          <br>
          <p>
            Noch unsicher wegen der Spende?
            <br>
            Sie können ihre Spende noch bis zu zwei Wochen lang zurückziehen!
          </p>
        </div>
      </div>
      <hr>
      <div class="row">
        <p>
          <b>Transparenz</b> ist uns wichtig. Deshalb haben wir uns der Initiative Transparente Zivilgesellschaft angeschlossen.
          Wir verpflichten uns diese <a href="#"  @click="updateStatus('Transparenz')">zehn</a> Informationen der Öffentlichkeit zur Verfügung zu stellen und aktuell <!-- TODO: Link zur Transparenz Seite -->
          zu halten.
        </p>
        <img src="../../assets/images/csm_Transparente_ZivilgesellschaftPNG_c0c522c331.png" alt="Transparenz" class="zertifikat-img">
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue';

export default defineComponent({
  name: "Donations",
  setup(props,context){
    const status = ref<string>("Donation");
    const donSum = ref<number>(0);

    const updateStatus = (label: string) => {
      status.value = label;
      context.emit('updateStatus', status.value);
      return status.value;
    };
    return{
      status,
      donSum,
      updateStatus
    }
  }
});
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

  .img-header{
    height:70%;
    width:70%;
  }

  .spenden-text{
    text-align:left;
  }

  .testimonial-pic{
    height:200px;
    width: auto;
  }

  .zertifikat-img{
    height:40px;
    width: auto;
  }

  h5{
    padding:10px;
    background-color:#f5f5f5;
  }
</style>