// Non-Relational Databases (NoSQL)
// What is a NoSQL database?
//
// Answer: NoSQL databases are designed to store, retrieve, and manage large volumes of unstructured, semi-structured, or structured data. Unlike relational databases, NoSQL databases do not use a fixed schema and can scale horizontally.
// What are the different types of NoSQL databases?
//
// Answer: The different types of NoSQL databases include:
// Document databases (e.g., MongoDB)
// Key-value stores (e.g., Redis, DynamoDB)
// Column-family stores (e.g., Cassandra, HBase)
// Graph databases (e.g., Neo4j)
// What is a document database?
//
// Answer: A document database stores data in JSON, BSON, or XML format. Each document is a self-contained unit of data and can contain nested structures, making it suitable for storing hierarchical data.
// What is the CAP theorem?
//
// Answer: The CAP theorem states that a distributed data store can only achieve two out of the following three guarantees at the same time:
// Consistency: Every read receives the most recent write.
// Availability: Every request receives a response (without guarantee that it contains the most recent write).
// Partition tolerance: The system continues to operate despite arbitrary partitioning due to network failures.
// What are some use cases for using a NoSQL database over a relational database?
//
// Answer: Use cases for NoSQL databases include:
// Handling large volumes of unstructured data
// Real-time web applications (e.g., social media, online gaming)
// Flexible schema design requirements
// High throughput and low latency needs
// Horizontal scalability requirements
// What is eventual consistency in NoSQL databases?
//
// Answer: Eventual consistency is a consistency model used in distributed computing to achieve high availability. It guarantees that, given enough time, all updates will propagate through the system and all nodes will eventually be consistent.
// What is sharding?
//
// Answer: Sharding is a method for distributing data across multiple machines to support horizontal scaling. Each shard is a separate database that contains a subset of the data, and together they form a complete data set.
