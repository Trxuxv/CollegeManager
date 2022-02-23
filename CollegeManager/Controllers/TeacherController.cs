using System.Collections.Generic;
using CollegeManager.Models;
using System.Web.Mvc;
using System.Linq;

namespace CollegeManager.Controllers
{
    public class TeacherController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetTeachers()
        {
            using (var db = new CollegeManagerEntities())
            {
                List<Teacher> listarFuncionarios = db.Teachers.ToList();

                return Json(listarFuncionarios, JsonRequestBehavior.AllowGet);
            }
        }
    }
}