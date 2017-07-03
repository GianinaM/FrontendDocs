/**
 * Created by Gianina.Carp on 7/3/2017.
 */
hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'JobService',
    function($scope, $http, $location, CommonResourcesFactory, JobService) {
        $scope.job = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        $scope.jobs = [];

        //TODO #HR1

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.job = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactory.addJobUrl, method: 'POST', data: addJob, headers:{'Content-Type': 'application/json' }})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;

        EmployeeService.findJobs().then(
            function(answer){
                $scope.jobs = answer.data;
            }
        );

    }]);