<template>
  <div class="d-flex flex-row justify-content-evenly">
    <div class="kontakt d-flex justify-content-start flex-column">
      <h3 class="fw-bold justify-content-start d-flex">Kontakt</h3>
      <small>Kontaktieren sie uns gerne!</small>
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
import {defineComponent} from 'vue';
import emailjs from 'emailjs-com';

export default defineComponent({
  name: "Kontakt",
  setup() {
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

.formular{
  margin: 100px 10px 100px 10px;
}

.kontakt{
  margin: 100px 10px 100px 10px;
}

.form-control{
  margin-top: 5px;
}
</style>