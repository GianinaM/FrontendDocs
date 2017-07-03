/**
 * Created by Gianina.Carp on 7/3/2017.
 */

hrApp.controller('JobListController', ['$scope', '$http', '$location', 'CommonResourcesFactory', "JobService",
    function ($scope, $http, $location, CommonResourcesFactory, JobService) {

        $scope.jobs = [];


        $scope.jobs = [
            {
                "jobId": 2525,
                "jobTitle": "Sefa",
                "maxSalary": "99889988",
                "minSalary": "90000000"
            },
            {
                "jobId": 9999,
                "jobTitle": "Sefa",
                "maxSalary": "99889988",
                "minSalary": "90000000"
            },
            {
                "jobId": 6565,
                "jobTitle": "Sefa",
                "maxSalary": "99889988",
                "minSalary": "90000000"
            }
        ];


        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

        $scope.viewJob = function (jobId) {
            $location.url('/jobView/' + jobId);
        };

        $scope.editJob = function(jobId) {
            $location.url('/jobEdit/' + jobId);
        };

    }]);