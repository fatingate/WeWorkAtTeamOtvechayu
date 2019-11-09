function insert(num){
    document.form.textview.value = document.form.textview.value+num;
}



function equal(){
    document.form.textview.value = eval(persents(document.form.textview.value));
    var exp = document.form.textview.value;
    if(exp){
    document.form.textview.value = eval(exp)
    }
}

function clean(){
    document.form.textview.value = "";
}

function sqroot(){
    document.form.textview.value = document.form.textview.value**0.5;
}            

function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}




