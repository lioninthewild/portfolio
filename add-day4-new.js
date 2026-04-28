const fs = require('fs');

const pagePath = 'src/app/kashvi/[course]/course/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

// Find Day 4 section start
const day4Start = content.indexOf('"1-4":');
const rest = content.slice(day4Start);
const day4End = rest.indexOf('},') + 2;

// Get before and after
const before = content.slice(0, day4Start);
const after = content.slice(day4Start + day4End);

// New Day 4 content - stripped formatting from changes.md
const newDay4 = `  "1-4": "# Day 4 — Making Numbers Actually Work

# Where We Left Off

Day 3 ended with a mystery:
'''python
age = input(\"Your age: \")
print(age + 10)   # Crash
'''
TypeError: can only concatenate str (not \"int\") to str

Today, we fix this — and unlock something much more useful.

---

# The Real Problem

input() always gives you a string.

Even this:
'''python
x = input(\"Enter a number: \")
# You type: 7
# Python sees: \"7\"   <- not 7, but \"7\"
'''

To Python, \"7\" and 7 are completely different things.

---

# See It For Yourself

'''python
a = \"7\"
b = 7

print(type(a))   # <class 'str'>
print(type(b))   # <class 'int'>

print(a + a)     # \"77\"  <- string joining
print(b + b)     # 14    <- math
'''

Same digit. Completely different behavior.

---

# The Fix: Type Conversion

Python gives you tools to convert between types:

| Function  | What it does          | Example                |
| --------- | --------------------- | ---------------------- |
| int()     | Text -> whole number  | int(\"7\") -> 7          |
| float()   | Text -> decimal       | float(\"3.5\") -> 3.5    |
| str()     | Number -> text        | str(99) -> \"99\"        |

---

# The Pattern You'll Use Most

'''python
age = int(input(\"Your age: \"))
'''

Read it inside-out:

1. input(...) — gets text from user
2. int(...) — converts that text to a number
3. age = — stores the number

---

# Try It

'''python
age = int(input(\"Your age: \"))
print(\"In 5 years, you'll be\", age + 5)
'''

Sample run:
Your age: 16
In 5 years, you'll be 21

That's real math. With real user input.

---

# Quick Math Refresher

Now that we have numbers, here are the operators:

| Operator | Meaning      | Example   | Result     |
| -------- | ------------ | --------- | ---------- |
| +        | Add          | 10 + 3    | 13         |
| -        | Subtract     | 10 - 3    | 7          |
| *        | Multiply     | 10 * 3    | 30         |
| /        | Divide       | 10 / 3    | 3.333...   |
| //       | Floor divide | 10 // 3   | 3          |
| %        | Remainder    | 10 % 3    | 1          |
| **       | Power        | 2 ** 8    | 256        |

---

# Build: Run Rate Calculator

'''python
runs   = int(input(\"Runs scored: \"))
overs  = int(input(\"Overs played: \"))

run_rate = runs / overs

print(\"Run rate:\", run_rate)
'''

Sample run:
Runs scored: 156
Overs played: 20
Run rate: 7.8

Real formula. Real sport. Real code.

---

# Your Turn

Extend the run rate calculator into a chase scenario:

- Ask for target runs and overs remaining (in addition to current score and overs played)
- Calculate: runs still needed, current run rate, and required run rate to win
- Print all three, labeled clearly

Sample run:
Runs scored: 87
Overs played: 10
Target: 165
Overs remaining: 10
---
Runs needed   : 78
Current RR    : 8.7
Required RR   : 7.8

Hint: required run rate = runs needed / overs remaining

---

# What About Decimals?

'''python
height = float(input(\"Your height in meters: \"))
print(\"In cm:\", height * 100)
'''

Use float() when the user might type 1.75, 3.14, etc.

Rule of thumb:

- Counting things -> int() (people, years, overs)
- Measuring things -> float() (height, weight, speed)

---

# What Can Go Wrong

'''python
age = int(input(\"Your age: \"))
'''

What if the user types \"sixteen\" instead of 16?

'''
ValueError: invalid literal for int() with base 10: 'sixteen'
'''

Python can't convert words to numbers.
We'll handle this properly in Week 3 — for now, trust your user.

---

# Going the Other Way: str()

Sometimes you need to turn a number back into text:

'''python
score = 97
print(\"Your score: \" + str(score) + \"/100\")
'''

Without str(), the + would crash — you can't join a string and a number directly.

---

# str() vs comma in print()

Two ways to mix text and numbers in print():

'''python
score = 97

# Using comma (easier, adds a space)
print(\"Score:\", score)

# Using str() + concatenation (more control, no auto-space)
print(\"Score: \" + str(score) + \"/100\")
'''

Both work. Pick what fits.

---

# Build: Personal Stats Card

'''python
name    = input(\"Name: \")
age     = int(input(\"Age: \"))
height  = float(input(\"Height (in cm): \"))
weight  = float(input(\"Weight (in kg): \"))

bmi = weight / ((height / 100) ** 2)

print(\"---\")
print(\"Name   :\", name)
print(\"Age    :\", age)
print(\"Height :\", height, \"cm\")
print(\"BMI    :\", bmi)
'''

Sample run:
Name: Riya
Age: 17
Height (in cm): 162
Weight (in kg): 55
---
Name   : Riya
Age    : 17
Height : 162.0 cm
BMI    : 20.95...

---

# Upgrade It

- Round the BMI to 2 decimal places using round(bmi, 2)
- Calculate and print their birth year: 2025 - age
- Add an ideal weight range — for a given height, the healthy BMI range is 18.5-24.9. Work backwards from the BMI formula to find the weight range:
  - min_weight = 18.5 * ((height / 100) ** 2)
  - max_weight = 24.9 * ((height / 100) ** 2)
- Print all three: BMI, birth year, and healthy weight range (rounded)

---

# Mini Challenge — Trip Budget Splitter

A group is going on a trip. Write a program that:

1. Asks for the total trip cost
2. Asks for number of people
3. Asks how much one person already paid upfront
4. Prints: cost per person, how much the upfront person is owed back, and how much everyone else still needs to pay

Sample run:
Total cost     : 4700
Number of people: 4
Upfront paid   : 2000
---
Cost per person  : 1175.0
Owed back        : 825.0
Others each pay  : 1175.0

Hint: owed back = upfront paid - cost per person

---

# Final Task — Smart Calculator

Build a calculator that goes beyond basic operations:

- Ask for two numbers (num1, num2)
- Print: sum, difference, product, division (rounded to 2 decimal places)
- Also print: the average of the two numbers
- Also print: which number is larger — use this expression:
  - larger = (num1 + num2 + abs(num1 - num2)) / 2
  - (This finds the larger without needing if — we'll learn if soon)
- Label every result clearly

abs() gives the absolute value — abs(-5) -> 5

---

# What You Learned Today

- input() always returns a string — that's just how it works
- int() and float() convert strings into numbers you can calculate with
- str() converts numbers back into text when you need to join them
- Python has 7 math operators — // and % are the ones most people forget

---

# Coming Up — Day 5

??
`;

// Escape for JS string - be very careful with quotes
const escaped = newDay4
  .replace(/\\/g, '\\\\')
  .replace(/"/g, '\\"')
  .replace(/\n/g, '\\n');

// Handle triple backticks
const escapedFinal = escaped
  .replace(/'''python/g, "\\'\\'\\'python")
  .replace(/'''/g, "\\'\\'\\'");

const newEntry = `  "1-4": "${escapedFinal}",`;

// Combine and write
const finalContent = before + newEntry + after;

fs.writeFileSync(pagePath, finalContent);
console.log('Day 4 content updated successfully!');