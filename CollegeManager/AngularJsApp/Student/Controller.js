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
                Swal.fire({
                    title: 'Student successfully added',
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
                    title: 'Error adding student',
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
                Swal.fire({
                    title: 'Student successfully updated',
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
                    title: 'Error updating student',
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

                Swal.fire({
                    title: 'Student successfully deleted',
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