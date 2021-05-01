create table dbo.Loans(
LoanID int identity(1,1),
CustomerFullName varchar(1000),
CustomerNameWithInitial varchar(1000),
CustomerNIC varchar(20),
CustomerAge int,
CustomerAddress varchar(2000),
LoanAmount int,
LoanInterest int,
LoanTerm int,
LoanInstallment int
)
