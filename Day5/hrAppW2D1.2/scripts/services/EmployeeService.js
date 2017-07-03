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
            findManagers: function(successFnt){
                return $http({url: CommonResourcesFactory.findAllEmployeesUrl, method: 'GET'})
                    .success(function (data, status, headers, config) {
                        var managers = [];
                        for (var man in data) {
                            if (data[man].managerId != null) {
                                var ok = 0;
                                for (var manager in managers) {
                                    if (managers[manager].employeeId == data[man].managerId.employeeId) {
                                        ok = 1;
                                    }
                                }
                                if (ok == 0) {
                                    managers.push(data[man].managerId);
                                }
                            }
                        }
                        successFnt(managers);
                    });
            },
            findDepartments: function(){
                return $http({url: CommonResourcesFactory.findAllDepartmentsUrl, method: 'GET'})
                    .success(function (data, status, headers, config) {
                        return data;
                    });
            },
            findJobs: function() {
                return $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
                    .success(function (data, status, headers, config) {
                        return data;
                    });
            }
        }
    }]
);