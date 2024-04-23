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

/************************************************************************
 * Principal function to obtain average of submissions
 * @param {*} course 
 * @param {*} ag 
 * @param {*} submissions 
 * @returns 
 *************************************************************************/
function getLearnerData(course, ag, submissions) {

  // here, we would process this data to achieve the desired result.
  // Array to return the desired result of the process
  let result = []


  /************************************************************************
   * function that help to search a learner of a submission 
   * @param {*} learnerID 
   * @returns the position of the learner in the result array
   ************************************************************************/
  function searchLearner(learnerID) {
    let founded = false;//if found the learner goes true
    let i = 0//saved the index of the learner in the result array

    //Iterate all the result array or stop until found the learner
    while (!founded && i < result.length) {
      if (result[i].id === learnerID) {
        founded = true
      }
      else {
        i++
      }
    }
    //return the index or -1 is not founded
    return !founded ? -1 : i

  }


  /**********************************************************************************
   * function helps to sincronize the ag assigment with the submission assigment id
   * @param {*} assignments 
   * @param {*} assignmetId 
   * @returns 
   ***********************************************************************************/
  function searchAssigment(assignments, assignmetId) {
    let founded = false;
    let i = 0
    while (!founded && i < assignments.length) {
      if (assignments[i].id === assignmetId) {
        founded = true
      } else {
        i++
      }
    }
    //return the index or -1 is not founded
    return !founded ? -1 : i
  }


  /*****************************************************************************************
   * function that save the score to the result with the discount
   * of 10% if the submission date is after assigment date
   * @param {*} assigment object with the info of the assigment
   * @param {*} submission  object with the info of the submission
   * @param {*} index position in the result array
   *****************************************************************************************/
  function discountF(assigment, submission, index) {
    let discount = 0//variable to save temporarily the discount
    //if the submission date is after the due_at apply a 10% discount
    try {
      let dateSubmission = new Date(submission.submission.submitted_at)
      if (dateSubmission == 'Invalid Date') {

        result[index][submission.assignment_id] = 0
        throw "wrong date Avg and scores go to 0 in assigment code "+submission.assignment_id
      }
      else {
        if (new Date(assigment.due_at) < new Date(submission.submission.submitted_at)) {
          discount = assigment.points_possible * .1
        }
        //save the submission score in the result array
        result[index][submission.assignment_id] = [submission.submission.score - discount, assigment.points_possible]
        //update avg in the result array
        result[index].avg += (submission.submission.score - discount)
      }
    } catch (err) {
      console.log(err)
    }

  }


  /**************************************************************************************
   * function that calculate the total average and averages of all assigments graded
   * @param {*} item element of the result array to be calculated and formated
   **************************************************************************************/
  function calculateAverage(item) {
    //initialize total
    let total = 0
    for (let prop in item) {
      if (typeof (item[prop]) === 'object') {
        total += item[prop][1]
        try {
          if (item[prop][1] === 0) {
            throw new Error('Error cant be divided by 0')
          } else {
            item[prop] = item[prop][0] / item[prop][1]
          }
        } catch (e) {
          console.log(e)
          item[prop] = 0
        }
      }

    }
    try {
      if(total==0){
        item.avg=0
        throw "Can't be divided by 0"
      } else if(item.avg==0){
        item.avg=0
        throw "infinity result to divide 0 for any number"
      } else {
        item.avg = item.avg / total
      }
      
    } catch (e) {
      console.log(e)

    }
  }


  /**
   * Principal loop to process all submissions
   */
  for (i = 0; i < submissions.length; i++) {
    let discount = 0
    //use the function to search a learner in the result array
    let resultIndex = searchLearner(submissions[i].learner_id)

    // doesn't found the learner insert a new object
    // with properties of id and avg with 0
    if (resultIndex === -1) {
      result.push({ id: submissions[i].learner_id, avg: 0 })
      resultIndex = result.length - 1
    }

    //Search the assigment that match with the submission
    let position = searchAssigment(ag.assignments, submissions[i].assignment_id)

    //if the assigment exists begin the process to add the info to the result array
    // and validate that the date of DUE is before the actual date 

    if (position >= 0) {
      if (new Date(ag.assignments[position].due_at) < new Date()) {
        //compare if the object in the actual position has an atribute 
        //for the actual assigment
        if (typeof (result[resultIndex][ag.assignments[position].id]) !== 'undefined') {
          result[resultIndex].avg -= result[resultIndex][ag.assignments[position].id][0]
        }

        discountF(ag.assignments[position], submissions[i], resultIndex)
      }
    }
  }

  //for each element of the result calculate the average by assigment
  //calculates the average to the total
  result.forEach(calculateAverage)
  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
