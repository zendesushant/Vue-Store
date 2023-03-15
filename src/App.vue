<template>
<div v-if="$store.state.showDialog" class="backdrop" @click="updateDialogStatus">
 
</div>
<div v-if="$store.state.spinnerStatus" class="spinner">Loading</div>


<TheHeader @click="updateDialogStatus"></TheHeader>
<router-view v-slot="{ Component }">
  <transition  name="fade">
    <component :is="Component" />
  </transition>
</router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheSpinner from './components/TheSpinner.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheSpinner
  },
  methods:{
    updateDialogStatus(){
            this.$store.dispatch({
                type:'tutorialDialogStatusUpdate',
                value:false
            })
        }
  },
  computed:{
  },
  watch:{
    
  }

}
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

.backdrop{
    min-height: 2000px;
    position: absolute;
    width: 100%;
    top:120px;
    background-image: transparent;
    z-index: 1;
    background-image: linear-gradient(45deg, #0b0a0a, #000000cc);
    transition: 4s width red 2s;
}

      .spinner{
        color: white;
        height: 40px;
        width: 40px;
        position: absolute;
      }
      .fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
