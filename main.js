// dom inputs 
// btn dom function 
let btn_1 = document.querySelector(".btn_1");
let btn_2 = document.querySelector(".btn_2");
let btn_3 = document.querySelector(".btn_3");

// input dom functions 

let random_ipt_1 = document.querySelector(".random_ipt_1");
let random_ipt_2 = document.querySelector(".random_ipt_2");
let random_ipt_3 = document.querySelector(".random_ipt_3");

// variables for random store 

let random_value_1;
let random_value_2;
let random_value_3;


// function for random number 1  to 6
btn_1.onclick = function(){
    random_value_1= Math.floor((Math.random() * 6) + 1);
    random_ipt_1.value = random_value_1;
  
}


// code for random number 1 to 20 
btn_2.onclick = function(){
    random_value_2 = Math.floor((Math.random() * 20) + 1);
    random_ipt_2.value = random_value_2;
  
}

// code for random number 1 to 100 
btn_3.onclick = function(){
    random_value_3 = Math.floor((Math.random() * 100) + 1);
    random_ipt_3.value = random_value_3;
  
}

