/**
 * Created by Gianina.Carp on 7/3/2017.
 */
hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location', 'JobService',
    function ($scope, $http, $routeParams, $location, JobService) {

        // Handle a promise
        JobService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
                console.log(res.data)
            }, function (err) {
                console.log("Error at job/findOne: " + err);
            });

        $scope.back = function () {
            $location.url('/jobList');
        }
    }]);