new Vue({
    el:"#app",
    data:{
      formData:{
          firstName:'',
          lastName:'',
          school:'',
      }
    },
    methods: {
      handleForm(){
          console.log(this.formData);
      }
    },
        
     
    
});