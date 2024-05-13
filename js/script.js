
var qoutes = [`"Be yourself; everyone else is already taken"`,
                `"So many books, so little time"`,
                `"Be the change that you wish to see in the world"`,
                `"A room without books is like a body without a soul"`,
                `"You only live once, but if you do it right, once is enough"`];

            var num=Math.floor(Math.random()*qoutes.length);
            var last=num;
            function generateRondomNum(){
          
            num=Math.floor(Math.random()*qoutes.length);
             if(num==last){
              if(num==qoutes.length){
                num--;
                document.getElementById('quote').innerHTML=qoutes[num];
                num=Math.floor(Math.random()*qoutes.length);
                last=num;
              }else{
                num++;
                document.getElementById('quote').innerHTML=qoutes[num];
                num=Math.floor(Math.random()*qoutes.length);
                last=num;
              }
             }else{
                document.getElementById('quote').innerHTML=qoutes[num];
                last=num;
             }
            }