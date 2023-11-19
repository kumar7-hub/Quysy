export default [
    {
        id: 1,
        question : "Who invented C++?",
        options : [
            "Dennis Ritchie",
            "Ken Thompson",
            "Brian Kernighan",
            "Bjarne Stroustrup",
        ],
    },
    {
        id: 2,
        question : "What is C++?",
        options : [
            "C++ is an object oriented programming language",
            "C++ is a procedural programming language",
            "C++ supports both procedural and object oriented programming language",
            "C++ is a functional programming language",
        ],
    },
    {
        id: 3,
        question : "Which of the following is the correct syntax of including a user defined header files in C++?",
        options : [
           "#include [userdefined]",
           "#include \"userdefined\"",
           "#include <userdefined.h>",
           "#include <userdefined>",
        ],
    },
    {
        id: 4,
        question : "What is virtual inheritance in C++?",
        options : [
            "C++ technique to enhance multiple inheritance",
            "C++ technique to ensure that a private member of the base class can be accessed somehow",
            "C++ technique to avoid multiple inheritances of classes",
            "C++ technique to avoid multiple copies of the base class into children/derived class",
        ]
    },
    {
        id : 5,
        question: "Which of the following correctly declares an array in C++?",
        options : [
            "array{10};",
            "array array[10];",
            "int array[10];",
            "int array;",
        ]
    },
    {
        id: 6,
        question : "Which keyword is used to create a class in C++?",
        options : [
            "class",
            "class()",
            "ClassName",
            "Myclass",
        ]
    },
    {
        id: 7,
        question : "The C++ code which causes abnormal termination/behaviour of a program should be written under _________ block.",
        options : [
            "catch",
            "throw",
            "try",
            "finally",
        ]
    },
    {
        id: 8,
        question : "Which concept allows you to reuse the written code in C++?",
        options : [
            "inheritance",
            "polymorphism",
            "abstraction",
            "encapsulation",
        ]
    },
    {
        id: 9,
        question : "How structures and classes in C++ differ?",
        options : [
            "Structures by default hide every member whereas classes do not",
            "In Structures, members are public by default whereas, in Classes, they are private by default",
            "Structures cannot have private members whereas classes can have",
            "In Structures, members are private by default whereas, in Classes, they are public by default",
        ]
    },
    {
        id: 10,
        question : "How many bytes are occupied by the double data type in C++?",
        options : [
            "4",
            "2",
            "1",
            "8",
        ]
    }
]

export const answers = [3, 2, 1, 3, 2, 0, 2, 0, 1, 3];