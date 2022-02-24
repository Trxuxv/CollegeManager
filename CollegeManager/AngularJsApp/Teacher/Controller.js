teacherApp.controller('teacherCtrl', function ($scope, teacherService) {

    loadTeachers();

    function loadTeachers() {
        var listTeachers = teacherService.getAllTeachers();

        listTeachers.then(function (d) {
            console.log(d)
            $scope.Teachers = d.data;
        },
            function (erro) {
                console.log(erro)
                alert("Error: get teachers");
            });
    }

    $scope.addTeacher = function () {

        var teacher = {
            teacherId: $scope.teacherId,
            name: $scope.name,
            birthday: $scope.birthday,
            salary: $scope.salary,
        };

        var addInfos = teacherService.addTeacher(teacher);

        addInfos.then(function (d) {
            if (d.data.success === true) {
                loadTeachers();
                alert("Teacher added succesfuly!");

                $scope.clearData();
            } else { alert("Teacher wasn't added!"); }
        },
            function () {
                alert("Ocorreu um erro ao tentar adicionar um Novo Funcionário!");
            });
    }

    $scope.clearData = function () {
        $scope.teacherId = "";
        $scope.name = "";
        $scope.birthday = "";
        $scope.salary = "";
        $scope.course = "";
    }

});