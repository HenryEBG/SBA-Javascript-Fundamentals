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
      due_at: "2023-01-25",
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
  


  function searchLearner(learnerID){
    let founded=false;
    let i=0
    while(!founded && i<result.length){
      if(result[i].id===learnerID){
        founded=true
      }
      else{i++}
    }
    if(!founded){
      return -1
    } else {
      return i
    }
  }

    //search an assignment
    function searchAssigment(assignments,assignmetId){
      let founded=false;
      let i=0
      while(!founded && i<assignments.length)
      { 
        if(assignments[i].id===assignmetId){
          founded=true
        }else {i++}
      }
      if(!founded){
        return -1
      } else{
        return i
      }
  }

  for(i=0;i<submissions.length;i++){
    //buscar si ya esta el estudiante.  Si no esta se agrega sino se toma el index en el arreglo
    let resultIndex=searchLearner(submissions[i].learner_id)
    if(resultIndex===-1){
      result.push({id:submissions[i].learner_id,avg:0})
      resultIndex=result.length-1
    }

    //meter una funcion que busque el assigment en la base de assigments

    let position = searchAssigment(ag.assignments,submissions[i].assignment_id)
    if(position>=0){
      //ver si la fecha es menor a la fecha actual
      if (new Date(ag.assignments[position].due_at) < new Date()){
        console.log(`la tarea existe y ya se vencio`)
        //buscar si existe el assigment en el resultado si es asi
        //restar el valor del avg y agrgar el nuevo valor
        console.log(ag.assignments[position].id)
        if(typeof(result[resultIndex][ag.assignments[position].id])!=='undefined')
        {
          console.log(`existe la asignacion`)
          //restar el valor actual al avg
          //  console.log(result[resultIndex].avg)
          //  console.log(result[resultIndex][ag.assignments[position].id])
          result[resultIndex].avg-=result[resultIndex][ag.assignments[position].id]
          result[resultIndex][submissions[i].assignment_id]=submissions[i].submission.score
          result[resultIndex].avg+=submissions[i].submission.score          
        }
        else{
          console.log(`no existe la asignacion`)
          result[resultIndex][submissions[i].assignment_id]=submissions[i].submission.score
          result[resultIndex].avg+=submissions[i].submission.score
        }
        
      }
      else{
        continue
      }

      
    }
      
  }
  // // Search different learners with a submission and add the id at learnearArray
  // submissions.forEach(element => {
  //   //buscar en ag el assigment que corresponda
  //   ag.assigments.search(findAssigment)

  //   function findAssigment(assigment) {
  //     if (assigment.id === element.assignment_id) {
  //       console.log(`yes of course`)
  //     }
  //   }

  // }
  // )

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
