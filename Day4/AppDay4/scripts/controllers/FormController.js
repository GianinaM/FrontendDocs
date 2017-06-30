/**
 * Created by Gianina.Carp on 6/30/2017.
 */
hrApp.controller('FormController', ['$scope', function($scope) {
    $scope.userType = '';
    $scope.myForm = {};
    $scope.submitForm = function() {
        console.log($scope.myForm.input.$valid);

        if ($scope.myForm.input.$valid == true) {
            $scope.myForm.$submitted = true;
        }
    }
}]);