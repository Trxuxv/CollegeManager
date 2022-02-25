gradeApp.controller('gradeCtrl', function ($scope, gradeService) {

    loadGrades();

    function loadGrades() {
        var listGrades = gradeService.getAllGrades();

        listGrades.then(function (d) {
            console.log(d)
            $scope.Grades = d.data;
        },
            function (erro) {
                console.log(erro)
                alert("Error: get grades");
            });
    }

    $scope.addGrade = function () {

        var grade = {
            gradeId: $scope.gradeId,
            studentId: $scope.studentId,
            gradeDescription: $scope.gradeDescription,
            subjectId: $scope.subjectId,
            courseId: $scope.courseId,
        };

        var addInfos = gradeService.addGrade(grade);

        addInfos.then(function (d) {
            if (d.data.success === true) {
                loadGrades();
                alert("Grade added succesfuly!");

                $scope.clearData();
            } else { alert("Grade wasn't added!"); }
        },
            function () {
                alert("Ocorreu um erro ao tentar adicionar um Novo grade!");
            });
    }

    $scope.clearData = function () {
        $scope.teacherId = "";
        $scope.name = "";
        $scope.birthday = "";
        $scope.salary = "";
    }

    $scope.updateGradeById = function (grade) {
        $scope.UpdatedGradeId = grade.GradeId;
        $scope.UpdatedSubjectId = grade.SubjectId;
        $scope.UpdatedStudentId = grade.StudentId;
        $scope.UpdatedGradeDescription = grade.GradeDescription;
    }

    $scope.updateGrade = function () {
        var grade = {
            GradeId: $scope.UpdatedGradeId,
            GradeDescription: $scope.UpdatedGradeDescription,
            StudentId: $scope.UpdatedStudentId,
            SubjectId: $scope.UpdatedSubjectId,
        };
        var refreshInfos = gradeService.updateGrade(grade);
        refreshInfos.then(function (d) {
            if (d.data.success === true) {
                loadGrades();
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

    $scope.deleteGradeById = function (grade) {
        $scope.UpdatedGradeId = grade.GradeId;
        $scope.UpdatedStudentId = grade.StudentId;
    }

    $scope.deleteGrade = function (UpdatedGradeId) {

        var deleteInfos = gradeService.deleteGrade($scope.UpdatedGradeId);
        deleteInfos.then(function (d) {

            if (d.data.success === true) {
                loadGrades();

                alert("Funcionário excluído com Sucesso!");
            }
            else {
                alert("Funcionário não excluído!");
            }
        });
    }
});