/**
 * Created by Gianina.Carp on 7/3/2017.
 */
hrApp.controller('JobEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory', "JobService",
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, JobService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        JobService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
            }, function (err) {
                console.log("Error at job/findOne: " + err);
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            JobService.findById($routeParams.jobId)
                .then(function (res) {
                    $scope.job = res.data;
                }, function (err) {
                    console.log("Error at job/findOne: " + err);
                });
        };

        /**
         * Persist an job
         * @param addJob - job to be persisted
         */
        $scope.edit = function (editJob) {
            $http({url: CommonResourcesFactory.editJobUrl, method: 'PUT', data: editJob, headers:{'Content-Type': 'application/json' }})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };

        JobService.findJobs().then(
            function(answer){
                $scope.jobs = answer.data;
            }
        );

        $scope.back = function () {
            $location.url('/jobList');
        }

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);