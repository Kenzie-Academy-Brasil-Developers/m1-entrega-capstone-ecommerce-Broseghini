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

let tagUlSecond = document.createElement("ul")

let tagMain     = document.createElement("main")
    tagBody.appendChild(tagMain)
    tagMain.appendChild(tagUlSecond)


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


    tagNome.innerText = nome

    tagValor.innerText = `R$ ${valor}`

    tagDsr.innerText  = dscr

    tagImag.src = `${imge}`

    tagImag.alt = nome 

    tagButton.innerText = "Adicionar Ao carrinho"

    
tagLi.append(tagNome, tagImag, tagValor, tagDsr, tagButton)

return tagLi
}

tagUlSecond.addEventListener("click", interceptandoProduto)


let comprasJacale = []

function interceptandoProduto(event){
   
    let btnComprar  = event.target
    
    if(btnComprar.tagName == "BUTTON"){

        let idProduto = btnComprar.id

        let produto = produtos.find(function(produto){

            if(produto.id == idProduto && produto.estoque == true){
                return produto
            }            
        })
        adicionarCarrinho(produto)
    }
}


