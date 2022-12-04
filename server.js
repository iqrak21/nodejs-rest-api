const app = require('./app');
const connectDatabase = require('./database');


//Handling Uncaught Exception 

process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shuting down the server due to Uncaught Exception");

    process.exit(1);
})



const PORT = process.env.PORT || 5000;

//Connecting to Database

connectDatabase();

const server = app.listen(PORT, () => {
    console.log('Port is running on PORT', PORT)
})

//Unhandle Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log("Shutting Down the Server due to Unhandle Promise Rejection");

    server.close(()=>{
        process.exit();
    })
})