<template>
  <div class="container px-4">
    <div class="row gx-5">

      <div class="col">
        <div class="kontakt">
          <h3 class="fw-bold justify-content-start d-flex">Presse</h3>
          <div class="dreieck"></div>
        </div>
        <div class="details">
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
        <div class="details">
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
      <div class="col ">
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

.mail {
  color: #67bb7d;
  text-decoration: none;
}

.form-control {
  margin-top: 5px;
}

.formular {
  margin: 100px 10px 100px 10px;
}

.kontakt {
  margin: 0px 10px 0px 10px;
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

@media (min-width: 320px) {
  .formular {
    margin: 30px 0 50px -23px;
    width: 320px;
  }
  .kontakt {
    margin: 70px auto 0 0;
  }
  .details {
    margin: 0 auto 0 15px;
  }
}

@media (min-width: 425px) {
  .formular {
    margin: 30px 0 50px -24px;
    width: 425px;
  }
  .kontakt {
    margin: 70px auto 0 15px;
  }
  .details {
    margin: 0 auto 0 40px;
  }
}

@media (min-width: 768px) {
  .formular {
    margin: 30px auto 100px 15%;
    width: 498px;
  }
  .kontakt {
    margin: 50px auto 0 15%;
  }
  .details {
    margin: 0 auto 0 20%;
  }
}

@media (min-width: 992px) {
  .formular {
    margin: 170px auto 170px 0;
  }
  .kontakt {
    margin: 150px auto 0  25%;
  }
  .details {
    margin: 0 auto 0 25%;
  }
}

@media (min-width: 1200px) {
  .formular {
    margin: 120px auto 150px 0px;
  }
  .kontakt {
    margin: 100px auto 0 50px;
  }
  .details {
    margin: 0 auto 0 100px;
  }
}

@media (min-width: 1400px) {
  .formular {
    margin: 120px auto 180px 200px;
  }
  .kontakt {
    margin: 120px auto 0 100px;
  }
  .details {
    margin: 0 auto 0 150px;
  }
}
</style>