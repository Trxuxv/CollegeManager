courseApp.controller('courseCtrl', function ($scope, courseService) {

    loadCourses();

    $scope.signalError = false;
    $scope.signalSuccess = false;
    $scope.msgSuccess = "";
    $scope.msgError = "";

    function loadCourses() {
        var listCourses = courseService.getAllCourses();

        listCourses.then(function (d) {
            $scope.Courses = d.data;
        },
            function () {
                this.$scope.msgError = "Could not access data";
                setTimeout(() => this.$scope.signalError = true, 5000);
                //alert("Erro!");
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
                setTimeout(() => this.$scope.msgSuccess = true, 5000);

                this.$scope.msgSuccess = "Course added with success.";

                $scope.limparDados();
            } else {
                alert("Funcionário não Adicionado!");
            }
        },
            function () {
                alert("Ocorreu um erro ao tentar adicionar um Novo Funcionário!");
            });
    }

});