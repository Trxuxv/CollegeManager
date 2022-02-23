teacherApp.service('teacherService', function ($http) {

    this.getAllTeachers = function () {

        return $http.get("/Teacher/GetTeachers");
    }

    this.addCourse = function (course) {

        var request = $http({
            method: 'post',
            url: '/Course/AddCourse',
            data: course
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