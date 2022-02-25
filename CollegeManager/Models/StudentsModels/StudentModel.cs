namespace CollegeManager.Models.StudentsModels
{
    public class StudentModel
    {
        public int StudentId { get; set; }
        public string Name { get; set; }
        public int RgNumber { get; set; }
        public System.DateTime Birthday { get; set; }
        public int CourseId { get; set; }
        public string CourseName { get; set; }
    }
}