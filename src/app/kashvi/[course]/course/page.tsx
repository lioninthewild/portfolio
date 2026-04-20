import CourseClient from "./CourseClient";
import { Suspense } from "react";

const content: Record<string, string> = {
  orientation: `# Orientation

# Why This Course Exists

- Most beginners:
- They learn syntax
- They memorize code
- They still can't build anything

---

# The gap

- You know some code
- But you don't know how to think

---

# This course fixes that

- We start with logic
- We build step by step
- We focus on understanding

---

# What you'll actually gain

- Ability to break problems
- Confidence to write your own code
- Skill to build simple real projects

---

# Class Workflow

- We start with a stand-up session
- 30 mins → Concepts
- 60–90 mins → Practical
- You code every day

---

# Weekly Breakdown

- Week 1: Building Blocks - Rewiring your brain
- Week 2: Talking to the Machine - First real coding
- Week 3: Building Logic - Making decisions and repetitions
- Week 4: Functions - Modular programming
- Week 5: Current Trends - How the tech world is moving
- Week 6: Productivity with AI

---

# What Kind of Sessions to Expect

- Interactive (not one-way lectures)
- Hands-on (you will code)
- Experimental (try, break, fix)

---

# Where Resources Will Be

- All materials are organized.
- Slides and references.
- Easy to access anytime

---

# Where Assignments Will Be

- Inside each day's section
- Based on what you learned

---

# Where to Submit

- Submission method will be shared
- Simple and consistent format
- On time matters

---

# What I Care About

- Growth
- Not marks
- Not perfection

---

# One Rule

- Get stuck

---

# Tasks for today:

- Fill this form :https://forms.gle/47xNa1szRTzVfKjX9

- Create a gmail with: yourname.kashvi@gmail.com

---

# Learning Philosophy

- **Learn by doing:** You'll write code from day one
- **Build real projects:** Apply concepts to real problems
- **Iterative learning:** Start simple, add complexity
- **Community support:** Learn alongside fellow students

---

# Tips for Success

1. **Practice daily:** Even 30 minutes makes a difference
2. **Don't skip exercises:** They're designed to reinforce learning
3. **Take notes:** Writing helps you remember
4. **Ask questions:** There's no stupid question
5. **Build projects:** Apply what you learn

---

# Time Commitment

- **Per day:** 30-60 minutes
- **Per week:** 3-5 hours
- **Total course:** 6 weeks
- **Flexible:** Learn at your own pace

---

# What This Course Is NOT

- Not just about syntax - you'll learn the WHY
- Not theory-heavy - you'll actively build
- Not a fixed syllabus - adapts to student interests
- Not a passive watching experience - you'll code along

---

# How to Get Help

- Ask questions during the course
- Join our community discussion
- Review slide materials
- Complete practice exercises

---

# Assessment Methods

- Daily practice exercises
- Weekly coding challenges
- Project-based assessments
- Self-evaluation checklists

---

# Certificate of Completion

- Receive a certificate after completing all weeks
- Showcase your achievement
- Validates your programming fundamentals knowledge

---

# What's Next After This Course?

- Build more advanced projects
- Explore web development
- Learn mobile app development
- Dive into data science
- Continue your programming journey!

---

# Frequently Asked Questions

**Q: Do I need math skills?**
A: Basic math is helpful, but not required. Programming uses logic more than math.

**Q: How long does it take to learn?**
A: Everyone learns at different speeds. Complete the course at your pace.

**Q: What if I get stuck?**
A: Ask questions! That's what the course community is for.

---

# Ready to Begin?

Your programming journey starts NOW!

Click on **Week 1** in the sidebar to begin your first lesson.

Remember: Every expert was once a beginner. Let's get started!`,
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

The classic first program is "Hello, World!"

In Python:
\`\`\`
print("Hello, World!")
\`\`\`

---

## Let's Begin!

Type the code above and run it. Congratulations, you're a programmer!`,
  "1-2": `# Week 1, Day 2: Variables and Data Types

## What are Variables?

Variables are containers for storing data values.

Think of them as labeled boxes.

## Creating Variables

\`\`\`
name = "Alice"
age = 25
height = 5.6
is_student = True
\`\`\`

## Data Types

- **String (str):** Text → "Hello"
- **Integer (int):** Whole numbers → 25
- **Float:** Decimal numbers → 5.6
- **Boolean (bool):** True or False

---

## Practice Time!

Create your own variables.`,
  "1-3": `# Week 1, Day 3: Getting User Input

## Output vs Input

- **Output:** Printing to screen (print())
- **Input:** Getting information from user

## Getting User Input

\`\`\`
name = input("What is your name? ")
print("Hello, " + name + "!")
\`\`\`

## Converting Input Types

\`input()\` always returns a string!

\`\`\`
age = int(input("Enter your age: "))
price = float(input("Enter the price: "))
\`\`\`

---

## Try It!

Ask the user for their name and age.`,
  "1-4": `# Week 1, Day 4: Basic Math Operations

## Math Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| + | Addition | 5 + 3 = 8 |
| - | Subtraction | 10 - 4 = 6 |
| * | Multiplication | 6 * 7 = 42 |
| / | Division | 15 / 3 = 5 |
| ** | Exponent | 2 ** 3 = 8 |
| % | Modulus | 17 % 5 = 2 |

## Order of Operations

PEMDAS: Parentheses, Exponents, Multiplication, Division, Addition, Subtraction

---

## Calculator Challenge!

Build a simple calculator.`,
  "1-5": `# Week 1, Day 5: Strings and String Operations

## Working with Text

Strings are sequences of characters.

\`\`\`
message1 = 'Hello'
message2 = "Hello"
\`\`\`

## String Methods

\`\`\`
text = "hello world"
print(text.upper())       # HELLO WORLD
print(text.lower())       # hello world
print(text.title())       # Hello World
\`\`\`

## f-Strings

\`\`\`
name = "Alice"
print(f"My name is {name}")
\`\`\`

---

## Practice!

Create a greeting program.`,
  "1-6": `# Week 1, Day 6: Review and Practice

## What We Learned This Week

- **Day 1:** Introduction to Programming
- **Day 2:** Variables & Data Types
- **Day 3:** Getting User Input
- **Day 4:** Math Operations
- **Day 5:** Strings

## Mini Project

Create a program that:
1. Asks for the user's name
2. Asks for their age
3. Asks for their favorite color
4. Prints a formatted message

---

## Congratulations!

You've completed Week 1!

Week 2 will cover making decisions with conditions.`,
};

export default function CoursePage(props: {
  searchParams: Promise<{ view?: string; day?: string }>;
}) {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <CourseClientWrapper searchParams={props.searchParams} />
    </Suspense>
  );
}

async function CourseClientWrapper(props: {
  searchParams: Promise<{ view?: string; day?: string }>;
}) {
  const searchParams = await props.searchParams;
  return <CourseClient content={content} initialView={searchParams.view} initialDay={searchParams.day} />;
}