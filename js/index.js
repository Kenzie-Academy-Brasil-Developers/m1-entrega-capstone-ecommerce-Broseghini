let tagBody     = document.querySelector("body")

let tagHeader   = document.createElement("header")
    tagBody.appendChild(tagHeader)

let tagH1       = document.createElement("h1")
    tagHeader.appendChild(tagH1)
    tagH1.innerText = "One Piece History"

let tagNav      = document.createElement("nav")
    tagHeader.appendChild(tagNav)

let tagUlFirst  = document.createElement("ul")
    tagNav.appendChild(tagUlFirst) 

let tagLiFirst  = document.createElement("li")
    tagUlFirst.appendChild(tagLiFirst)
    tagLiFirst.innerText = "Todos"

let tagLiSecond = document.createElement("li")
    tagUlFirst.appendChild(tagLiSecond)
    tagLiSecond.innerText = "Acessórios" 

let tagLiThird  = document.createElement("li")
    tagUlFirst.appendChild(tagLiThird)
    tagLiThird.innerText = "Quadros"

let tagFourth = document.createElement("li")
    tagUlFirst.appendChild(tagFourth)
    tagFourth.innerText = "Figures"

let tagAside    = document.createElement("aside")
    
let tagUlSecond = document.createElement("ul")
    
let tagDivPai   = document.createElement("div")
    tagAside.appendChild(tagDivPai)

let tagDivFilho = document.createElement("div")


let tagUlThird  = document.createElement("ul")
    tagDivPai.append(tagDivFilho, tagUlThird)
    tagUlThird.classList.add("carrinho")
    
    let tagMain     = document.createElement("main")
    tagBody.appendChild(tagMain)
    tagMain.append(tagUlSecond, tagDivPai)


function elementosDaLoja(listaDeItens, listaDeTrecos){


    for(let i = 0; i < listaDeItens.length; i++){

        let itensDaLoja = listaDeItens[i]   
        
        let cardDaVtr   = vtrDePdr(itensDaLoja)

        listaDeTrecos.appendChild(cardDaVtr)
        
    }
}
elementosDaLoja(listaDeItens, tagUlSecond)


function vtrDePdr(purchases){

let nome  = purchases.nameItem

let imge  = purchases.img

let valor = purchases.value

let dscr  = purchases.description


let tagLi    = document.createElement("li")

let tagNome  = document.createElement("h2")

let tagImag  = document.createElement("img")

let tagValor = document.createElement("p")

let tagDsr  = document.createElement("p")
    tagDsr.className = "price"

let tagButton  = document.createElement("button")
    tagButton.type = "text" 
    tagButton.id = purchases.id


    tagNome.innerText = nome

    tagValor.innerText = `R$ ${valor}`

    tagDsr.innerText  = dscr

    tagImag.src = `${imge}`

    tagImag.alt = nome 

    tagButton.innerText = "Adicionar Ao carrinho"

    
tagLi.append(tagNome, tagImag, tagValor, tagDsr, tagButton)

return tagLi
}


tagUlSecond.addEventListener("click", recebendoCliks)

let productsCarLitlle = []

function recebendoCliks(event){

    let carameloAzul = event.target.id
    
    if(carameloAzul !== ""){

        let darkDwarf = listaDeItens[carameloAzul]
        
        productsCarLitlle.push(darkDwarf)
        
        listMancos(productsCarLitlle, tagUlThird)
    }

}

function listMancos(productsCarLitlle, tunadoBiBi){

        tagUlThird.innerHTML = ""

        for(let i = 0; i < productsCarLitlle.length; i++){
    
            let solaDabota = productsCarLitlle[i]   
            
            let solaMao    = mancadasDaVida(solaDabota)

            tunadoBiBi.appendChild(solaMao)
            
        }
    }

function mancadasDaVida(solaDabota){

let nome  = solaDabota.nameItem
    
let imge  = solaDabota.img
    
let valor = solaDabota.value


let tagLi  = document.createElement("li")
    tagLi.classList.add("cards") 

let tagImg = document.createElement("img")
    tagImg.classList.add("list")

let tagNome = document.createElement("nome")
    tagNome.classList.add("track")

let tagValor = document.createElement("valor")
tagValor.classList.add("yellow")

let tagSmallButton = document.createElement("button")
    tagSmallButton.innerText = "Remover do carrinho"

    tagNome.innerText = nome
    tagImg.src = `${imge}`
    tagValor.innerText = `R$ ${valor}.`.replace(".",",")

tagLi.append(tagImg, tagNome, tagValor, tagSmallButton)

return tagLi
}


        
