/**
 * Created by Gianina.Carp on 7/3/2017.
 */
hrApp.service('JobService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findById: function (jobId) {
                return $http.get(CommonResourcesFactory.findOneJobUrl + jobId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "jobId": 2525,
                            "jobTitle": "Sefa",
                            "maxSalary": 99889988,
                            "minSalary": 90000000
                        };
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