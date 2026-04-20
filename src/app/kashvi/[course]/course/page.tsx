import CourseClient from "./CourseClient";
import { Suspense } from "react";

const content: Record<string, string> = {
  orientation: "# Orientation\n\n# Why This Course Exists\n\n- Most beginners:\n- They learn syntax\n- They memorize code\n- They still can't build anything\n\n---\n\n# The gap\n\n- You know some code\n- But you don't know how to think\n\n---\n\n# This course fixes that\n\n- We start with logic\n- We build step by step\n- We focus on understanding\n\n---\n\n# What you'll actually gain\n\n- Ability to break problems\n- Confidence to write your own code\n- Skill to build simple real projects\n\n---\n\n# Class Workflow\n\n- We start with a stand-up session\n- 30 mins Concepts\n- 60 to 90 mins Practical\n- You code every day\n\n---\n\n# Weekly Breakdown\n\n- Week 1: Building Blocks - Rewiring your brain\n- Week 2: Talking to the Machine - First real coding\n- Week 3: Building Logic - Making decisions and repetitions\n- Week 4: Functions - Modular programming\n- Week 5: Current Trends - How the tech world is moving\n- Week 6: Productivity with AI\n\n---\n\n# What Kind of Sessions to Expect\n\n- Interactive (not one-way lectures)\n- Hands-on (you will code)\n- Experimental (try, break, fix)\n\n---\n\n# Where Resources Will Be\n\n- All materials are organized.\n- Slides and references.\n- Easy to access anytime\n\n---\n\n# Where Assignments Will Be\n\n- Inside each day's section\n- Based on what you learned\n\n---\n\n# Where to Submit\n\n- Submission method will be shared\n- Simple and consistent format\n- On time matters\n\n---\n\n# What I Care About\n\n- Growth\n- Not marks\n- Not perfection\n\n---\n\n# One Rule\n\n- Get stuck\n\n---\n\n# Tasks for today:\n\n- Fill this form: https://forms.gle/47xNa1szRTzVfKjX9\n\n- Create a gmail with yourname.kashvi@gmail.com\n",
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