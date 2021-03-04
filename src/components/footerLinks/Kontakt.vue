<template>
  <div class="d-flex justify-content-center">
    <div class="card">
      <div class="card-body">
        <form class="contact-form" @submit.prevent="sendEmail">
          <div class="form-group">
            <label class="fw-bold" for="exampleInputEmail1">Email-Adresse:</label>
            <input name="user_email" type="email" class="form-control" id="exampleInputEmail1"
                   aria-describedby="emailHelp" placeholder="Email">
          </div>
          <div class="form-group">
            <label class="fw-bold" for="exampleInputName1">Name:</label>
            <input name="user_name" type="text" class="form-control" id="exampleInputName1" placeholder="Name">
          </div>
          <div class="form-group">
            <label class="fw-bold" for="exampleInputMessage1">Nachricht:</label>
            <textarea name="message" type="text" class="form-control" id="exampleInputMessage1"
                      placeholder="Nachricht..."></textarea>
          </div>
          <input type="submit" value="Abschicken" class="btn text-white">
        </form>
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

.btn{
  margin-top: 5px;
  background-color: #67bb7d;
}
</style>