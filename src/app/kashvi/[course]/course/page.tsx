import CourseClient from "./CourseClient";
import { Suspense } from "react";
import { week3Day1Content } from "@/data/week3-day1";
import { week3Day2Content } from "@/data/week3-day2";
import { week3Day3Content } from "@/data/week3-day3";

const content: Record<string, string> = {
  orientation:
    "# Orientation\n\n# Why This Course Exists\n\n- Most beginners:\n- They learn syntax\n- They memorize code\n- They still can't build anything\n\n---\n\n# The gap\n\n- You know some code\n- But you don't know how to think\n\n---\n\n# This course fixes that\n\n- We start with logic\n- We build step by step\n- We focus on understanding\n\n---\n\n# What you'll actually gain\n\n- Ability to break problems\n- Confidence to write your own code\n- Skill to build simple real projects\n\n---\n\n# Class Workflow\n\n- We start with a stand-up session\n- 30 mins Concepts\n- 60 to 90 mins Practical\n- You code every day\n\n---\n\n# Weekly Breakdown\n\n- Week 1: Building Blocks - Rewiring your brain\n- Week 2: Talking to the Machine - First real coding\n- Week 3: Building Logic - Making decisions and repetitions\n- Week 4: Functions - Modular programming\n- Week 5: Current Trends - How the tech world is moving\n- Week 6: Productivity with AI\n\n---\n\n# What Kind of Sessions to Expect\n\n- Interactive (not one-way lectures)\n- Hands-on (you will code)\n- Experimental (try, break, fix)\n\n---\n\n# Where Assignments Will Be\n\n- Inside each day's section\n- Based on what you learned\n\n---\n\n# Tasks for today:\n\n\n- Fill this form: https://docs.google.com/forms/d/e/1FAIpQLSfTzRyOlFr8bbEQns_hnubpyXDHOlN73ijE7pRLqkOD0Psr7A/viewform\n\n- Create a gmail with yourname.kashvi@gmail.com\n",
  tiy: "# Try It Yourself\n\n# Easy: Hello World Greeting Program\n\nBuild a program that:\n- Asks the user for their name\n- Displays a personalized greeting\n\n---\n\n# Medium: Number Guessing Game\n\nBuild a game where:\n- Computer chooses random number 1-100\n- User guesses\n- Shows high/low hints\n\n---\n\n# Hard: Tic-Tac-Toe\n\nBuild a two-player game:\n- 3x3 grid\n- Take turns with X and O\n- Detect wins\n",
  "1-1":
    "# Day 1: How the Internet Works\n\n# What is the Internet?\n\nThe Internet is computers talking to each other.\nThink of it like sending text messages.\n\n---\n\n# How Do Computers Talk?\n\n```\n┌─────────────┐      ┌─────────────┐\n│ Your PC   │ ─── ▶ │ Your friend's PC │\n│  (You)   │      │            │\n└─────────────┘      └─────────────┘\n```\nThey use special rules to understand each other.\n\n\n---\n\n# Client and Server\n\n```\n┌─────────┐      ┌─────────┐\n│ Client │ ─── ▶│ Server │\n│  You   │◀──── ─│ Has it │\n└─────────┘      └─────────┘\n```\nClient = You (asking for something)\nServer = Computer that has what you want\n\n---\n\n# IP Address\n\nEvery computer has an address called IP.\n```\n┌──────────────────────────┐\n│ IP: 142.250.190.14     │\n│ (google.com computer)    │\n└──────────────────────────┘\n```\nLike your home address but for computers.\n\n\n---\n\n# Problem with IP\n\nIP addresses are hard to remember.\n```\n❌ Remember: 142.250.190.14\n✓ Remember: google.com\n```\n\n---\n\n# Domain Name\n\nDomain name = Easy name for IP.\n```\ngoogle.com ── maps to ── ▶ 142.250.190.14\n    │\n    └── like contacts ──▶ Mom → 9800000001\n```\n\n---\n\n# HTTP and HTTPS\n\n```\nHTTP  = Rules (not secure) 🔓\nHTTPS = Secure rules (S = Secure) 🔒\n```\nWhen you see Lock icon, your chat is private.\n\n\n---\n\n# Full Flow: Opening a Website\n\n```\n┌────────────────────────────────────┐\n│ Step 1: Type youtube.com        │\n│ Step 2: Find IP address      │\n│ Step 3: Send request      │\n│ Step 4: Server processes │\n│ Step 5: Server responds │\n│ Step 6: You see website  │\n└────────────────────────────────────┘\n```\n\n\n---\n\n# API - The Middle Layer\n\nThink of it like a WAITER in a restaurant:\n```\n┌──────┐    ┌───────┐    ┌────────┐\n│ You  │───▶│Waiter │───▶│Kitchen│\n│(You) │◀───│(API) │◀───│Server │\n└──────┘    └───────┘    └────────┘\n```\nWaiter manages what you ask and what you get.\n\n\n\n---\n\n# Summary\n\n```\n┌──────────────────────────────────────┐\n│ Client   │ You ask for things          │\n│ Server  │ Gives you things         │\n│ IP      │ Computer address      │\n│ Domain  │ Easy name for IP     │\n│ HTTP    │ Communication rules   │\n│ API    │ Middle person      │\n└──────────────────────────────────────┘\n```\n\n\n---\n\n# Task: Steps When You Open youtube.com\n\nWrite down the steps:\n1. You type youtube.com in browser\n2. ?\n3. ?\n4. ?\n5. ?\n6. ?\nThink about:\n- Who are you asking?\n- What happens in between?\n- How do you get the video?\n",
  "1-2":
    '# Day 2: Variables - The Containers\n\n# Welcome to Day 2!\n\nToday we learn about VARIABLES.\nThink of them as boxes where we store things.\n\n---\n\n# Your First Python Code\n\nLet\'s start with something simple:\n\n```python\nprint("Hello, I am learning!")\n```\n\nThis prints your message to the screen.\nYOU control what the computer says!\n\n\n---\n\n# Your Turn!\nModify the code to print your name:\n\n```python\nprint("Your name here")\n```\n\n\n---\n\n# Problem: What If We Want to Remember Something?\n\n\n\nImagine playing a game:\n- You score 100 points\n- Next level: 150 points\n- How do we remember your score?\nVariables solve this problem!\n\n\n---\n\n# What is a Variable?\n\n\nA variable is a container with a name and a value.\nThink of it like a labeled box:\n\n\n```\n┌──────────────┐\n│    score    │ <- label (name)\n│     100     │ <- value\n└──────────────┘\n```\n\n\n---\n\n# Create Your First Variable\n\n```python\nname = "Ram"\nage = 15\nscore = 100\n```\n\nThe variable name is on the LEFT, value is on the RIGHT.\n\n\n---\n\n# Your Turn! Create These Variables\n\n```python\nname = "Your name here"\nage = Your age here\nfav_number = 7\n```\n\nType these in Python and run them!\n\n\n---\n\n# What Actually Happens in Memory?\n\n\nWhen you write:\n```python\nname = "Ram"\n```\n\nHere\'s what happens:\n1. Computer stores "Ram" in memory\n2. Computer creates a label called "name"\n3. The label POINTS to the value\n\nVisual:\nname -> [Ram]\n\n\n---\n\n# Types of Variables\n\n\nPython has different types:\n\n```python\nname = "Ram"      # Text = STRING\nage = 15          # Whole number = INTEGER\nheight = 5.6      # Decimal = FLOAT\nis_gamer = True   # True/False = BOOLEAN\n```\n\n\n---\n\n# Types Visualization\n\n```\n┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐\n│ STRING │  │ INTEGER│  │ FLOAT │  │BOOLEAN │\n│  "Ram" │  │   15   │  │  5.6  │  │  True  │\n└─────────┘  └─────────┘  └─────────┘  └─────────┘\n```\n\n\n---\n\n# Your Turn! Create Different Types\n\n```python\nplayer_name = "Hero"\nlevel = 10\ngame_score = 99.5\nis_playing = True\n```\n\n\n---\n\n# Updating Variables\n\n\nVariables can change their value:\n```python\ncoins = 10\nprint(coins)\ncoins = 50\nprint(coins)\n```\n\nLatest value OVERWRITES the previous one!\n\n\n---\n\n# Your Turn! Update the Value\n\n```python\nscore = 10\nprint(score)\nscore = 25\nprint(score)\n```\n\n\n---\n\n# Expression Update\n\nCool trick: update value using the old value!\n```python\nx = 10\nx = x + 5\nprint(x)  # Shows 15!\n```\nStep by step:\n1. Read the right side: x + 5 = 10 + 5 = 15\n2. Store the result in x\n\n---\n\n# Your Turn! Try This\n\n```python\nmoney = 100\nmoney = money + 50\nprint(money)\n```\n\n\n---\n\n# Checking Variable Type\n\nWant to know what type your variable is? Use type():\n```python\nname = "Ram"\nprint(type(name))\n```\n\n\n---\n\n# Type Examples\n\n```python\na = "Ram"       # str\nb = 15          # int\nc = 3.14        # float\nd = True       # bool\nprint(type(a), type(b), type(c), type(d))\n```\n\n\n---\n\n# How Computer Stores Variables\n\nThink of computer memory like a locker room:\n```\n┌─────────┐  ┌─────────┐  ┌─────────┐\n│ Box 1  │  │ Box 2  │  │ Box 3  │\n│ name ──│──│ age ──│──│score  │\n│  "Ram"│  │  15   │  │ 100   │\n└─────────┘  └─────────┘  └─────────┘\n```\nEach box has a name (label) pointing to the value inside.\n\n\n---\n\n# Accessing Stored Values\n\nTo get the value, just use the variable name:\n```python\nname = "Ram"\nprint(name)\n```\n\n---\n\n# Constant Variables\n\nSome values never change - like PI:\n```python\nPI = 3.14\nMAX_SCORE = 100\n```\nConvention: Use UPPERCASE for constants.\n\n\n---\n\n# Mini Build Task: Game Character\n\nCreate your game character system:\n```python\nchar_name = "Your character name"\nlevel = 1\nhealth = 100\n\nprint(char_name)\nprint("Level:", level)\nprint("Health:", health)\n\nlevel = level + 1\nprint("New Level:", level)\n```\n\n---\n\n# Your Turn! Create Your System\n\nBuild your own system with at least 4 variables.\nInclude updates too!\n\n---\n\n# Final Reflection\n\nWhat is a variable in your own words?\n',
  "1-3":
    '# Day 3: The Program Talks Back\n\n# Quick Recap\n\nSo far, your programs were like a vending machine with no buttons.\nYou could see the snacks, but you could not choose.\n\nToday, we add the buttons.\n\n---\n\n# What\'s Missing?\n\n```python\nprint("Hello, Aryan!")\n```\n\nThis works... but only for Aryan.\nWhat about everyone else?\n\n\n---\n\n# The Fix: input()\n\n```python\nname = input("What\'s your name? ")\nprint("Hello,", name)\n```\n\nNow it works for anyone.\n\n\n---\n\n# Try It Yourself\n\nRun this. Type your name. See what happens.\n```python\nname = input("What\'s your name? ")\nprint("Welcome,", name, "— you\'re in.")\n```\nSmall change. Big difference.\n\n\n---\n\n# Breaking It Down\n\n```python\nname = input("What\'s your name? ")\n```\n\nPart - What it does\ninput(...) - Pauses, waits for you to type\n"What\'s your name? " - The message shown to the user\nname = - Stores whatever was typed\n\n---\n\n# Real Example — Username Generator\n\n```python\nfirst = input("Enter your first name: ")\nbirth_year = input("Enter your birth year: ")\n\nprint("Your username:", first + birth_year)\n```\n\nSample run:\nEnter your first name: Priya\nEnter your birth year: 2008\nYour username: Priya2008\n\n---\n\n# Your Turn\n\nModify the username generator.\nIdeas:\n- Add a special symbol like _ or #\n- Use a nickname instead of first name\n- Reverse the order: 2008Priya\n\n---\n\n# Interesting Observation\n\n```python\nresponse = input("How old are you? ")\nprint(type(response))\n```\n\nOutput:\n<class \'str\'>\n\nEven though you typed 16 — Python sees "16" (a string, not a number).\n\n\n---\n\n# Why Does That Matter?\n\n```python\nage = input("Your age: ")\nprint(age + 1)\n```\n\nThis will crash!\nTypeError: can only concatenate str (not "int") to str\n\nWe\'ll fix this properly in Day 4 — for now, just know it\'s a string.\n\n\n---\n\n# Build: Vibe Check Machine\n\n```python\nname = input("Your name: ")\nmood = input("How are you feeling? (good/bad/meh): ")\nmusic = input("Favorite genre: ")\n\nprint("---")\nprint(name, "is feeling", mood, "today.")\nprint("Recommended playlist: Late-night", music)\n```\n\n\n---\n\n# The Pattern\n\nAsk -> Store -> Use\n```python\ncity = input("Where are you from? ")\nprint("Cool, I\'ve never been to", city)\n```\nEverything you build with input() follows this loop.\n\n\n---\n\n# Mini Challenge — Who Are You Form\n\nWrite a program that collects:\n1. Name\n2. Favorite subject\n3. Dream job\nThen prints:\n[Name] loves [subject] and wants to be a [job].\nHint: You already know everything you need.\n\n\n---\n\n# What You Learned Today\n\n- input() pauses the program and waits for the user\n- Whatever is typed gets stored as a string\n- Programs are more useful when they respond to real input\n\n---\n\n# Coming Up\n\nWhat if you want to do math with what the user types?\n```python\nage = int(input("Your age: "))\nprint("In 10 years, you\'ll be", age + 10)\n```\nWe\'ll learn how to convert input into numbers — and that opens a lot of doors.\n',
  "1-4": "# Day 4: Slight Revision and Few Logical Problems",
  "1-5":
    '# Day 5 — Making Numbers Actually Work\n\n# Where We Left Off\n\nDay 3 ended with a crash:\n```python\nage = input("Your age: ")\nprint(age + 10)   # TypeError\n```\n\nToday we fix it — and then go much further.\n\n\n---\n\n# Type Conversion\n\ninput() always gives you a string — even when user types a number.\n```python\nx = input("Enter a number: ")\n# You type: 7\n# Python sees: "7"   text, not a number\n```\n\n\n\n---\n\n# The Conversion Tools\n\n| Function  | Converts to    | Example                |\n| --------- | -------------- | ---------------------- |\n| int()     | Whole number   | int("16") → 16          |\n| float()   | Decimal number | float("3.5") → 3.5      |\n| str()     | Text           | str(99) → "99"           |\n\n\n---\n\n# The Pattern You\'ll Use Most\n\n```python\nage = int(input("Your age: "))\n```\n\nRead it inside-out:\n1. input(...) — waits for user to type\n2. int(...) — converts that text to a number\n3. age = — stores it\n\n---\n\n# Try It\n\n```python\nage = int(input("Your age: "))\nprint("In 5 years, you\'ll be", age + 5)\n```\n\nYour age: 16 → In 5 years, you\'ll be 21\nNow it\'s real math. Not string gluing.\n\n\n---\n\n# str() — Going Back to Text\n\nSometimes you need to turn a number back into text:\n```python\nscore = 97\nprint("Your score: " + str(score) + "/100")\n```\n\nWithout str(), the + crashes.\n\n\n---\n\n# What Can Go Wrong\n\n```python\nage = int(input("Your age: "))\n```\n\nIf user types "sixteen" instead of 16:\nValueError: invalid literal for int()\n\nWe\'ll handle this later. For now — trust your user.\n\n\n\n---\n\n# Arithmetic Operators\n\n| Operator | Meaning        | Example   | Result     |\n| -------- | -------------- | --------- | ---------- |\n| +        | Add            | 10 + 3    | 13         |\n| -        | Subtract       | 10 - 3    | 7          |\n| *        | Multiply      | 10 * 3    | 30         |\n| /        | Divide       | 10 / 3    | 3.333...   |\n| //       | Floor divide  | 10 // 3   | 3          |\n| %        | Remainder     | 10 % 3    | 1          |\n   | Power        | 2 ** 8    | 256        |\n\n---\n\n# The Two You\'ll Forget\n\n// and % are more useful than they look:\n```python\nminutes = 137\nhours     = 137 // 60    # 2 hours\nremaining = 137 % 60     # 17 leftover\nprint(hours, "hrs", remaining, "mins")\n# 2 hrs 17 mins\n```\n\nAny time you need to split a quantity — these are your tools.\n\n\n---\n\n# Build: Cricket Chase Calculator\n\n```python\nruns_scored     = int(input("Runs scored: "))\novers_played    = int(input("Overs played: "))\ntarget          = int(input("Target: "))\novers_remaining = int(input("Overs remaining: "))\n\nruns_needed  = target - runs_scored\ncurrent_rr   = round(runs_scored / overs_played, 2)\nrequired_rr  = round(runs_needed / overs_remaining, 2)\n\n\nprint("---")\nprint("Runs needed :", runs_needed)\nprint("Current RR  :", current_rr)\nprint("Required RR :", required_rr)\n```\n\nSample: 87 runs, 10 overs, target 165, 10 overs left\nRuns needed: 78, Current RR: 8.7, Required RR: 7.8\n\n---\n\n# Assignment Operators\n\nYou\'ve used = since Day 2. There\'s a whole family:\n| Operator | Meaning                 | Equivalent to            |\n| -------- | ----------------------- | ------------------------ |\n| =       | Assign                  | x = 5                    |\n| +=      | Add and update          | x += 3 → x = x + 3       |\n| -=     | Subtract and update      | x -= 3 → x = x - 3        |\n| *=     | Multiply and update      | x *= 2 → x = x * 2        |\n| /=     | Divide and update      | x /= 2 → x = x / 2        |\n| //=    | Floor divide and update | x //= 2 → x = x // 2       |\n| %=     | Remainder and update   | x %= 2 → x = x % 2        |\n\n\n\n---\n\n# Assignment Operators in Action\n\n```python\nscore = 0\n\nscore += 10    # Got a point\nscore += 10    # Got another\nscore -= 5     # Penalty\nscore *= 2     # Bonus: double everything\n\nprint("Final score:", score)\n# Final score: 30\n```\n\nKeeps code clean — no need to rewrite variable twice.\n\n---\n\n# Comparison Operators\n\nCompare two values and return True or False.\n| Operator | Meaning          | Example  | Result  |\n| -------- | ---------------- | -------- | ------- |\n| ==      | Equal to         | 5 == 5  | True   |\n| !=      | Not equal       | 5 != 3  | True   |\n| >       | Greater than    | 7 > 3   | True   |\n| <       | Less than       | 2 < 1   | False  |\n| >=      | Greater or equal | 5 >= 5  | True   |\n| <=      | Less or equal    | 4 <= 3   | False  |\n\n---\n\n# Comparison in Action\n\n```python\nscore   = int(input("Your score: "))\npassing = 40\n\nprint("Passed :", score >= passing)\nprint("Failed :", score < passing)\nprint("Perfect:", score == 100)\n```\n\nYour score: 73 Passed: True, Failed: False, Perfect: False\nOutput is True or False — called booleans.\n\n\n---\n\n# Logical Operators\n\nCombine comparisons to make decisions.\n| Operator | Meaning           | Example          | Result  |\n| -------- | ----------------- | ---------------- | ------- |\n| and      | Both must be True | True and False   | False  |\n| or       | At least one True | True or False    | True   |\n| not      | Flip it           | not True         | False  |\n\n---\n\n# Logical in Action\n\n```python\nage    = int(input("Your age: "))\nheight = int(input("Height in cm: "))\n\neligible = age >= 12 and height >= 140\n\nprint("Eligible for ride:", eligible)\n```\n\nage: 13, height: 135 → Eligible: False\n\nBoth conditions must be met.\n\n---\n\n# String Operators\n\nStrings have their own operators:\n| Operator | Meaning            | Example              | Result       |\n| -------- | ------------------ | -------------------- | ------------ |\n| +        | Join strings       | "hi" + " there"      | "hi there"   |\n| *        | Repeat string      | "ha" * 3            | "hahaha"    |\n| in       | Check if contained | "cat" in "catfish" | True        |\n| not in   | Check if absent    | "dog" in "catfish"   | False       |\n\n\n---\n\n    \n\n---\n\n# Operator Precedence\n\n\nWhen multiple operators — which runs first?\n| Priority    | Operators                   | Description        |\n| ----------- | --------------------------- | ------------------ |\n| 1 (highest) | ()                        | Parentheses        |\n| 2           | **                        | Exponentiation     |\n| 3           | +x, -x                  | Unary plus / minus |\n| 4           | * / // %                 | Multiply / Divide  |\n| 5           | + -                      | Add / Subtract     |\n| 6           | == != > < >= <=           | Comparison         |\n| 7           | not                      | Logical NOT        |\n| 8           | and                      | Logical AND        |\n| 9 (lowest)  | or                       | Logical OR         |\n\n\n---\n\n# Why Precedence Matters\n\nSame numbers, wildly different results:\n```python\nprint(2 + 3 * 4)        # 14, * before +\nprint((2 + 3) * 4)      # 20, () forces + first\n```\n\nWhen in doubt, use parentheses.\n\n\n---\n\n# Build: Personal Stats Card\n\n```python\nname   = input("Name: ")\nage    = int(input("Age: "))\nheight = float(input("Height (in cm): "))\nweight = float(input("Weight (in kg): "))\n\nbmi        = round(weight / ((height / 100) ** 2), 2)\nbirth_year = 2025 - age\nmin_weight = round(18.5 * ((height / 100) ** 2), 1)\nmax_weight = round(24.9 * ((height / 100) ** 2), 1)\n\n\n\n\nprint("---")\nprint("Name       :", name)\nprint("Age        :", age, "| Born:", birth_year)\nprint("BMI        :", bmi)\nprint("Ideal range:", min_weight, "kg —", max_weight, "kg")\n```\n\nSample: Riya, 17, 162cm, 55kg\nBMI: 20.95, Born: 2008, Ideal: 48.5-65.3kg\n\n---\n\n# Final Task — Smart Score Card\n\n\nBuild a 2-player game score tracker:\n- Take each player\'s score per round\n- Use += to accumulate (not add all at once)\n- Print totals and average (2 decimals)\n- Use comparison + logical to determine:\n  - Who won (or tie)\n  - Perfect game: all 3 rounds above 80\n  - Close game: difference ≤ 10\n\n```\n--- Player 1 ---\nTotal: 241 | Avg: 80.33\n--- Player 2 ---\nTotal: 238 | Avg: 79.33\nWinner: Player 1, Perfect: False, Close: True\n```\n\n\n\nabs(a - b) gives difference without caring which is larger\n\n---\n\n# What You Learned Today\n\n- int(), float(), str() — convert types\n- Arithmetic: + - * / // % ** — 7 operators\n- Assignment: += -= *= — update without rewriting\n- Comparison: == != > < >= <= — return True/False\n- Logical: and or not — combine conditions\n- String: + * in not in — join, repeat, search\n- Precedence: () first, then **, then * /, then + -\n\n\n---\n\n# Coming Up\n\n**??**',
  "2-1":
    '# Week 2, Day 1 — Strings Up Close\n\n# Where We Left Off\n\nWeek 1 taught you the building blocks:\n\n- `print()` to show output\n- Variables to store data\n- `input()` to take data from the user\n- Operators to calculate and compare\n\nYou\'ve been using strings since Day 2 — but you\'ve never really looked inside them.\n\nToday, that changes.\n\n\n---\n\n# What Is a String, Really?\n\nA string is a **sequence of characters**.\n\n```python\nname = "Prassist"\n```\n\nIt\'s not just the word "Prassist" — to Python, it\'s five individual characters stored in a specific order:\n\n```\nP  r  a  s  s  i  s  t\n0  1  2  3  4  5  6  7\n```\n\nEvery character has a numbered position called an **index**, starting from `0`.\n\nThis matters — because once you know the positions, you can reach into a string and pull out exactly what you want.\n\n\n---\n\n# The Methods You\'ll Use Most\n\n| Method           | What it does                         | Example                                 | Result          |\n| ---------------- | ------------------------------------ | --------------------------------------- | --------------- |\n| `.upper()`       | All uppercase                        | `"hello".upper()`                       | `"HELLO"`       |\n| `.lower()`       | All lowercase                        | `"HELLO".lower()`                       | `"hello"`       |\n| `.strip()`       | Remove leading/trailing spaces       | `"  hi  ".strip()`                      | `"hi"`          |\n| `.replace(a, b)` | Swap one thing for another           | `"I love cats".replace("cats", "dogs")` | `"I love dogs"` |\n| `.title()`       | Capitalize first letter of each word | `"john doe".title()`                    | `"John Doe"`    |\n| `len()`          | Count total characters               | `len("hello")`                          | `5`             |\n\n\n---\n\n# Try It: Methods in Action\n\n```python\nname = input("Enter your name: ")\n\nprint(name.upper())    # All caps\nprint(name.title())    # Proper capitalization\nprint(len(name))       # How many characters\n```\n\n```\nEnter your name:   resha thapa\n  RESHA THAPA\n  Resha Thapa\n  11\n```\n\nThe spaces are also counted in `len()` — "resha thapa" is 11 characters including the space.\n\n\n---\n\n# Chaining Methods\n\nYou can call multiple methods in one line. Python runs them left to right:\n\n```python\nname = "  resha thapa  "\n\nclean = name.strip().title()\nprint(clean)   # "Resha Thapa"\n```\n\nStep by step:\n\n1. `name.strip()` → `"resha thapa"` (spaces removed)\n2. `.title()` applied to the result → `"Resha Thapa"`\n\n\n---\n\n# Practice 1\n\nAsk for someone\'s full name. Print it three ways: all caps, all lowercase, and title case. Also print the total number of characters.\n\n```python\nname = input("Your full name: ")\n\n# print uppercase\n# print lowercase\n# print title case\n# print length\n```\n\n**Expected output (for input " riya sharma "):**\n\n```\n  RIYA SHARMA\n  riya sharma\n  Riya Sharma\n  12\n```\n\nHint: strip the spaces first, then apply the other methods on the clean version.\n\n\n---\n\n# .replace() Up Close\n\n`.replace(old, new)` swaps every occurrence of one thing for another.\n\n```python\nmessage = "I love Mondays"\nnew_message = message.replace("Mondays", "Fridays")\nprint(new_message)   # "I love Fridays"\n```\n\nIt doesn\'t change the original — it returns a new string. So you must store it:\n\n```python\nsentence = "bad weather today"\nsentence.replace("bad", "great")   # ← does nothing if you don\'t store it\nprint(sentence)                     # still "bad weather today"\n\nsentence = sentence.replace("bad", "great")  # ← now it works\nprint(sentence)                               # "great weather today"\n```\n\n\n---\n\n# Practice 2\n\nAsk the user for a sentence. Replace the word `"hate"` with `"love"` and print the result. Also print the original unchanged sentence below it.\n\n```python\nsentence = input("Enter a sentence: ")\n# replace "hate" with "love" and store in new variable\n# print the new version\n# print the original\n```\n\n**Expected output (for input "I hate Mondays"):**\n\n```\nI love Mondays\nI hate Mondays\n```\n\n\n---\n\n# Indexing\n\nNow we go deeper. Strings are **ordered** — every character has a fixed position.\n\nYou access a character using square brackets `[]` with the index number inside:\n\n```python\nword = "Python"\nprint(word[0])   # \'P\'\nprint(word[1])   # \'y\'\nprint(word[5])   # \'n\'\n```\n\nThe positions look like this:\n\n```\n P   y   t   h   o   n\n 0   1   2   3   4   5\n```\n\nCounting always starts at `0` in Python. The last character is at position `len(word) - 1`.\n\n\n---\n\n# Negative Indexing\n\nPython also lets you count from the end using negative numbers:\n\n```python\nword = "Python"\nprint(word[-1])   # \'n\'  ← last character\nprint(word[-2])   # \'o\'  ← second from last\nprint(word[-6])   # \'P\'  ← same as word[0]\n```\n\nThe negative positions:\n\n```\n P   y   t   h   o   n\n-6  -5  -4  -3  -2  -1\n```\n\n\n---\n\n# Practice 3\n\nAsk the user for their full name. Print:\n\n- The first character using index `0`\n- The last character using index `-1`\n- Whether the name starts with a capital — compare `name[0]` to `name[0].upper()` and print `True` or `False`\n\n```python\nname = input("Your name: ")\n# print first character\n# print last character\n# print whether first character is uppercase\n```\n\n**Expected output (for input "priya"):**\n\n```\nFirst: p\nLast : a\nStarts with capital: False\n```\n\n\n---\n\n# Slicing\n\nIndexing gives you one character. **Slicing** gives you a chunk.\n\nThe format is:\n\n```python\nword[start:end]\n```\n\n- Starts at `start` (included)\n- Stops before `end` (not included)\n\n```python\nword = "Programming"\n\nprint(word[0:4])    # \'Prog\'    → positions 0, 1, 2, 3\nprint(word[4:7])    # \'ram\'     → positions 4, 5, 6\nprint(word[0:11])   # \'Programming\' → the whole word\n```\n\nThe end index is always **excluded**. Think of it as "stop before reaching this position."\n\n\n---\n\n# Slice Shortcuts\n\nYou can leave out the start or end to use defaults:\n\n```python\nword = "Programming"\n\nprint(word[:4])    # \'Prog\'       → from start up to (not including) 4\nprint(word[4:])    # \'ramming\'    → from position 4 to the very end\nprint(word[:])     # \'Programming\' → the whole string\nprint(word[-3:])   # \'ing\'        → last 3 characters\n```\n\n| Slice       | Meaning                             |\n| ----------- | ----------------------------------- |\n| `word[:n]`  | First `n` characters                |\n| `word[n:]`  | Everything from position `n` to end |\n| `word[-n:]` | Last `n` characters                 |\n\n\n---\n\n# Try It: Slicing in Action\n\n```python\nemail = input("Enter your email: ")\n# user types: "priya@gmail.com"\n\nusername = email[:5]          # first 5 characters\ndomain   = email[-9:]         # last 9 characters\n\nprint("Username preview:", username)\nprint("Domain         :", domain)\n```\n\n```\nEnter your email: priya@gmail.com\nUsername preview: priya\nDomain         : gmail.com\n```\n\n\n---\n\n# Practice 4\n\nAsk the user for any word. Print:\n\n- The first 3 characters\n- The last 3 characters\n- Everything except the first and last character (hint: `[1:-1]`)\n\n```python\nword = input("Enter a word: ")\n# print first 3\n# print last 3\n# print middle (without first and last)\n```\n\n**Expected output (for input "champion"):**\n\n```\nFirst 3 : cha\nLast 3  : ion\nMiddle  : hampion\n```\n\n\n---\n\n# Putting It Together\n\nMethods, indexing, and slicing all work on the same string — and you can combine them freely:\n\n```python\nname = "  priya thapa  "\n\nclean    = name.strip()         # "priya thapa"\ninitials = clean[0].upper() + "." + clean[6].upper() + "."\nprint(initials)   # "P.T."\n```\n\n```python\nword = input("Enter a word: ")\nprint(word[:3].upper())   # First 3 chars, in uppercase\n```\n\nSlicing returns a string. So you can call `.upper()`, `.lower()` etc. on a slice directly.\n\n\n---\n\n# Practice 5\n\nAsk for a product name and a price as a string (e.g. `"1500"`). Use string methods and slicing to print a formatted label:\n\n```python\nproduct = input("Product name: ")\nprice   = input("Price (numbers only): ")\n\n# Format the product name in title case\n# Extract only the first word of the product name using slicing\n# Print a formatted label\n```\n\n**Expected output (for input "running shoes" and "1500"):**\n\n```\nProduct : Running Shoes\nCategory: Running\nPrice   : Rs. 1500\n```\n\nHint: To get the first word, slice up to the index of the first space. A space character has a position like any other character.\n\n\n---\n\n# Challenge 1 — Username Formatter\n\nBuild an automatic username generator.\n\nAsk the user for:\n\n- First name\n- Last name\n- Birth year\n\n**Requirements:**\n\n- Strip extra spaces from both names before using them\n- Username = first 3 characters of first name + last name + last 2 digits of birth year — all **lowercase**\n- Display name = first name and last name in title case, joined with a space\n- Also print the total character count of the username\n\n**Expected output (for: " priya ", "THAPA", "2008"):**\n\n```\n==============================\nUsername     : prithapa08\nDisplay name : Priya Thapa\nLength       : 10\n==============================\n```\n\n\n---\n\n# Challenge 2 — Message Analyzer\n\nAsk the user to type any message. Print a full report about it using only string methods, indexing, and slicing.\n\n**Requirements:**\n\n- Total character count (including spaces)\n- First and last character (use indexing)\n- A "preview" — first 10 characters (use slicing)\n- The message in uppercase\n- The message with the word `"bad"` replaced by `"good"`\n- Whether the message starts with a capital letter — print `True` or `False`\n\n**Expected output (for message: "bad day today"):**\n\n```\n=============================\nMessage    : bad day today\nLength     : 13\nFirst char : b\nLast char  : y\nPreview    : bad day to\nUppercase  : BAD DAY TODAY\nCleaned    : good day today\nStarts cap : False\n=============================\n```\n\n\n---\n\n# What You Learned Today\n\n- Strings are **sequences of characters**, each with a numbered position starting at `0`\n- **Methods** are built-in tools you call with a dot: `.upper()`, `.lower()`, `.strip()`, `.replace()`, `.title()`\n- `len()` counts the total number of characters in a string\n- **Indexing** (`word[0]`, `word[-1]`) picks one character by position\n- Negative indexes count from the end — `word[-1]` is always the last character\n- **Slicing** (`word[start:end]`) extracts a range — start is included, end is excluded\n- You can **chain** methods and call them on slices: `word[:3].upper()`\n\n\n---\n\n# Coming Up — Day 2\n\n**??**',
  "2-2": `# Week 2, Day 2 - Sorted, Escape Characters & Lists

# Where We Left Off

Day 1 gave you a deep look at strings — methods, indexing, slicing.

Today we cover three new things:

1. \`sorted()\` — a powerful built-in function that works on strings and lists
2. Escape characters — special characters you can't just type directly
3. Lists — the most important data structure you'll learn this week

---

# Part 1: \`sorted()\`

# What is it?

\`sorted()\` is a **built-in Python function** that takes any sequence — a string, a list — and returns a **new, sorted version** of it.

It does not change the original. It always gives back a new sorted result.

\`\`\`python
word = "python"
print(sorted(word))    # ['h', 'n', 'o', 'p', 't', 'y']
print(word)            # 'python'  ← original unchanged
\`\`\`

> When used on a string, \`sorted()\` breaks it into individual characters and sorts them alphabetically. The result is a **list** — you'll understand lists fully later in this session.

---

# Sorting Numbers

\`sorted()\` works on a collection of numbers too:

\`\`\`python
scores = [85, 42, 97, 61, 30]
print(sorted(scores))    # [30, 42, 61, 85, 97]
\`\`\`

Default order is **ascending** (smallest to largest).

---

# Reverse Sort

To sort in descending order (largest to smallest), pass \`reverse=True\`:

\`\`\`python
scores = [85, 42, 97, 61, 30]
print(sorted(scores, reverse=True))    # [97, 85, 61, 42, 30]
\`\`\`

Works on strings too:

\`\`\`python
names = ["Prassist", "Kabir", "Arjun", "Zara"]
print(sorted(names))                   # ['Arjun', 'Kabir', 'Prassist', 'Zara']
print(sorted(names, reverse=True))     # ['Zara', 'Prassist', 'Kabir', 'Arjun']
\`\`\`

---

# Getting a String Back

When \`sorted()\` is used on a string, the result is a list of characters. To convert it back into a string, use \`"".join()\`:

\`\`\`python
word        = "python"
sorted_word = "".join(sorted(word))
print(sorted_word)    # 'hnopyt'
\`\`\`

---

# \`sorted()\` vs \`.sort()\`

You will sometimes see \`.sort()\` used instead. Here is the key difference:

|                   | \`sorted()\`        | \`.sort()\`               |
| ----------------- | ----------------- | ----------------------- |
| Works on          | Any sequence      | Lists only              |
| Changes original? | No — returns new  | Yes — modifies in place |
| Returns           | A new sorted list | \`None\`                  |

\`\`\`python
scores = [85, 42, 97]

# sorted() — safe, returns new list
new = sorted(scores)
print(scores)   # [85, 42, 97]  ← unchanged
print(new)      # [42, 85, 97]

# .sort() — modifies original
scores.sort()
print(scores)   # [42, 85, 97]  ← changed permanently
\`\`\`

> For now, prefer \`sorted()\` — it's safer because it doesn't destroy the original data.

---

# Part 2: Escape Characters

# The Problem

Some characters can't be typed directly inside a string. Try this:

\`\`\`python
print("She said "hello" to me")   # 💥 SyntaxError
\`\`\`

Python sees the second \`"\` and thinks the string ended there. It gets confused by what comes after.

Or this:

\`\`\`python
print("C:\\new_folder\\titles")   # ⚠️ Unexpected behaviour
\`\`\`

The \`\\n\` and \`\\t\` inside that path are interpreted as special characters — not as backslashes.

**Escape characters** solve this. They are two-character sequences starting with a backslash that tell Python: _"this is a special character, not a literal one."_

---

# The Escape Characters You Need to Know

| Escape | Meaning                                  | Example                | Output                              |
| ------ | ---------------------------------------- | ---------------------- | ----------------------------------- |
| \`\\n\`   | New line                                 | \`"line1\\nline2"\`       | line1 _(newline)_ line2             |
| \`\\t\`   | Tab (indent)                             | \`"name:\\tPrassist"\`       | name: Prassist |
| \`\\\\\`   | Literal backslash                        | \`"C:\\\\Users\\\\prassist"\`   | C:\\Users\\prassist                      |
| \`\\"\`   | Double quote inside double-quoted string | \`"She said \\"hello\\""\` | She said "hello"                    |
| \`\\'\`   | Single quote inside single-quoted string | \`'It\\'s fine'\`         | It's fine                           |

---

# Why This Matters

Escape characters are not just a syntax trick. They are essential for:

- Formatting output cleanly without dozens of \`print()\` calls
- Handling real-world data like file paths, quoted text, and tabular output
- Avoiding crashes when strings contain quotes or backslashes

---

# Part 3: Lists

# What is a List?

So far, every variable you've created holds **one value**:

\`\`\`python
name  = "Prassist"
score = 94
city  = "Kathmandu"
\`\`\`

But what if you need to store **multiple values** together?

Imagine you're building a school app. You need to store the scores of 30 students. Creating 30 separate variables is not programming — it's chaos.

A **list** solves this. It's a single variable that holds **multiple values, in order**.

\`\`\`python
scores = [85, 92, 78, 95, 61]
\`\`\`

---

# Real-Life Scenarios for Lists

| Situation     | What the list holds          |
| ------------- | ---------------------------- |
| Music app     | All songs in a playlist      |
| School system | All student names in a class |
| Shopping cart | All items added by the user  |
| Leaderboard   | Top 10 scores in a game      |
| To-do app     | All tasks the user added     |

> Every time you see a collection of similar things — names, scores, items, tasks — that's a list in Python.

---

# Why Lists Matter

Without lists:

\`\`\`python
student1 = "Arjun"
student2 = "Prassist"
student3 = "Kabir"
student4 = "Zara"
# ... 26 more variables
\`\`\`

With a list:

\`\`\`python
students = ["Arjun", "Prassist", "Kabir", "Zara"]
\`\`\`

One variable. All the data. Organised, accessible, and manageable.

---

# Creating a List

A list is created using **square brackets \`[]\`**, with items separated by commas:

\`\`\`python
fruits   = ["apple", "mango", "banana", "grape"]
scores   = [85, 92, 78, 95]
mixed    = ["Prassist", 17, "Kathmandu", True]   # lists can hold different types
empty    = []                                   # empty list — perfectly valid
\`\`\`

> Lists can hold strings, numbers, booleans — or a mix. In practice, you'll usually keep one type per list.

---

# Accessing Items

Just like strings, lists are **indexed starting at 0**:

\`\`\`python
fruits = ["apple", "mango", "banana", "grape"]

print(fruits[0])    # 'apple'
print(fruits[1])    # 'mango'
print(fruits[-1])   # 'grape'   ← last item
print(fruits[-2])   # 'banana'  ← second from last
\`\`\`

You can also slice a list exactly like a string:

\`\`\`python
print(fruits[1:3])    # ['mango', 'banana']
print(fruits[:2])     # ['apple', 'mango']
print(fruits[2:])     # ['banana', 'grape']
\`\`\`

And check the total number of items with \`len()\`:

\`\`\`python
print(len(fruits))    # 4
\`\`\`

---

# Changing Items

Unlike strings, lists are **mutable** — you can change individual items after creation:

\`\`\`python
fruits = ["apple", "mango", "banana", "grape"]

fruits[1] = "pineapple"
print(fruits)    # ['apple', 'pineapple', 'banana', 'grape']
\`\`\`

You simply assign a new value to the index:

\`\`\`python
scores = [85, 92, 78, 95]
scores[2] = 100
print(scores)    # [85, 92, 100, 95]
\`\`\`

> Compare this to strings — \`word[0] = "P"\` would crash because strings are **immutable** (cannot be changed after creation). Lists are different — they are designed to be changed.

---

# Adding Items

# .append() — Add to the End

\`\`\`python
fruits = ["apple", "mango"]
fruits.append("banana")
print(fruits)    # ['apple', 'mango', 'banana']
\`\`\`

\`.append()\` always adds to the **end** of the list. It changes the original list directly.

---

# .insert() — Add at a Specific Position

\`\`\`python
fruits = ["apple", "mango", "grape"]
fruits.insert(1, "banana")    # insert at index 1
print(fruits)                 # ['apple', 'banana', 'mango', 'grape']
\`\`\`

Everything from that index onward shifts one position to the right.

---

# Removing Items

# .remove() — Remove by Value

\`\`\`python
fruits = ["apple", "mango", "banana", "grape"]
fruits.remove("mango")
print(fruits)    # ['apple', 'banana', 'grape']
\`\`\`

\`.remove()\` finds the **first occurrence** of that value and removes it. If the value doesn't exist, it crashes:

\`\`\`python
fruits.remove("pineapple")   # 💥 ValueError: list.remove(x): x not in list
\`\`\`

---

# .pop() — Remove by Index

\`\`\`python
fruits = ["apple", "mango", "banana", "grape"]
removed = fruits.pop(1)       # removes item at index 1
print(removed)                # 'mango'
print(fruits)                 # ['apple', 'banana', 'grape']
\`\`\`

\`.pop()\` also **returns** the removed item — so you can store it if needed.

Without an argument, \`.pop()\` removes the **last item**:

\`\`\`python
fruits.pop()       # removes 'grape'
print(fruits)      # ['apple', 'banana']
\`\`\`

---

# .clear() — Remove Everything

\`\`\`python
fruits = ["apple", "mango", "banana"]
fruits.clear()
print(fruits)    # []
\`\`\`

---

# Other Useful List Operations

\`\`\`python
fruits = ["apple", "mango", "banana", "mango"]

print(fruits.count("mango"))    # 2  ← how many times 'mango' appears
print(fruits.index("banana"))   # 2  ← index of first 'banana'
print("apple" in fruits)        # True  ← membership check
print("grape" in fruits)        # False

fruits.reverse()                # reverses in place
print(fruits)                   # ['mango', 'banana', 'mango', 'apple']

fruits.sort()                   # sorts alphabetically in place
print(fruits)                   # ['apple', 'banana', 'mango', 'mango']
\`\`\`

---

# What You Learned Today

- \`sorted()\` returns a new sorted list — use \`reverse=True\` for descending order
- \`.sort()\` modifies the original list in place — prefer \`sorted()\` when you need to keep the original
- **Escape characters** let you include special characters in strings: \`\\n\` (new line), \`\\t\` (tab), \`\\\\\` (backslash), \`\\"\` and \`\\'\` (quotes)
- A **list** stores multiple values in a single variable, in a specific order
- Lists are **mutable** — you can change, add, and remove items after creation
- **Access**: \`list[0]\`, \`list[-1]\`, \`list[1:3]\`, \`len(list)\`
- **Change**: \`list[index] = new_value\`
- **Add**: \`.append()\` (end), \`.insert(index, value)\` (specific position)
- **Remove**: \`.remove(value)\` (by value), \`.pop(index)\` (by position), \`.clear()\` (everything)
- **Search**: \`.count()\`, \`.index()\`, \`in\` operator

---

# Coming Up — Day 3

**??**
`,
  "2-3": "# Week 2, Day 3 - Presentation on Lists\n\n **??**",
  "2-4": "# Week 2, Day 4 - Presentation on Tuples and Sets\n\n**??**",
"2-5":
    '# Week 2, Day 5 - Movie Watchlist Manager\n\n# 🎬 Your Project: Build a Movie Watchlist\n\nToday you\'ll learn three data structures by building a real movie watchlist. We\'ll use a **mix of pre-built data and interactive input**.\n\n---\n\n# Phase 1: Starting with Lists (Pre-built Data)\n\n## Your First Watchlist\n\nLet\'s start with some movies already in the system:\n\n```python\n# Pre-built list of movie titles\nwatchlist = ["Inception", "The Matrix", "Interstellar", "Parasite"]\nprint(watchlist)\n```\n\n```\n[\'Inception\', \'The Matrix\', \'Interstellar\', \'Parasite\']\n```\n\n---\n\n## Storing More Details\n\nNow let\'s store more info - title, year, and rating:\n\n```python\n# Each movie is a list: [title, year, rating]\nmovie1 = ["Inception", 2010, 9]\nmovie2 = ["The Matrix", 1999, 8]\nmovie3 = ["Interstellar", 2014, 9]\nmovie4 = ["Parasite", 2019, 10]\n\nwatchlist = [movie1, movie2, movie3, movie4]\n\nprint(watchlist[0])\n```\n\n```\n[\'Inception\', 2010, 9]\n```\n\n---\n\n## Getting Information Out\n\n```python\nfirst_movie = watchlist[0]\nprint("Title:", first_movie[0])\nprint("Year:", first_movie[1])\nprint("Rating:", first_movie[2])\n```\n\n```\nTitle: Inception\nYear: 2010\nRating: 9\n```\n\n---\n\n## Adding and Removing Movies\n\n```python\n# Add a new movie to the end\nwatchlist.append(["Dune", 2021, 8])\nprint(len(watchlist))\n\n# Remove a movie by value\nwatchlist.remove(["The Matrix", 1999, 8])\nprint(len(watchlist))\n```\n\n---\n\n# Phase 2: Add Your Own Movie (Interactive!)\n\nNow let\'s add a movie using input:\n\n```python\nprint("Add your favorite movie!")\n\ntitle = input("Enter movie title: ")\nyear = int(input("Enter year: "))\nrating = int(input("Enter your rating (1-10): "))\n\nmy_movie = [title, year, rating]\nwatchlist.append(my_movie)\n\nprint("Updated watchlist:")\nprint(watchlist)\n```\n\n---\n\n# Phase 3: The Problem - Data Got Changed!\n\n## Accidental Modification\n\nWatch what happens when we accidentally change a rating:\n\n```python\n# We accidentally change the rating!\nwatchlist[0][2] = 5\nprint(watchlist[0])\n```\n\n```\n[\'Inception\', 2010, 5]\n```\n\nOh no! The rating changed from 9 to 5!\n\n---\n\n# Phase 4: Tuples - Lock Your Data\n\n## Creating Tuples\n\nTuples use parentheses instead of square brackets:\n\n```python\nmovie1 = ("Inception", 2010, 9)\nmovie2 = ("The Matrix", 1999, 8)\nmovie3 = ("Interstellar", 2014, 9)\nmovie4 = ("Parasite", 2019, 10)\n\nwatchlist = [movie1, movie2, movie3, movie4]\nprint(watchlist)\n```\n\n```\n[(\'Inception\', 2010, 9), (\'The Matrix\', 1999, 8), (\'Interstellar\', 2014, 9), (\'Parasite\', 2019, 10)]\n```\n\n---\n\n## Trying to Change a Tuple\n\n```python\n# This will CRASH - tuples cannot be modified!\nwatchlist[0][2] = 5\n```\n\n```\nTypeError: \'tuple\' object does not support item assignment\n```\n\nThe crash is GOOD! It protects your data from accidental changes.\n\n---\n\n## Unpacking Tuples\n\n```python\nmovie = ("Inception", 2010, 9)\ntitle, year, rating = movie\n\nprint(title)   # Inception\nprint(year)    # 2010\nprint(rating)  # 9\n```\n\n---\n\n## Your Turn: Add a Movie as Tuple\n\n```python\nprint("Add a movie as a tuple!")\n\ntitle = input("Movie title: ")\nyear = int(input("Year: "))\nrating = int(input("Your rating: "))\n\nmy_movie = (title, year, rating)\nwatchlist.append(my_movie)\nprint(watchlist)\n```\n\n---\n\n# Phase 5: Sets - No Duplicates\n\n## The Genre Problem\n\n```python\n# Lists can have duplicates\ngenres = ["Sci-Fi", "Action", "Sci-Fi", "Thriller"]\nprint(genres)\n```\n\n```\n[\'Sci-Fi\', \'Action\', \'Sci-Fi\', \'Thriller\']\n```\n\n---\n\n## Using Sets Instead\n\n```python\n# Sets automatically remove duplicates\ngenres = {"Sci-Fi", "Action", "Sci-Fi", "Thriller"}\nprint(genres)\n```\n\n```\n{\'Sci-Fi\', \'Action\', \'Thriller\'}\n```\n\nNo duplicates! Perfect for genres.\n\n---\n\n## Adding to Sets\n\n```python\nmovie_genres = {"Sci-Fi", "Action"}\nmovie_genres.add("Thriller")\nprint(movie_genres)\n\n# Adding duplicate does nothing\nmovie_genres.add("Sci-Fi")\nprint(movie_genres)\n```\n\n---\n\n## Your Turn: Add Your Genres\n\n```python\nprint("Add genres for your movie!")\n\nmy_genres = set()\n\ng1 = input("Genre 1: ")\ng2 = input("Genre 2: ")\n\nmy_genres.add(g1)\nmy_genres.add(g2)\n\nprint("Your genres:", my_genres)\n```\n\n---\n\n# Phase 6: The Complete Movie Watchlist\n\n## Your Complete Working Program\n\nHere\'s a complete movie watchlist program that you can copy and run. It combines lists, tuples, and sets:\n\n```python\n# ==================================================\n#       🎬 WELCOME TO MOVIE WATCHLIST! 🎬\n# ==================================================\n\n# Part 1: Pre-built movies (4 movies as tuples with sets)\nwatchlist = [\n    ("Inception", 2010, 9, {"Sci-Fi", "Action"}),\n    ("The Matrix", 1999, 8, {"Sci-Fi", "Action"}),\n    ("Interstellar", 2014, 9, {"Sci-Fi", "Adventure"}),\n    ("Parasite", 2019, 10, {"Drama", "Thriller"}),\n]\n\nprint("\\n" + "=" * 50)\nprint("        📋 PRE-LOADED MOVIES")\nprint("=" * 50)\n\n# Display pre-built movies manually (no loops)\nm1 = watchlist[0]\nm2 = watchlist[1]\nm3 = watchlist[2]\nm4 = watchlist[3]\n\nprint(f"1. {m1[0]} ({m1[1]}) - {\"★\" * m1[2]}")\nprint(f"   Genres: {\", \".join(m1[3])}")\nprint(f"2. {m2[0]} ({m2[1]}) - {\"★\" * m2[2]}")\nprint(f"   Genres: {\", \".join(m2[3])}")\nprint(f"3. {m3[0]} ({m3[1]}) - {\"★\" * m3[2]}")\nprint(f"   Genres: {\", \".join(m3[3])}")\nprint(f"4. {m4[0]} ({m4[1]}) - {\"★\" * m4[2]}")\nprint(f"   Genres: {\", \".join(m4[3])}")\n\n# Part 2: Student adds a movie\nprint("\\n" + "=" * 50)\nprint("        ➕ ADD YOUR OWN MOVIE")\nprint("=" * 50)\n\ntitle = input("Movie title: ")\nyear = int(input("Release year: "))\nrating = int(input("Your rating (1-10): "))\n\n# Create genres set with 2 inputs\ngenres = set()\ng1 = input("Genre 1: ")\ng2 = input("Genre 2: ")\ngenres.add(g1)\ngenres.add(g2)\n\nnew_movie = (title, year, rating, genres)\nwatchlist.append(new_movie)\n\n# Part 3: Display complete watchlist\nprint("\\n" + "=" * 50)\nprint("        🎬 YOUR COMPLETE WATCHLIST")\nprint("=" * 50)\n\nm1 = watchlist[0]\nm2 = watchlist[1]\nm3 = watchlist[2]\nm4 = watchlist[3]\nm5 = watchlist[4]\n\nprint(f"1. {m1[0]} ({m1[1]}) - {\"★\" * m1[2]}/10")\nprint(f"   Genres: {\", \".join(m1[3])}")\nprint(f"2. {m2[0]} ({m2[1]}) - {\"★\" * m2[2]}/10")\nprint(f"   Genres: {\", \".join(m2[3])}")\nprint(f"3. {m3[0]} ({m3[1]}) - {\"★\" * m3[2]}/10")\nprint(f"   Genres: {\", \".join(m3[3])}")\nprint(f"4. {m4[0]} ({m4[1]}) - {\"★\" * m4[2]}/10")\nprint(f"   Genres: {\", \".join(m4[3])}")\nprint(f"5. {m5[0]} ({m5[1]}) - {\"★\" * m5[2]}/10")\nprint(f"   Genres: {\", \".join(m5[3])}")\n\n# Part 4: Statistics\nprint("\\n" + "=" * 50)\nprint("        📊 WATCHLIST STATISTICS")\nprint("=" * 50)\n\n# Total movies\nprint(f"Total movies: {len(watchlist)}")\n\n# Average rating (manual calculation)\ntotal = m1[2] + m2[2] + m3[2] + m4[2] + m5[2]\naverage = total / len(watchlist)\nprint(f"Average rating: {round(average, 1)}")\n\n# Highest rating (manual comparison)\nhighest = m1[2]\nhighest_name = m1[0]\nif m2[2] > highest:\n    highest = m2[2]\n    highest_name = m2[0]\nif m3[2] > highest:\n    highest = m3[2]\n    highest_name = m3[0]\nif m4[2] > highest:\n    highest = m4[2]\n    highest_name = m4[0]\nif m5[2] > highest:\n    highest = m5[2]\n    highest_name = m5[0]\n\nprint(f"Highest rated: {highest_name} ({highest}★)")\n\n# Lowest rating (manual comparison)\nlowest = m1[2]\nlowest_name = m1[0]\nif m2[2] < lowest:\n    lowest = m2[2]\n    lowest_name = m2[0]\nif m3[2] < lowest:\n    lowest = m3[2]\n    lowest_name = m3[0]\nif m4[2] < lowest:\n    lowest = m4[2]\n    lowest_name = m4[0]\nif m5[2] < lowest:\n    lowest = m5[2]\n    lowest_name = m5[0]\n\nprint(f"Lowest rated: {lowest_name} ({lowest}★)")\n\n# All unique genres (set union)\nall_genres = m1[3] | m2[3] | m3[3] | m4[3] | m5[3]\nprint(f"All unique genres: {\", \".join(sorted(all_genres))}")\n\nprint("\\n" + "=" * 50)\nprint("        ✅ ENJOY YOUR WATCHLIST!")\nprint("=" * 50)\n```\n\n## Try It Out!\n\n1. Copy the code above\n2. Run it in Python\n3. Enter your movie when prompted\n4. See your complete watchlist with statistics!\n\nThe program uses:\n- **Lists** to store multiple movies\n- **Tuples** to store each movie\'s fixed data (title, year, rating)\n- **Sets** to store unique genres for each movie\n- **Set operations** (union `|`) to find all unique genres across the watchlist\n\n---\n\n## What You Learned Today\n\n### Lists - for collections that change\n```python\n[1, 2, 3]\nmy_list.append(value)\nmy_list.remove(value)\n```\n- Use square brackets\n- Can add, remove, modify\n- Good for: movie titles, anything that changes\n\n### Tuples - for fixed records\n```python\n(1, 2, 3)\n# Cannot be modified after creation!\n```\n- Use parentheses\n- Cannot be modified - protects data\n- Good for: movie details (title, year, rating)\n\n### Sets - for unique values\n```python\n{1, 2, 3}\nmy_set.add(value)\n```\n- Use curly braces (like dict, but just values)\n- No duplicates allowed\n- Good for: genres, tags, categories\n\n---\n\n## Summary\n\n| Structure | Brackets | Can Change? | Best For |\n|-----------|----------|-------------|----------|\n| List      | [...]    | Yes         | Changing collections |\n| Tuple     | (...)    | No          | Fixed records |\n| Set       | {...}    | Yes (add/remove) | Unique values |\n\n---\n\n## Coming Up - Day 6\n\nTomorrow we\'ll learn about **Dictionaries** - another powerful way to store and organize data!\n',
  "2-6":
    '# Week 2, Day 6 — Dictionaries\n\n---\n\n## 🔁 The Problem With What We Have\n\nYou\'ve stored data using lists, tuples, and sets. But they all share one limitation — you access data **by position**.\n\n```python\nstudent = ("Prassist", 17, 91, "Kathmandu")\n\nprint(student[2])   # What is index 2? Score? Age?\n```\n\nIn a list or tuple, you have to **remember** what each position means. The larger your data, the easier it is to confuse index `2` and index `3`.\n\nWhat if you could access data **by name** instead?\n\n```python\nstudent["score"]      # instantly clear\nstudent["city"]       # no guessing\n```\n\nThat\'s a **dictionary**.\n\n---\n\n## 📖 What is a Dictionary?\n\nA dictionary stores data as **key-value pairs**.\n\n- The **key** is the label — like a name tag\n- The **value** is the data attached to that label\n\n```python\nstudent = {\n    "name"  : "Prassist Thapa",\n    "age"   : 17,\n    "score" : 91,\n    "city"  : "Kathmandu"\n}\n```\n\nThink of it like a real dictionary — you look up a word (key) and get its meaning (value). You never say "give me the word at position 3." You look it up by name.\n\n---\n\n## 🛠️ Creating a Dictionary\n\nUse **curly braces `{}`** with `key: value` pairs separated by commas:\n\n```python\n# A student profile\nstudent = {\n    "name"  : "Prassist Thapa",\n    "age"   : 17,\n    "score" : 91\n}\n\n# A product\nproduct = {\n    "title" : "Running Shoes",\n    "price" : 1500,\n    "stock" : 42\n}\n\n# Empty dictionary\nempty = {}\n```\n\n**Rules for keys:**\n\n- Almost always strings — clear and readable\n- Must be unique — no two keys can be the same\n- Case-sensitive: `"Name"` and `"name"` are different keys\n\n**Values can be anything:**\n\n```python\nprofile = {\n    "name"     : "Prassist",\n    "scores"   : [91, 85, 88],         # list as a value\n    "active"   : True,                  # boolean\n    "subjects" : {"Maths", "Science"},  # set as a value\n}\n```\n\n---\n\n## 🔍 Accessing and Modifying Values\n\n**Access** a value using its key in square brackets:\n\n```python\nstudent = {"name": "Prassist", "age": 17, "score": 91}\n\nprint(student["name"])    # \'Prassist\'\nprint(student["score"])   # 91\n```\n\n**Add** a new key or **update** an existing one — same syntax:\n\n```python\nstudent["city"]  = "Kathmandu"   # new key — added\nstudent["score"] = 95            # existing key — updated\n\nprint(student)\n# {\'name\': \'Prassist\', \'age\': 17, \'score\': 95, \'city\': \'Kathmandu\'}\n```\n\n> There\'s no separate "add" and "update" command. If the key exists, it updates. If not, it creates. Same line either way.\n\n---\n\n## 🛡️ `.get()` — Safe Access\n\nAccessing a key that doesn\'t exist **crashes**:\n\n```python\nprint(student["grade"])    # 💥 KeyError: \'grade\'\n```\n\n`.get()` returns `None` instead of crashing — and lets you set a default:\n\n```python\nprint(student.get("grade"))             # None\nprint(student.get("grade", "N/A"))      # \'N/A\'\nprint(student.get("name",  "Unknown"))  # \'Prassist\' ← key exists, default ignored\n```\n\n> Use `.get()` whenever you\'re not 100% sure a key exists. It\'s the safe version of `dict["key"]`.\n\n---\n\n## 🔑 `in` — Check if a Key Exists\n\nThe `in` operator checks whether a key exists in the dictionary — returns `True` or `False`:\n\n```python\nstudent = {"name": "Prassist", "age": 17, "score": 91}\n\nprint("name"  in student)    # True\nprint("city"  in student)    # False\nprint("score" in student)    # True\n```\n\n```python\n# Practical use\nif "city" in student:\n    print(student["city"])\nelse:\n    print("City not found")\n```\n\n> `in` checks **keys only** — not values. `"Prassist" in student` returns `False` even though `"Prassist"` is a value in the dictionary.\n\n---\n\n## 🔄 `.update()` — Merge Another Dictionary\n\n`.update()` adds all key-value pairs from one dictionary into another. Existing keys get overwritten, new keys get added:\n\n```python\nstudent = {"name": "Prassist", "score": 91}\nextra   = {"city": "Kathmandu", "age": 17, "score": 95}\n\nstudent.update(extra)\nprint(student)\n# {\'name\': \'Prassist\', \'score\': 95, \'city\': \'Kathmandu\', \'age\': 17}\n```\n\n> `score` was updated from `91` to `95` because it existed in both. `city` and `age` were added fresh.\n\n---\n\n## 🗑️ `.pop()` — Remove a Key\n\n`.pop()` removes a key and **returns its value** — useful when you need to capture the value before deleting it:\n\n```python\nstudent = {"name": "Prassist", "score": 91, "temp_code": "A3X9"}\n\nremoved = student.pop("temp_code")\nprint(removed)    # \'A3X9\'\nprint(student)    # {\'name\': \'Prassist\', \'score\': 91}\n```\n\nIf the key doesn\'t exist, it crashes — unless you provide a default:\n\n```python\nstudent.pop("city", None)    # returns None instead of crashing\n```\n\n---\n\n## 📋 `.copy()` — Safe Copy\n\nAssigning a dictionary to a new variable does **not** create a copy — both names point to the same data in memory:\n\n```python\noriginal = {"name": "Prassist", "score": 91}\nbackup   = original             # ← not a copy\n\nbackup["score"] = 0\nprint(original["score"])    # 0  😱 original changed too\n```\n\nUse `.copy()` to create a fully independent copy:\n\n```python\noriginal = {"name": "Prassist", "score": 91}\nbackup   = original.copy()      # ← real copy\n\nbackup["score"] = 0\nprint(original["score"])    # 91  ✅ original unchanged\n```\n\n> This is the same trap as lists — `backup = original` shares the data. `.copy()` breaks that link.\n\n---\n\n## 📦 Inspecting a Dictionary\n\nFour tools for looking inside a dictionary:\n\n```python\nstudent = {"name": "Prassist", "age": 17, "score": 91, "city": "Kathmandu"}\n\nprint(len(student))           # 4  ← total key-value pairs\n\nprint(student.keys())         # dict_keys([\'name\', \'age\', \'score\', \'city\'])\nprint(student.values())       # dict_values([\'Prassist\', 17, 91, \'Kathmandu\'])\nprint(student.items())        # dict_items([(\'name\',\'Prassist\'), (\'age\',17), ...])\n```\n\nLoop through everything using `.items()`:\n\n```python\nfor key, value in student.items():\n    print(f"{key:<8} : {value}")\n```\n\n```\nname     : Prassist\nage      : 17\nscore    : 91\ncity     : Kathmandu\n```\n\n> `.items()` gives each pair as a tuple `(key, value)` — which you can unpack directly in the loop.\n\n---\n\n## ❓ Why Dictionaries — When We Already Have Lists, Tuples, and Sets?\n\nEach structure has a job:\n\n| Need                            | Use            |\n| ------------------------------- | -------------- |\n| Ordered collection that changes | **List**       |\n| Fixed record that never changes | **Tuple**      |\n| Unique values, fast membership  | **Set**        |\n| Labelled data, look up by name  | **Dictionary** |\n\nA dictionary replaces the need to memorise positions:\n\n```python\n# Tuple — you must remember every index\nstudent = ("Prassist", 17, 91, "Kathmandu")\nprint(student[2])           # is this score or age?\n\n# Dictionary — self-documenting\nstudent = {"name": "Prassist", "age": 17, "score": 91, "city": "Kathmandu"}\nprint(student["score"])     # immediately obvious\n```\n\nDictionaries also replace **parallel lists** — instead of one list for names and a separate one for scores, a dictionary holds everything together under meaningful labels.\n\n> They are the backbone of almost every real Python program. APIs, databases, configuration files, JSON data — all of it comes back as dictionaries.\n\n---\n\n## ✅ What You Learned Today\n\n- A **dictionary** stores `key: value` pairs — accessed by label, not position\n- Created with `{}` — keys are unique strings, values can be anything\n- `dict["key"]` — direct access, crashes if key missing\n- `.get("key", default)` — safe access, returns default instead of crashing\n- `"key" in dict` — checks if a key exists, returns `True` or `False`\n- `.update(other)` — merges another dictionary in, overwrites duplicate keys\n- `.pop("key")` — removes a key and returns its value\n- `.copy()` — creates an independent copy that won\'t affect the original\n- `len()`, `.keys()`, `.values()`, `.items()` — inspect size and loop through contents\n\n---\n\n## 👀 Coming Up — Week 3\n\n**??**\n'
,
  "3-1": week3Day1Content,
  "3-2": week3Day2Content,
  "3-3": week3Day3Content
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
  return (
    <CourseClient
      content={content}
      initialView={searchParams.view}
      initialDay={searchParams.day}
    />
  );
}
