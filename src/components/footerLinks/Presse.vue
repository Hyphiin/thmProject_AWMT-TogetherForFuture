<template>
  <div class="d-flex flex-row justify-content-evenly">
    <div class="kontakt d-flex justify-content-start flex-column">
      <h3 class="fw-bold justify-content-start d-flex">Presse</h3>
      <hr/>
      <div>
        <div class="col-lg-12 col-md-6">
          <ul class="list-unstyled">
            <li class="text-start">
              <p>{{ evName }}</p>
            </li>
            <li class="text-start">
              <p>{{ adress }}</p>
            </li>
            <li class="text-start">
              <p>{{ plz }}</p>
            </li>
          </ul>
        </div>
        <div class="col-lg-12 col-md-6 mt-5">
          <ul class="list-unstyled">
            <li class="d-flex text-start">
              <p class="fw-bold">Mail: </p>
              <a href="#" class="mail"> {{ mail }}</a>
            </li>
            <li class="d-flex text-start">
              <p class="fw-bold">Telefon: </p>
              <p> {{ tele }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center formular">
      <div class="card">
        <div class="card-body">
          <form class="contact-form" @submit.prevent="sendEmail">
            <div class="form-group">
              <input name="user_email" type="email" class="form-control" id="exampleInputEmail1"
                     aria-describedby="emailHelp" placeholder="Email">
            </div>
            <div class="form-group">
              <input name="user_name" type="text" class="form-control" id="exampleInputName1" placeholder="Name">
            </div>
            <div class="form-group">
              <textarea name="message" type="text" class="form-control" id="exampleInputMessage1"
                        placeholder="Nachricht..."></textarea>
            </div>
            <input type="submit" value="Abschicken" class="btn text-white">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import emailjs from 'emailjs-com';

export default defineComponent({
  name: "Presse",
  setup() {
    const evName = ref<string>("Together For Future e.V.");
    const adress = ref<string>("Neue Schönhauser Str.20");
    const plz = ref<string>("10178 Berlin");
    const iban = ref<string>("DE 85 4306 0967 1015 9672 00");
    const mail = ref<string>("presse@togetherforfuture.net");
    const tele = ref<string>("+49 30 814 552 38");

    const sendEmail = (e: any) => {
      emailjs.sendForm('service_1yji5rv', 'template_kjlwkvl', e.target,
          'user_3Ksj4Myd3SiGgSh3qy0rs')
          .then((result) => {
            alert('Erfolg');
            console.log('SUCCESS!', result.status, result.text);
          }, (error) => {
            alert('Fehlgeschlagen:(')
            console.log('FAILED...', error);
          });
    }
    return {
      evName,
      adress,
      plz,
      iban,
      mail,
      tele,
      sendEmail
    }
  }
});
</script>

<style scoped>

.card {
  width: 500px;
}

.btn {
  margin-top: 5px;
  background-color: #67bb7d;
}

.formular {
  margin: 100px 10px 100px 10px;
}

.kontakt {
  margin: 100px 10px 100px 10px;
}

.mail {
  color: #67bb7d;
  text-decoration: none;
}

.form-control{
  margin-top: 5px;
}
</style>