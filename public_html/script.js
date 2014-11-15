/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var key = [0,1,3,3,3,3,2,2,4,4,3,2];
var respuestas = [];
var resultado = [];

function valida(element, req, res){

    if(this.respuestas[req]!=undefined) {
        alert("Ya has respondido a esta pregunta");
    }
    else {
        element.style.background="grey";
        this.respuestas[req]=res;
        if (respuestas[req]==key[req]) resultado[req]=true;
        else resultado[req]=false;
    }
    
} 

function evalua (){
    var string="\n";
    var nota=0;
    
    // Calcular nota
    for (i=0; i<resultado.length; i++){
        if (resultado[i]!=undefined){
            string+="Pregunta "+i+": "+resultado[i]+"\n";
            if (resultado[i]==true)nota++;
        }
    }
    string+="\nTu nota es: "+nota+" sobre "+key.length;
    
    alert(string);
}