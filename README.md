# SBA Assignment Javscript-Fundamentals
## Working with objects, arrays, loops, statenebts and try/catch functions
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

## Requirements
- Use try/catch statements
- Utilize different type of loops
- Utilize at least one loop control keyword such a break or continue
- Create and/or manupulate arrays and objects
- Demonstrate retrieval, manipulation and removal of items in an array or properties in an object
- Use functions to handle repeated tasks
- Program outputs processed data as described
- Ensure that te program runs without errors
- Commit frequently to the git repository
- Include a README file


## Reflections
What could you have done differently during the planning stages of your project to make the execution easier?
- For me it will be to plan all the problem with the inputs with try/catch.  After finished it turns more difficult to see them or to change it.

Were thre any requirements that were difficult to implement? What do you thik would make them easier to implement in future projects?
- Requirements as switch and continue/break because with my logic I didn't a good place to add this options.

What would you add to, or change about your application if given more time?
- Try/catch to made the application without errors when the data is out of place, ej. using different format, different type or gives a not a valid output like divided by 0

-To my future me. 
- Think always that te input it will be not correct and you have to think in all possible mistakes and give solution before it happens.