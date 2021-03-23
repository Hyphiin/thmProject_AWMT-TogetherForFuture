<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid half-height">
      <a class="navbar-brand col-md-2" :class="logoMove" href="#" @click="updateStatus('Home')">
        <img src="../assets/images/logos/TogetherForFuture_Logo.png" class="d-inline-block align-top" alt="Logo"/>
      </a>
      <button class="navbar-toggler mb-5" :class="togglerMove" type="button" @click="togglerClicked()" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse" :class="collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav offset-md-5">
          <a class="nav-link text-white h5" href="#/Ziele" @click="updateStatus('Goals');togglerClicked()" >Unsere Ziele</a>
          <a class="nav-link text-white h5" href="#/Projekts" @click="updateStatus('Projects');togglerClicked()">Projekte & Kooperationen</a>
          <a class="nav-link text-white h5" href="#/Team" @click="updateStatus('Team');togglerClicked()">Das Team</a>
          <a class="nav-link text-white h5" href="#/Fakten" @click="updateStatus('Facts');togglerClicked()">Klimafakten</a>
          <a class="nav-link text-white h5" href="#/Spenden" @click="updateStatus('Donation');togglerClicked()">Spenden</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, onUnmounted, ref} from 'vue';

export default defineComponent({
  name: "Navbar",
  setup(props, context){
        let windowWidth = ref(window.innerWidth)

    const onWidthChange = () => windowWidth.value = window.innerWidth
    onMounted(() => window.addEventListener('resize', onWidthChange))
    onUnmounted(() => window.removeEventListener('resize', onWidthChange))

    const type = computed(() => {
      if (windowWidth.value < 992) return 'small'
      else return 'large'
    })

    const width = computed(() => windowWidth.value)
    console.log(type)

    const status = ref<string>("Home");
    const collapse = ref<string>('collapse');
    const logoMove = ref<string>('logoMove');
    const togglerMove = ref<string>('togglerMove');

    const updateStatus = (label: string) => {
      status.value = label;
      context.emit('clicked', status.value);
      return status.value;
    };

    const togglerClicked = () => {
      if (type.value === 'small'){
        if (collapse.value === 'backgroundStyle'){
          collapse.value = 'collapse';
          logoMove.value = '';
          togglerMove.value = '';
        }else {
          collapse.value = 'backgroundStyle';
          logoMove.value = 'logoMove';
          togglerMove.value = 'togglerMove';
        }
      }
    }

    return{
      status,
      updateStatus,
      togglerClicked,
      collapse,
      width,
      logoMove,
      togglerMove
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
.nav-link{
  padding: 0;
  padding-top: 10px;
}

.navbar-brand{
  z-index: 2;
}

.half-height{
  height: 50px;
}

.logoMove{
  margin-left:17px;
  position: absolute;
  left: 8%!important;
  bottom: -500%!important;
}

.togglerMove{
  margin-left: 81%;
  margin-top: 5px;
}

.backgroundStyle{
  background-color: #67bb7d;
  width: auto;
  height:auto;
  margin-top: -35px;
  opacity: 0.95;
}
.collapse{
  background-color: #67bb7d;
  width: auto;
  height:auto;
}

@media (min-width: 320px){
  .backgroundStyle{
    width: 320px;
    height:260px;
    margin-top: -40px;
    padding-top: 30px;
  }
  .logoMove{
    margin-left:0;
    position: absolute;
    left: 0!important;
    bottom: -30%!important;
  }
  .navbar{
    width:320px
  }
}

@media (min-width: 425px){
  .navbar{
    width:auto;
  }
  .logoMove{
    margin-left:0;
    position: absolute;
    left: 0!important;
    bottom: -30%!important;
  }

  .togglerMove{
    margin-left: 86%;
    margin-top: 5px;
  }

  .backgroundStyle{
    width: 425px;
    height:250px;
    margin-top: -40px;
    padding-top: 35px;
  }
}
@media (min-width: 768px){
  .logoMove{
    margin-left:0;
    position: absolute;
    left: 2.5%!important;
    bottom: -70%!important;
  }

  .togglerMove{
    margin-left: 92.5%;
    margin-top: 4px;
  }

  .backgroundStyle{
    width: 768px;
    height:230px;
    margin-top: -40px;
    padding-top: 0;
  }

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
  .navbar-nav{
    margin-left:20%;
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
  .navbar-nav{
    margin-left:auto;
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