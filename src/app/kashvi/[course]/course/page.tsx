import CourseClient from "./CourseClient";
import { Suspense } from "react";

const content: Record<string, string> = {
  orientation: "# Orientation\n\n# Why This Course Exists\n\n- Most beginners:\n- They learn syntax\n- They memorize code\n- They still can't build anything\n\n---\n\n# The gap\n\n- You know some code\n- But you don't know how to think\n\n---\n\n# This course fixes that\n\n- We start with logic\n- We build step by step\n- We focus on understanding\n\n---\n\n# What you'll actually gain\n\n- Ability to break problems\n- Confidence to write your own code\n- Skill to build simple real projects\n\n---\n\n# Class Workflow\n\n- We start with a stand-up session\n- 30 mins Concepts\n- 60 to 90 mins Practical\n- You code every day\n\n---\n\n# Weekly Breakdown\n\n- Week 1: Building Blocks - Rewiring your brain\n- Week 2: Talking to the Machine - First real coding\n- Week 3: Building Logic - Making decisions and repetitions\n- Week 4: Functions - Modular programming\n- Week 5: Current Trends - How the tech world is moving\n- Week 6: Productivity with AI\n\n---\n\n# What Kind of Sessions to Expect\n\n- Interactive (not one-way lectures)\n- Hands-on (you will code)\n- Experimental (try, break, fix)\n\n---\n\n# Where Resources Will Be\n\n- All materials are organized.\n- Slides and references.\n- Easy to access anytime\n\n---\n\n# Where Assignments Will Be\n\n- Inside each day's section\n- Based on what you learned\n\n---\n\n# Where to Submit\n\n- Submission method will be shared\n- Simple and consistent format\n- On time matters\n\n---\n\n# What I Care About\n\n- Growth\n- Not marks\n- Not perfection\n\n---\n\n# One Rule\n\n- Get stuck\n\n---\n\n# Tasks for today:\n\n- Fill this form: https://docs.google.com/forms/d/e/1FAIpQLSfTzRyOlFr8bbEQns_hnubpyXDHOlN73ijE7pRLqkOD0Psr7A/viewform\n\n- Create a gmail with yourname.kashvi@gmail.com\n",
  tiy: "# Try It Yourself\n\n# Easy: Hello World Greeting Program\n\nBuild a program that:\n- Asks the user for their name\n- Displays a personalized greeting with their name\n- Says how excited you are to meet them\n\n---\n\n# Medium: Number Guessing Game\n\nBuild a game where:\n- Computer chooses a random number between 1 and 100\n- User tries to guess the number\n- Program tells if guess is too high or too low\n- Keep asking until they get it right\n- Show how many attempts it took\n\n---\n\n# Hard: Tic-Tac-Toe\n\nBuild a two-player game:\n- A 3x3 grid\n- Players take turns placing X and O\n- Detects when someone wins\n- Handles draws\n- Asks to play again\n",
  "1-1": "# Day 1: How the Internet Works\n\n# What is the Internet?\n\nThe Internet is computers talking to each other.\n\nThink of it like phones sending text messages.\n\n---\n\n# How Do Computers Talk?\n\n\n[Your Computer] sends a message\n           ↓\n[Another Computer] receives it\n\nThey use special rules to understand each other.\n\n\n---\n\n# Client and Server\n\nClient = You (asking for something)\nServer = The computer that has what you want\n\nWhen you open a website:\n- Your computer (Client) asks for data\n- The website computer (Server) sends it back\n\n---\n\n# IP Address\n\nEvery computer has an address called IP Address.\n\nLike your home address but for computers.\n\nExample: 142.250.190.14\n\nThis is google.com computer address.\n\n\n---\n\n# Problem with IP Addresses\n\nIP addresses are hard to remember.\n\n\nYou cannot remember: 142.250.190.14\n\nYou can remember: google.com\n\n---\n\n# Domain Name\n\nDomain name = Human-friendly name\n\ngoogle.com → maps to → 142.250.190.14\n\nIt is like saving contacts in your phone:\nMom → 9800000001\n\n---\n\n# HTTP and HTTPS\n\nHTTP = Rules for talking (not secure)\nHTTPS = Secure rules (S = Secure)\n\n\nWhen you see Lock icon in browser:\nYour conversation with website is private.\n\n---\n\n# Full Flow: Opening a Website\n\nStep 1: You type youtube.com\n\nStep 2: Browser finds youtube.com IP address\n\nStep 3: Your computer sends request to YouTube server\n\nStep 4: YouTube server processes your request\n\nStep 5: YouTube server sends back website data\n\nStep 6: Browser displays the website to you\n\n---\n\n# API - The Middle Layer\n\nAPI = Application Programming Interface\n\nThink of it like a WAITER in a restaurant:\n\nYou (Client) → Order from Waiter (API) → Kitchen (Server)\n\n\nAPI manages what you ask and what you get back.\n\n\n---\n\n# Updated Flow with API\n\n1. You open app\n\n2. App sends request to API (not directly to server)\n\n3. API talks to server\n\n4. API sends data back to your app\n\n5. App shows the data to you\n\n---\n\n# Summary: What We Learned\n\n- Client: You ask for things\n- Server: Gives you things\n- IP Address: Computer address\n- Domain Name: Easy name for address\n- HTTP/HTTPS: Communication rules\n- API: Middle person between you and server\n\n---\n\n# Task: Steps When You Open youtube.com\n\nWrite down the steps:\n\n1. You type youtube.com in browser\n\n2. Browser finds youtube.com IP address\n\n3. ?\n\n\n4. ?\n\n5. ?\n\n6. ?\n\n\nThink about:\n- Who are you asking?\n- What happens in between?\n- How do you get the video?\n",
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