// # **Instructions**
//
// * It's time to test your skills in creating databases and tables as you create a database called `top_songsDB` which
// will eventually house all of the music data contained within `TopSongs.csv`
//
// * Within your database create a table called `Top5000` and create columns capable of holding all of the data contained
// within `TopSongs.csv` properly.
//
// * All of your code should be written and saved within a filed called `schema.sql` so that you can use this same code
// later should the need ever arise
//
// * HINT: Try to have your table's columns match those within the CSV file as closely as possible or else you may find
// the next step in this assignment more difficult than it would otherwise be
//
// * BONUS: Create a `seeds.sql` file that contains the data for the first three songs found within `TopSongs.csv`
//
// * BONUS: Look into how MySQL Workbench can import and export data files. What file types does it accept? How does it
// convert the data?

//
// # Files
//
// #### TopSongs.csv
//
// #### Top1000Songs.csv
//
// ## Instructions
//
// Now that we have learned how to import big collections of data into a server, it is time to put this new knowledge to
// the test by importing all of the data contained within TopSongs.csv into our database.
//
// * HINT: Remember, bigger datasets require more time to import properly, so be patient
//
// * HINT: If you feel that the import process is taking far too long, feel free to use Top1000Songs.csv instead. We would
// highly recommend working with the bigger dataset if you can, however.
//
// * HINT: Take the downtime you have been given to start on the next part of the activity
//
// ### With all of your data successfully imported into the database, begin working on a Node console application which will
// allow you to collect more specialized pieces of data. For example...
//
// * A query which returns all data for songs sung by a specific artist
// * A query which returns all artists who appear within the top 5000 more than once
// * A query which returns all data contained within a specific range
// *
//                                                                                       * HINT: There are some MySQL queries
// which could make some of these tasks even easier to accomplish. Feel free to look at MySQL's documentation to find some of them.

// use top_songsDB;
// A query which returns all data for songs sung by a specific artist
// SELECT artist FROM Top5000;
//
// SELECT * from Top5000

// A query which returns all data contained within a specific range
// WHERE year_ BETWEEN '1950-03-11 00:00:00' AND '2016-05-11 23:59:00';
//
// A query which searches for a specific song in the top 5000 and returns the data for it
// SELECT * FROM Top5000 WHERE song LIKE "% Believe %";

// * A query which returns all artists who appear within the top 5000 more than once
// SELECT artist, COUNT(*) c FROM Top5000 GROUP BY artist HAVING c > 1;


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
        connection.end();
    });
}


function artistSearchD() {
    inquirer
        .prompt({
            name: "artist",
            type: "input",
            message: "What artist would you like to search for? I will return what songs they have in the top 5000" ,


        })
        .then(function (answer) {
            var query = "SELECT artist,song FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function(err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("These are the songs from the aritst in the top 1000. #: " + res[i].artist + " : " + res[i].song);
                }
            
                connection.end()
            })
        })
}

















































