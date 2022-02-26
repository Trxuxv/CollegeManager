courseApp.controller('courseCtrl', function ($scope, courseService) {

    loadCourses();

    function loadCourses() {
        var listCourses = courseService.getAllCourses();

        listCourses.then(function (d) {
            $scope.Courses = d.data;
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

    $scope.addCourse = function () {

        var course = {
            courseId: $scope.courseId,
            name: $scope.name,
            duration: $scope.duration,
            category: $scope.category,
            teacherId: $scope.teacherId,
        };

        var adicionarInfos = courseService.addCourse(course);

        adicionarInfos.then(function (d) {
            if (d.data.success === true) {
                loadCourses();
                Swal.fire({
                    title: 'Course successfully added',
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
                }) }
        },
            function () {
                Swal.fire({
                    title: 'Error adding course',
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
        $scope.courseId = "";
        $scope.name = "";
        $scope.duration = "";
        $scope.category = "";
        $scope.teacherId = "";
    }

    $scope.updateCourseById = function (course) {
        $scope.UpdatedCourseId = course.CourseId,
            $scope.UpdatedName = course.Name;
        $scope.UpdatedDuration = course.Duration;
        $scope.UpdatedCategory = course.Category;
        $scope.UpdatedTeacherId = course.TeacherId;
    }

    $scope.updateCourse = function () {
        var course = {
            CourseId: $scope.UpdatedCourseId,
            Name: $scope.UpdatedName,
            Duration: $scope.UpdatedDuration,
            Category: $scope.UpdatedCategory,
            TeacherId: $scope.UpdatedTeacherId,
        };
        var refreshInfos = courseService.updateCourse(course);
        refreshInfos.then(function (d) {
            if (d.data.success === true) {
                loadCourses();
                Swal.fire({
                    title: 'Course successfully updated',
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
                alert("Course not updated");
            }
        },
            function () {
                Swal.fire({
                    title: 'Error updating course',
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
        $scope.UpdatedCourseId = '';
        $scope.UpdatedName = '';
        $scope.UpdatedDuration = '';
        $scope.UpdatedCategory = '';
        $scope.UpdatedTeacherId = '';
    }

    $scope.deleteCourseById = function (course) {
        $scope.UpdatedCourseId = course.CourseId;
        $scope.UpdatedName = course.Name;
    }

    $scope.deleteCourse = function (UpdatedCourseId) {

        var deleteInfos = courseService.deleteCourse($scope.UpdatedCourseId);
        deleteInfos.then(function (d) {

            if (d.data.success === true) {
                loadCourses();

                Swal.fire({
                    title: 'Course successfully deleted',
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
                    title: 'Error deleting course',
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