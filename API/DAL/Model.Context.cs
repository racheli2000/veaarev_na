﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class veaarev_vaEntities : DbContext
    {
        public veaarev_vaEntities()
            : base("name=veaarev_vaEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Package> Packages { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Donation_for_package> Donation_for_package { get; set; }
        public virtual DbSet<Selected_Products> Selected_Products { get; set; }
        public virtual DbSet<Donation> Donations { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Tormim> Tormims { get; set; }
        public virtual DbSet<products_for_packages> products_for_packages { get; set; }
    }
}
