using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class LoansController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"select * from dbo.Loans";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["LBappDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public Boolean Post(Loans loans)
        {
            try
            {
                string query = @"
                insert into dbo.Loans values 
                ('"+loans.CustomerFullName + @"','" + loans.CustomerNameWithInitial + @"','" + loans.CustomerNIC + @"','" + loans.CustomerAge + @"','" + loans.CustomerAddress + @"','" + loans.LoanAmount + @"','" + loans.LoanInterest + @"','" + loans.LoanTerm + @"','" + loans.LoanInstallment + @"')";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["LBappDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return true;
            }
            catch(Exception)
            {
                return false;
            }
        }


    }
}
