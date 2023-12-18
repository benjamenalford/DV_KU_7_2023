# ETL with S3, PySpark, and RDS

In this activity, you will clean the data from an Excel spreadsheet, which has been exported as a CSV, and then create an SQL database with the data. In other words, you will perform ETL.

## Instructions

Review the SQL table schema that reflects the requirements for the new database. You will use S3 for file storage and RDS to host SQL databases.

Complete the following tasks:

* Upload the CSV file to S3. **Note:** be sure to make the S3 bucket public.

* Use Spark on Colab to clean and transform the data.

* Use pgAdmin to create the table schema in RDS.

* Load the data from Pandas DataFrames into RDS.

## References

Microsoft GitHub repository (2022). "Employee.csv." SQL Server Samples, oltp-install-script. Retrieved from [GitHub](https://github.com/microsoft/sql-server-samples/blob/master/samples/databases/adventure-works/oltp-install-script/Employee.csv).

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
