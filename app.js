new Vue({
    el:"#app",
    data:{
       name:"Mohammad Ruhul Amin",
    },
    methods: {
       updateName(changeName,event){
           this.name = changeName;
           console.log($event);
       }
    },
        
     
    
});