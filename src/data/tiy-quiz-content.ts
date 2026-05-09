export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  isTrueFalse?: boolean;
}

export interface Quiz {
  id: string;
  name: string;
  questions: QuizQuestion[];
}

export const tiyQuizContent: Record<string, Quiz> = {
  quiz1: {
    id: "quiz1",
    name: "Quiz 1",
    questions: [
      // Lists (4 questions)
      {
        id: 1,
        question: "Which of the following is the correct way to create a list in Python?",
        options: ["my_list = {}", "my_list = []", "my_list = ()", "my_list = <>"],
        correctAnswer: 1,
        explanation: "Lists are created using square brackets []."
      },
      {
        id: 2,
        question: "What will be the output of: print([1, 2, 3][0])?",
        options: ["1", "2", "3", "Error"],
        correctAnswer: 0,
        explanation: "Index 0 accesses the first element, which is 1."
      },
      {
        id: 3,
        question: "Which method is used to add an element to the end of a list?",
        options: ["add()", "append()", "insert()", "extend()"],
        correctAnswer: 1,
        explanation: "append() adds an element to the end of a list."
      },
      {
        id: 4,
        question: "True or False: Lists can store items of different data types.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "Python lists can contain integers, strings, floats, and other types together.",
        isTrueFalse: true
      },
      // Tuples (3 questions)
      {
        id: 5,
        question: "What is the main difference between a list and a tuple?",
        options: ["Tuples can have more elements", "Lists are mutable, tuples are immutable", "Tuples use square brackets", "There is no difference"],
        correctAnswer: 1,
        explanation: "Lists can be modified after creation, but tuples cannot be changed."
      },
      {
        id: 6,
        question: "Which code creates a tuple correctly?",
        options: ["my_tuple = [1, 2, 3]", "my_tuple = (1, 2, 3)", "my_tuple = {1, 2, 3}", "my_tuple = <1, 2, 3>"],
        correctAnswer: 1,
        explanation: "Tuples are created using parentheses ()."
      },
      {
        id: 7,
        question: "True or False: You can add new elements to a tuple after it's created.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "Tuples are immutable - they cannot be modified after creation.",
        isTrueFalse: true
      },
      // Sets (3 questions)
      {
        id: 8,
        question: "What will happen if you try to add a duplicate to a set?",
        options: ["It will be added twice", "It will be ignored", "It will cause an error", "It will replace the existing value"],
        correctAnswer: 1,
        explanation: "Sets only store unique values - duplicates are automatically ignored."
      },
      {
        id: 9,
        question: "Which operator is used to find the union of two sets?",
        options: ["+", "&", "|", "-"],
        correctAnswer: 2,
        explanation: "The | (pipe) operator returns the union of two sets (all unique elements from both)."
      },
      {
        id: 10,
        question: "True or False: Sets maintain the order of elements.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "Sets are unordered - they do not maintain insertion order.",
        isTrueFalse: true
      },
      // Dictionaries (4 questions)
      {
        id: 11,
        question: "How do you access the value associated with the key 'name' in a dictionary?",
        options: ["dict.name", "dict['name']", "dict[0]", "dict.get(1)"],
        correctAnswer: 1,
        explanation: "Dictionary values are accessed using square brackets with the key."
      },
      {
        id: 12,
        question: "What will dict.get('age', 'Not found') return if 'age' key doesn't exist?",
        options: ["null", "Error", "Not found", "undefined"],
        correctAnswer: 2,
        explanation: "The get() method returns the default value (second argument) when key doesn't exist."
      },
      {
        id: 13,
        question: "Which method returns all the keys of a dictionary?",
        options: ["dict.values()", "dict.keys()", "dict.items()", "dict.get()"],
        correctAnswer: 1,
        explanation: "keys() returns all keys in the dictionary."
      },
      {
        id: 14,
        question: "True or False: Dictionary keys must be unique.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "Each key in a dictionary must be unique - duplicate keys will overwrite previous values.",
        isTrueFalse: true
      },
      // Strings (2 questions)
      {
        id: 15,
        question: "What does the string method .upper() do?",
        options: ["Removes spaces", "Converts to lowercase", "Converts to uppercase", "Reverses the string"],
        correctAnswer: 2,
        explanation: "The .upper() method converts all characters to uppercase."
      },
      {
        id: 16,
        question: "What is the output of: print('Hello' + 'World')?",
        options: ["Hello World", "HelloWorld", "Error", "Hello + World"],
        correctAnswer: 1,
        explanation: "The + operator concatenates (joins) strings together without any space."
      },
      // Week 1 Basics (4 questions)
      {
        id: 17,
        question: "What data type does input() always return?",
        options: ["Integer", "Float", "String", "Boolean"],
        correctAnswer: 2,
        explanation: "The input() function always returns a string, regardless of what the user enters."
      },
      {
        id: 18,
        question: "Which of the following is a valid variable name in Python?",
        options: ["2name", "my-variable", "student_name", "class"],
        correctAnswer: 2,
        explanation: "Variable names can contain letters, numbers, and underscores, but cannot start with a number."
      },
      {
        id: 19,
        question: "What will print(type(5)) output?",
        options: ["<class 'str'>", "<class 'int'>", "<class 'float'>", "<class 'number'>"],
        correctAnswer: 1,
        explanation: "The integer 5 is of type 'int' (integer)."
      },
      {
        id: 20,
        question: "True or False: The print() function can output multiple values separated by commas.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "print('Hello', 'World') outputs 'Hello World' with a space between them.",
        isTrueFalse: true
      }
    ]
  }
};