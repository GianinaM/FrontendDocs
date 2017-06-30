/**
 * Created by Gianina.Carp on 6/30/2017.
 */
hrApp.controller('FormController', ['$scope', function($scope) {
    $scope.userType = '';
    $scope.myForm = {};
    $scope.submitForm = function() {
        if ($scope.myForm.$error.required == false) {
            $scope.myForm.input.$submitted = true;
            console.log($scope.myForm.input.$submitted);
        }
    }
}]);