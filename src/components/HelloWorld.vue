<template>
    <div class="helloWorld">
        <h1><span class="greeting">{{greeting}}</span><span class="greetingTo">{{msgTo}}</span></h1>
        <button @click='changeGreeting("Hello")'>Say Hello</button>
        <button @click='changeGreeting("Hi")'>Say Hi</button>
        
        
    </div>
</template>
<script>
export default{
    name:"helloWorld",
    data(){
        return{
            greeting :"Hello"

        }
    },
    props:{
        msgTo:{
            type:String,
            default:"World"
        }
    },
    methods:{
        changeGreeting(greeting){
            this.greeting=greeting;

        }

    },

}

</script>
<style scoped>
</style>
