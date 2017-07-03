hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'EmployeeService',
    function($scope, $http, $location, CommonResourcesFactory, EmployeeService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        $scope.departments = [];
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
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee, headers:{'Content-Type': 'application/json' }})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;

        var findManagerSuccesFnt = function(managers) {
            $scope.managers = managers;
        };

        EmployeeService.findManagers(findManagerSuccesFnt);

        EmployeeService.findJobs().then(
            function(answer){
                $scope.jobs = answer.data;
            }
        );

        EmployeeService.findDepartments().then(
            function(answer){
                $scope.departments = answer.data;
            }
        );


}]);