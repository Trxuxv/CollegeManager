teacherApp.controller('teacherCtrl', function ($scope, teacherService) {

    loadTeachers();

    function loadTeachers() {
        var listTeachers = teacherService.getAllTeachers();

        listTeachers.then(function (d) {
            $scope.Teachers = d.data;
        },
            function () {
                alert("Error: get teachers");
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