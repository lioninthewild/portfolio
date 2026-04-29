export interface TIYSection {
  title: string;
  marks: number;
  content: string;
}

export interface TIYDifficulty {
  id: string;
  name: string;
  marks: number;
  color: {
    badge: string;
    border: string;
    bg: string;
    icon: string;
  };
  conceptual: TIYSection;
  coding: TIYSection;
}

export const tiyContent: Record<string, TIYDifficulty> = {
  easy: {
    id: "easy",
    name: "Easy",
    marks: 6,
    color: {
      badge: "bg-green-100 text-green-700",
      border: "border-green-300",
      bg: "bg-green-50",
      icon: "🟢",
    },
    conceptual: {
      title: "Q1. Conceptual",
      marks: 2,
      content: `Look at the following two programs:

**Program A:**
\`\`\`python
name = "Sana"
print("Hello", name)
\`\`\`

**Program B:**
\`\`\`python
name = input("Enter your name: ")
print("Hello", name)
\`\`\`

Both programs print a greeting. Explain **two differences** between how these programs behave when run. Your answer must mention what happens when each program starts and what determines the output.`,
    },
    coding: {
      title: "Q2. Coding",
      marks: 4,
      content: `Write a program that:

1. Asks the user for their **name** and their **favorite number**
2. Stores both in correctly named variables
3. Prints the following output — exactly matching the format below (the values will change based on input):

\`\`\`
Hey Arjun! Your favorite number doubled is 14.
\`\`\`

**Requirements:**
- The name must come from \`input()\`
- The favorite number must be stored as an **integer**
- The doubled value must be calculated using an operator — do not just type the answer manually
- The output must be a single \`print()\` statement

> 💡 Hint: You'll need to think about how to mix text and a calculated number in one \`print()\`. There are two ways — pick either.`,
    },
  },
  medium: {
    id: "medium",
    name: "Medium",
    marks: 9,
    color: {
      badge: "bg-yellow-100 text-yellow-700",
      border: "border-yellow-300",
      bg: "bg-yellow-50",
      icon: "🟡",
    },
    conceptual: {
      title: "Q3. Conceptual",
      marks: 3,
      content: `A student wrote this program to calculate the area of a rectangle:

\`\`\`python
length = input("Length: ")
width  = input("Width: ")
area   = length * width
print("Area:", area)
\`\`\`

When they ran it and entered \`5\` and \`4\`, the output was:

\`\`\`
Area: 55554444
\`\`\`

**a)** Explain _why_ this happened. What is Python actually doing on the line \`area = length * width\`? _(1 mark)_

**b)** Identify the fix needed and rewrite **only** the lines that need to change. _(1 mark)_

**c)** After your fix, what will \`type(area)\` return? Explain why. _(1 mark)`,
    },
    coding: {
      title: "Q4. Coding",
      marks: 6,
      content: `Write a program that works as a **time converter**. It should:

1. Ask the user to enter a number of **total minutes** (as an integer)
2. Calculate and display the equivalent in **hours and minutes** — e.g. \`137 minutes\` → \`2 hrs 17 mins\`
3. Also calculate and display the equivalent in **total seconds**
4. Also display whether the original input is an **even or odd** number of minutes — print \`True\` or \`False\` using an operator (do not use the words manually)

**Expected output format** (for input \`137\`):

\`\`\`
Time entered  : 137 minutes
Converted     : 2 hrs 17 mins
In seconds    : 8220
Even minutes  : False
\`\`\`

**Requirements:**
- Use \`//\` and \`%\` for the hours/minutes conversion — no other method accepted
- The seconds calculation must use a single operator expression
- The even/odd check must use an operator that produces a \`True\` or \`False\` value — think carefully about which one

> 💡 Hint: A number is even if dividing it by 2 leaves no remainder. There's an operator for that — and a comparison operator that turns it into True/False.`,
    },
  },
  hard: {
    id: "hard",
    name: "Hard",
    marks: 15,
    color: {
      badge: "bg-red-100 text-red-700",
      border: "border-red-300",
      bg: "bg-red-50",
      icon: "🔴",
    },
    conceptual: {
      title: "Q5. Conceptual",
      marks: 5,
      content: `Evaluate the following Python expressions **without running them**. Write the exact output Python would print for each line, and for lines (d) and (e), explain _why_ in one sentence.

\`\`\`python
# a)
print(3 + 4 * 2)

# b)
print((3 + 4) * 2)

# c)
print(2 ** 3 ** 2)

# d)
print(True or False and False)

# e)
x = 10
print(not x > 5 or x % 2 == 0)
\`\`\`

> 💡 Hint: For (c), remember that \`**\` is evaluated **right to left**. For (d) and (e), remember the precedence order: \`not\` → \`and\` → \`or\`.`,
    },
    coding: {
      title: "Q6. Coding",
      marks: 10,
      content: `Build a **Gaming Session Report** for a player at the end of a match. The program should:

**Inputs (all from \`input()\`):**
- Player's username
- Kills scored (integer)
- Deaths (integer)
- Assists (integer)
- Whether the player's team won — enter \`1\` for yes, \`0\` for no (store as integer)

**Calculations:**
- **K/D Ratio** = kills ÷ deaths — use \`round()\` to 2 decimal places
  > If deaths is \`0\`, this would crash — assume the user always enters at least 1 death
- **Score** = (kills × 10) + (assists × 4) − (deaths × 3)
- **Win bonus** = 50 points, but only if the team won (\`win = 1\`)
  > Formula: \`win_bonus = win * 50\`
  > This works because \`win\` is \`1\` (team won) or \`0\` (team lost), and \`1 * 50 = 50\`, \`0 * 50 = 0\`
- **Final score** = score + win bonus
- **Performance rating** out of 10 = \`round(final_score / 30, 1)\`
  > Cap note: this can go above 10 for exceptional games — that's fine, leave it as-is
- **MVP check**: player is MVP if kills are greater than deaths **and** final score is above 100
  > Use \`and\` — result should print as \`True\` or \`False\`

**Output format** (sample for: username \`ProRiya\`, 12 kills, 4 deaths, 6 assists, team won):

\`\`\`
=============================
   MATCH REPORT
=============================
Player       : ProRiya
Kills        : 12
Deaths       : 4
Assists      : 6
-----------------------------
K/D Ratio    : 3.0
Base Score   : 114
Win Bonus    : 50
Final Score  : 164
Rating       : 5.5 / 10
-----------------------------
MVP          : True
=============================
\`\`\`

**Requirements:**
- All score calculations must use operator expressions — no hardcoded answers in \`print()\`
- The divider lines (\`=\` and \`-\`) must be printed using the **string repeat operator** \`*\` — not typed manually
- \`round()\` must be used for K/D ratio and performance rating
- The win bonus formula given above must be used exactly as shown

> 💡 Hints:
> - \`"=" * 29\` prints 29 \`=\` signs — use this for both divider styles
> - \`1 * 50 = 50\` and \`0 * 50 = 0\` — that's how the win bonus "switches" without \`if\`
> - Calculate everything step by step in variables before writing any \`print()\` statements`,
    },
  },
};