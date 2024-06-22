const exprees = require ('express');
const cors = require ('cors');  
const dbConection = require ('./config/db');


const {API_VERSION, API_NAME} = proces.env;

const app = express();
const http = require('http');

const httpServer = http.createServer(app);

const io = require('socket.io')(httpServer, {
    cors: {
        origin: 'https://localhost:4200'

    }
});

//importar rutas 
app.use(express.urlencode({extended: true}))
app.use(express.json());
app.use(express.static('src/uploads'));
app.use(cors());


app.use((req,res,next) => {
    req.io = io;
    req.con = dbConection;
    next();
})

//exponer rutas

io.on('connect', (socket) => {
Socket.on('disconnect', () => {
    console.log ('usuario no conectado');

})    
});
module.exports = httpServer;
