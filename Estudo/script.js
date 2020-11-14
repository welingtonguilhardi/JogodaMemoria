const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"

let techs= ["bootstrap","css","electron","firebase","html","javascript","jquery","mongo","node","react"];


let cards = null;

startGame()


function startGame(){
    cards = creatCardsFromTechs(techs)
    shuffleCards(cards);
   
    initiallizeCards(cards)
   
}
function initiallizeCards(cards){

let gameBoard = document.getElementById("gameBoard");
cards.forEach(card => {

    let cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList.add(CARD)
    cardElement.dataset.icon = card.icon;
    createCardContent(card,cardElement)



    cardElement.addEventListener('click', flipCard)
    gameBoard.appendChild(cardElement)
});

}


function createCardContent(card,cardElement){

    creatCardFace(FRONT,card,cardElement)
    creatCardFace(BACK,card,cardElement)
}


function creatCardFace(face,card,element)   {
 let cardElementFace= document.createElement("div")
 cardElementFace.classList.add(face);
 if(face === FRONT){
 
 let iconElement = document.createElement("img")
 iconElement.classList.add(ICON)
 iconElement.src = "./imagem/" + card.icon + ".svg"
 cardElementFace.appendChild(iconElement)


 }else{
     cardElementFace.innerHTML = "&lt/&gt"
 }


element.appendChild(cardElementFace)
}






function shuffleCards(cards){
    let currentIndex = cards.length;
    let randomIndex = 0;
    
    while(currentIndex !== 0){
          
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards [currentIndex]] = [cards[currentIndex],cards[randomIndex]]
    }

}   





function creatCardsFromTechs(techs){
    let cards = [];
     for(let tech of techs){
     cards.push(creatPairFromTech(tech));

  }
  return cards.flatMap(pair => pair)
}

function creatPairFromTech(tech){
    return [{
        id:creatidWithTech(tech),
        icon:tech,
        flipped:false
    }, {  id:creatidWithTech(tech),
        icon:tech,
        flipped:false} ]
}
function creatidWithTech(tech){
    return tech + parseInt( Math.random() * 1000);
}


function flipCard(){

this.classList.add("flip")
}