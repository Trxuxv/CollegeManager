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