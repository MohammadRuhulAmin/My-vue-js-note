new Vue({
    el:"#app",
    data:{
     a:0,
     b:0,
     salary:10,
    },
    methods: {
        addToA(){
            return this.a + this.salary;
        },
        addToB(){
            return this.b + this.salary;
        }
    },
        
     
    
});