<template>
  <div>

    <div id="app">
      <div v-for="(key, value) in titles" :key="key" class="toggle" :class="{ active: isActive }">
        <div class="toggle-title border-bottom font-weight-bolder text-secondary" @click="toggleContent">
          <h5 name="title" class="fw-bold title">{{key}}</h5>
        </div>
        <transition name="fadeHeight" mode="out-in">
          <div class="toggle-content py-3 content" v-if="isActive">
            <slot name="content">{{ content[value] }}</slot>
          </div>
        </transition>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: "Transparenz",
  setup() {
    const isActive = ref<boolean>(false);

    const titles = ref<string[]>(["Transparenz","Name, Sitz, Anschrift, Gündungsjahr","Satzung", "Bescheid des Finanzamtes", "Name und Funktion wesentlicher Entscheidungsträger*innen",
    "Bericht über Tätigkeiten", "Personalstruktur", "Mittelherkunft 2019", "Mittelverwendung 2019", "Gesellschaftsrechtliche Verbundenheit mit Dritten", "Namen von Personen, deren jährliche Zuwendung mehr als zehn Prozent der gesamten Jahreseinnahmen ausmachen"]);

    const content = ref<string[]>(["Inhalt1","Inhalt2","Inhalt3","Inhalt4","Inhalt5","Inhalt6","Inhalt7","Inhalt8","Inhalt9","Inhalt10", "Inhalt11"]);

    const toggleContent = () => {
      isActive.value = !isActive.value
    }
    return {
      isActive,
      titles,
      content,
      toggleContent
    }
  }
});
</script>

<style scoped>

.toggle-title {
  text-align: start;
  position: relative;
  cursor: pointer;
}

.toggle-title:before {
  content: " ";
  position: absolute;
  top: calc(50% + 1px);
  right: 14px;
  border-color: #ccc;
  border-top: 1px solid;
  border-right: 1px solid;
  width: 8px;
  height: 8px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform .3s, top .3s;
  transform: rotate(-45deg) translate3d(0, -50%, 0);
  transform-origin: 35%;
}

.toggle.active > .toggle-title:before {
  top: calc(50% - 8px);
  transform: rotate(135deg);
}

.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 0.3s;
  max-height: 230px;
}

.fadeHeight-enter,
.fadeHeight-leave-to {
  opacity: 0;
  max-height: 0px;
}

.title{
  background-color: darkgrey;
}
.content{
  background-color: beige;
}

</style>