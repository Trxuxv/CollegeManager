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
                Swal.fire({
                    title: 'Error',
                    width: 400,
                    height: 30,
                    icon: 'error',
                    position: 'top-end',
                    padding: '3em',
                    color: '#fff',
                    background: '#0d1117',
                    showConfirmButton: false,
                    timer: 900
                })
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
                Swal.fire({
                    title: 'Grade successfully updated',
                    width: 400,
                    height: 30,
                    icon: 'success',
                    position: 'top-end',
                    padding: '3em',
                    color: '#fff',
                    background: '#0d1117',
                    showConfirmButton: false,
                    timer: 900
                })

                $scope.clearData();
            } else {
                Swal.fire({
                    title: 'Error',
                    width: 400,
                    height: 30,
                    icon: 'error',
                    position: 'top-end',
                    padding: '3em',
                    color: '#fff',
                    background: '#0d1117',
                    showConfirmButton: false,
                    timer: 900
                }) }
        },
            function () {
                Swal.fire({
                    title: 'Error',
                    width: 400,
                    height: 30,
                    icon: 'error',
                    position: 'top-end',
                    padding: '3em',
                    color: '#fff',
                    background: '#0d1117',
                    showConfirmButton: false,
                    timer: 900
                })
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
                Swal.fire({
                    title: 'Grade successfully updated',
                    width: 400,
                    height: 30,
                    icon: 'success',
                    position: 'top-end',
                    padding: '3em',
                    color: '#fff',
                    background: '#0d1117',
                    showConfirmButton: false,
                    timer: 900
                })
                $scope.clearUpdatedData();
            }
            else {
                Swal.fire({
                    title: 'Error',
                    width: 400,
                    height: 30,
                    icon: 'error',
                    position: 'top-end',
                    padding: '3em',
                    color: '#fff',
                    background: '#0d1117',
                    showConfirmButton: false,
                    timer: 900
                })
            }
        },
            function () {
                Swal.fire({
                    title: 'Error',
                    width: 400,
                    height: 30,
                    icon: 'error',
                    position: 'top-end',
                    padding: '3em',
                    color: '#fff',
                    background: '#0d1117',
                    showConfirmButton: false,
                    timer: 900
                })
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
                Swal.fire({
                    title: 'Grade successfully deleted',
                    width: 400,
                    height: 30,
                    icon: 'success',
                    position: 'top-end',
                    padding: '3em',
                    color: '#fff',
                    background: '#0d1117',
                    showConfirmButton: false,
                    timer: 900
                })
            }
            else {
                Swal.fire({
                    title: 'Error deleting student',
                    width: 400,
                    height: 30,
                    icon: 'error',
                    position: 'top-end',
                    padding: '3em',
                    color: '#fff',
                    background: '#0d1117',
                    showConfirmButton: false,
                    timer: 900
                })
            }
        });
    }
});