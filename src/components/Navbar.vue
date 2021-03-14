<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid half-height">
      <a class="navbar-brand col-md-2" href="#" @click="updateStatus('Home')">
        <img src="../assets/images/logos/TogetherForFuture_Logo.png" class="d-inline-block align-top" alt="Logo"/>
      </a>
      <button class="navbar-toggler mb-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div class="navbar-nav offset-md-5">
          <a class="nav-link text-white h5" href="#" @click="updateStatus('Goals')">Unsere Ziele</a>
          <a class="nav-link text-white h5" href="#" @click="updateStatus('Projects')">Projekte & Kooperationen</a>
          <a class="nav-link text-white h5" href="#" @click="updateStatus('Team')">Das Team</a>
          <a class="nav-link text-white h5" href="#" @click="updateStatus('Facts')">Klimafakten</a>
          <a class="nav-link text-white h5" href="#" @click="updateStatus('Donation')">Spenden</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: "Navbar",
  setup(props, context){
    const status = ref<string>("Home");

    const updateStatus = (label: string) => {
      status.value = label;
      context.emit('clicked', status.value);
      return status.value;
    };

    return{
      status,
      updateStatus
    }
  }
})
</script>

<style lang="css" scoped>
img {
  width: 190px;
  height: 75px;
  margin-top: 5%;
  margin-left:20px;
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

nav {
  background-color: #67bb7d;
}

.half-height{
  height: 50px;
}

@media (min-width: 992px) {
  img {
    width: 190px;
    height: 75px;
    margin-top: 20%;
    margin-left: 20px;
    box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
}

@media (min-width: 1200px)  {
  img {
    width: 190px;
    height: 75px;
    margin-top: 20%;
    margin-left: 20px;
    box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
}

@media (min-width: 1400px)  {
  img {
    width: 190px;
    height: 75px;
    margin-top: 15%;
    margin-left: 20px;
    box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
}

</style>