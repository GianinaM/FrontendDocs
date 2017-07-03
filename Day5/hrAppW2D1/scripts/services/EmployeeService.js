hrApp.service('EmployeeService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findById: function (employeeId) {
                return $http.get(CommonResourcesFactory.findOneEmployeeUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            },
            findManagers: function(){
                return $http({url: CommonResourcesFactory.findAllEmployeesUrl, method: 'GET'})
                    .success(function (data, status, headers, config) {
                        var managers = [];
                        for (var man in data) {
                            if (data[man].managerId != null) {
                                managers.push(data[man].managerId);
                                console.log(data[man].managerId);
                            }
                        }
                        return managers;
                    });
            },
            findDepartaments: function(){
                $http({url: CommonResourcesFactory.findAllDepartmentsUrl, method: 'GET'})
                    .success(function (data, status, headers, config) {
                        return data;
                    });
            },
            findJobs: function() {
                $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
                    .success(function (data, status, headers, config) {
                        return data;
                    });
            }
        }
    }]
);