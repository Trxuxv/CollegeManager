//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CollegeManager.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Teacher
    {
        public Teacher()
        {
            this.Courses = new HashSet<Course>();
        }
    
        public int TeacherId { get; set; }
        public string Name { get; set; }
        public Nullable<System.DateTime> Birthday { get; set; }
        public Nullable<double> Salary { get; set; }
    
        public virtual ICollection<Course> Courses { get; set; }
    }
}
