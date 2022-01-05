const app = require('./app');

const PORT = process.env.PORT;

const server = app.listen(PORT, console.log("The server runs in an environment", process.env.NODE_ENV + " in the port " + PORT));

process.on('unhandledRejection', (err, promise) => {
    console.log("Error", err.message);
    server.close(() => {
        process.exit(1);
    });
});