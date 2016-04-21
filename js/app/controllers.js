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
          templateUrl:'onverra.html'
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
