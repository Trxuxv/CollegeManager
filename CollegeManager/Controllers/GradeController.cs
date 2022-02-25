using CollegeManager.Models;
using CollegeManager.Models.GradesModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CollegeManager.Controllers
{
    public class GradeController : Controller
    {
        // GET: Grade
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetGrades()
        {
            using (var db = new Entities())
            {
                var listGrades = db.Grades.Select(x => new GradeModel
                {
                    GradeId = x.GradeId,
                    GradeDescription = x.GradeDescription,
                    StudentId = x.StudentId,
                    StudentName = x.Student.Name,
                    CourseId = x.CourseId,
                    CourseName = x.Course.Name,
                    CourseNameTeacher = x.Course.Teacher.Name,
                    SubjectId = x.SubjectId,
                    SubjectName = x.Subject.Name
                }).ToList();

                return Json(listGrades, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult AddTeacher(Teacher teacher)
        {
            if (teacher != null)
            {
                using (var db = new Entities())
                {
                    db.Teachers.Add(teacher);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        [HttpPost]
        public JsonResult UpdateTeacher(Teacher teacher)
        {
            using (var db = new Entities())
            {
                var teacherUpdated = db.Teachers.Find(teacher.TeacherId);

                if (teacherUpdated == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    teacherUpdated.Name = teacher.Name;
                    teacherUpdated.Birthday = teacher.Birthday;
                    teacherUpdated.Salary = teacher.Salary;

                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
        }

        [HttpPost]
        public JsonResult DeleteTeacher(int id)
        {
            using (var db = new Entities())
            {
                var teacher = db.Teachers.Find(id);
                if (teacher == null)
                {
                    return Json(new { success = false });
                }

                db.Teachers.Remove(teacher);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
    }
}