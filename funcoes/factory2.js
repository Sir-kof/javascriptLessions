function criarProduto(nome, preco, desconto = 0.1) {
    return {
        nome,
        preco,
        desconto: 0.1,
        precoFinal: preco - desconto*preco
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))
