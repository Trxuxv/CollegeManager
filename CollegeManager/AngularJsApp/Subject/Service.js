teacherApp.service('teacherService', function ($http) {

    //Método responsável por Listar todos os Funcionários: READ
    this.getAllTeachers = function () {

        return $http.get("/Teacher/GetFuncionario");
    }

    //Método responsável por Adicionar Funcionário: CREATE
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