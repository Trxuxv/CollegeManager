subjectApp.service('subjectService', function ($http) {

    this.getAllSubjects = function () {

        return $http.get("/Subject/GetSubjects");
    }

    this.addSubject = function (course) {

        var request = $http({
            method: 'post',
            url: '/Subject/AddSubject',
            data: subject
        });

        return request;
    }

    this.atualizarFuncionario = function (course) {

        var requestAtualizado = $http({
            method: 'post',
            url: '/Course/AtualizarFuncionario',
            data: course
        });
        return requestAtualizado;
    }

    this.excluirFuncionario = function (AtualizadoFuncionarioId) {

        return $http.post('/Course/ExcluirFuncionario/' + AtualizadoFuncionarioId);
    }
});