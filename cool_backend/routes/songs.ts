import express, {Request, Response, Router} from "express";
import {IStation} from "../src/common/IStation";
import {mockdataSongs} from "../mockdata/mockdataSongs";
import {getSongs, getSongsByPlaylistId, insertSong} from "../db/Song.db";
import {ISong} from "../src/common/ISong";

let router: Router = express.Router();

router.get('/all', (request: Request, response: Response) => {
    const byPlaylist: string | undefined = request.query.byPlaylist as string;
    const filterParam: string | undefined = request.query.filterBy as string;

    if (byPlaylist) {
        getSongsByPlaylistId(byPlaylist).then(songs => response.send(songs))
    } else {
        getSongs().then((sortedData: ISong[]) => {
            response.send(sortedData);
        })
    }
})

router.post('/', (request: Request, response: Response) => {
    const song: ISong = request.body as ISong;

    insertSong(song).then(() => {
        response.location(request.url + `/${song.songName}`).status(201).send(song)
    }).catch((error) => {
        response.status(409).send(error)
    })
})

module.exports = router;