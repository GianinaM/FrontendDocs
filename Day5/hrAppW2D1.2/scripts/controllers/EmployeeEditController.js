hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory', "EmployeeService",
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            EmployeeService.findById($routeParams.employeeId)
                .then(function (res) {
                    $scope.employee = res.data;
                }, function (err) {
                    console.log("Error at employees/findOne: " + err);
                });
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.edit = function (editEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: editEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

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


        $scope.back = function () {
            $location.url('/employeeList');
        }

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);