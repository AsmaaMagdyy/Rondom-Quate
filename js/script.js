
var qoutes = [`"Be yourself; everyone else is already taken"`,
  `"So many books, so little time"`,
  `"Be the change that you wish to see in the world"`,
  `"A room without books is like a body without a soul"`,
  `"You only live once, but if you do it right, once is enough"`];

var num ;
var last;
function generateRondomNum(){
  do{
    num = Math.floor(Math.random() * qoutes.length);
  }while(last===num){
    last = num;
    document.getElementById('quote').innerHTML = qoutes[num];
  }

}
