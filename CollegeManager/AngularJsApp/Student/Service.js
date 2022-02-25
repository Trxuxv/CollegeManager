studentApp.service('studentService', function ($http) {

    this.getAllStudents = function () {

        return $http.get("/Student/GetStudents");
    }

    this.addStudent = function (student) {

        var request = $http({
            method: 'post',
            url: '/Student/AddStudent',
            data: student
        });

        return request;
    }

    this.updateStudent = function (student) {

        var updatedRequest = $http({
            method: 'post',
            url: '/Student/UpdateStudent',
            data: student
        });
        return updatedRequest;
    }

    this.deleteStudent = function (UpdatedStudentId) {

        return $http.post('/Student/DeleteStudent/' + UpdatedStudentId);
    }
});