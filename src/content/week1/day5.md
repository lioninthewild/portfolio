# Week 1, Day 5: Strings and String Operations

## Working with Text

Strings are sequences of characters (text).

You can use single quotes, double quotes, or triple quotes:

```
message1 = 'Hello'
message2 = "Hello"
message3 = '''Hello, how are you?'''
```

## String Concatenation

Combine strings using +:

```
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print(full_name)  # John Doe
```

## String Methods

Python provides useful string methods:

```
text = "hello world"

print(text.upper())       # HELLO WORLD
print(text.lower())       # hello world
print(text.capitalize())  # Hello world
print(text.title())       # Hello World
print(len(text))          # 11
```

## f-Strings (Formatted Strings)

The modern way to embed variables in strings:

```
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old.")
```

---

## Practice!

Create a program that asks for user's first and last name, then displays a formatted greeting.