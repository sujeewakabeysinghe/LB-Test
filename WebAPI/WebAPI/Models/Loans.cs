using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Loans
    {
        public int LoanID { get; set; }
        public string CustomerFullName { get; set; }
        public string CustomerNameWithInitial { get; set; }
        public string CustomerNIC { get; set; }
        public int CustomerAge { get; set; }
        public string CustomerAddress { get; set; }
        public int LoanAmount { get; set; }
        public string LoanInterest { get; set; }
        public string LoanTerm { get; set; }
        public string LoanInstallment { get; set; }

    }
}