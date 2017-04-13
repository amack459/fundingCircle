var app = angular.module('task3', []);


app.filter('searchFor', function(){

  return function(arr, searchString){

    if(!searchString){
      return arr;
    }

    var result = [];

    searchString = searchString.toLowerCase();

    angular.forEach(arr, function(playerNames){
      
      if(playerNames.toLowerCase().indexOf(searchString) !== -1){
        result.push(playerNames);
      }

    });

    return result;
  };

});