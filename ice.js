// **Instructions**
//
// * Throughout this class we are going to be working on creating an application that takes in music data to create personalized playlists
//
// * Make sure to get as far as you can over the course of these assignments as the coding you do here will be extremely
// useful to you when you begin working on the homework
//
// * For now we will simply be creating your database in MySQL and then creating a connection to said database using Node.
// **Remember, you must create a database before attempting to connect to it. Doing otherwise will return an error.**
//
// * BONUS: Using MySQL Workbench, create a table in your database with four columns...
//
// * Primary Key of "ID" which auto-increments
// * A column called "title"
// * A column called "artist"
// * A column called "genre"
//
// * BONUS: Using MySQL Workbench, populate your table with a few rows of dummy data
//
// * BONUS: Start looking into how you can use the MySQL package to read data from a MySQL database

// NOTES //

// npm init , npm install 'package' //

/*
*
 drop database ice_db;
 create database ice_db;

 use ice_db;

 create table IceYo (
 ID int NOT NULL AUTO_INCREMENT,
 Flavor VARCHAR(30) NOT NULL,
 Toppings VARCHAR(30) NOT NULL,

 PRIMARY KEY (ID)
 );


 use ice_db;
 INSERT INTO IceYo (Flavor, Toppings)
 VALUES ('Vanilla', 'Sprinkles');
 */


const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',

    password: 'root',
    database: 'ice_db'
});

connection.connect(function (err) {
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);
    createIceCream();

    // updateIceCream();
    // queryAllProducts();
    // queryFlavor();
    // queryToppings();

});

function queryAllProducts() {
    connection.query('SELECT * FROM IceYo', function (err,res) {
        if (err) throw err;
        console.log(res);

        for (var i = 0; i <res.length; i++) {
            console.log(res[i].ID + " | " + res[i].Flavor + " | " + res[i].Toppings);
        }

    })
}

function queryFlavor() {
    connection.query('SELECT Flavor FROM IceYo', function (err,res) {
        if (err) throw err;
        console.log(res);
    })
}

function queryToppings() {
    connection.query('SELECT Toppings FROM IceYo', function (err,res) {
        if (err) throw err;
        console.log(res);
    })
}

function createIceCream() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
        "INSERT INTO auctions SET ?",
        {
            Flavor: "Rocky Road",
            Toppings: "Honey"
        },
        function(err, res) {
            // console.log(res.affectedRows + " product inserted!\n");
            // Call updateProduct AFTER the INSERT completes
            updateIceCream();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}


function updateIceCream() {
    // console.log("Updating all Rocky Road quantities...\n");
    var query = connection.query(
        "UPDATE IceYo SET ? WHERE ?",
        [
            {
                Flavor: 'VanillaBlue'
            },
            {
                Flavor: "Vanilla"
            }
        ],
        function(err, res) {
            console.log(res.affectedRows + " products updated!\n");
            // Call deleteProduct AFTER the UPDATE completes
            deleteIceCream();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}

function deleteIceCream() {
    console.log("Deleting all strawberry icecream...\n");
    connection.query(
        "DELETE FROM IceYo WHERE ?",
        {
            Flavor: "Strawberry"
        },
        function(err, res) {
            console.log(res.affectedRows + " products deleted!\n");
            // Call readProducts AFTER the DELETE completes
            readIceCream();
        }
    );
}

function readIceCream() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM IceYo", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}
























































































//
// Instructions
//
// Using the connection and song data you put together earlier into the class, we are going to print playlists to the Git Bash console based upon the genre or artist.
//
//     First create code that prints all songs within your database to the terminal.
//
//     Now create code that prints songs of a specific genre/artist to the terminal.
//
//     If you don't have many songs in your database at this point in time, take this moment to add some more to it. Try to give yourself a variety of songs to work with.
//
// HINT: Remember that you can call specific data using SQL commands we went over last class. If you are having trouble, make sure to look into SQL commands once more.
//
//     BONUS: Use 'placeholder' values or string concatenation to build a MySQL query which allows you to change pieces of the query on the fly (e.g. using a variable to build the WHERE clause, instead of a static string).
//
// There are a couple different ways to accomplish this task, but the most common one can be found within the documentation for the MySQL package.
//
//




























