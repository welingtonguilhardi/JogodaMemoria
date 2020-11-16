alert("Olá jogador, para melhor experiencia diminua o tamanho da sua página")
const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"

let techs= ["bootstrap","css","electron","firebase","html","javascript","jquery","mongo","node","react"];


let cards = null;

startGame()


function startGame(){
    initiallizeCards(game.creatCardsFromTechs());
   
}
function initiallizeCards(cards){

let gameBoard = document.getElementById("gameBoard");
gameBoard.innerHTML = "";
game.cards.forEach(card => {

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

function flipCard(){
if (game.setCard(this.id)){

this.classList.add("flip");
if(game.secondCard){
if (game.checkMatch()){
    game.clearCards();
if(game.checkGameOver()){

    let gameOver= document.getElementById("gameOver");
    gameOver.style.display = "flex"
}   



}else{
    setTimeout(() => {
    let firstCardView = document.getElementById(game.firstCard.id);
    let secondCardView = document.getElementById(game.secondCard.id);

    firstCardView.classList.remove("flip");
    secondCardView.classList.remove("flip");
    game.unflipCards();
}, 1000);




};
}

  
  }

 }
 function restart() {
     game.clearCards();
     startGame();
     let gameOver= document.getElementById("gameOver");
    gameOver.style.display = "none"
   
 }
