gradeApp.service('gradeService', function ($http) {

    this.getAllGrades = function () {
        return $http.get("/Grade/GetGrades");
    }

    this.addGrade = function (teacher) {

        var request = $http({
            method: 'post',
            url: '/Grade/AddGrade',
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