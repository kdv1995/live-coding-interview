// Relational Databases(SQL)
// What is a relational database ?
//
//   Answer : A relational database is a type of database that stores and provides access to data points that are related to one another.Data in a relational database is stored in tables(relations), which consist of rows and columns.
// What is normalization ?
//
//   Answer : Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.The process involves dividing a database into two or more tables and defining relationships between the tables.
// What are the different normal forms ?
//
//   Answer : The different normal forms are:
// First Normal Form(1NF): Ensures that each column contains atomic values and each record is unique.
// Second Normal Form(2NF): Meets all requirements of 1NF and all non - key attributes are fully functional dependent on the primary key.
// Third Normal Form(3NF): Meets all requirements of 2NF and all attributes are not only fully functionally dependent on the primary key but are also non - transitively dependent.
// What is a primary key ?
//
//   Answer : A primary key is a unique identifier for a record in a table.It must contain unique values and cannot contain NULL values.
// What is a foreign key ?
//
//   Answer : A foreign key is a field(or collection of fields) in one table that uniquely identifies a row of another table.The foreign key establishes a link between the data in the two tables.
// What is SQL injection and how can it be prevented ?
//
//   Answer : SQL injection is a code injection technique that might destroy your database.It is one of the most common web hacking techniques.It can be prevented by using parameterized queries, stored procedures, and input validation.
//     Explain the ACID properties in a database system.
//
//       Answer: ACID stands for Atomicity, Consistency, Isolation, and Durability:
//         Atomicity: Ensures that all operations within a transaction are completed successfully; otherwise, the transaction is aborted.
//           Consistency: Ensures that a transaction brings the database from one valid state to another.
//             Isolation: Ensures that transactions occur independently without interference.
//               Durability: Ensures that once a transaction is committed, it will remain so, even in the event of a power loss, crash, or error.
