gradeApp.service('gradeService', function ($http) {

    this.getAllGrades = function () {
        return $http.get("/Grade/GetGrades");
    }

    this.addGrade = function (grade) {

        var request = $http({
            method: 'post',
            url: '/Grade/AddGrade',
            data: grade
        });

        return request;
    }

    this.updateGrade = function (grade) {

        var updatedRequest = $http({
            method: 'post',
            url: '/Grade/UpdateGrade',
            data: grade
        });
        return updatedRequest;
    }

    this.deleteGrade = function (UpdatedGradeId) {

        return $http.post('/Grade/DeleteGrade/' + UpdatedGradeId);
    }
});