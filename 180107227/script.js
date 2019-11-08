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



