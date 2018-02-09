// # **Instructions**
//
// * When dealing with big databases, it is very likely that you will have to work with two or more datasets that are 
// related, but which have some degree of separation between them. In this case we have a table of the top 5000 songs 
// and a table of the top 3000 albums.
//
// * Emphasize the relationship between databases and tables: Tables live **in** databases—i.e., databases consist 
// of tables.
//
// * A **table** is a set of rows and columns. This set of rows and columns itself is _not_ a "database". We might, 
// however, have a database that consists of only a single table, but there remains a conceptual distinction between the
// database and the table.
//
// * It is your task to take these two large sets of data and come up with a method to join them together in order to 
// figure out if a given artist's song and album made it into the charts at the time of their release.
//
// * HINT: This can be done in a couple different ways using external data as well, but you do have all of the data you 
// need within your database to find the correlations. Give your methods some though before having to rely upon external info.
//
// * HINT: Remember that MySQL has the ability to combine two or more tables together so long as they share equivalent 
// data. What data is similar between the two lists?
//
// * Once you have managed to successfully bring the two datasets together, start making queries like those you made 
// earlier to this new table as well.


const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',

    password: 'root',
    database: 'top_songsDB'
});

connection.connect(function (err) {
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);
    // afterConnection();
    artistSearchD();

});


function afterConnection() {
    connection.query("SELECT * FROM Top5000", function(err, res) {
        if (err) throw err;
        console.log(res);

    });
}


function artistSearchD() {
    inquirer
        .prompt({
            name: "artist",
            type: "input",
            message: "What artist would you like to search for? I will return what songs they have in the top 5000" ,


        })

    // SELECT column_name(s)
        // FROM table1
        // INNER JOIN table2 ON table1.column_name = table2.column_name;

        .then(function (answer) {
            var query = "SELECT artist FROM top5000 INNER JOIN top5000Albums ON table1.artist = table2.artist WHERE ?";
            connection.query(query, { artist: answer.artist }, function(err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("These are the songs from the aritst in the top 1000. #: " + res[i].artist + " | " + res[i].album);
                }

                connection.end()
            })
        })
}































































