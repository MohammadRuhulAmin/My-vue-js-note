new Vue({
    el:"#app",
    data:{
        title:"Ruhul amin",
        isItTrue:true,
        cars:['toyota','lancer','commit'],
        robot:{
            name:"robot--1",
            weigth:"150 kelograam",
            height:"5.12 inche"

        },
        myInfo:{
            name:"Mohammad Ruhul Amin",
            Email:"alfaBinomialbeta23@gmail.com",
            contact:"01403288711"
        },
        geeting:()=>{
            return "this is my first function ";
        }
    },
    methods:{
        my_first_function:function(){
            return "this function is calling from methods!";
        },
        using_own_property:function(){
            return this.myInfo;
        }
    }

});