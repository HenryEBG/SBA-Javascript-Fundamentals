# SBA Assignment Javscript-Fundamentals
## Workin with objects, arrays, loops, statenebts and try/catch functions
### Henry Berganza Guevara
This SBA let me use or my fundamental knowledge of Javascript to  solve
a real problem.  

The problem to solve is obtain the average of the graded submission of the learners.

Given the next entry data:
// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-23",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-37",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];




For now I'm begining to figure out what parts are important to include.  

For this SBA Asigment I explain where to find any of the requirements

## HTML Requirements
- #### Three pages
    - Login.html
    - register.html
    - main.html
- #### Grid apply with bootstrap 5
- #### html tags
    - img
    - a
    - input
    - div
    - form
    - select
    - table
    - th
    - td
    - tr
    - iframe
- #### 2 tables included in page main.html
- #### Forms included in index.html and register.html
- #### Dropdowns included in index.html and register.html
-  #### Text, images and gifs included in main.html

## CSS Requirements
-  #### Inline, internal and external styling
    - Inline included  index.html line 33
    - Internal included index.html line 16
    - external included index.css line 8 and 9
-  #### Include 5 selectors
    - tag selector index.html line 17
    - Class selector ColorSquema.css
    - id selector index.css
    - seudoclass selector index.css
    - Seudoselector main.css 
-  #### Include colors
    - Colors applied in ColorSquema.css 
-  #### Bootstrap grid
    - Bootstrap grid added to main.css and register.css