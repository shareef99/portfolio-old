---
title: "How to write DSA lab exam."
description: "The most annoying thing in the lab exams is errors while executing programs. In this post, I will show you how to resolve DSA(C++) common errors and explain to you the reason behind them."
author: "Shareef"
date: "12-mar-2021"
blogNo: 2
---

## Why DSA lab is important🤔?

DSA stands for Data Structures and Algorithm. Data structures and algorithms are the favorites topics of the interviewer, no matter for which programming job you apply they will embarrass you by asking you to invert a binary tree, so to embarrass them back let's understand DSA well.

C/C++ also refer as the mother of programming languages, understanding C++ will help us in the future to migrate to our favorite programming language. By chance, if you started liking coding in C++ no doubt you can build great things.

**Important** This blog is written keeping in mind that beginners will read this more if you are a pro in C++ and find mistakes in it, you can **[contact](mailto:nadeemshareef934@gmail.com)** me.

### Now, without a further due, Let's get started

Errors we are going to resolve here

-   Error no match for 'operator<<' / 'operator>>'.
-   Error missing template argument.
-   Error expected ';' after class definition.
-   null is not declare in this scope.
-   end1 is not declared in this scope.

### Error no match for 'operator<<' / 'operator>>'

```c++
    cout << "Enter number: " << endl;
    cin << num;
```

The error is in 'cin' line.  
This is a very simple error, you have misplaced the 'cin' and 'cout' operators
i.e., use '<<' with cout and '>>' with cin.  
Whooo! error resolved

### Error missing template argument

This error shows up from the _main_ block because you have not passed the type to your template.  
Templates are generic types, we have to specify their type in the _main_ block.  
**Syntax**:  
T\<type\> templateName

### Error expected ';' after class definition

Ah! this is a very common mistake anyone can fall into and this one is too easy to handle as well, you just forget to put ';' at the end of class declaration.

```c++
    class myClass {
        public:
            int data;
    }
```

This code will throw an error, guess why? because we forget to put ' ; ' at the end

### null is not declare in this scope

```c++
    Node* root = null;
```

This throw error.  
you have copied the exact code but still getting errors? don't worry you are not alone, you just have to capitalize the 'null'  
Correct code

```c++
    Node/ root = NULL;
```

### end1 is not declared in this scope

```c++
    cout << "This blog post is awesome!" << end1;
```

This throw error.  
Maybe you have written ' 1 ' instead of ' l '.

```c++
    cout << "Error is gone" << endl;
```

> **_If you don't find your bug in here. Remember programming is the art of googling. #justGoogleIt_**  
> -Shareef
