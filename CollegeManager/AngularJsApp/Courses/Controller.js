courseApp.controller('courseCtrl', function ($scope, courseService) {

    loadCourses();

    function loadCourses() {
        var listCourses = courseService.getAllCourses();

        listCourses.then(function (d) {
            $scope.Courses = d.data;
        },
            function () {
                alert("Ocorreu um erro ao tentar listar todos os curs!");
            });
    }

    $scope.addCourse = function () {

        var course = {
            courseId: $scope.courseId,
            description: $scope.description,
            duration: $scope.duration,
            minGrade: $scope.minGrade,
        };

        var adicionarInfos = courseService.addCourse(course);

        adicionarInfos.then(function (d) {
            if (d.data.success === true) {
                loadCourses();
                alert("Funcionário Adicionado com Sucesso!");

                $scope.limparDados();
            } else { alert("Funcionário não Adicionado!"); }
        },
            function () {
                alert("Ocorreu um erro ao tentar adicionar um Novo Funcionário!");
            });
    }

});