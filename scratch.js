/** */
  // Temporal array to get a list of the different leartes on the submission
  let learnerArray = []
  
  // Search different learners with a submission and add the id at learnearArray
  submissions.forEach(element => {
    if (learnerArray.indexOf(element.learner_id) === -1) {
      learnerArray.push(element.learner_id)
    }
  });


  
  let i = 0
  let j = 0
  let founded = false

  //iterate learnerArray to add to the result array a one object with all assigments
  while (i < learnerArray.length) {
    //initialite result with an object in the index i
    result[i] = {}
    //add the learner id
    result[i].id = learnerArray[i]
    //add an empty array of assigments
    result[i].assigments = []

    //for every submission an object will be added to th assigment array
    submissions.forEach(element => {
      //if the actual learner is the same of the elemento of sumission
      if (learnerArray[i] === element.learner_id) {
        
        

        while (!founded && j < ag.assignments.length) {
          if (element.assignment_id === ag.assigments[j].assignment_id) {
            founded = true
            if (new Date(ag.assignments[j].due_at) < new Date()) {
              console.log(j)
              // result[i].assigments.push(1)

            }
          }
          j++
        }
        console.log(element.learner_id, learnerArray[i])
      }
    });
    i++
  }
  // agregar el codigo del estudiante al objeto como id. check
  // por cada estudiante procesar todas las asignaciones que ya se hayan vencido check
  // si la tarea esta vencida restarle a su nota el 10% del valor 
  // sumar la nota a un total
  // sumar la nota maxima a otro total
  // calcular el porcentaje de la materia dividiendo la nota recibida(con el descuento) entre el total
  // asignar el resultado como un atributo del objeto donde la llave es el assigment_id
  // la suma de las notas totales / entre la nota maxima total y guardarla como el atributo avg
  // empujar el objeto al array result.

  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0 // 150 / 150
  //   },
  //   {
  //     id: 132,
  //     avg: 0.82, // (39 + 125) / (50 + 150)
  //     1: 0.78, // 39 / 50
  //     2: 0.833 // late: (140 - 15) / 150
  //   }
  // ];
