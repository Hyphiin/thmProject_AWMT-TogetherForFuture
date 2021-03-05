<template>
  <div class="d-flex flex-row justify-content-evenly">
    <div class="kontakt d-flex justify-content-start flex-column">
      <h3 class="fw-bold justify-content-start d-flex">Impressum</h3>
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
              <a href="#" class="mail"> {{ mail }}</a>
            </li>
            <li class="d-flex text-start">
              <p> {{ tele }}</p>
            </li>
          </ul>
        </div>
        <div class="col-lg-12 col-md-6 mt-5">
          <ul class="list-unstyled">
            <li class="d-flex text-start">
              <p class="fw-bold">Vorstand: </p>
              <p> {{ head }}</p>
            </li>
            <li class="d-flex text-start">
              <p class="fw-bold">Geschäftsführender Vorstand: </p>
              <p> {{ leader }}</p>
            </li>
          </ul>
        </div>
        <div class="col-lg-12 col-md-6 mt-5">
          <ul class="list-unstyled">
            <li class="d-flex text-start">
              <p>Amtsgericht Berlin Charlottenburg • VR 37447B</p>
            </li>
            <li class="d-flex text-start">
              <p>Gründungsdatum: 10. April 2019 in Berlin</p>
            </li>
          </ul>
        </div>
        <div class="col-lg-12 col-md-6 mt-5">
          <ul class="list-unstyled">
            <li class="d-flex text-start">
              <a class="mail" href="https://togetherforfuture.org/wp-content/uploads/2020/09/Satzung-Together-for-Future-e.V..pdf">Satzung Together for Future e.V.</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-12 col-md-6 mt-5">
          <ul class="list-unstyled">
            <li class="d-flex text-start">
              <p>Der Verein ist nach §§ 51, 59, 60 und 61 AO vom Finanzamt für Körperschaften I Berlin,</p>
            </li>
            <li class="d-flex text-start">
              <p>StNr. 27/678/57847, mit Bescheid vom 4. November 2019 nach § 60a AO als</p>
            </li>
            <li class="d-flex text-start">
              <p>gemeinnützig anerkannt.</p>
            </li>
          </ul>
        </div>
        <div class="col-lg-12 col-md-6 mt-5">
          <ul class="list-unstyled">
            <li class="d-flex text-start">
              <p>Spendenkonto: GLS Bank • IBAN: DE85 4306 0967 1015 9672 00</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: "Impressum",
  setup(){
    const evName = ref<string>("Together For Future e.V.");
    const adress = ref<string>("Neue Schönhauser Str.20");
    const plz = ref<string>("10178 Berlin");
    const iban = ref<string>("DE 85 4306 0967 1015 9672 00");
    const mail = ref<string>("kontakt@togetherforfuture.net");
    const tele = ref<string>("+49 30 814 552 38");
    const head = ref<string>("Torben Greve • Panya Putsathit");
    const leader = ref<string>("Anna Schwanhäußer");

    return{
      evName,
      adress,
      plz,
      iban,
      mail,
      tele,
      head,
      leader,
    }
  }
});
</script>

<style scoped>
.mail {
  color: #67bb7d;
  text-decoration: none;
}
</style>