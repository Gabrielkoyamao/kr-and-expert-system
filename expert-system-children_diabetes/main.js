const express = require('express')
const app = express()
const PythonShell = require('python-shell');

/* GET home page. */
app.get('/res/api',(req, res, next) => {
  let options = {
    mode: 'text',
    pythonPath: '/usr/bin/python3',
    scriptPath: './',
    args: [req.query.age, req.query.glycemie, req.query.shakiness, req.query.hunger, req.query.sweating, req.query.headach,req.query.diabetic_parents, req.query.pale, req.query.urination, req.query.thirst, req.query.blurred_vision, req.query.dry_mouth, req.query.smelling_breath, req.query.shortness_of_breath]
  };

  PythonShell.run('expert-system.py', options, (err, results) => {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log(results);
    res.json({"res": results})
  });

});

app.get('/', (req, res) => res.send('Try: http://localhost:3000/res/api?age=3\
                                            &glycemie=2\
                                            &shakiness=True\
                                            &hunger=True\
                                            &sweating=True\
                                            &headach=True\
                                            &diabetic_parents=False\
                                            &pale=False\
                                            &urination=False\
                                            &thirst=False\
                                            &blurred_vision=False\
                                            &dry_mouth=False\
                                            &smelling_breath=False\
                                            &shortness_of_breath=False\
                                '))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
