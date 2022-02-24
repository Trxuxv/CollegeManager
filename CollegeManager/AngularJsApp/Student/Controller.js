studentApp.controller('studentCtrl', function ($scope, studentService) {

    loadStudents();

    function loadStudents() {
        var listStudents = studentService.getAllStudents();

        listStudents.then(function (d) {
            console.log(d)
            $scope.Students = d.data;
        },
            function (erro) {
                console.log(erro)
                alert("Error: get students");
            });
    }

    $scope.addStudent = function () {

        var student = {
            studentId: $scope.teacherId,
            name: $scope.name,
            rgnumber: $scope.rgnumber,
            birthday: $scope.birthday,
            courseid: $scope.courseid,
        };

        var addInfos = studentService.addStudent(student);

        addInfos.then(function (d) {
            if (d.data.success === true) {
                loadStudents();
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