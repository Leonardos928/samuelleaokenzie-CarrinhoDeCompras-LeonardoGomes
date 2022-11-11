const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },

    {
        id: 2,
        name: "Vinho Canção",
        price: 17.99
    },

    {
        id: 3,
        name: "Água de Côco",
        price: 8.99
    },

    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },

    {
        id: 5,
        name: "Água Tônica",
        price: 17.98
    }
]


let main = document.createElement("main")
document.body.appendChild(main) // forma de add elemento dentro de outro

let ul = document.createElement("ul")
main.appendChild(ul)

let paragrafo = document.createElement("h2")
paragrafo.innerText = "Virtual Market"
ul.appendChild(paragrafo)

let li = document.createElement("li")
ul.appendChild(li)
li.classList.add("products")

let item = document.createElement("p")
item.innerText = "Item"
li.appendChild(item)

let valor = document.createElement("p")
valor.innerText = "Valor"
li.appendChild(valor)


for (let i = 0; i < productsCart.length; i++) {

    const li = document.createElement("li")
    li.id = productsCart[i].id
    ul.append(li)

    const nome = document.createElement("p")
    nome.innerText = productsCart[i].name
    li.appendChild(nome)

    const valor = document.createElement("p")
    valor.innerText = productsCart[i].price
    li.appendChild(valor)
}


let li1 = document.createElement("li")
let total1 = document.createElement("p")
let somaTotal = document.createElement("p")
//let resultadoSoma = somar(productsCart)
somaTotal.innerText = somar(productsCart)


total1.innerText = "Total"
li1.append(total1, somaTotal)
ul.appendChild(li1)


let div = document.createElement("div")
div.classList.add("btn")
let btn = document.createElement("button")
btn.innerText = "Finalizar Compra"
ul.appendChild(div)
div.appendChild(btn)


function somar(lista) {
    let soma = 0
    for (let i = 0; i < lista.length; i++) {
        let objeto = lista[i].price
        soma += objeto

    }
    return soma
}

console.log(somar(productsCart))













