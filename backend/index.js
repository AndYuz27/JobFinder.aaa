const express = require('express')
var cors = require('cors')
const userRouter = require('./routes/user.router')
const companyRouter = require('./routes/company.routes')
const vacancyRouter = require('./routes/vacancy.router')
var fs = require('fs');
var util = require('util');
// const client = require('./el_sql');
let now = new Date();

var log_file = fs.createWriteStream(__dirname + `/debug_${now.getFullYear()}.${now.getMonth()}.${now.getDate()}(${now.getHours()}.${now.getMinutes()}.${now.getSeconds()}.${now.getMilliseconds()}).log`, {flags : 'w'});
var log_stdout = process.stdout;
const PORT = process.env.PORT || 8080



const app = express()
app.use(cors())
app.get('/' ,(req, res) => {
    res.send("This is back-end server! There's nothing to do here))")
})
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', companyRouter)
app.use('/api', vacancyRouter)




app.get('/sample_text', async (req, res) => {
  try {
      const results = await client.query('SELECT * FROM j_position');
      res.json(results);
  } catch (err) {
      console.log(err);
  }
})


app.listen(PORT, () =>
console.log("\nJobFinder server v. 0.5 dev \n[for educational purposes]\n\nServer launched in 8080 port\n"))


console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};


