<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click="updateStatus('Home')">
        <img src="../assets/images/TogetherForFuture_Logo.png" class="img-fluid" alt="Logo"/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
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
  width: 20%;
  height: 20%;
  position: relative;
}

nav {
  background-color: #67bb7d;
}
</style>