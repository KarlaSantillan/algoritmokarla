class Ejercicios{
    limpiar(){
        document.getElementById("resp").textContent = "";;
    }
    //Ejercicio 1
    perfecto(num){
        let sumaDivisores = 0;
        for (let i = 1; i < num; i++) {
        if (num % i == 0) {
        sumaDivisores += i;
    }
    }
        return sumaDivisores == num;
    }
    sumaNumerosPerfectos(serie){
        serie = [6, 5, 25, 24, 28];
        let sumaPerfectos = 0;
        for (let i = 0; i < serie.length; i++) {
            if (this.perfecto(serie[i])) {
            sumaPerfectos += serie[i];
    }
    }
    
    let $resp= document.getElementById("resp");
    $resp.textContent= `La suma de los números perfectos es: ${sumaPerfectos}`;
    return sumaPerfectos;
    
    }
    //Ejercicio 2
    primo(numero){
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
            return false;
            }
        }
        return true && numero !== 1;
    }
    numPrimos(){
        let serie = [6, 5, 25, 7, 28];
        let primos = [];
        for (let i = 0; i < serie.length; i++) {
        if (this.primo(serie[i])) {
            primos.push(serie[i]);
        }
        }
        let $resp= document.getElementById("resp");
        $resp.textContent= `Son primos: ${primos}`;
        return primos;
    }
    //Ejercicio 3
    baseexponente(){
        let base= parseInt(document.getElementById("base").value);
        let exponente= parseInt(document.getElementById("exponente").value);
        let i=0, resp=1;
        for(i; i< exponente; i++){
            resp *= base;
        }
        document.getElementById("resp").textContent= resp;
        return resp;
    }
    //Ejercicio 4
    exponentePropio() {
        const numeros = [4, 3, 2, 5];
        const resultados = [];

        for (let i = 0; i < numeros.length; i++) {
        const base = numeros[i];
        const exponente = numeros[i];
        let resultado = 1;

        for (let j = 0; j < exponente; j++) {
        resultado *= base;
    }

    resultados.push(resultado);
    }

    const resultadoFinal = resultados.join(", ");
    document.getElementById("resp").textContent = resultadoFinal;
    return resultadoFinal;
    }
    //Ejercicio 5
    tablaMultiplicar(){
        let d = document;
        let base = d.getElementById("base").value;
        base = parseFloat(base);
        let i = 1;
        let tabla = "";
        for (i; i <= 12; i++) {
        tabla += `${base}x${i}= `+ base * i + "\n";
        d.getElementById("resp").textContent = `Tabla: \n${tabla}`;
    }
    }
    //Ejercicio 6
    divisoresValorInicial(){
        let valorInicial= parseInt(document.getElementById("inicial").value);
        let numero = parseInt(document.getElementById("numero").value);
        let $resp = document.getElementById("resp");
        let divisores = [];
        for (let i = valorInicial; i < numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
        }
        $resp.textContent = divisores;
        return divisores;
    }
    //Ejercicio 7
    sumaDivisores(){
        let numero = parseInt(document.getElementById("numero").value);
        let valorInicial = parseInt(document.getElementById("inicial").value);
        let divisores = this.divisoresValorInicial(numero, valorInicial);
        let suma = 0;
        for (let i = 0; i < divisores.length; i++) {
        suma += divisores[i];
    }
        let $resp = document.getElementById("resp");
        $resp.textContent = `La suma de los divisores de ${numero} es: ${suma}`;
        return suma;
    }
    //Ejercicio 8
    retornarArreglo() {
        let numero = parseInt(document.getElementById("numero").value);
        let numerostring= numero.toString();
        let $resp = document.getElementById("resp");
        let digitos = [], i=0;
        for(i = numerostring.length - 1; i>=0; i--){
            digitos.push(parseInt(numerostring[i]));
        }
        $resp.textContent= `[${digitos}]`;
        return digitos;
    }
    //Ejercicio 9
    sumaDeDigitos(){
        let numero =parseInt(document.getElementById("numero").value);
        let digitos = this.retornarArreglo(numero)
        let $resp = document.getElementById("resp");
        let suma =0, i=0
        for(i; i< digitos.length;i++){
            suma+=digitos[i]
        }
        $resp.textContent= `La suma de los dígitos es: ${suma}`;
        return suma;
    }
    //Ejercicio 10
    digitosPares(){
        let numero =document.getElementById("numero").value;
        let digitos = this.retornarArreglo(numero)
        let pares=[], i=0;
        let $resp = document.getElementById("resp");
        for(i; i<digitos.length;i++){
            if(digitos[i] % 2 === 0){
                pares.push(digitos[i]);
            }
        }
        $resp.textContent= `Los dígitos pares son: ${pares.reverse()}`;
        return pares;
    }
    //Ejercicio 11
    primerDigito(){
        let numero =document.getElementById("numero").value;
        let digitos = this.retornarArreglo(numero).reverse()
        let $resp = document.getElementById("resp");
        $resp.textContent= `El primer dígito es: ${digitos[0]}`;
        return digitos[0];
    }
    //Ejercicio 12
    ultimoDigito(){
        let numero =document.getElementById("numero").value;
        let digitos = this.retornarArreglo(numero).reverse()
        let $resp = document.getElementById("resp");
        $resp.textContent= `El último dígito es: ${digitos[digitos.length-1]}`;
        return digitos[digitos.length - 1];
    }
    //Ejercicio 13
    factorialDeUnNumero(){
        let numero= parseInt(document.getElementById("numero").value);
        let $resp = document.getElementById("resp");
        let resultado=1, i=1;
        for(i; i<=numero; i++){
            resultado *= i;
        }
        $resp.textContent=`El factorial de ${numero} es: ${resultado}`;
        return resultado;
    }
    //Ejercicio 14
    calcularFactoriales(arr) {
        let arreglo = [3, 2, 4, 5];
        let factoriales = [];
        for (let i = 0; i < arreglo.length; i++) {
        let resultado = 1;
        for (let j = 1; j <= arreglo[i]; j++) {
            resultado *= j;
        }
        factoriales.push(resultado);
        }
        document.getElementById("resp").textContent = factoriales;
        return factoriales.join(",");
    }
    //Ejercicio 15
    numerosRango(num1, num2) {
        let resultado = [];
        for (let i = num1; i < num2; i++) {
        resultado.push(i);
        }
        return resultado;
    }
    arregloRango() {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let $resp = document.getElementById("resp");
        let resp = this.numerosRango(num1, num2);
        $resp.textContent = `[${resp}]`;
    }
}
let ejer = new Ejercicios();



