const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const fs = require('fs');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(session({
    secret: 'your-secret-key', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));


app.use('/login', express.static(path.join(__dirname, 'login')));


app.use('/server', (req, res, next) => {
    if (req.session.userId) {
        next(); 
    } else {
        res.redirect('/login/');
    }
}, express.static(path.join(__dirname, 'server')));


function getUsers() {
    const filePath = path.join(__dirname, 'data', 'form-data.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        req.session.userId = user.id;
        res.json({ success: true, id: user.id });
    } else {
        res.json({ success: false });
    }
});


app.post('/save-form', (req, res) => {
    console.log("Receiving form data");
    const formData = req.body;
    console.log("Data received:", formData);

    const filePath = path.join(__dirname, 'data', 'form-data.json');

    
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    
    let data = [];
    if (fs.existsSync(filePath)) {
        data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }

    
    formData.id = generateId();
    data.push(formData);

    
    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Error saving data:', err);
            return res.status(500).json({ success: false, message: 'Error saving data:' });
        }
        console.log("Data saved successfully, ID generated:", formData.id);
        
        res.json({ success: true, id: formData.id });
    }); 
});


function generateId() {
    return Math.floor(1000000 + Math.random() * 9000000);
}


const server = http.createServer(app);
const io = new Server(server);

let activeConnections = 0;

io.on('connection', (socket) => {
    activeConnections++;
    io.emit('activeConnections', activeConnections);

    socket.on('disconnect', () => {
        activeConnections--;
        io.emit('activeConnections', activeConnections);
    });
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
