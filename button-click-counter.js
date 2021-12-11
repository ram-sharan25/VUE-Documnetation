Vue.component('button-click-counter',{ 
    template:'<button class=btn btn-primary @click="count++">{{count}}</button>',
    props:['title']
   
    
    
});
new Vue({
    el:"#app",
    data(){
        return{
            count:0,
            names:[
                {id:1,title:'Mushu'},
                {id:2,title:'Mayalu'},
                {id:3,title:'Nakkali'}
            ]
        }
    }
})