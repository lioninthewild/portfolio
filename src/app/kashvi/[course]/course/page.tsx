import CourseClient from "./CourseClient";

const content: Record<string, string> = {
  orientation: `# Welcome to Kashvi
## Your Programming Journey Starts Here

---

# About This Course

- A comprehensive programming course designed for beginners
- Learn fundamentals with practical examples
- Build real-world projects from scratch
- Strong foundation for your programming career

---

# What You'll Learn

- Programming fundamentals and core concepts
- Problem-solving and algorithmic thinking
- How to think like a programmer
- Building real projects from scratch
- Best practices and coding standards

---

# Course Structure

- **Duration:** 6 weeks
- **Content:** 6 days per week
- **Format:** Slides + Practice exercises
- **Review:** Day 6 of each week is for review and application

---

# How This Course Works

- **Days 1-5:** New concepts with hands-on practice
- **Day 6:** Review and apply what you've learned
- **Each day:** Watch slides, complete exercises, build projects

---

# Weekly Breakdown

- **Week 1:** Building Blocks - Rewiring your brain
- **Week 2:** Talking to the Machine - First real coding
- **Week 3:** Building Logic - Making decisions and repetitions
- **Week 4:** Functions - Modular programming
- **Week 5:** Current Trends - How the tech world is moving
- **Week 6:** Productivity with AI

---

# Prerequisites

- **No prior programming experience needed**
- Basic computer skills (using files, browser, etc.)
- Willingness to learn and practice
- Just a computer and curiosity!

---

# Tools You'll Need

- A computer (Windows, Mac, or Linux)
- A code editor (we'll use free tools)
- Internet connection
- Pen and notebook for notes

---

# Meet Your Instructor

- Passionate about teaching programming
- Years of industry experience
- Committed to helping you succeed
- Available to answer your questions

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

export default function CoursePage() {
  return <CourseClient content={content} />;
}