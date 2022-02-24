namespace CollegeManager.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class CollegeManagerEntities : DbContext
    {
        public CollegeManagerEntities()
            : base("name=CollegeManagerEntities")
        {
            this.Configuration.LazyLoadingEnabled = false;
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<Course> Courses { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<sysdiagram> sysdiagrams { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
    }
}