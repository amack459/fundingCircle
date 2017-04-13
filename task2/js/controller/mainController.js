angular
  .module('task2')
  .controller('MainController', MainController);

function MainController(){

  var players = {
    "Acacia": "http://a.abcnews.com/images/Health/abc_pingpong_trailer_130529_wg.jpg",
    "Albert": "http://a.abcnews.com/images/Health/abc_pingpong_trailer_130529_wg.jpg",
    "Valentina": "http://a.abcnews.com/images/Health/abc_pingpong_trailer_130529_wg.jpg",
    "Elizabeth": "http://a.abcnews.com/images/Health/abc_pingpong_trailer_130529_wg.jpg",
    "Mareill" : "http://a.abcnews.com/images/Health/abc_pingpong_trailer_130529_wg.jpg",
    "Wilson": "http://a.abcnews.com/images/Health/abc_pingpong_trailer_130529_wg.jpg"
  };

  




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

  this.players = players;

  this.playerNames = Object.keys(players);

  this.winner = function(match){
  
    match.winner = (match.player1.score > match.player2.score)? match.player1.name :match.player2.name;     
    
  };

  this.deleteGame = function(match){ 
  var index = this.matches.indexOf(match);
    return this.matches.splice(index, 1);
  };

   this.getRandomSet = function(min, max) {
    min = Math.ceil(0);
    max = Math.floor(11);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

   this.getRandomScore = function(min, max) {
    min = Math.ceil(0);
    max = Math.floor(5);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  this.addGame = function(player1, player2){
    this.match = {
      "player1": 
         {"name": player1,
         "img": this.players[player1],
         "set1": this.getRandomSet(),
         "set2": this.getRandomSet(),
         "set3": this.getRandomSet(),
         "set4": this.getRandomSet(),
         "set5": this.getRandomSet(),
         "score": this.getRandomScore()

      },
      "player2": {
        "name": player2,
         "img": this.players[player2],
         "set1": this.getRandomSet(),
         "set2": this.getRandomSet(),
         "set3": this.getRandomSet(),
         "set4": this.getRandomSet(),
         "set5": this.getRandomSet(),
         "score": this.getRandomScore()

      }
    }
    return this.matches.unshift(this.match);this.matches =  [{
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

  this.players = players;

  this.playerNames = Object.keys(players);

  this.winner = function(match){
  
    match.winner = (match.player1.score > match.player2.score)? match.player1.name :match.player2.name;     
    
  };

  this.deleteGame = function(match){ 
  var index = this.matches.indexOf(match);
    return this.matches.splice(index, 1);
  };

   this.getRandomSet = function(min, max) {
    min = Math.ceil(0);
    max = Math.floor(11);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

   this.getRandomScore = function(min, max) {
    min = Math.ceil(0);
    max = Math.floor(5);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  this.addGame = function(player1, player2){
    this.match = {
      "player1": 
         {"name": player1,
         "img": this.players[player1],
         "set1": this.getRandomSet(),
         "set2": this.getRandomSet(),
         "set3": this.getRandomSet(),
         "set4": this.getRandomSet(),
         "set5": this.getRandomSet(),
         "score": this.getRandomScore()

      },
      "player2": {
        "name": player2,
         "img": this.players[player2],
         "set1": this.getRandomSet(),
         "set2": this.getRandomSet(),
         "set3": this.getRandomSet(),
         "set4": this.getRandomSet(),
         "set5": this.getRandomSet(),
         "score": this.getRandomScore()

      }
    }
    return this.matches.unshift(this.match);
  }

}