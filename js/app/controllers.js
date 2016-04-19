var myApp = angular.module('myApp',[])
  myApp.controller('controllerOne',function($scope){
    $scope.messageNote = '';
    $scope.longueurMax = 100;
    $scope.compteur = function(){
      $scope.caracRestant = $scope.longueurMax - $scope.textarea.length

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

    }
    $scope.clear = function(){
      $scope.textarea = "";
      $scope.messageNote = "";
      $scope.caracRestant = "";
    }

  });


//Creation d'une application de note :
// - ok Savoir combien de carac restant
// - OK  bouton submit qui marche selon le nbr de caract
// - if submitt click -> bull info = notif (ng-class)
// - OK if effacer clicked = efface msg

/*OK MessageNote : variable stockant le contenant de la note
info :message affiché (modifié,sauvegardé...)
OK save() OK :Met à jour le modèle (messageNote)
OK clear():vide messageNote
OK compteur() :calcule le nombre de caractères restants (sur 100)
*/
