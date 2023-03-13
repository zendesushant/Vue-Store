<template>
<div v-if="$store.state.showDialog" class="backdrop" @click="updateDialogStatus">
</div>
<TheHeader @click="updateDialogStatus"></TheHeader>
<router-view>
</router-view>

</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
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

</style>
