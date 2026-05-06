import CourseClient from "./CourseClient";
import { Suspense } from "react";

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
    '# Week 2, Day 5 — Lists, Tuples & Sets\n\n### Anchor Project: Classroom Manager\n\n---\n\n## 🔁 Where We Left Off\n\nDay 2 introduced lists — create, access, change, add, remove.\n\nToday we go deeper on lists, then introduce two new data structures that solve problems lists can\'t handle cleanly.\n\nWe\'ll build a **Classroom Manager** step by step. Each concept enters the moment the current approach hits a wall.\n\n---\n\n## 🏗️ The Project\n\nYou are building a system to manage a classroom.\n\nIt needs to:\n\n- Track and analyse student scores\n- Store student records that should never be accidentally changed\n- Manage a clean list of unique enrolled subjects\n\nLet\'s build it stage by stage.\n\n---\n\n## 📊 Stage 1: Score Tracker\n\n### The Problem\n\nYou have ten student scores. You need to answer:\n\n- What is the total and average?\n- Who scored highest and lowest?\n- What does the ranked order look like?\n\n```python\nscores = [72, 88, 65, 91, 55, 78, 83, 90, 61, 74]\n```\n\n---\n\n### `sum()`, `min()`, `max()`\n\nThese built-in functions work directly on any number list:\n\n```python\nscores = [72, 88, 65, 91, 55, 78, 83, 90, 61, 74]\n\nprint(sum(scores))    # 757  ← total of all values\nprint(min(scores))    # 55   ← smallest value\nprint(max(scores))    # 91   ← largest value\n```\n\nAverage — combine `sum()` and `len()`:\n\n```python\naverage = round(sum(scores) / len(scores), 2)\nprint(average)    # 75.7\n```\n\n---\n\n### The Copying Problem\n\nYou want a sorted ranking list — but you don\'t want to destroy the original order.\n\n```python\nscores        = [72, 88, 65, 91, 55, 78, 83, 90, 61, 74]\nranked_scores = scores          # ← looks fine\n\nranked_scores.sort()\nprint(ranked_scores)    # [55, 61, 65, 72, 74, 78, 83, 88, 90, 91]\nprint(scores)           # [55, 61, 65, 72, 74, 78, 83, 88, 90, 91]  😱\n```\n\nBoth changed. `ranked_scores = scores` doesn\'t copy — it creates a second name pointing to the **same list** in memory.\n\n**The fix:**\n\n```python\nranked_scores = scores.copy()    # Method 1 — explicit copy\nranked_scores = scores[:]        # Method 2 — slice copy\n```\n\nNow they are independent:\n\n```python\nscores        = [72, 88, 65, 91, 55, 78, 83, 90, 61, 74]\nranked_scores = scores.copy()\n\nranked_scores.sort(reverse=True)\nprint(ranked_scores)    # [91, 90, 88, 83, 78, 74, 72, 65, 61, 55]\nprint(scores)           # [72, 88, 65, 91, 55, 78, 83, 90, 61, 74]  ✅ unchanged\n```\n\n---\n\n## ✅ What You Learned Today\n\n**Lists (deeper):**\n\n- `sum()`, `min()`, `max()` — analyse number lists in one call\n- `.copy()` and `[:]` — create independent copies that don\'t affect the original\n\n**Tuples:**\n\n- Created with `()` — immutable, ordered, indexed\n- Crash on modification — that\'s the point\n- Unpacking: `a, b, c = (1, 2, 3)` — clean, readable, widely used\n- Best for fixed records: student IDs, coordinates, RGB values\n\n**Sets:**\n\n- Created with `{}` or `set()` — mutable, unordered, unique values only\n- `.add()`, `.remove()`, `.discard()`\n- Operations: `|` union, `&` intersection, `-` difference, `^` symmetric difference\n- Fast membership check with `in`\n- Wrap in `sorted()` for consistent print order\n\n---\n\n## 👀 Coming Up — Day 6\n\n**??**\n',
  "2-6":
    '# Week 2, Day 6 — Dictionaries\n\n### Anchor Project: School Report System\n\n---\n\n## 🔁 Where We Left Off\n\nDay 5 gave you three data structures:\n\n| Structure | Best for                         |\n| --------- | -------------------------------- |\n| List      | Ordered, changing collections    |\n| Tuple     | Fixed, immutable records         |\n| Set       | Unique values, membership checks |\n\nToday you\'ll see the limitation all three share — and how **dictionaries** solve it.\n\n---\n\n## 🏗️ The Project\n\nYou are building a **School Report System**.\n\nIt needs to:\n\n- Store each student\'s profile with labelled information\n- Look up any student\'s data instantly by name or ID\n- Generate a full report combining all data structures\n\nLet\'s start with the problem.\n\n---\n\n## ❓ The Problem with Lists and Tuples\n\nYou stored student data as a tuple:\n\n```python\nstudent = (101, "Prassist Thapa", 91, 17, "Kathmandu")\n```\n\nThis works — but to get the city, you have to remember it\'s at index `4`. If someone adds a new field in the middle, every index shifts and your code breaks.\n\nWhat you actually want is to access data **by name, not by number**:\n\n```python\nstudent["city"]     # \'Kathmandu\'\nstudent["score"]    # 91\nstudent["name"]     # \'Prassist Thapa\'\n```\n\nThat\'s exactly what a **dictionary** gives you.\n\n---\n\n## 📖 Part 1: What is a Dictionary?\n\nA dictionary stores data as **key-value pairs**. Instead of a numbered index, every value has a meaningful **label** (the key).\n\nThink of it like a real dictionary — you look up a word (key) and get its meaning (value).\n\n```python\nstudent = {\n    "id"    : 101,\n    "name"  : "Prassist Thapa",\n    "score" : 91,\n    "age"   : 17,\n    "city"  : "Kathmandu"\n}\n```\n\n---\n\n### Real-Life Scenarios\n\n| Situation       | What the dictionary holds                                           |\n| --------------- | ------------------------------------------------------------------- |\n| User profile    | `{"name": "Prassist", "email": "...", "age": 17}`                      |\n| Product listing | `{"title": "Shoes", "price": 1500, "stock": 42}`                    |\n| Country data    | `{"name": "Nepal", "capital": "Kathmandu", "population": 30000000}` |\n| Word frequency  | `{"python": 5, "code": 3, "loop": 2}`                               |\n\n> Whenever you need to look something up by a meaningful name rather than a position number — that\'s a dictionary.\n\n---\n\n### Creating a Dictionary\n\n```python\n# Curly braces, key: value pairs, separated by commas\nprofile = {\n    "name"  : "Prassist Thapa",\n    "age"   : 17,\n    "score" : 91\n}\n\n# Empty dictionary\nempty = {}\n```\n\nKeys are almost always strings. Values can be anything — strings, numbers, lists, sets, even other dictionaries.\n\n```python\nstudent = {\n    "name"     : "Prassist Thapa",\n    "scores"   : [91, 85, 88],          # list as a value\n    "subjects" : {"Maths", "Science"},   # set as a value\n}\n```\n\n---\n\n## 🔍 Part 2: Accessing Values\n\nAccess a value using its key inside square brackets:\n\n```python\nprofile = {"name": "Prassist Thapa", "age": 17, "score": 91}\n\nprint(profile["name"])     # \'Prassist Thapa\'\nprint(profile["score"])    # 91\n```\n\nIf the key doesn\'t exist, it crashes:\n\n```python\nprint(profile["city"])    # 💥 KeyError: \'city\'\n```\n\nSafer access using `.get()` — returns `None` instead of crashing:\n\n```python\nprint(profile.get("city"))           # None\nprint(profile.get("city", "N/A"))    # \'N/A\'  ← default if not found\n```\n\n> Use `.get()` whenever you\'re not 100% sure the key exists — it prevents crashes and lets you set a sensible default.\n\n---\n\n### School Report System — Stage 1\n\n```python\nstudent = {\n    "id"    : 101,\n    "name"  : "Prassist Thapa",\n    "score" : 91,\n    "age"   : 17,\n    "city"  : "Kathmandu"\n}\n\nprint("=" * 35)\nprint("   STUDENT PROFILE")\nprint("=" * 35)\nprint(f"ID     : {student[\'id\']}")\nprint(f"Name   : {student[\'name\']}")\nprint(f"Score  : {student[\'score\']}")\nprint(f"Age    : {student[\'age\']}")\nprint(f"City   : {student[\'city\']}")\nprint("=" * 35)\n```\n\n```\n===================================\n   STUDENT PROFILE\n===================================\nID     : 101\nName   : Prassist Thapa\nScore  : 91\nAge    : 17\nCity   : Kathmandu\n===================================\n```\n\n---\n\n## ✏️ Part 3: Adding and Changing Values\n\n### Adding a New Key\n\n```python\nprofile = {"name": "Prassist Thapa", "score": 91}\n\nprofile["city"] = "Kathmandu"    # adds new key-value pair\nprint(profile)\n# {\'name\': \'Prassist Thapa\', \'score\': 91, \'city\': \'Kathmandu\'}\n```\n\nIf the key already exists, it updates the value:\n\n```python\nprofile["score"] = 95    # updates existing key\nprint(profile["score"])  # 95\n```\n\n> There\'s no separate "add" and "update" — the same `=` assignment does both. If the key exists, it updates. If not, it creates.\n\n---\n\n### Removing a Key\n\n```python\nprofile = {"name": "Prassist", "score": 91, "city": "Kathmandu"}\n\ndel profile["city"]          # removes key — crashes if not found\nprint(profile)               # {\'name\': \'Prassist\', \'score\': 91}\n\nremoved = profile.pop("score")   # removes and returns the value\nprint(removed)               # 91\nprint(profile)               # {\'name\': \'Prassist\'}\n```\n\n---\n\n## 🔑 Part 4: Exploring a Dictionary\n\n### `.keys()`, `.values()`, `.items()`\n\nThese three methods let you look inside a dictionary:\n\n```python\nprofile = {"name": "Prassist", "score": 91, "city": "Kathmandu"}\n\nprint(profile.keys())      # dict_keys([\'name\', \'score\', \'city\'])\nprint(profile.values())    # dict_values([\'Prassist\', 91, \'Kathmandu\'])\nprint(profile.items())     # dict_items([(\'name\', \'Prassist\'), (\'score\', 91), (\'city\', \'Kathmandu\')])\n```\n\nConvert to a list if you need to index into them:\n\n```python\nkeys   = list(profile.keys())\nvalues = list(profile.values())\n\nprint(keys[0])      # \'name\'\nprint(values[0])    # \'Prassist\'\n```\n\n---\n\n### Checking if a Key Exists\n\n```python\nprofile = {"name": "Prassist", "score": 91}\n\nprint("name"  in profile)    # True\nprint("city"  in profile)    # False\nprint("score" in profile)    # True\n```\n\n---\n\n### `.update()` — Merge Another Dictionary\n\n```python\nprofile = {"name": "Prassist", "score": 91}\nextra   = {"city": "Kathmandu", "age": 17}\n\nprofile.update(extra)\nprint(profile)\n# {\'name\': \'Prassist\', \'score\': 91, \'city\': \'Kathmandu\', \'age\': 17}\n```\n\n---\n\n### `len()` on a Dictionary\n\n```python\nprofile = {"name": "Prassist", "score": 91, "city": "Kathmandu"}\nprint(len(profile))    # 3  ← number of key-value pairs\n```\n\n---\n\n## 📋 Part 5: Dictionary of Dictionaries\n\nA dictionary\'s value can itself be a dictionary. This is how you build structured records for multiple students:\n\n```python\nclassroom = {\n    "Prassist" : {"id": 101, "score": 91, "city": "Kathmandu"},\n    "Arjun"    : {"id": 102, "score": 78, "city": "Pokhara"},\n    "Kabir"    : {"id": 103, "score": 88, "city": "Lalitpur"},\n}\n```\n\nAccess is chained:\n\n```python\nprint(classroom["Prassist"]["score"])    # 91\nprint(classroom["Arjun"]["city"])     # \'Pokhara\'\n```\n\nAdd a new student:\n\n```python\nclassroom["Zara"] = {"id": 104, "score": 65, "city": "Bhaktapur"}\n```\n\n---\n\n### School Report System — Stage 2\n\n```python\nclassroom = {\n    "Prassist" : {"id": 101, "score": 91, "city": "Kathmandu"},\n    "Arjun"    : {"id": 102, "score": 78, "city": "Pokhara"},\n    "Kabir"    : {"id": 103, "score": 88, "city": "Lalitpur"},\n    "Zara"     : {"id": 104, "score": 65, "city": "Bhaktapur"},\n    "Riya"     : {"id": 105, "score": 83, "city": "Kathmandu"},\n}\n\nscores = [data["score"] for data in classroom.values()]\n\nprint("=" * 40)\nprint("   CLASSROOM OVERVIEW")\nprint("=" * 40)\nfor name, data in classroom.items():\n    print(f"{name:<12} | ID: {data[\'id\']} | Score: {data[\'score\']} | {data[\'city\']}")\nprint("-" * 40)\nprint(f"Average : {round(sum(scores)/len(scores), 2)}")\nprint(f"Highest : {max(scores)}")\nprint(f"Lowest  : {min(scores)}")\nprint("=" * 40)\n```\n\n```\n========================================\n   CLASSROOM OVERVIEW\n========================================\nPrassist      | ID: 101 | Score: 91 | Kathmandu\nArjun         | ID: 102 | Score: 78 | Pokhara\nKabir         | ID: 103 | Score: 88 | Lalitpur\nZara          | ID: 104 | Score: 65 | Bhaktapur\nRiya          | ID: 105 | Score: 83 | Kathmandu\n----------------------------------------\nAverage : 81.0\nHighest : 91\nLowest  : 65\n========================================\n```\n\n---\n\n## 🎯 Big Challenge — School Report System\n\nBuild a complete **School Report System** using all four data structures together.\n\n**Setup — do not change this:**\n\n```python\nstudents = [\n    {\n        "record"   : (101, "Prassist Thapa",    91),\n        "subjects" : {"Maths", "Science", "English"},\n        "history"  : [85, 88, 91],\n    },\n    {\n        "record"   : (102, "Arjun Karki",       78),\n        "subjects" : {"Maths", "Nepali", "PE"},\n        "history"  : [70, 74, 78],\n    },\n    {\n        "record"   : (103, "Kabir Shrestha",    88),\n        "subjects" : {"Science", "English", "Art"},\n        "history"  : [80, 83, 88],\n    },\n    {\n        "record"   : (104, "Zara Malla",        65),\n        "subjects" : {"Maths", "English", "Computer"},\n        "history"  : [60, 62, 65],\n    },\n    {\n        "record"   : (105, "Riya Gurung",        83),\n        "subjects" : {"Science", "Computer", "PE"},\n        "history"  : [75, 79, 83],\n    },\n]\n```\n\nEach item in `students` is a **dictionary** containing:\n\n- `"record"` → a **tuple**: `(id, name, latest_score)`\n- `"subjects"` → a **set** of subjects\n- `"history"` → a **list** of last 3 scores\n\n**Requirements:**\n\n**Section 1 — Student Table:**\nPrint a formatted table with ID, name, latest score, and score trend (last 3 history scores):\n\n```\nID     Name                 Score  Trend\n--------------------------------------\n101    Prassist Thapa       91     [85, 88, 91]\n```\n\n**Section 2 — Class Statistics:**\n\n- Collect all latest scores into a list using unpacking\n- Print: total students, class average (2dp), highest, lowest, ranked descending\n\n**Section 3 — Subject Analysis:**\n\n- Find all unique subjects across all students (union of all subject sets)\n- Find subjects common to **every** student (intersection)\n- Print total unique subjects\n\n**Section 4 — Score Trends:**\n\n- For each student, calculate their personal average across `history` using `sum()` and `len()`\n- Print each student\'s name and their personal average\n\n**Section 5 — Top & Bottom:**\n\n- Find and print the name of the student with the highest latest score\n- Find and print the name of the student with the lowest latest score\n\n**Expected output:**\n\n```\n============================================================\n   SCHOOL REPORT SYSTEM\n============================================================\nID     Name                 Score  Trend\n------------------------------------------------------------\n101    Prassist Thapa       91     [85, 88, 91]\n102    Arjun Karki          78     [70, 74, 78]\n103    Kabir Shrestha       88     [80, 83, 88]\n104    Zara Malla           65     [60, 62, 65]\n105    Riya Gurung          83     [75, 79, 83]\n============================================================\nTotal students : 5\nClass average  : 81.0\nHighest        : 91\nLowest         : 65\nRanked         : [91, 88, 83, 78, 65]\n------------------------------------------------------------\nAll subjects   : [\'Art\', \'Computer\', \'English\', \'Maths\', \'Nepali\', \'PE\', \'Science\']\nCommon to all  : []\nTotal unique   : 7\n------------------------------------------------------------\nPrassist Thapa    avg: 88.0\nArjun Karki       avg: 74.0\nKabir Shrestha    avg: 83.67\nZara Malla        avg: 62.33\nRiya Gurung       avg: 79.0\n------------------------------------------------------------\nTop student     : Prassist Thapa\nBottom student  : Zara Malla\n============================================================\n```\n\n> Hints:\n>\n> - Access record: `s["record"]` → unpack with `sid, name, score = s["record"]`\n> - Access subjects: `s["subjects"]`\n> - Access history: `s["history"]`\n> - Union: start `all_subs = set()`, then `all_subs = all_subs | s["subjects"]`\n> - Intersection: start `common = students[0]["subjects"].copy()`, then `common = common & s["subjects"]`\n> - Personal avg: `round(sum(s["history"]) / len(s["history"]), 2)`\n> - Top student: collect `(score, name)` pairs, find max by score\n\n---\n\n## ✅ What You Learned Today\n\n**Dictionaries:**\n\n- Created with `{}` — stores key-value pairs\n- Access: `dict["key"]` — crashes if missing; `dict.get("key", default)` — safe\n- Add/update: `dict["key"] = value` — same syntax for both\n- Remove: `del dict["key"]`, `dict.pop("key")` returns the removed value\n- Explore: `.keys()`, `.values()`, `.items()`\n- Merge: `.update(other_dict)`\n- Membership: `"key" in dict`\n- Nested: dictionary values can be other dictionaries, lists, sets, or tuples\n\n**All four structures — when to use which:**\n\n> **List** — ordered, changeable collection of similar items\n> **Tuple** — fixed record that should never be modified\n> **Set** — unique values, fast membership, comparison between groups\n> **Dictionary** — labelled data, look up by meaningful key instead of number\n\n---\n\n## 👀 Coming Up — Week 3\n\n**??**\n'
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
