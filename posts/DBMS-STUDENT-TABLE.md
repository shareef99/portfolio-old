---
title: "DBMS Student table."
description: "Solution to DBMS student problem"
author: "Shareef"
date: "25-nov-2021"
blogNo: 3
---

**Illustrate an example to create a table student, student table will content the following attributes, stdid, stdname, dob, doj, fee, gender etc.**

**Write the following queries:**

-   Describe the structure of the table.
-   Insert few records into student table.
-   Add column to the student table (that is phone_no).
-   Modify the column name of phone_no to student_no.
-   Rename the table name to student_info
-   Delete any records from the table.

## Solution

**Creating student table.**

```sql

create table student (
    stdid number(5),
    stdname varchar2(20),
    dob date,
    doj date,
    fee number(5),
    gender char
);


```

**Describe the structure of the table.**

```sql

DESC STUDENT;

```

**Insert few records into student table.**

```sql

INSERT INTO STUDENT (
	stdid, stdname, dob, doj, fee, gender
)
VALUES (1, "SHAREEF", 20-01-2001, 25-10-2001, 10000, "M");

```

> Inserting second record.

```sql

INSERT INTO STUDENT (
	stdid, stdname, dob, doj, fee, gender
)
VALUES (2, "NADEEM", 17-11-2019, 26-10-2001, 11000, "M");

```

> Here I am just inserting two records you can insert as many as you want.

**Add column to the student table (that is phone_no).**

```sql
ALTER TABLE STUDENT ADD PHONE_NO NUMBER(10);
```

**Modify the column name of phone_no to student_no.**

```sql

ALTER TABLE STUDENT RENAME COLUMN PHONE_NO TO STUDENT_NO;

```

**Rename the table name to student_info.**

```sql

ALTER TABLE STUDENT RENAME TO STUDENT_INFO;

```

**Delete any records from the table.**

```sql

DELETE FROM STUDENT_INFO WHERE STDID = 2;

```

Note:- DBMS is not a strictly type language, meaning if you write in small letter or capital letter
it doesn't make any difference, It is good practice to write everything in capital letter.
