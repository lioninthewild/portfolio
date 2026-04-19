import CourseClient from "./CourseClient";

const content: Record<string, string> = {
  orientation: `# Welcome to Kashvi

Your programming journey starts here!

---

# What You'll Learn

- Programming fundamentals
- Problem-solving skills
- Building real projects
- How to think like a programmer

---

# Course Structure

- 6 weeks of content
- 6 days per week
- Each day has slides + practice exercises
- Day 6 is review and application

---

# How to Use These Slides

- Use **arrow keys** to navigate between slides
- Click **Previous/Next** buttons for manual navigation
- Progress bar at the bottom shows your position
- Press **F** for fullscreen mode
- Press **Esc** for overview mode

---

# Prerequisites

- No prior programming experience needed
- Just a computer and willingness to learn
- Curiosity and persistence

---

# Let's Begin!

Ready to start your programming journey?

Head to Week 1 when you're ready!`,
  "1-1": `# Week 1, Day 1: Introduction to Programming

## What is Programming?

- Programming is giving instructions to a computer
- It's like writing a recipe for a robot
- The computer follows your steps exactly, one by one

## Why Learn Programming?

- Automate repetitive tasks
- Build apps, websites, and games
- Solve complex problems
- Express your creativity

## Your First Program

The classic first program in any language is called "Hello, World!"

It simply displays the text "Hello, World!" on the screen.

In Python, it's just one line:
\`\`\`
print("Hello, World!")
\`\`\`

---

## Let's Begin!

Type the code above in your editor and run it. Congratulations, you're a programmer!`,
  "1-2": `# Week 1, Day 2: Variables and Data Types

## What are Variables?

Variables are containers for storing data values.

Think of them as labeled boxes where you can put information.

## Creating Variables

In Python, you create a variable by giving it a name and a value:

\`\`\`
name = "Alice"
age = 25
height = 5.6
is_student = True
\`\`\`

## Data Types

Python has several basic data types:

- **String (str)**: Text in quotes → "Hello"
- **Integer (int)**: Whole numbers → 25
- **Float**: Decimal numbers → 5.6
- **Boolean (bool)**: True or False

## Checking Types

Use the \`type()\` function to check what type a variable is:

\`\`\`
print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>
\`\`\`

---

## Practice Time!

Create your own variables and check their types.`,
  "1-3": `# Week 1, Day 3: Getting User Input

## Output vs Input

- **Output**: Printing information to the screen (print())
- **Input**: Getting information from the user

## Getting User Input

In Python, use the \`input()\` function to get user input:

\`\`\`
name = input("What is your name? ")
print("Hello, " + name + "!")
\`\`\`

When this runs, it will:
1. Show the prompt "What is your name?"
2. Wait for the user to type
3. Store what they typed in the \`name\` variable
4. Print the greeting

## Converting Input Types

The \`input()\` function always returns a string!

To work with numbers, convert them:

\`\`\`
age = int(input("Enter your age: "))
price = float(input("Enter the price: "))
\`\`\`

---

## Try It!

Ask the user for their name and age, then print a personalized message.`,
  "1-4": `# Week 1, Day 4: Basic Math Operations

## Math in Python

Python can perform mathematical calculations just like a calculator.

## Basic Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| + | Addition | 5 + 3 = 8 |
| - | Subtraction | 10 - 4 = 6 |
| * | Multiplication | 6 * 7 = 42 |
| / | Division | 15 / 3 = 5 |
| ** | Exponentiation | 2 ** 3 = 8 |
| % | Modulus (remainder) | 17 % 5 = 2 |

## Using Variables with Math

\`\`\`
x = 10
y = 3

print(x + y)    # 13
print(x - y)    # 7
print(x * y)    # 30
print(x / y)    # 3.333...
print(x ** y)   # 1000
print(x % y)    # 1
\`\`\`

## Order of Operations

Python follows mathematical order (PEMDAS):

1. Parentheses ()
2. Exponents **
3. Multiplication * and Division /
4. Addition + and Subtraction -

\`\`\`
result = (10 + 5) * 2   # 30, not 20
\`\`\`

---

## Calculator Challenge!

Build a simple calculator that takes two numbers and performs all operations.`,
  "1-5": `# Week 1, Day 5: Strings and String Operations

## Working with Text

Strings are sequences of characters (text).

You can use single quotes, double quotes, or triple quotes:

\`\`\`
message1 = 'Hello'
message2 = "Hello"
message3 = '''Hello, how are you?'''
\`\`\`

## String Concatenation

Combine strings using +:

\`\`\`
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print(full_name)  # John Doe
\`\`\`

## String Methods

Python provides useful string methods:

\`\`\`
text = "hello world"

print(text.upper())       # HELLO WORLD
print(text.lower())       # hello world
print(text.capitalize())  # Hello world
print(text.title())       # Hello World
print(len(text))          # 11
\`\`\`

## f-Strings (Formatted Strings)

The modern way to embed variables in strings:

\`\`\`
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old.")
\`\`\`

---

## Practice!

Create a program that asks for user's first and last name, then displays a formatted greeting.`,
  "1-6": `# Week 1, Day 6: Review and Practice

## What We Learned This Week

Let's review the key concepts from Week 1:

### Day 1: Introduction
- Programming is giving instructions to a computer
- Your first program: \`print("Hello, World!")\`

### Day 2: Variables & Data Types
- Variables store data: \`name = "Alice"\`
- Types: String, Integer, Float, Boolean

### Day 3: User Input
- Getting input: \`input("prompt")\`
- Converting types: \`int()\`, \`float()\`

### Day 4: Math Operations
- Operators: +, -, *, /, **, %
- Order of operations matters!

### Day 5: Strings
- String methods: .upper(), .lower(), .title()
- f-strings: \`f"Hello {name}"\`

## Mini Project: Personal Greeter

Combine everything you've learned!

Create a program that:
1. Asks for the user's name
2. Asks for their age
3. Asks for their favorite color
4. Prints a formatted message with all this information

## Extra Challenges

- Add input validation
- Calculate the year they'll turn 100
- Add error handling for non-numeric age input

---

## Congratulations!

You've completed Week 1 of your programming journey!

Week 2 will dive deeper into making decisions with conditions and loops.`,
};

export default function CoursePage() {
  return <CourseClient content={content} />;
}