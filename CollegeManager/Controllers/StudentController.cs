﻿using CollegeManager.Models;
using CollegeManager.Models.StudentsModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CollegeManager.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetStudents()
        {
            using (var db = new CollegeEntities())
            {
                var listStudents = db.Students.Select(x => new StudentModel
                {
                    StudentId = x.StudentId,
                    Name = x.Name,
                    CourseName = x.Course.Name,
                    CourseId = x.CourseId,
                    Birthday = x.Birthday,
                    RgNumber = x.RgNumber
                }).ToList();

                return Json(listStudents, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult AddStudent(Student student)
        {
            if (student != null)
            {
                using (var db = new CollegeEntities())
                {
                    db.Students.Add(student);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }
    }
}