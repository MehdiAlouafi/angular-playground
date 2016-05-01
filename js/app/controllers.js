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

myApp.controller('app03',function($scope,$http){
  $http.get('items.json').then(function(response){
    $scope.dispoItems = response.data.items;
  })

});
