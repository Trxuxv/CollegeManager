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
                Swal.fire({
                    title: 'Subject successfully added',
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
                    title: 'Error subject',
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
                    title: 'Error ading subject',
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
                Swal.fire({
                    title: 'Subject successfully updated',
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
                    title: 'Error updating subject',
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
                    title: 'Error updating subject',
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
        $scope.UpdatedSubjectId = '';
        $scope.UpdatedName = '';
        $scope.UpdatedCourseId = '';
    }

    $scope.deleteSubjectById = function (subject) {
        $scope.UpdatedSubjectId = subject.SubjectId;
        $scope.UpdatedName = subject.Name;
    }

    $scope.deleteSubject = function (UpdatedSubjectId) {

        var deleteInfos = subjectService.deleteSubject($scope.UpdatedSubjectId);
        deleteInfos.then(function (d) {

            if (d.data.success === true) {
                loadSubjects();

                Swal.fire({
                    title: 'Subject successfully deleted',
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
                    title: 'Error deleting jubject',
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