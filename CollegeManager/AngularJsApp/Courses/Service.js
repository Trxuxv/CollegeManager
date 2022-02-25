courseApp.service('courseService', function ($http) {

    this.getAllCourses = function () {

        return $http.get("/Course/GetCourse");
    }

    this.getAllTeachers = function () {
        return $http.get("/Teacher/GetTeachers");
    }

    this.addCourse = function (course) {

        var request = $http({
            method: 'post',
            url: '/Course/AddCourse',
            data: course
        });

        return request;
    }

    this.updateCourse = function (course) {

        var requestAtualizado = $http({
            method: 'post',
            url: '/Course/UpdateCourse',
            data: course
        });
        return requestAtualizado;
    }

    this.deleteCourse = function (UpdatedCourseId) {

        return $http.post('/Course/DeleCourse/' + UpdatedCourseId);
    }
});