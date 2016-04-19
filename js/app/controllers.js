var myApp = angular.module('myApp',[])
  myApp.controller('controllerOne',function($scope){
  	$scope.compteur = function(){
  		$scope.textarea.length
  	};
  });

//Creation d'une application de note :
// - Savoir combien de carac restant
// - bouton submit qui marche selon le nbr de caract
// - recuperation du text et push dans un tableau
// - if submitt click -> bull info = notif (ng-class)
// - if effacer clicked = efface msg

/*MessageNote : variable stockant le contenant de la note	
info :message affiché (modifié,sauvegardé...)	
save() :Met à jour le modèle (messageNote)	
clear():vide messageNote	
count() :calcule le nombre de caractères restants (sur 100)	
*/
