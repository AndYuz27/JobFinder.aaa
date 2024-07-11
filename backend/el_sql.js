var pg = require('pg');
var client = new pg.Client("postgres://wkpygcwh:5yQvm_AeNHPnMix7VT1XGSAfIQpqr6Q7@motty.db.elephantsql.com/wkpygcwh");

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log('connecting to another world was successful');
    // console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
  });

});

module.exports = client;