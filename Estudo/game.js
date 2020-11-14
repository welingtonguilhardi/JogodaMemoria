let game = {
    techs: ["bootstrap","css","electron","firebase","html","javascript","jquery","mongo","node","react"],
    cards: null,
  creatCardsFromTechs:function(techs){
        let cards = [];
        
         for(let tech of techs){
        this.cards.push(creatPairFromTech(tech));
    
      }
      return  this.cards.flatMap(pair => pair)
    },
    
     creatPairFromTech:function(tech){
        return [{
            id:creatidWithTech(tech),
            icon:tech,
            flipped:false
        }, {  id:creatidWithTech(tech),
            icon:tech,
            flipped:false} ]
    },
      creatidWithTech:function(tech){
        return tech + parseInt( Math.random() * 1000);
    }
}