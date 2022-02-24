teacherApp.service('teacherService', function ($http) {

    this.getAllTeachers = function () {
        return $http.get("/Teacher/GetTeachers");
    }

    this.addTeacher = function (teacher) {

        var request = $http({
            method: 'post',
            url: '/Teacher/AddTeacher',
            data: teacher
        });

        return request;
    }

    this.updateTeacher = function (teacher) {

        var updatedRequest = $http({
            method: 'post',
            url: '/Teacher/UpdateTeacher',
            data: teacher
        });
        return updatedRequest;
    }

    this.deleteTeacher = function (UpdatedTeacherId) {

        return $http.post('/Teacher/DeleteTeacher/' + UpdatedTeacherId);
    }
});