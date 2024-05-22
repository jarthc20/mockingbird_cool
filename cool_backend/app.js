var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var songRouter = require('./routes/songs');
var playlistRouter = require('./routes/playlists');
var cors = require('cors')

var app = express();



const corsOptions = {
    origin:'*'
}
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/songs', songRouter);
app.use('/playlists', playlistRouter);

const {initMongoConnect} = require('./db/util.model.db');
const {insertMockSongs} = require('./db/Song.db');
const {insertMockPlaylist} = require('./db/Playlist.db');
initMongoConnect().then(() => {
    insertMockSongs().then();
    insertMockPlaylist().then();
})

module.exports = app;
