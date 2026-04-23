import CourseClient from "./CourseClient";
import { Suspense } from "react";

const content: Record<string, string> = {
  orientation: "# Orientation\n\n# Why This Course Exists\n\n- Most beginners:\n- They learn syntax\n- They memorize code\n- They still can't build anything\n\n---\n\n# The gap\n\n- You know some code\n- But you don't know how to think\n\n---\n\n# This course fixes that\n\n- We start with logic\n- We build step by step\n- We focus on understanding\n\n---\n\n# What you'll actually gain\n\n- Ability to break problems\n- Confidence to write your own code\n- Skill to build simple real projects\n\n---\n\n# Class Workflow\n\n- We start with a stand-up session\n- 30 mins Concepts\n- 60 to 90 mins Practical\n- You code every day\n\n---\n\n# Weekly Breakdown\n\n- Week 1: Building Blocks - Rewiring your brain\n- Week 2: Talking to the Machine - First real coding\n- Week 3: Building Logic - Making decisions and repetitions\n- Week 4: Functions - Modular programming\n- Week 5: Current Trends - How the tech world is moving\n- Week 6: Productivity with AI\n\n---\n\n# What Kind of Sessions to Expect\n\n- Interactive (not one-way lectures)\n- Hands-on (you will code)\n- Experimental (try, break, fix)\n\n---\n\n# Where Assignments Will Be\n\n- Inside each day's section\n- Based on what you learned\n\n---\n\n# Tasks for today:\n\n- Fill this form: https://docs.google.com/forms/d/e/1FAIpQLSfTzRyOlFr8bbEQns_hnubpyXDHOlN73ijE7pRLqkOD0Psr7A/viewform\n\n- Create a gmail with yourname.kashvi@gmail.com\n",
  tiy: "# Try It Yourself\n\n# Easy: Hello World Greeting Program\n\nBuild a program that:\n- Asks the user for their name\n- Displays a personalized greeting\n\n---\n\n# Medium: Number Guessing Game\n\nBuild a game where:\n- Computer chooses random number 1-100\n- User guesses\n- Shows high/low hints\n\n---\n\n# Hard: Tic-Tac-Toe\n\nBuild a two-player game:\n- 3x3 grid\n- Take turns with X and O\n- Detect wins\n",
  "1-1": "# Day 1: How the Internet Works\n\n# What is the Internet?\n\nThe Internet is computers talking to each other.\nThink of it like sending text messages.\n<Meme type=\"beginner\" />\n\n---\n\n# How Do Computers Talk?\n\nYour Computer sends message -> Another Computer receives\n\nThey use special rules to understand each other.\n\n---\n\n# Client and Server\n\nClient = You (asking for something)\nServer = Computer that has what you want\n\nWhen you open a website:\n- Your computer (Client) asks for data\n- The website computer (Server) sends it back\n\n---\n\n# IP Address\n\nEvery computer has an address called IP.\n\nExample: 142.250.190.14 (google.com computer)\n\nLike your home address but for computers.\n\n\n---\n\n# Problem with IP\n\nIP addresses are hard to remember.\nYou cannot remember: 142.250.190.14\nYou can remember: google.com\n<Meme type=\"confusion\" />\n\n\n---\n\n# Domain Name\n\nDomain name = Easy name for IP.\n\nggoogle.com -> 142.250.190.14\n\nLike saving contacts in your phone:\nMom -> 9800000001\n\n---\n\n# HTTP and HTTPS\n\nHTTP = Rules for talking (not secure)\nHTTPS = Secure rules (S = Secure)\n\n\nWhen you see Lock icon, your chat is private.\n\n---\n\n# Full Flow: Opening a Website\n\nStep 1: You type youtube.com\nStep 2: Browser finds IP address\nStep 3: Your computer sends request\nStep 4: Server processes request\nStep 5: Server sends back data\nStep 6: Browser shows website\n<Meme type=\"success\" />\n\n---\n\n# API - The Middle Layer\n\nThink of it like a WAITER in a restaurant:\n\nYou (Client) -> Waiter (API) -> Kitchen (Server)\nWaiter manages what you ask and what you get.\n\n\n---\n\n# Updated Flow with API\n\n1. You open app\n2. App sends request to API\n3. API talks to server\n4. API sends data back to app\n5. App shows data to you\n\n---\n\n# Summary\n\nClient = You ask for things\nServer = Gives you things\nIP = Computer address\nDomain = Easy name for IP\nHTTP = Rules for talking\nAPI = Middle person between you and server\n\n---\n\n# Task: Steps When You Open youtube.com\n\nWrite down the steps:\n1. You type youtube.com\n2. ?\n3. ?\n4. ?\n5. ?\n6. ?\n<Meme type=\"struggle\" />\n\n\nThink about:\n- Who are you asking?\n- What happens in between?\n- How do you get the video?\n",
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