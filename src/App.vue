<template>
  <div id="app">
    <Navbar @clicked="onClickNav"/>

    <div v-if="siteComponent==='Home'">
      <Carousel @clickedCarousel="onClickCarousel('Bot')"></Carousel>
      <Landingpage class="component"  @startFacts="onClickFacts"/>
    </div>

    <div v-if="siteComponent==='Projects'">
      <Projects class="component" @getContact="onClickContact"/>
    </div>

    <div v-if="siteComponent==='Team'">
      <Team class="component"/>
    </div>

    <div v-if="siteComponent==='Donation'">
      <Donations class="component"
      @updateStatus="onClickFooter"/>

    </div>

    <div v-if="siteComponent==='Goals'">
      <Goals class="component"/>
    </div>

    <div v-if="siteComponent==='Facts'">
      <ClimateFacts class="component"/>
    </div>

    <div v-if="footerComponent==='Kontakt'">
      <Kontakt class="component"/>
    </div>

    <div v-if="footerComponent==='Presse'">
      <Presse class="component"/>
    </div>

    <div v-if="footerComponent==='Impressum'">
      <Impressum class="component"/>
    </div>

    <div v-if="footerComponent==='Transparenz'">
      <Transparenz class="component"/>
    </div>

    <div v-if="footerComponent==='Datenschutzerklärung'">
      <Datenschutzerklaerung class="component"/>
    </div>

    <div v-if="footerComponent==='Bot'">
      <Bot class="component"/>
    </div>

    <Footer @clickedFooter="onClickFooter"/>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref , computed} from 'vue';
import Navbar from './components/Navbar.vue';
import Landingpage from "@/components/landingpage/Landingpage.vue";
import ClimateFacts from "@/components/climatefacts/ClimateFacts.vue";
import Donations from "@/components/donations/Donations.vue";
import Goals from "@/components/goals/Goals.vue";
import Projects from "@/components/projects/Projects.vue";
import Team from "@/components/team/Team.vue";
import Footer from "@/components/Footer.vue";
import Kontakt from "@/components/footerLinks/Kontakt.vue";
import Presse from "@/components/footerLinks/Presse.vue";
import Impressum from "@/components/footerLinks/Impressum.vue";
import Transparenz from "@/components/footerLinks/Transparenz.vue";
import Datenschutzerklaerung from "@/components/footerLinks/Datenschutzerklaerung.vue";
import Bot from "@/components/bot/bot.vue";
import Carousel from "@/components/landingpage/Carousel.vue";

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Landingpage,
    ClimateFacts,
    Donations,
    Goals,
    Projects,
    Team,
    Footer,
    Kontakt,
    Presse,
    Impressum,
    Transparenz,
    Datenschutzerklaerung,
    Bot,
    Carousel
  },
  setup(){
    const siteComponent = ref<string>("Home");
    const footerComponent = ref<string>("");

    const onClickNav = (value: string) => {
      siteComponent.value = value;
      footerComponent.value = "";
    }

    const onClickFooter = (value: string) => {
      siteComponent.value = "";
      footerComponent.value = value;
    }

    const onClickFacts = (value: string) => {
      siteComponent.value = value;
    }

    const onClickContact = (value: string) => {
      siteComponent.value = "";
      footerComponent.value = value;
    }

    const onClickCarousel = (value: string) => {
      siteComponent.value = "";
      footerComponent.value = value;
    }

    const changeStatus = computed(() => {
      return siteComponent.value;
    })

    return{
      siteComponent,
      onClickNav,
      changeStatus,
      footerComponent,
      onClickFooter,
      onClickFacts,
      onClickContact,
      onClickCarousel
    }
  }

});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.component{
  margin-top: 88px;
}
</style>
