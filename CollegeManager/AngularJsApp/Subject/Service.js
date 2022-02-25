subjectApp.service('subjectService', function ($http) {

    this.getAllSubjects = function () {

        return $http.get("/Subject/GetSubjects");
    }

    this.addSubject = function (subject) {

        var request = $http({
            method: 'post',
            url: '/Subject/AddSubject',
            data: subject
        });

        return request;
    }

    this.updateSubject = function (subject) {

        var updateRequest = $http({
            method: 'post',
            url: '/Subject/UpdateSubject',
            data: subject
        });
        return updateRequest;
    }

    this.deleteSubject = function (UpdatedSubjectId) {

        return $http.post('/Subject/DeleteSubject/' + UpdatedSubjectId);
    }
});