const temp = "  <p>My Name is {{name}}</p>";
const app1 = new Vue({
    // el:"#app",
    data:{
        name:"Mohammad Ruhul Amin",
    },
    template:temp,
      
    
    
});
setTimeout(()=>{
    app1.$mount('#app')
},2000);