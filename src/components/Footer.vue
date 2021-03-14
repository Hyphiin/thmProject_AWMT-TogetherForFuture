<template>
  <footer class=" text-center text-lg-start mainfooter">
    <!-- Copyright -->
    <div class="text-center p-3 topfooter">
      <img id="logo-line" src="../assets/images/tff-logo-line.png"/>
    </div>
    <!-- Copyright -->
    <!-- Grid container -->
    <div class="container d-flex justify-content-center p-4">
      <!--Grid row-->
      <div class="row d-flex justify-content-center">
        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <ul class="list-unstyled mb-0">
            <li>
              <p class="text-white fw-bold">{{evName}}</p>
            </li>
            <li>
              <p class="text-white">{{address}}</p>
            </li>
            <li>
              <p class="text-white">{{plz}}</p>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">

          <ul class="list-unstyled">
            <li>
              <p class="text-white fw-bold">Spendenkonto</p>
            </li>
            <li>
              <p class="text-white">{{ evName }}</p>
            </li>
            <li>
              <p class="text-white">{{iban}}</p>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <div class="container pt-4">
            <!-- Section: Social media -->
            <section class="d-flex flex-row mb-5">
              <!-- Facebook -->
              <a
                  class="btn btn-link btn-floating btn-lg text-white m-1"
                  href="https://www.facebook.com/tff.germany"
                  role="button"
                  data-mdb-ripple-color="white"
              ><i class="fab fa-facebook-f"></i
              ></a>

              <!-- Twitter -->
              <a
                  class="btn btn-link btn-floating btn-lg text-white m-1"
                  href="https://twitter.com/tff_germany"
                  role="button"
                  data-mdb-ripple-color="white"
              ><i class="fab fa-twitter"></i
              ></a>

              <!-- Instagram -->
              <a
                  class="btn btn-link btn-floating btn-lg text-white m-1"
                  href="https://www.instagram.com/tff.germany/"
                  role="button"
                  data-mdb-ripple-color="dark"
              ><i class="fab fa-instagram"></i
              ></a>
            </section>
            <!-- Section: Social media -->
          </div>
        </div>
        <!--Grid column-->
        <div class="container pt-4">
          <!-- Section: Bottom Bar -->
          <section class="d-flex flex-row justify-content-between mb-5">
            <a class="text-white link" href="#" @click="updateStatus('Kontakt')">Kontakt</a>
            <a class="text-white link" href="#" @click="updateStatus('Presse')">Presse</a>
            <a class="text-white link" href="#" @click="updateStatus('Impressum')">Impressum</a>
            <a class="text-white link" href="#" @click="updateStatus('Datenschutzerklärung')">Datenschutzerklärung</a>
            <a class="text-white link" href="#" @click="updateStatus('Transparenz')">Transparenz</a>
          </section>
          <!-- Section: Bottom Bar -->
        </div>

      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->
  </footer>


</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
name: "Footer",
  setup(props, context){

  const evName = ref<string>("Together For Future e.V.");
  const address = ref<string>("Neue Schönhauser Str.20");
  const plz = ref<string>("10178 Berlin");
  const iban = ref<string>("DE 85 4306 0967 1015 9672 00");

  const footertext = ref<string>("Footer");

    const status = ref<string>("Home");

    const updateStatus = (label: string) => {
      status.value = label;
      context.emit('clickedFooter', status.value);
      return status.value;
    };

  return{
    evName,
    address,
    plz,
    iban,
    footertext,
    status,
    updateStatus
  }
  }
});
</script>

<style scoped>

.mainfooter{
  background-color: #387046;
}
.topfooter{
  background-color: #67bb7d;
}

#logo-line{
  width: 60%;
  height: 60%;
}

.link{
  text-decoration: none;
}
</style>