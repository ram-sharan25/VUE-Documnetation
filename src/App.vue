<template>
    <div id="app">
    <hello-world /> 
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default{
  components: { 
    HelloWorld, 
  },
    name:"#app",
    data(){
        return{
            message:"Hello World"
        }
    }
}

</script>

<style>

</style>
