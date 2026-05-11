export const week3Day3Content = `# 🎯 Week 3, Day 3 — Loops: The Art of Repetition

---

## 🎯 The Hook

**Problem:** You need to print "Hello" 100 times.

**Without loops:**

\`\`\`python
print("Hello")
print("Hello")
# ... paste 98 more times ...
print("Hello")
\`\`\`

**That's exhausting!** 😫

**With loops:** 1 line of code. Done.

> Today you'll learn the superpower that saves you from repetitive tasks. Let's go! 🎮

---

## 🚀 Jump In! — Your First Loop

No waiting — let's write a loop right now!

\`\`\`python
count = 1

while count <= 5:
    print(count)
    count = count + 1
\`\`\`

**Output:**

\`\`\`
1
2
3
4
5
\`\`\`

> **Try it!** Change \`5\` to \`10\`. What happens?

<details>
<summary>See what happened step by step</summary>

| Step | count | count <= 5? | Output |
|------|-------|-------------|--------|
| 1 | 1 | Yes (True) | 1 |
| 2 | 2 | Yes (True) | 2 |
| 3 | 3 | Yes (True) | 3 |
| 4 | 4 | Yes (True) | 4 |
| 5 | 5 | Yes (True) | 5 |
| 6 | 6 | No (False) | Exit! |

</details>

---

## 🎮 Counter Up — Building a Score

Think of a video game: your score goes up as you collect points.

**Count to 10:**

\`\`\`python
score = 1

while score <= 10:
    print(score)
    score = score + 1
\`\`\`

> This is called a **counter loop** — it counts from a start to an end.

---

## 🔄 Challenge: Counter Down & Step

**Can you count DOWN?** (10 to 1)

<details>
<summary>Show solution</summary>

\`\`\`python
count = 10

while count >= 1:
    print(count)
    count = count - 1
\`\`\`

</details>

**Can you count by 2?** (2, 4, 6, 8, 10)

<details>
<summary>Show solution</summary>

\`\`\`python
count = 2

while count <= 10:
    print(count)
    count = count + 2
\`\`\`

</details>

> **Challenge:** Can you count from 5 to 50 by 5s?

---

## 🏧 Real-World: The ATM Loop

Every ATM uses a loop. Watch this:

\`\`\`python
command = ""

while command != "quit":
    command = input("What to do? (balance/withdraw/quit): ")
    if command == "balance":
        print("Your balance: Rs. 5000")
    elif command == "withdraw":
        print("Processing withdrawal...")
    elif command != "quit":
        print("Invalid option")
\`\`\`

> This is a **sentinel loop** — it keeps running until you say "quit".

**Where else do you see this?** Chat bots, game menus, quiz apps!

---

## ✅ Input Validation — Keep Asking!

What if user enters wrong data? Keep asking until they get it right!

**Enter age (must be 0-150):**

\`\`\`python
age = -1  # Start with invalid

while age < 0 or age > 150:
    age = int(input("Enter age (0-150): "))
    if age < 0 or age > 150:
        print("Invalid! Try again.")

print(f"You entered: {age}")
\`\`\`

> **Try it!** Modify to accept only 1, 2, or 3 for menu choice.

---

## 🧮 The Sum Game — Accumulator Pattern

Imagine a game where you collect points. You keep a running total.

**Add numbers 1 + 2 + 3 + 4 + 5:**

\`\`\`python
total = 0  # Start at zero
num = 1

while num <= 5:
    total = total + num  # Add current number
    print(f"Added {num}, total is now {total}")
    num = num + 1

print(f"Final sum: {total}")
\`\`\`

**Output:**

\`\`\`
Added 1, total is now 1
Added 2, total is now 3
Added 3, total is now 6
Added 4, total is now 10
Added 5, total is now 15
Final sum: 15
\`\`\`

> This is called an **accumulator** — you accumulate (build up) a value!

---

## 📊 More Accumulators

**Calculate average of 3 numbers:**

\`\`\`python
total = 0
count = 1

while count <= 3:
    num = float(input(f"Enter number {count}: "))
    total = total + num
    count = count + 1

average = total / 3
print(f"Average: {average}")
\`\`\`

**Calculate product (1×2×3×4×5 = 120):**

\`\`\`python
product = 1
num = 1

while num <= 5:
    product = product * num
    num = num + 1

print(f"Product: {product}")  # 120
\`\`\`

> **Think:** When would you use sum vs. product?

---

## 🚪 Superpower #1: break — The Emergency Exit

Sometimes you found what you need and want to leave immediately. That's \`break\`!

**Find first number divisible by 7 (between 1-30):**

\`\`\`python
num = 1

while num <= 30:
    if num % 7 == 0:
        print(f"Found it: {num}")
        break  # Exit immediately!
    num = num + 1

print("Search done!")
\`\`\`

**Output:**

\`\`\`
Found it: 7
Search done!
\`\`\`

> \`break\` = "I found what I need, get me out of here!" 🚪

---

## ⏭️ Superpower #2: continue — Skip This One

Sometimes you want to skip one iteration and go to the next. That's \`continue\`!

**Print only ODD numbers (skip even):**

\`\`\`python
num = 0

while num < 10:
    num = num + 1
    if num % 2 == 0:
        continue  # Skip even numbers!
    print(num)
\`\`\`

**Output:** 1, 3, 5, 7, 9

**Skip negative numbers in input:**

\`\`\`python
while True:
    num = int(input("Enter positive number: "))
    if num < 0:
        print("Negative! Skip.")
        continue  # Ask again
    print(f"You entered: {num}")
    break  # Valid input, exit
\`\`\`

> \`continue\` = "Skip this one, next please!" ⏭️

---

## ⚠️ The Danger Zone: Infinite Loops

**One mistake = your program runs forever!**

**Broken code (DON'T RUN):**

\`\`\`python
count = 1

while count <= 10:
    print(count)
    # Forgot to add count = count + 1 !
    # This runs forever! ⚠️
\`\`\`

**The fix:**

\`\`\`python
count = 1

while count <= 10:
    print(count)
    count = count + 1  # ALWAYS add this!
\`\`\`

> **Golden Rule:** If you use \`while\`, make sure the counter increases!

**Can you spot the bug?**

\`\`\`python
x = 10

while x > 0:
    print(x)
    # x = x - 1  ← Missing!
\`\`\`

<details>
<summary>Answer</summary>

The counter \`x\` never decreases! Add \`x = x - 1\` inside the loop.

</details>

---

## 💡 Pro Tips — 3 Common Mistakes

**Mistake 1: Forgetting to increment**

\`\`\`python
# Wrong - infinite loop!
while count <= 10:
    print(count)

# Correct
while count <= 10:
    print(count)
    count = count + 1
\`\`\`

**Mistake 2: Using = instead of ==**

\`\`\`python
while count = 10:  # 💥 SyntaxError!

while count == 10:  # ✅ Correct
\`\`\`

**Mistake 3: Off-by-one errors**

\`\`\`python
# Want 1-10, but prints 1-9
while count < 10:  # Wrong!

while count <= 10:  # ✅ Correct
\`\`\`

---

## ⚔️ Practice Arena — Problems 1-3

**Problem 1 — Count Up**

> Take a number N and count from 1 to N.

\`\`\`python
n = int(input("Enter number: "))
num = 1

while num <= n:
    print(num)
    num = num + 1
\`\`\`

---

**Problem 2 — Sum Calculator**

> Calculate sum of 1 to N.

<details>
<summary>Show solution</summary>

\`\`\`python
n = int(input("Enter number: "))
total = 0
num = 1

while num <= n:
    total = total + num
    num = num + 1

print(f"Sum: {total}")
\`\`\`

</details>

---

**Problem 3 — Count by Step**

> Take N and step, count from 1 to N by that step.

<details>
<summary>Show solution</summary>

\`\`\`python
n = int(input("Enter number: "))
step = int(input("Enter step: "))
num = 1

while num <= n:
    print(num)
    num = num + step
\`\`\`

</details>

---

## 🧩 Practice Arena — Problems 4-5

**Problem 4 — Predict Output**

> What does this print?

\`\`\`python
x = 5

while x > 0:
    print(x)
    x = x - 1

print("Blast off!")
\`\`\`

<details>
<summary>Show answer</summary>

5
4
3
2
1
Blast off!

</details>

---

**Problem 5 — Fix the Bug**

> This has an infinite loop. Fix it!

\`\`\`python
i = 1

while i <= 5:
    print(i)
    # What's missing?
\`\`\`

<details>
<summary>Show answer</summary>

\`\`\`python
i = 1

while i <= 5:
    print(i)
    i = i + 1  # Add this line!
\`\`\`

</details>

---

## 🎮 Boss Level — Number Guessing Game

**Objective:** Computer picks a number (1-100), you guess until correct!

---

### 🎯 Easy — Just Find It

\`\`\`python
import random

secret = random.randint(1, 100)
guess = 0

while guess != secret:
    guess = int(input("Guess (1-100): "))
    
    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")
    else:
        print("You got it! 🎉")
\`\`\`

---

### 🎯🎯 Medium — Count Your Attempts

<details>
<summary>Show solution</summary>

\`\`\`python
import random

secret = random.randint(1, 100)
guess = 0
attempts = 0

while guess != secret:
    guess = int(input("Guess (1-100): "))
    attempts = attempts + 1
    
    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")
    else:
        print(f"You got it in {attempts} attempts! 🎉")
\`\`\`

</details>

---

### 🎯🎯🎯 Hard — Hints + Limited Attempts

<details>
<summary>Show solution</summary>

\`\`\`python
import random

secret = random.randint(1, 100)
guess = 0
attempts = 0

print("You have 7 attempts. Good luck!")

while attempts < 7:
    guess = int(input(f"Attempt {attempts + 1}/7 - Guess: "))
    attempts = attempts + 1
    
    if guess == secret:
        print(f"🎉 You got it in {attempts} attempts!")
        break
    elif guess < secret:
        print("Too low! Go higher!")
    else:
        print("Too high! Go lower!")
    
    if attempts == 7:
        print(f"Game over! The number was {secret}")
\`\`\`

</details>

> **Challenge:** Can you beat it on Hard mode? 🎮

---

## ✅ What You Learned Today

- **While loop** — repeats while condition is True
- **Counter loop** — count up, down, or by steps
- **Sentinel loop** — run until user says "quit"
- **Input validation** — keep asking until valid
- **Accumulator** — running total (sum, product, average)
- **break** — exit loop immediately
- **continue** — skip to next iteration
- **Infinite loops** — always increment your counter!

---

## 👀 Coming Up — Day 4

Next: **For Loops** — another way to repeat code! Loop game continues... 🎮

**??**
`;