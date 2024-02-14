//This is for creating an instance of the server.
const express=require('express');
//This indicate the server being declared in the file.
const app=express();

/*-------------------------------------------------------------------------------------- */

/*Now we will be using Post method and PUT and POST uses a parser to fetch out a data from
the HTTP url body therefore we will be using a body parser in it. */
const bodyParser=require('body-parser');
/*We are parsing the data into the specifiy form into the json one.*/
app.use(bodyParser.json());

/*-------------------------------------------------------------------------------------- */

/*The listen funtion on the server instance help you start your server on some port on the
main computer.You can provide any port address where you want to launch your server.
Inside the listen fucntion we provide a ([Port-Number where the server will start],[And
a function -> a arrow function which can be used to log on the server terminal about
succesful launch of server.])*/
app.listen(4000,()=>{
    console.log("This is the first ever server created by Aman Pratap Singh.");
})

/*-------------------------------------------------------------------------------------- */

/*Defining Routes which will tell what will happen in the database when we hit a particular
route whether we have to input some data to database or have to fetch some data from DB.
We all have an idea that get in HTTPS protocol is used for fetching the data from the database.
So this data will be fetched and send to the database.*/
app.get('/',(request,response)=>{
    /*This data will be send to the web to display it on the page as requested when this
    '/' home page route will be hit. */
    response.send("Jai Shree Ram!\nThis is the first ever server created by me.\nAman Pratap singh")
});

/*-------------------------------------------------------------------------------------- */

/*Now using the POST method to create a route to submit a data into the database.*/
app.post('/api/car',(request,response)=>{
    /*We will send this data with the help of the Postman.*/
    const {name,brand}= request.body; //This is for fetching the details from the request body.
    console.log(name);
    console.log(brand)
    response.send("Car details submitted Successfully"); /*If every thing goes fine then 
    print this line at the end of the api call or data sending call*/
})

/*-------------------------------------------------------------------------------------- */

/*Now we will try to establish a connection with our local database->mongodb. */
const mongoose = require('mongoose');

/*Now we have to create or establish a connection between the your server and your database.*/
mongoose.connect('mongodb://localhost:27017/firstServer')
.then(() => console.log("DB connection is established successfully"))
.catch(() => console.log("There is an error in the connection between DB"));