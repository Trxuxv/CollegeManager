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
            studentId: $scope.studentId,
            name: $scope.name,
            rgnumber: $scope.rgnumber,
            birthday: $scope.birthday,
            courseid: $scope.courseid,
        };

        var addInfos = studentService.addStudent(student);

        addInfos.then(function (d) {
            if (d.data.success === true) {
                loadStudents();
                alert("Student added succesfuly!");

                $scope.clearData();
            } else { alert("Student wasn't added!"); }
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

    $scope.updateStudentById = function (student) {
        $scope.UpdatedStudentId = student.StudentId,
        $scope.UpdatedName = student.Name;
        $scope.UpdatedBirthday = student.Birthday;
        $scope.UpdatedCourseId = student.CourseId;
        $scope.UpdatedRgNumber = student.RgNumber;
    }

    $scope.updateStudent = function () {
        var student = {
            StudentId: $scope.UpdatedStudentId,
            Name: $scope.UpdatedName,
            Birthday: $scope.UpdatedBirthday,
            RgNumber: $scope.UpdatedRgNumber,
            CourseId: $scope.UpdatedCourseId,
        };
        var refreshInfos = studentService.updateStudent(student);
        refreshInfos.then(function (d) {
            if (d.data.success === true) {
                loadStudents();
                alert("Student updated successfuly!");
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
        $scope.UpdatedStudentId = '';
        $scope.UpdatedName = '';
        $scope.UpdatedBirthday = '';
        $scope.UpdatedCourseId = '';
        $scope.UpdatedRgNumber = '';
    }

    $scope.deleteStudentById = function (student) {
        $scope.UpdatedStudentId = student.StudentId;
        $scope.UpdatedName = student.Name;
    }

    $scope.deleteStudent = function (UpdatedStudentId) {

        var deleteInfos = studentService.deleteStudent($scope.UpdatedStudentId);
        deleteInfos.then(function (d) {

            if (d.data.success === true) {
                loadStudents();

                alert("Funcionário excluído com Sucesso!");
            }
            else {
                alert("Funcionário não excluído!");
            }
        });
    }
});