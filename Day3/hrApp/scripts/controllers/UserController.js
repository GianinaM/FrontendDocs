/**
 * Created by Gianina.Carp on 6/29/2017.
 */
hrApp.controller('UserController', ['$scope', '$http', '$location', 'UserService',
    function ($scope, $http, $location, UserService) {
        $scope.usersList = false;
        $scope.user =
            {firstName: '',
              lastName: '',
              email: '',
              id: ''
            };
        $scope.saved = false;
        $scope.users = [];

        $scope.back = function () {
            $location.url('/');
        };

        $scope.reset = function () {
            $scope.user =
                {firstName: '',
                lastName: '',
                email: '',
                id: ''
            };
            $scope.saved = false;
        };

        $scope.save = function () {
            UserService.save($scope.user);
            $scope.saved = true;
        };

        $scope.show = function (userList) {
            $scope.users = UserService.getUsers();
            $scope.usersList = !$scope.usersList;
        }




    }]);