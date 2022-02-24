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
    }

    $scope.updateTeacherById = function (teacher) {
        $scope.UpdatedTeacherId = teacher.TeacherId,
        $scope.UpdatedName= teacher.Name;
        $scope.UpdatedBirthday = teacher.Birthday;
        $scope.UpdatedSalary = teacher.Salary;
    }

    $scope.updateTeacher = function () {
        var teacher = {
            TeacherId: $scope.UpdatedTeacherId,
            Name: $scope.UpdatedName,
            Birthday: $scope.UpdatedBirthday,
            Salary: $scope.UpdatedSalary,
        };
        var refreshInfos = teacherService.updateTeacher(teacher);
        refreshInfos.then(function (d) {
            if (d.data.success === true) {
                loadTeachers();
                alert("Funcionario Atualizado com Sucesso!");
                $scope.clearUpdatedData();
            }
            else {
                alert("Funcionário não Atualizado");
            }
        },
            function () {
                alert("Ocorreu um erro ao tentar atualizar o Funcionário!");
            });
    }

    $scope.clearUpdatedData = function () {
        $scope.UpdatedTeacherId = '';
        $scope.UpdatedName = '';
        $scope.UpdatedBirthday = '';
        $scope.UpdatedSalary = '';
    }

    $scope.deleteTeacherById = function (teacher) {
        $scope.UpdatedTeacherId = teacher.TeacherId;
        $scope.UpdatedName = teacher.Name;
    }

    $scope.deleteTeacher = function (UpdatedTeacherId) {

        var deleteInfos = teacherService.deleteTeacher($scope.UpdatedTeacherId);
        deleteInfos.then(function (d) {

            if (d.data.success === true) {
                loadTeachers();

                alert("Funcionário excluído com Sucesso!");
            }
            else {
                alert("Funcionário não excluído!");
            }
        });
    }
});