# Week 1, Day 3: Getting User Input

## Output vs Input

- **Output**: Printing information to the screen (print())
- **Input**: Getting information from the user

## Getting User Input

In Python, use the `input()` function to get user input:

```
name = input("What is your name? ")
print("Hello, " + name + "!")
```

When this runs, it will:
1. Show the prompt "What is your name?"
2. Wait for the user to type
3. Store what they typed in the `name` variable
4. Print the greeting

## Converting Input Types

The `input()` function always returns a string!

To work with numbers, convert them:

```
age = int(input("Enter your age: "))
price = float(input("Enter the price: "))
```

---

## Try It!

Ask the user for their name and age, then print a personalized message.