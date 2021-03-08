<template>
  <div>

    <div id="app">
      <toggle-component>
        <template v-slot:title>
          This is a sample title 1
        </template>
        <template v-slot:content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, explicabo eaque rerum numquam error dolore
          autem dolor, esse consequatur voluptas necessitatibus rem. Minus nobis, atque mollitia aliquid repellat qui
          nulla!
        </template>
      </toggle-component>
      <toggle-component>
        <template v-slot:title>
          This is a sample title 2
        </template>
        <template v-slot:content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, explicabo eaque rerum numquam error dolore
          autem dolor, esse consequatur voluptas necessitatibus rem. Minus nobis, atque mollitia aliquid repellat qui
          nulla!
        </template>
      </toggle-component>
      <toggle-component>
        <template v-slot:title>
          This is a sample title 3
        </template>
        <template v-slot:content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, explicabo eaque rerum numquam error dolore
          autem dolor, esse consequatur voluptas necessitatibus rem. Minus nobis, atque mollitia aliquid repellat qui
          nulla!
        </template>
      </toggle-component>

      <div class="toggle" :class="{ active: isActive }">
        <div class="toggle-title border-bottom py-3 font-weight-bolder text-secondary" @click="toggleContent">
          <slot name="title"></slot>
        </div>
        <transition name="fadeHeight" mode="out-in">
          <div class="toggle-content py-3" v-if="isActive">
            <slot name="content"></slot>
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

    const toggleContent = () => {
      isActive.value = !isActive.value
    }
    return {
      isActive,
      toggleContent
    }
  }
});
</script>

<style scoped>

.toggle-title {
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

</style>