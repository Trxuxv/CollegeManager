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
                Swal.fire({
                    title: 'Teacher successfully added',
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
            } else { alert("Teacher wasn't added!"); }
        },
            function () {
                Swal.fire({
                    title: 'Failed',
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
                Swal.fire({
                    title: 'Teacher successfully updated',
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
                    title: 'Failed',
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
                    title: 'Failed',
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

    $scope.deleteTeacherById = function (teacher) {
        $scope.UpdatedTeacherId = teacher.TeacherId;
        $scope.UpdatedName = teacher.Name;
    }

    $scope.deleteTeacher = function (UpdatedTeacherId) {

        var deleteInfos = teacherService.deleteTeacher($scope.UpdatedTeacherId);
        deleteInfos.then(function (d) {

            if (d.data.success === true) {
                loadTeachers();

                Swal.fire({
                    title: 'Teacher successfully deleted',
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
                    title: 'Failed',
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