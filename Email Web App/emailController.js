'use strict';

var app = angular.module("emailApp", []);

app.controller('EmailController', function ($scope){
    $scope.isPopupVisible = false;
    $scope.isComposePopupVisible = false;
    $scope.composeEmail = {};
    $scope.activeTab = "inbox";
    $scope.sentEmails = [];
    $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
	$scope.mailSent = false;
	
	 $scope.sendMail = function(composeEmail) {
      $scope.composeEmail = angular.copy(composeEmail);
	  $scope.composeEmail.from = "me";
        $scope.composeEmail.date = new Date(); 
	  $scope.sentEmails.push($scope.composeEmail);
	  console.log($scope.sentEmails,'$scope.sentEmails');
	  $scope.isComposePopupVisible = false;
	  $scope.mailSent = true;
	};
     
    $scope.showComposePopup = function() {
        $scope.composeEmail = {};
		$scope.mailSent = false;
        $scope.isComposePopupVisible = true;
    };
    
    $scope.closeComposePopup = function() {
        $scope.isComposePopupVisible = false;
    };
    
    $scope.showPopup = function(email) {
        $scope.isPopupVisible = true;
        $scope.selectedEmail = email;
    };
    
    $scope.closePopup = function() {
        $scope.isPopupVisible = false;
    };
    
    $scope.emails = [
        { 
            from: 'Jenny',
            to: 'me',
            subject: 'First Mail', 
            date: 'Jan 1', 
            body: 'hello world!' 
        },
        { 
            from: 'Mary', 
            to: 'me',
            subject: 'Second Mail', 
            date: 'Feb 15', 
            body: 'just kidding' 
        },
        { 
            from: 'Tina', 
            to: 'me',
            subject: 'Third mail', 
            date: 'Dec 8', 
            body: 'wassup dude' 
        }
    ]; 
});

app.directive('filelistBind', function() {
  return function( scope, elm, attrs ) {
    elm.bind('change', function( evt ) {
      scope.$apply(function() {
        scope[ attrs.name ] = evt.target.files;
      });
    });
  };
});