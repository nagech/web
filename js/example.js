angular.module('plunker', ['ui.bootstrap']);

function AccordionDemoCtrl($scope) {
$scope.opened = function (groupname) {
    console.log("Opened group: "+ groupname);
  };
 $scope.groups = ary;
}