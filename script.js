var eil = {pirmas:"", zenklas:-1, antras:""}; //masyvas

function rodymas(x) {
    document.getElementById("textview").innerHTML = x;
}

function trinti_viska(){
    eil.pirmas = "";
    eil.zenklas = -1;
    eil.antras = "";
    rodymas(eil.pirmas);

}

function trinti(){

    if(eil.zenklas != -1){
        eil.antras = eil.antras.slice(0, -1);
        rodymas(eil.antras)}
    else {
        eil.pirmas = eil.pirmas.slice(0, -1);
        rodymas(eil.pirmas)}

}

function iterpti(num){

    if(eil.zenklas == -1){
       eil.pirmas = eil.pirmas + num;
       rodymas(eil.pirmas)
    }

    else{
        eil.antras = eil.antras + num;
        rodymas(eil.antras)
    }
}


function rezultatas(){

    eil.pirmas =  Number(eil.pirmas);   //konvertuojama i skaiciu
    eil.antras = Number(eil.antras);

    if(eil.zenklas=="+"){eil.pirmas = eil.pirmas + eil.antras}
    if(eil.zenklas=="-"){eil.pirmas = eil.pirmas - eil.antras}
    if(eil.zenklas=="*"){eil.pirmas = eil.pirmas * eil.antras}
    if(eil.zenklas=="/"){eil.pirmas = eil.pirmas / eil.antras}

    if(eil.zenklas == "kelimas"){

    var x = eil.pirmas;

        if(eil.antras > 0){
            for(i = 1; i < eil.antras; i++){
                eil.pirmas = eil.pirmas * x;
            }
        }   
        else if(eil.antras == 0){
            eil.pirmas = 1;
        }
        else{
            for(i = -1; i > eil.antras; i--){
                eil.pirmas = eil.pirmas / x;
            }
        }
    }

    if(eil.zenklas=="psaknis"){
        eil.pirmas = Math.pow(eil.pirmas, 1/eil.antras)
    }

    eil.zenklas = -1;
    eil.antras = "";
    rodymas(eil.pirmas);
    eil.pirmas = eil.pirmas.toString();
}

function trupmena(){
    eil.pirmas =  Number(eil.pirmas);
    if(eil.zenklas != -1){rezultatas()};
    if(eil.pirmas != 0){
        eil.pirmas = 1/eil.pirmas;
        eil.pirmas = eil.pirmas.toString();
        rodymas(eil.pirmas)}
    else{rodymas("NAN")};
}

function sinusas(){
    eil.pirmas =  Number(eil.pirmas);
    if(eil.zenklas != -1){rezultatas()};
    eil.pirmas = Math.sin(eil.pirmas * (Math.PI/180)); //pavercia is laipsniu i PI
    eil.pirmas = eil.pirmas.toString();
    rodymas(eil.pirmas);
}

function cosinusas(){
    eil.pirmas =  Number(eil.pirmas);
    if(eil.zenklas != -1){rezultatas()};
    eil.pirmas = Math.cos(eil.pirmas * (Math.PI/180));
    eil.pirmas = eil.pirmas.toString();
    rodymas(eil.pirmas);
}

function tangentas(){
    eil.pirmas =  Number(eil.pirmas);
    if(eil.zenklas != -1){rezultatas()};
    eil.pirmas = Math.tan(eil.pirmas * (Math.PI/180));
    eil.pirmas = eil.pirmas.toString();
    rodymas(eil.pirmas);
}

function cotangentas(){
    eil.pirmas =  Number(eil.pirmas);
    if(eil.zenklas != -1){rezultatas()};
    eil.pirmas = 1/Math.tan(eil.pirmas * (Math.PI/180));
    eil.pirmas = eil.pirmas.toString();
    rodymas(eil.pirmas);
}

function saknis(){
    eil.pirmas =  Number(eil.pirmas);
    if(eil.zenklas != -1){rezultatas()};
    eil.pirmas = Math.sqrt(eil.pirmas);
    eil.pirmas = eil.pirmas.toString();
    rodymas(eil.pirmas);
}  
    

function kelimas(){
    if(eil.zenklas !=-1 && eil.antras != ""){rezultatas()}
    eil.zenklas = "kelimas"}
function psaknis(){
    if(eil.zenklas !=-1 && eil.antras != ""){rezultatas()}
    eil.zenklas = "psaknis"}
function daugyba(){
    if(eil.zenklas !=-1 && eil.antras != ""){rezultatas()}
    eil.zenklas = "*"}
function dalyba(){
    if(eil.zenklas !=-1 && eil.antras != ""){rezultatas()}
    eil.zenklas = "/"}
function sudetis(){
    if(eil.zenklas !=-1 && eil.antras != ""){rezultatas()}
    eil.zenklas = "+"}
function atimtis(){
    if(eil.zenklas !=-1 && eil.antras != ""){rezultatas()}
    eil.zenklas = "-"}

function zenklas(){
    if(eil.zenklas != -1){
        if(eil.antras.charAt(0) != "-"){eil.antras = "-" + eil.antras}
        else{eil.antras = eil.antras.slice(1)};
        rodymas(eil.antras)}
    else {
        if(eil.pirmas.charAt(0) != "-"){eil.pirmas = "-" + eil.pirmas}
        else{eil.pirmas = eil.pirmas.slice(1)};
        rodymas(eil.pirmas)}
}
function taskas(){
    var x;
    if(eil.zenklas == -1){
        x = eil.pirmas.indexOf(".")
        if(x == -1 && eil.pirmas.length != 0){iterpti(".")}
        else if(x == -1){iterpti("0.")}
    }
    else {
        x = eil.antras.indexOf(".")
        if(x == -1 && eil.antras.length != 0){  {iterpti}(".")}
        else if(x == -1){iterpti("0.")}
    }
}