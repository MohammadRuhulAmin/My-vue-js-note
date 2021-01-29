new Vue({
    el:"#app",
    data:{
        userInfo:{
            name:"mohammad",
            age:25,
            allowedAge:26,
        }
    },
    methods: {
        changeUser:function(){
            return this.userInfo.name;
        }
    },
        
     
    
});