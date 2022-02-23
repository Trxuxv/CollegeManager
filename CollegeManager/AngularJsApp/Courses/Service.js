courseApp.service('courseService', function ($http) {

    this.getAllCourses = function () {

        return $http.get("/Course/GetCourse");
    }

    this.addCourse = function (course) {

        var request = $http({
            method: 'post',
            url: '/Course/AddCourse',
            data: course
        });

        return request;
    }

    //Método responsável por Atualizar Funcionário Por Id: Update
    this.atualizarFuncionario = function (course) {

        var requestAtualizado = $http({
            method: 'post',
            url: '/Course/AtualizarFuncionario',
            data: course
        });
        return requestAtualizado;
    }

    //Método responsável por Excluir Funcionário Por Id: Delete
    this.excluirFuncionario = function (AtualizadoFuncionarioId) {

        return $http.post('/Course/ExcluirFuncionario/' + AtualizadoFuncionarioId);
    }
});