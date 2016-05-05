'use strict'
var myApp = angular.module('myApp',['ngAnimate','ui.router']);
  myApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('application1',{
          url: '/application1',
          templateUrl:'about.html'
        })
      .state('application2',{
          url: '/application2',
          templateUrl:'app02.html'
        })
      .state('application3',{
          url: '/application3',
          templateUrl:'app03.html'
        })
      .state('application3.produits',{
        url: '/produits',
        templateUrl: 'application3-produits.html'
      })

  })
  .controller('controllerOne',function($scope){
    $scope.baseClass ='';
    $scope.messageNote = '';
    $scope.longueurMax = 100;

    $scope.compteur = function(){
      $scope.caracRestant = $scope.longueurMax - $scope.textarea.length
      if($scope.caracRestant < 0){
        $scope.baseClass ='red';

      } else if($scope.caracRestant <= 10 && $scope.caracRestant >= 0){
        $scope.baseClass ="pulse";

      } else {
        $scope.baseClass ="";
        $scope.alert = "";
      }
    };
    $scope.paulineWinner = function(){
      if($scope.caracRestant <= 0){
        return true
      } else {
        return false
      }
    }
    $scope.addText = function(){
        $scope.messageNote = $scope.textarea;
        $scope.info1 = "Note sauvegardée"
    }
    $scope.clear = function(){
      $scope.textarea = "";
      $scope.messageNote = "";
      $scope.caracRestant = "";
      $scope.info1 = "Aucune note dispo"

    }

  });

//Creation d'une application de note :
// - ok Savoir combien de carac restant
// - OK  bouton submit qui marche selon le nbr de caract
// - if submitt click -> bull info = notif (ng-class)
// - OK if effacer clicked = efface msg

/*OK MessageNote : variable stockant le contenant de la note
OK info :message affiché (modifié,sauvegardé...)
OK save() OK :Met à jour le modèle (messageNote)
OK clear():vide messageNote
OK compteur() :calcule le nombre de caractères restants (sur 100)
*/

// Nouveau Controller ---> exercice 2
myApp.controller('app02',function($scope,$http){
  $http.get('services.json').then(function(response){
    $scope.myData = response.data.services;
  })
  $scope.total = 300;
  $scope.count = 1;
  $scope.isActive = function(){
    if(this.item.active){
      $scope.total -= this.item.price;
      this.item.active = false;
      $scope.count--;
    } else {
      $scope.total+= this.item.price;
      this.item.active = true;
      $scope.count++;
    }
  }
  //Trouvez un moyen de repérer les éléments actifs dès le départ
  // Intégrer ng-pluralize !!
});
myApp.factory("test",function(){
      return [];
})
myApp.controller('app03',function($scope,$http,test){
  $scope.myOverAllData = test;
  $http.get('items.json').then(function(response){
    $scope.dispoItems = response.data.items;
  });

  $scope.selectAllItems = [];
  $scope.allItems = function(){
    $scope.selectAllItems = $scope.dispoItems;

  }
  $scope.allItemsRemoved = function(){
    $scope.selectAllItems = [];
  }
  $scope.selectedIt = function(){
    if(this.item.active === true){
      this.item.active = false;


    } else {
      this.item.active = true;

    }
  }
  $scope.comeOn = function(){
    // $scope.$apply(finalFunction());
    $scope.myOverAllData = [];
    console.log($scope.myOverAllData);
  }
  $scope.finalFunction = function(){
    console.log($scope.myOverAllData);
    console.log($scope.selectAllItems);
    for(let final = 0; final < $scope.selectAllItems.length;final++){
      // console.log("bonjour");

      $scope.myOverAllData.push(
        {
          url: $scope.selectAllItems[final].url,
          image: $scope.selectAllItems[final].image,
          title: $scope.selectAllItems[final].title
        }
      )
    }
  }
  $scope.includeIt = function(){
    for(var i = 0; i < $scope.dispoItems.length;i++){
      if($scope.dispoItems[i].active == true){
        $scope.selectAllItems.push($scope.dispoItems[i]);
      }
    }


    // $scope.selectAllItems = $scope.selected;
    // console.log($scope.selected);
    // $scope.myOverAllData['title'] = "John";
    console.log($scope.selectAllItems)
  }

  $scope.excludeIt= function(){
    $scope.stase = [];
    for(let j = 0; j < $scope.selectAllItems.length;j++){
      if($scope.selectAllItems[j].active === false){
        $scope.selectAllItems[j] = "";
        // console.log('lol');
        // $scope.stase.push($scope.selectAllItems[j]);
        // console.log($scope.stase);
        // for(var zob = 0; zob < $scope.stase.length; zob++){
        //   if($scope.stase[zob] === $scope.selectAllItems[j]){
        //
        //   }
        // }

      }
    }

  }
});
