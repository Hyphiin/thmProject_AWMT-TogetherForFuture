<template>
  <div id="app">
    <Navbar @clicked="onClickNav"/>

    <div v-if="siteComponent==='Home'">
      <Landingpage class="component"/>
    </div>

    <div v-if="siteComponent==='Projects'">
      <Projects class="component"/>
    </div>

    <div v-if="siteComponent==='Team'">
      <Team class="component"/>
    </div>

    <div v-if="siteComponent==='Donation'">
      <Donations class="component"/>
    </div>

    <div v-if="siteComponent==='Goals'">
      <Goals class="component"/>
    </div>

    <div v-if="siteComponent==='Facts'">
      <ClimateFacts class="component"/>
    </div>

    <Footer/>

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
    Footer
  },
  setup(){
    const siteComponent = ref<string>("Home");

    const onClickNav = (value: string) => {
      siteComponent.value = value;
    }

    const changeStatus = computed(() => {
      return siteComponent.value;
    })

    return{
      siteComponent,
      onClickNav,
      changeStatus
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
