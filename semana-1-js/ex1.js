function filtrarPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0)
}

console.log(filtrarPares([1, 2, 3, 4, 5]))