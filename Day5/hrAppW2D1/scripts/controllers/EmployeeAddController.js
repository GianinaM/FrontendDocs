hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'EmployeeService',
    function($scope, $http, $location, CommonResourcesFactory, EmployeeService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        $scope.departaments = [];
        $scope.managers = [];
        $scope.jobs = [];

        //TODO #HR1

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;



        $http({url: CommonResourcesFactory.findAllDepartmentsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.departaments = data;
            });

        // $http({url: CommonResourcesFactory.findAllEmployeesUrl, method: 'GET'})
        //     .success(function (data, status, headers, config) {
        //         // $scope.managers = data;
        //         for (var man in data) {
        //             if (data[man].managerId != null) {
        //                 $scope.managers.push(data[man]);
        //             }
        //         }
        //     });

        // $scope.managers = EmployeeService.findManagers();

        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

        var promiseMan = EmployeeService.findManagers();
        promiseMan.then(
            function(answer) {
                $scope.managers = answer.data;
            }
        );


}]);