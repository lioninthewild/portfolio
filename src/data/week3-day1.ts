export const week3Day1Content = `# ⚡ Week 3, Day 1 — Think First, Code Second

---

## 🧠 Before We Write a Single Line

Here is a problem:

> A student scores marks in an exam.
> If they score 90 or above — print "A"
> If they score 75 or above — print "B"
> If they score 60 or above — print "C"
> Otherwise — print "Fail"

Take 2 minutes. Don't touch the keyboard.

**How would YOU solve this?** Write your thinking down in plain English first.

---

## ❓ What Did You Just Do?

Whatever you wrote — even if it was messy and informal — that was **pseudocode**.

Most beginners jump straight to code. Professional programmers don't. They think through the logic first, in a language they already know: plain English.

Today you'll learn a three-step thinking process that every real programmer uses:

\`\`\`
Step 1 → Pseudocode     (what needs to happen, in plain English)
Step 2 → Algorithm      (numbered steps, precise and ordered)
Step 3 → Flowchart      (visual map of decisions and flow)
Step 4 → Code           (translate into Python)
\`\`\`

This order matters. If your logic is wrong before you code, your code will be wrong too — and debugging becomes much harder.

---

## 📝 Step 1: Pseudocode

**Pseudocode** is a way of writing out your solution in plain, informal language — no syntax rules, no Python, no semicolons. Just your thinking, structured.

**Rules for good pseudocode:**

- Write in English sentences
- Use words like \`IF\`, \`ELSE\`, \`PRINT\`, \`GET\`, \`SET\`
- Indent to show what belongs inside what
- Be specific enough that someone else could follow it

**Example — the grade problem:**

\`\`\`
GET marks from user

IF marks >= 90
    PRINT "A"
ELSE IF marks >= 75
    PRINT "B"
ELSE IF marks >= 60
    PRINT "C"
ELSE
    PRINT "Fail"
\`\`\`

> Notice: no Python syntax. No colons. No \`input()\`. Just the logic — clean and readable.

---

## 🔢 Step 2: Algorithm

An **algorithm** is a numbered, step-by-step sequence of instructions that solves a problem precisely. Every step is unambiguous — a robot could follow it.

Pseudocode says _what_ to do. An algorithm says _exactly how_, in order.

**Example — the grade problem:**

\`\`\`
1. Ask the user to enter their marks
2. Store the input as an integer
3. If marks is greater than or equal to 90:
       Output "A"
4. Otherwise, if marks is greater than or equal to 75:
       Output "B"
5. Otherwise, if marks is greater than or equal to 60:
       Output "C"
6. Otherwise (marks below 60):
       Output "Fail"
7. End
\`\`\`

> Algorithms are language-agnostic — this same algorithm works in Python, JavaScript, or any other language.

---

## 🗺️ Step 3: Flowchart

A **flowchart** is the visual version of your algorithm. It maps every decision and path using standard shapes:

| Shape        | Meaning                    |
| ------------ | -------------------------- |
| 🔵 Oval      | Start / End                |
| 📦 Rectangle | Process (do something)     |
| 🔷 Diamond   | Decision (yes/no question) |
| ➡️ Arrow     | Flow direction             |

**Draw it on paper — always.**

Flowcharts are not about making pretty diagrams. They force you to see every possible path your program can take — including paths you forgot to handle.

\`\`\`
       [START]
          ↓
    [Get marks]
          ↓
   ◇ marks >= 90?
   YES ↓        ↘ NO
[Print "A"]  ◇ marks >= 75?
             YES ↓       ↘ NO
          [Print "B"]  ◇ marks >= 60?
                       YES ↓      ↘ NO
                    [Print "C"]  [Print "Fail"]
                                          ↓
                                        [END]
\`\`\`

---

## 💻 Step 4: Code

Only now — after the thinking is done — do you write Python:

\`\`\`python
marks = int(input("Enter your marks: "))

if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 60:
    print("C")
else:
    print("Fail")
\`\`\`

> Notice how the code almost writes itself once the algorithm is clear. That's the point.

---

## 🧩 Logic Problems — Think Before You Code

For each problem below, you will:

1. ✍️ Write **pseudocode**
2. 🔢 Write the **algorithm** (numbered steps)
3. 🗺️ Draw the **flowchart** on paper
4. 💻 Write the **Python code**

---

### 🔴 Problem 1 — Even or Odd

> Take a number from the user.
> If it's even — print "Even"
> If it's odd — print "Odd"

**Think first. Don't scroll.**

---

**Pseudocode:**

\`\`\`
GET number from user

IF number % 2 equals 0
    PRINT "Even"
ELSE
    PRINT "Odd"
\`\`\`

**Algorithm:**

\`\`\`
1. Ask the user to enter a number
2. Store it as an integer
3. Divide the number by 2 and check the remainder
4. If remainder is 0 → print "Even"
5. Otherwise → print "Odd"
6. End
\`\`\`

**Flowchart:** Draw on paper.

\`\`\`
[START] → [Get number] → ◇ number % 2 == 0?
                         YES → [Print "Even"] → [END]
                         NO  → [Print "Odd"]  → [END]
\`\`\`

**Code:**

\`\`\`python
number = int(input("Enter a number: "))

if number % 2 == 0:
    print("Even")
else:
    print("Odd")
\`\`\`

---

### 🔴 Problem 2 — Positive, Negative, or Zero

> Take a number from the user.
> Print whether it is positive, negative, or zero.

**Write your pseudocode, algorithm, and flowchart first.**

<details>
<summary>Show solution</summary>

**Pseudocode:**

\`\`\`
GET number from user

IF number > 0
    PRINT "Positive"
ELSE IF number < 0
    PRINT "Negative"
ELSE
    PRINT "Zero"
\`\`\`

**Algorithm:**

\`\`\`
1. Ask the user to enter a number
2. Store it as a float or integer
3. If number > 0 → print "Positive"
4. Otherwise if number < 0 → print "Negative"
5. Otherwise → print "Zero"
6. End
\`\`\`

**Code:**

\`\`\`python
number = float(input("Enter a number: "))

if number > 0:
    print("Positive")
elif number < 0:
    print("Negative")
else:
    print("Zero")
\`\`\`

</details>

---

### 🔴 Problem 3 — Largest of Three

> Take three numbers from the user.
> Print which one is the largest.

**This one needs more thought. Draw the flowchart carefully — there are more paths than you think.**

<details>
<summary>Show solution</summary>

**Pseudocode:**

\`\`\`
GET a, b, c from user

IF a >= b AND a >= c
    PRINT a is largest
ELSE IF b >= a AND b >= c
    PRINT b is largest
ELSE
    PRINT c is largest
\`\`\`

**Algorithm:**

\`\`\`
1. Ask user to enter three numbers: a, b, c
2. If a is greater than or equal to both b and c → print "a is the largest"
3. Otherwise if b is greater than or equal to both a and c → print "b is the largest"
4. Otherwise → print "c is the largest"
5. End
\`\`\`

**Code:**

\`\`\`python
a = float(input("Enter first number : "))
b = float(input("Enter second number: "))
c = float(input("Enter third number : "))

if a >= b and a >= c:
    print(f"{a} is the largest")
elif b >= a and b >= c:
    print(f"{b} is the largest")
else:
    print(f"{c} is the largest")
\`\`\`

</details>

---

### 🔴 Problem 4 — Ticket Price Calculator

> A cinema charges different prices:
>
> - Age < 5: Free
> - Age 5–12: Rs. 150
> - Age 13–17: Rs. 250
> - Age 18–59: Rs. 400
> - Age 60 and above: Rs. 200 (senior discount)
>
> Take age from the user. Print the ticket price.

**This has 5 possible paths. Draw the flowchart on paper before writing a single line.**

<details>
<summary>Show solution</summary>

**Pseudocode:**

\`\`\`
GET age from user

IF age < 5
    PRINT "Free"
ELSE IF age <= 12
    PRINT "Rs. 150"
ELSE IF age <= 17
    PRINT "Rs. 250"
ELSE IF age <= 59
    PRINT "Rs. 400"
ELSE
    PRINT "Rs. 200"
\`\`\`

**Algorithm:**

\`\`\`
1. Ask user to enter their age
2. Store as integer
3. If age < 5 → ticket is Free
4. Otherwise if age is between 5 and 12 (inclusive) → Rs. 150
5. Otherwise if age is between 13 and 17 (inclusive) → Rs. 250
6. Otherwise if age is between 18 and 59 (inclusive) → Rs. 400
7. Otherwise (age 60+) → Rs. 200
8. Print the price
9. End
\`\`\`

**Code:**

\`\`\`python
age = int(input("Enter your age: "))

if age < 5:
    price = "Free"
elif age <= 12:
    price = "Rs. 150"
elif age <= 17:
    price = "Rs. 250"
elif age <= 59:
    price = "Rs. 400"
else:
    price = "Rs. 200"

print(f"Ticket price: {price}")
\`\`\`

</details>

---

### 🟡 Problem 5 — What Will Be the Output?

> Don't run this. Read it carefully and write what you think it will print.
> Then explain _why_.

\`\`\`python
x = 15

if x > 20:
    print("A")
elif x > 10:
    print("B")
elif x > 5:
    print("C")
else:
    print("D")
\`\`\`

**Write your answer and reason before revealing.**

<details>
<summary>Show answer</summary>

**Output: \`B\`**

**Why:**

- \`x = 15\`
- \`x > 20\` → \`15 > 20\` → \`False\` — skipped
- \`x > 10\` → \`15 > 10\` → \`True\` — this runs: prints \`"B"\`
- Python does **not** check the remaining conditions once one is \`True\`
- \`"C"\` is never reached even though \`15 > 5\` is also \`True\`

> This is a critical concept: in an \`if/elif/else\` chain, Python stops at the **first true condition**. Order matters enormously.

</details>

---

### 🟡 Problem 6 — What Will Be the Output?

\`\`\`python
score = 72

if score >= 90:
    grade = "A"
if score >= 75:
    grade = "B"
if score >= 60:
    grade = "C"
else:
    grade = "Fail"

print(grade)
\`\`\`

**Predict the output. This one is a trap.**

<details>
<summary>Show answer</summary>

**Output: \`C\`**

**Why this is tricky:**
These are three **separate \`if\` statements** — not an \`if/elif/else\` chain.

- \`score >= 90\` → \`False\` — skipped
- \`score >= 75\` → \`False\` — skipped
- \`score >= 60\` → \`True\` → \`grade = "C"\`
- The \`else\` belongs only to the third \`if\` — since the third condition was \`True\`, \`else\` is skipped

**What the programmer probably intended:**

\`\`\`python
if score >= 90:
    grade = "A"
elif score >= 75:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "Fail"
\`\`\`

> **Lesson:** \`if/if/if\` evaluates every condition independently. \`if/elif/elif\` stops at the first match. This is one of the most common beginner bugs.

</details>

---

### 🟡 Problem 7 — What Will Be the Output?

\`\`\`python
a = 5
b = 10

if a > 3 and b > 8:
    print("Both")
elif a > 3 or b > 15:
    print("At least one")
else:
    print("Neither")
\`\`\`

**Trace through it step by step. Write your answer.**

<details>
<summary>Show answer</summary>

**Output: \`Both\`**

**Trace:**

- \`a > 3\` → \`5 > 3\` → \`True\`
- \`b > 8\` → \`10 > 8\` → \`True\`
- \`True and True\` → \`True\` → first condition passes → prints \`"Both"\`
- \`elif\` and \`else\` are never checked

</details>

---

### 🔴 Problem 8 — Login Validator

> Ask the user for a username and password.
> Correct credentials: username = \`"admin"\`, password = \`"python123"\`
>
> - If both are correct → print "Access granted"
> - If username is correct but password is wrong → print "Wrong password"
> - If username is wrong → print "User not found"

**Write pseudocode and algorithm. Draw the flowchart — it has branching inside branching (nested conditions).**

<details>
<summary>Show solution</summary>

**Pseudocode:**

\`\`\`
GET username from user
GET password from user

IF username equals "admin"
    IF password equals "python123"
        PRINT "Access granted"
    ELSE
        PRINT "Wrong password"
ELSE
    PRINT "User not found"
\`\`\`

**Algorithm:**

\`\`\`
1. Ask user to enter username
2. Ask user to enter password
3. Check if username equals "admin"
4.   If yes → check if password equals "python123"
5.          If yes → print "Access granted"
6.          If no  → print "Wrong password"
7.   If no → print "User not found"
8. End
\`\`\`

**Code:**

\`\`\`python
username = input("Username: ")
password = input("Password: ")

if username == "admin":
    if password == "python123":
        print("Access granted")
    else:
        print("Wrong password")
else:
    print("User not found")
\`\`\`

</details>

---

### 🔴 Problem 9 — BMI Category

> Take weight (kg) and height (cm) from the user.
> Calculate BMI: \`weight / (height/100) ** 2\`
> Classify:
>
> - BMI < 18.5 → "Underweight"
> - 18.5 ≤ BMI < 25 → "Normal"
> - 25 ≤ BMI < 30 → "Overweight"
> - BMI ≥ 30 → "Obese"
>
> Print the BMI (rounded to 2 decimal places) and the category.

**Write pseudocode + algorithm + flowchart. Then code.**

<details>
<summary>Show solution</summary>

**Pseudocode:**

\`\`\`
GET weight and height from user
CALCULATE bmi = weight / (height/100)^2
ROUND bmi to 2 decimal places

IF bmi < 18.5
    SET category = "Underweight"
ELSE IF bmi < 25
    SET category = "Normal"
ELSE IF bmi < 30
    SET category = "Overweight"
ELSE
    SET category = "Obese"

PRINT bmi and category
\`\`\`

**Algorithm:**

\`\`\`
1. Ask user to enter weight in kg
2. Ask user to enter height in cm
3. Convert height to meters: height / 100
4. Calculate BMI: weight / (height_m ** 2)
5. Round BMI to 2 decimal places
6. If BMI < 18.5 → category = "Underweight"
7. Otherwise if BMI < 25 → category = "Normal"
8. Otherwise if BMI < 30 → category = "Overweight"
9. Otherwise → category = "Obese"
10. Print BMI and category
11. End
\`\`\`

**Code:**

\`\`\`python
weight = float(input("Weight (kg): "))
height = float(input("Height (cm): "))

bmi = round(weight / (height / 100) ** 2, 2)

if bmi < 18.5:
    category = "Underweight"
elif bmi < 25:
    category = "Normal"
elif bmi < 30:
    category = "Overweight"
else:
    category = "Obese"

print(f"BMI      : {bmi}")
print(f"Category : {category}")
\`\`\`

</details>

---

### 🔴 Problem 10 — Day Type Checker

> Ask the user to enter a day name (e.g. "Monday").
>
> - If it's Saturday or Sunday → print "Weekend 🎉"
> - If it's Monday to Friday → print "Weekday 💼"
> - Anything else → print "Invalid day"
>
> The check should work regardless of how the user capitalises the input.

**Hint: think about how to handle \`"monday"\`, \`"MONDAY"\`, \`"Monday"\` all the same way. Which string method from Week 2 helps here?**

<details>
<summary>Show solution</summary>

**Pseudocode:**

\`\`\`
GET day from user
CONVERT to title case (so "monday" → "Monday")

IF day is "Saturday" OR day is "Sunday"
    PRINT "Weekend 🎉"
ELSE IF day is in ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    PRINT "Weekday 💼"
ELSE
    PRINT "Invalid day"
\`\`\`

**Algorithm:**

\`\`\`
1. Ask user to enter a day name
2. Strip extra spaces and convert to title case
3. If day equals "Saturday" or "Sunday" → print "Weekend 🎉"
4. Otherwise if day is one of the five weekdays → print "Weekday 💼"
5. Otherwise → print "Invalid day"
6. End
\`\`\`

**Code:**

\`\`\`python
day = input("Enter a day: ").strip().title()

weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

if day == "Saturday" or day == "Sunday":
    print("Weekend 🎉")
elif day in weekdays:
    print("Weekday 💼")
else:
    print("Invalid day")
\`\`\`

> **New concept used:** \`day in weekdays\` — checking membership in a list using the \`in\` operator from Week 2. Instead of writing \`elif day == "Monday" or day == "Tuesday" or ...\`, you check if the value exists in the list. Cleaner, shorter, same result.

</details>

---

## 🐍 \`if\`, \`elif\`, \`else\` — Python Syntax Reference

Now that you've seen it in action across 10 problems, here is the full formal reference.

---

### Case 1: Simple \`if\`

Run a block only when a condition is true. Nothing happens if it's false.

\`\`\`python
age = int(input("Your age: "))

if age >= 18:
    print("You can vote.")

# If age < 18, nothing is printed — program moves on silently
\`\`\`

---

### Case 2: \`if\` / \`else\`

One of two paths — always one runs.

\`\`\`python
temperature = float(input("Temperature (°C): "))

if temperature >= 25:
    print("It's warm outside.")
else:
    print("Bring a jacket.")
\`\`\`

---

### Case 3: \`if\` / \`elif\` / \`else\`

Multiple conditions checked in order. **First match wins — rest are skipped.**

\`\`\`python
marks = int(input("Your marks: "))

if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 60:
    print("C")
else:
    print("Fail")
\`\`\`

> You can have as many \`elif\` blocks as needed. There is only ever one \`if\` and one \`else\`.

---

### Case 4: Nested \`if\`

A condition inside another condition. Used when a second decision depends on the first.

\`\`\`python
username = input("Username: ")
password = input("Password: ")

if username == "admin":
    if password == "1234":
        print("Welcome!")
    else:
        print("Wrong password.")
else:
    print("User not found.")
\`\`\`

> Indent carefully. Each level of nesting adds one more indent level (4 spaces).

---

### Case 5: \`if\` with logical operators

Combine multiple conditions in one line using \`and\`, \`or\`, \`not\`:

\`\`\`python
age    = int(input("Age: "))
height = int(input("Height (cm): "))

# Both must be true
if age >= 12 and height >= 140:
    print("You can ride.")
else:
    print("Sorry, not eligible.")
\`\`\`

\`\`\`python
day = input("Day: ").strip().title()

# Either one can be true
if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")
\`\`\`

\`\`\`python
is_member = False

if not is_member:
    print("Please sign up first.")
\`\`\`

---

### ⚠️ Common Mistakes

**Mistake 1: Using \`=\` instead of \`==\`**

\`\`\`python
if x = 5:     # 💥 SyntaxError — = is assignment, == is comparison
    print("yes")
\`\`\`

**Mistake 2: Missing colon**

\`\`\`python
if x > 5    # 💥 SyntaxError — colon is required
    print("yes")
\`\`\`

**Mistake 3: Wrong indentation**

\`\`\`python
if x > 5:
print("yes")    # 💥 IndentationError — must be indented inside the if
\`\`\`

**Mistake 4: Separate \`if\`s instead of \`elif\`**

\`\`\`python
# Wrong — all three conditions are checked independently
if score >= 90:
    grade = "A"
if score >= 75:
    grade = "B"    # ← this overwrites "A" if score is 95!
if score >= 60:
    grade = "C"    # ← this overwrites "B" too!

# Correct — stops at first match
if score >= 90:
    grade = "A"
elif score >= 75:
    grade = "B"
elif score >= 60:
    grade = "C"
\`\`\`

---

## ✅ What You Learned Today

**Thinking framework:**

- **Pseudocode** — write the logic in plain English before touching code
- **Algorithm** — numbered, ordered, unambiguous steps
- **Flowchart** — visual map of every path (draw on paper)
- **Code** — the last step, not the first

**Python \`if/elif/else\`:**

- \`if\` alone — runs only when true, silent otherwise
- \`if/else\` — always one of two paths runs
- \`if/elif/else\` — first matching condition wins, rest are skipped
- Nested \`if\` — second decision inside the first
- Logical operators: \`and\`, \`or\`, \`not\` — combine conditions

**Logic-building habit:**

> Before writing any code — write pseudocode. Before writing pseudocode — understand the problem completely. Ask: _what are all the possible inputs? What should happen for each one?_

---

## 👀 Coming Up — Day 2

**??**
`;