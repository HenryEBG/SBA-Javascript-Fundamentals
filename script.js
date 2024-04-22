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
      due_at: "2023-01-24",
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
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 48
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
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

function getLearnerData(course, ag, submissions) {

  // here, we would process this data to achieve the desired result.
  // Array to return the desired result of the process
  let result = []
  
  //function that help to search a learner to don't repeat codes.
  function searchLearner(learnerID) {
    let founded = false;
    let i = 0
    //Iterate all the result array or stop until found the learner
    while (!founded && i < result.length) {

      if (result[i].id === learnerID) {
        founded = true
      }
      else { i++ }
    }
    //if doesn't found the learner return -1 
    //else return the index where it's found
    if (!founded) {
      return -1
    } else {
      return i
    }
  }


  //function that search an assigments
  //helps to sincronize the assigment base with the submission info
  function searchAssigment(assignments, assignmetId) {
    let founded = false;
    let i = 0
    while (!founded && i < assignments.length) {
      if (assignments[i].id === assignmetId) {
        founded = true
      } else { i++ }
    }
    //if doesn't found the assigment return -1 
    //else return the index where it's found
    if (!founded) {
      return -1
    } else {
      return i
    }
  }

  for (i = 0; i < submissions.length; i++) {
    let discount = 0
    //use the funtion to search a learner in the result array
    let resultIndex = searchLearner(submissions[i].learner_id)

    // doesn't found the learner insert a new object
    // with properties of id and avg with 0
    if (resultIndex === -1) {
      result.push({ id: submissions[i].learner_id, avg: 0 })
      resultIndex = result.length - 1
    }

    //Search the assigment that match with the submission
    let position = searchAssigment(ag.assignments, submissions[i].assignment_id)
    //create a temporal variable to make more easy to read the code
   
    //if the assigment exists begin the process to add the info to the result array
    // and validate that the date of DUE is before the actual date 
    if (position >= 0 && new Date(ag.assignments[position].due_at) < new Date()) {
      //compare if the object in the actual position has an atribute for the actual
      //assigment

      if (typeof (result[resultIndex][ag.assignments[position].id]) !== 'undefined') {
        //restar el valor actual al avg
        result[resultIndex].avg -= result[resultIndex][ag.assignments[position].id][0]
        if (new Date(ag.assignments[position].due_at) < new Date(submissions[i].submission.submitted_at)) {
          discount = ag.assignments[position].points_possible * .1
        }
        result[resultIndex][submissions[i].assignment_id] = [submissions[i].submission.score - discount, ag.assignments[position].points_possible]
        result[resultIndex].avg += (submissions[i].submission.score - discount)
      }
      else {
        //validar la fecha due_at con la fecha de envio
        if (new Date(ag.assignments[position].due_at) < new Date(submissions[i].submission.submitted_at)) {
          discount = ag.assignments[position].points_possible * .1
        }
        result[resultIndex][submissions[i].assignment_id] = [submissions[i].submission.score - discount, ag.assignments[position].points_possible]

        result[resultIndex].avg += (submissions[i].submission.score - discount)
      }

    }
  }


  //hacer los promedios y eliminar los arreglos reemplazandolos por el valor
  result.forEach(calculateAverage)

  function calculateAverage(item) {
    let total = 0
    for (let prop in item) {
      if (typeof (item[prop]) === 'object') {
        total += item[prop][1]
        item[prop] = item[prop][0] / item[prop][1]
      }

    }
    item.avg = item.avg / total
  }

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
