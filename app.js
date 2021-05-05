const express = require('express');
const app =express();

  
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


  // get all students
  app.get('/api/students', (req, res) => {
  
      try{
        const students = [
          [
            { value: 1,className:"whiteCells"},
            { value: 2,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 18,className:"whiteCells"},
            { value: 20,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 2,className:"whiteCells"},
          ],
          [
            { value: 12,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 18,className:"whiteCells"},
            { value: 20,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 3,className:"whiteCells"},
          ],
          [
            { value: 12,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 18,className:"whiteCells"},
            { value: 20,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 4,className:"whiteCells"},
          ],
          [
            { value: 12,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 18,className:"whiteCells"},
            { value: 20,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 6,className:"whiteCells"},
          ],
          [
            { value: 12,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 18,className:"whiteCells"},
            { value: 20,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 6,className:"whiteCells"},
          ],
          [
            { value: 12,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 18,className:"whiteCells"},
            { value: 20,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 8,className:"whiteCells"},
          ],
          [
            { value: 12,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 18,className:"whiteCells"},
            { value: 20,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 100,className:"whiteCells"},
          ],
          [
            { value: 12,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 18,className:"whiteCells"},
            { value: 20,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 5,className:"whiteCells"},
          ],
          [
            { value: 12,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 18,className:"whiteCells"},
            { value: 20,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 7,className:"whiteCells"},
          ],
          [
            
            { value: 15,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 18,className:"whiteCells"},
            { value: 20,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 9 ,className:"whiteCells"}
          ],
          [
            { value: 15,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 18,className:"whiteCells"},
            { value: 20,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 3,className:"whiteCells" }
          ],
          [
            { value: 15,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 18,className:"whiteCells"},
            { value: 20,className:"whiteCells"},
            { value: 13,className:"whiteCells"},
            { value: 14,className:"whiteCells"},
            { value: 15,className:"whiteCells"},
            { value: 9,className:"whiteCells"}
          ],
        
        ];
      res.status(200).json(students);
  }catch (err) {
      console.error(err.message);
      res.status(500).send('Server error')
      
  }
    });

module.exports=app;