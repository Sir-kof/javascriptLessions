// Closure é o escopo quando a função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

//contexto léxico em ação

const x = "Global"

function fora() {
    const x = "Local"
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())