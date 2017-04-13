angular
  .module('task1')
  .controller('MainController', MainController);

function MainController(){
  this.matches =  [{
      "player1": 
         {"name":"Acacia",
         "img": "http://a.abcnews.com/images/Health/abc_pingpong_trailer_130529_wg.jpg",
         "set1": 11,
         "set2": 9,
         "set3": 7,
         "set4": 11,
         "set5": 11,
         "score": 3
      },
      "player2": 
         {"name":"Albert",
         "img": "http://a.abcnews.com/images/Health/abc_pingpong_trailer_130529_wg.jpg",
         "set1": 7,
         "set2": 11,
         "set3": 11,
         "set4": 5,
         "set5": 6,
         "score": 2
     }
   },{
    "player1": 
       {"name":"Valentina",
       "img": "http://a.abcnews.com/images/Health/abc_pingpong_trailer_130529_wg.jpg",
       "set1": 11,
       "set2": 9,
       "set3": 7,
       "set4": 11,
       "set5": 11,
       "score": 3
    },
    "player2": 
       {"name":"Elizabeth",
       "img": "http://a.abcnews.com/images/Health/abc_pingpong_trailer_130529_wg.jpg",
       "set1": 7,
       "set2": 11,
       "set3": 11,
       "set4": 5,
       "set5": 6,
       "score": 2
      }
    },{
      "player1": 
         {"name":"Mareill",
         "img": "http://a.abcnews.com/images/Health/abc_pingpong_trailer_130529_wg.jpg",
         "set1": 7,
         "set2": 11,
         "set3": 11,
         "set4": 5,
         "set5": 6,
         "score": 2
       
      },
      "player2": 
         {"name":"Wilson",
         "img": "http://a.abcnews.com/images/Health/abc_pingpong_trailer_130529_wg.jpg",
         "set1": 11,
         "set2": 9,
         "set3": 7,
         "set4": 11,
         "set5": 11,
         "score": 3
    }
  }   
  ];

  this.winner = function(match){
  
    match.winner = (match.player1.score > match.player2.score)? match.player1.name :match.player2.name;     
    
  };

  this.deleteGame = function(match){ 
  var index = this.matches.indexOf(match);
    return this.matches.splice(index, 1);
  };

}