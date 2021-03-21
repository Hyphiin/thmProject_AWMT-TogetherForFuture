<template>
  <div class="container px-4">
  <div class="row gx-5">
    <div class="col kontakt">
      <h3 class="fw-bold justify-content-start d-flex">Kontakt</h3>
      <div class="dreieck"></div>
      <small class="small">Kontaktieren sie uns gerne!</small>
    </div>
    <div class="col">
      <div class="card formular">
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

.small{
  padding-right: 70px;
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

div.dreieck {
  width: 0;
  height: 0;
  padding: 0;
  margin-top: -5px;
  margin-bottom: 20px;
  border-left: 200px solid #67bb7d8a;
  border-right: 100px solid transparent;
  border-bottom: 10px solid transparent;
}

@media (min-width: 320px)  {
  .formular{
    width: 425px;
    margin: 0;
    padding: 0;
  }
  .kontakt{
    margin: 50px 10px 100px 50px;
  }
}
@media (min-width: 425px)  {
  .formular{
    width: 425px;
    margin-left: -125px;
    padding: 0;
  }
  .kontakt{
    margin: 50px 10px 100px 50px;
  }
}

@media (min-width: 768px)  {
  .formular{
    width: 500px;
    margin: 50px auto 100px 0;
  }
  .kontakt{
    margin: 100px auto 0 100px;
  }
  .small{
    margin-right: 140px;
  }
}

@media (min-width: 992px) {
  .formular{
    margin: 50px auto 100px 100px;
  }
  .kontakt{
    margin: 100px auto 0 200px;
  }
  .small{
    margin-right: 140px;
  }
}

@media (min-width: 1200px)  {
  .formular{
    margin: 50px auto 100px 200px;
  }
  .kontakt{
    margin: 100px auto 0 300px;
  }
  .small{
    margin-right: 220px;
  }
}

@media (min-width: 1400px)  {

}

</style>