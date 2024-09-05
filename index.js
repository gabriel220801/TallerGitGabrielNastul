const unidades = ['Cero', 'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve'];
const decenas = ['Diez', 'Veinte', 'Treinta', 'Cuarenta', 'Cincuenta', 'Sesenta', 'Setenta', 'Ochenta', 'Noventa'];
const especiales = ['Once', 'Doce', 'Trece', 'Catorce', 'Quince'];
const centenas = ['Cien', 'Doscientos', 'Trescientos', 'Cuatrocientos', 'Quinientos', 'Seiscientos', 'Setecientos', 'Ochocientos', 'Novecientos'];

function numeroALetras(numero) {
    if (numero === 0) return unidades[0];
    if (numero < 10) return unidades[numero];
    if (numero >= 11 && numero <= 15) return especiales[numero - 11];
    if (numero < 100) return traducirDecenas(numero);
    if (numero < 1000) return traducirCentenas(numero);
}

function traducirDecenas(numero) {
    let unidad = numero % 10;
    let decena = Math.floor(numero / 10);

    if (numero % 10 === 0) return decenas[decena - 1];
    if (numero < 30) return decenas[decena - 1] + ' y ' + unidades[unidad];

    return decenas[decena - 1] + ' y ' + unidades[unidad];
}

function traducirCentenas(numero) {
    let resto = numero % 100;
    let centena = Math.floor(numero / 100);

    if (resto === 0) return centenas[centena - 1];
    return centenas[centena - 1] + ' ' + numeroALetras(resto);
}


const unidadesIngles = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const decenasIngles = ['Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const especialesIngles = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen'];
const centenasIngles = ['One Hundred', 'Two Hundred', 'Three Hundred', 'Four Hundred', 'Five Hundred', 'Six Hundred', 'Seven Hundred', 'Eight Hundred', 'Nine Hundred'];

function numeroALetrasIngles(numero) {
    if (numero === 0) return unidadesIngles[0];
    if (numero < 10) return unidadesIngles[numero];
    if (numero >= 11 && numero <= 15) return especialesIngles[numero - 11];
    if (numero < 100) return traducirDecenasIngles(numero);
    if (numero < 1000) return traducirCentenasIngles(numero);
}

function traducirDecenasIngles(numero) {
    let unidad = numero % 10;
    let decena = Math.floor(numero / 10);

    if (numero % 10 === 0) return decenasIngles[decena - 1];
    if (numero < 20) return decenasIngles[decena - 1] + '-' + unidadesIngles[unidad];

    return decenasIngles[decena - 1] + '-' + unidadesIngles[unidad];
}

function traducirCentenasIngles(numero) {
    let resto = numero % 100;
    let centena = Math.floor(numero / 100);

    if (resto === 0) return centenasIngles[centena - 1];
    return centenasIngles[centena - 1] + ' ' + numeroALetrasIngles(resto);
}


function traducir() {
    let numero = parseInt(document.getElementById('inputNumero').value);
    let resultado = numeroALetras(numero);
    document.getElementById('resultado').textContent = resultado;
}

function traducirIngles() {
    let numero = parseInt(document.getElementById('inputNumero').value);
    let resultado = numeroALetrasIngles(numero);
    document.getElementById('resultado').textContent = resultado;
}
