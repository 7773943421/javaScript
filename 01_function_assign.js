function read(){  //create a function and variable 
console.log();     //consol and log it for output
}
read();  // invoke a function and value store



function reuse(){  //create a function and variable 
    console.log();     //consol and log it for output
    }
    reuse();  // invoke a function and valu store
    

    //(2)

    function personalDetails(fristName , lastName){  //create function and store argument
        console.log("fristName","lastName"); //store variable
    }
    personalDetails();//function callsss


    //(3)
function swap_values(value1,value2){
    console.log("After The Swap");
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After The Swap");
    console.log("value1","value2");
}
swap_values("virat","Anushka");
swap_values(100,200);


//(4)
function add_three_number(value1,value2,value3){
    console.log("After The Swap");
    temp1=value1;
    value1=value2;
    value3=temp;
    temp2=value2;
    value2=value3;
    value3=temp2;
    console.log("After The Swap");
    console.log("value1","value2","value3");
}
swap_values(1023,600,40);
swap_values("hello","Good","Morning");