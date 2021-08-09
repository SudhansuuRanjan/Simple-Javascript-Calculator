

var tbcal="";
const useinp = document.querySelector("#result");

function insert(value){
    tbcal += value;
    useinp.value = tbcal;
}

function removedig(){
    tbcal = tbcal.substring(0, tbcal.length - 1);
    useinp.value = tbcal;
}

function equal(){
    if(tbcal.length == 0 || tbcal == ""){
        alert("Input Required!!");
        return;
    }
    try{
        ans = eval(tbcal);
        useinp.value = ans;
    }
    catch(err){
       alert("Invalid Input!!");
    }
}

function clr(){
    useinp.value ="";
    tbcal="";
}
