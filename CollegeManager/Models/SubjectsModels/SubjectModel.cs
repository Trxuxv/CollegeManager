namespace CollegeManager.Models.SubjectsModels
{
    public class SubjectModel
    {
        public int SubjectId { get; set; }
        public string Name { get; set; }
        public int CourseId { get; set; }
        public bool Approved { get; set; }
        public string CourseName { get; set; }
    }
}