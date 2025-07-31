
const form = document.querySelector("form")
const list = document.getElementById("shop-list") //ul
const input = document.getElementById("newItem") //input
const warning = document.getElementById("warning") //aviso
const closeWarning = document.querySelector("#warning .x")


//criando o elemento li que adiciona e remove um novo item
function createItem(name) {

    //Criando os elementos li para receber o novo item
    const li = document.createElement("li")
    li.classList.add("list")

    const div = document.createElement("div")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const label = document.createElement("label")
    label.textContent = name
    
    const button = document.createElement("button")
    button.classList.add("remove")
    button.setAttribute("arial-label", "remover item")
    const image = document.createElement("img")
    image.setAttribute("src", "assets/icons/trash.svg")
    image.setAttribute("alt", "")
    button.appendChild(image)

    //juntando os elementos que vão ser a li
    div.appendChild(checkbox)
    div.appendChild(label)
    li.appendChild(div)
    li.appendChild(button)
    list.appendChild(li)

    //criando a remoção da
    button.addEventListener("click", function () {
        list.removeChild(li)
        warning.style.display = "block"
    })
}

//fazendo o submit pegar o item
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const itemName = input.value 
    const onlySpaces = /^\s*$/

    createItem(itemName)

    input.value = ""

})


//fechando o aviso de item removido
closeWarning.addEventListener("click", () => {
    warning.style.display = "none"
})

//fazendo o botão de remover funcionar nos itens que já estão em tela no html
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")

button1.addEventListener("click", () => {
    const item = document.getElementById("item-list1")
    list.removeChild(item)
    warning.style.display = "block"
})

button2.addEventListener("click", () => {
    const item = document.getElementById("item-list2")
    list.removeChild(item)
    warning.style.display = "block"
})

button3.addEventListener("click", () => {
    const item = document.getElementById("item-list3")
    list.removeChild(item)
    warning.style.display = "block"
})

button4.addEventListener("click", () => {
    const item = document.getElementById("item-list4")
    list.removeChild(item)
    warning.style.display = "block"
})
