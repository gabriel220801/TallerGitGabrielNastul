const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
const decenas = ['diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const especiales = ['once', 'doce', 'trece', 'catorce', 'quince'];

function numeroALetras(numero) {
    if (numero < 10) return unidades[numero];
    if (numero >= 11 && numero <= 15) return especiales[numero - 11];
    if (numero % 10 === 0 && numero <= 90) return decenas[Math.floor(numero / 10) - 1];
    return decenas[Math.floor(numero / 10) - 1] + ' y ' + unidades[numero % 10];
}

console.log(numeroALetras(15)); 
console.log(numeroALetras(42)); 
