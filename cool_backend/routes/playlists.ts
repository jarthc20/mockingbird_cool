import express, {Request, Response, Router} from "express";
import {IStation} from "../src/common/IStation";
import {mockdataSongs} from "../mockdata/mockdataSongs";
import {getSongs, insertSong} from "../db/Song.db";
import {ISong} from "../src/common/ISong";
import {IPlaylist} from "../src/common/IPlaylist";
import {getPlaylist, insertPlaylist} from "../db/Playlist.db";

let router: Router = express.Router();

router.get('/all', (request: Request, response: Response) => {
    const sortParam: string | undefined = request.query.sortBy as string;
    const filterParam: string | undefined = request.query.filterBy as string;

    getPlaylist().then((sortedData: IPlaylist[]) => {
        response.send(sortedData);
    })
})

router.post('/', (request: Request, response: Response) => {
    const playlist: IPlaylist = request.body as IPlaylist;

    insertPlaylist(playlist).then(() => {
        response.location(request.url + `/${playlist.name}`).status(201).send(playlist)
    }).catch((error) => {
        response.status(409).send(error)
    })
})

module.exports = router;