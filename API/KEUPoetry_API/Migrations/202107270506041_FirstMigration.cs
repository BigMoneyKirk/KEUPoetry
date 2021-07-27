namespace KEUPoetry_API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FirstMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Bookings",
                c => new
                    {
                        BookingID = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Description = c.String(),
                        StartDate = c.DateTime(nullable: false),
                        EndDate = c.DateTime(nullable: false),
                        BookedBy = c.String(),
                        OnHold = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.BookingID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Bookings");
        }
    }
}
