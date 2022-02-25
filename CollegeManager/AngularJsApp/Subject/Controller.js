subjectApp.controller('subjectCtrl', function ($scope, subjectService) {

    loadSubjects();

    function loadSubjects() {
        var listSubjects = subjectService.getAllSubjects();

        listSubjects.then(function (d) {
            console.log(d)
            $scope.Subjects = d.data;
        },
            function (erro) {
                console.log(erro)
                alert("Error: get subjects");
            });
    }

    $scope.addSubject = function () {

        var subject = {
            subjectId: $scope.subjectId,
            name: $scope.name,
            courseId: $scope.courseId,
        };

        var addInfos = subjectService.addSubject(subject);

        addInfos.then(function (d) {
            if (d.data.success === true) {
                loadSubjects();
                alert("Subject added succesfuly!");

                $scope.clearData();
            } else { alert("Subject wasn't added!"); }
        },
            function () {
                alert("Ocorreu um erro ao tentar adicionar um Novo Subject!");
            });
    }

    $scope.clearData = function () {
        $scope.subjectId = "";
        $scope.name = "";
        $scope.courseId = "";
    }

    $scope.updateSubjectById = function (subject) {
        $scope.UpdatedSubjectId = subject.SubjectId;
        $scope.UpdatedName = subject.Name;
        $scope.UpdatedCourseId = subject.CourseId;
    }

    $scope.updateSubject = function () {
        var subject = {
            SubjectId: $scope.UpdatedSubjectId,
            Name: $scope.UpdatedName,
            CourseId: $scope.UpdatedCourseId,
        };
        var refreshInfos = subjectService.updateSubject(subject);
        refreshInfos.then(function (d) {
            if (d.data.success === true) {
                loadSubjects();
                alert("Subject updated successfuly!");
                $scope.clearUpdatedData();
            }
            else {
                alert("Subject não Atualizado");
            }
        },
            function () {
                alert("Ocorreu um erro ao tentar atualizar o Funcionário!");
            });
    }

    $scope.clearUpdatedData = function () {
        $scope.UpdatedSubjectId = '';
        $scope.UpdatedName = '';
        $scope.UpdatedCourseId = '';
    }

    $scope.deleteSubjectById = function (subject) {
        $scope.UpdatedSubjectId = course.SubjectId;
        $scope.UpdatedName = course.Name;
    }

    $scope.deleteSubject = function (UpdatedSubjectId) {

        var deleteInfos = subjectService.deleteSubject($scope.UpdatedSubjectId);
        deleteInfos.then(function (d) {

            if (d.data.success === true) {
                loadCourses();

                alert("Subject deleted successfuly!");
            }
            else {
                alert("Subject não excluído!");
            }
        });
    }
});