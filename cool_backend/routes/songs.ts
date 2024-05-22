import express, {Request, Response, Router} from "express";
import {IStation} from "../src/common/IStation";
import {mockdataSongs} from "../mockdata/mockdataSongs";
import {getSongs, insertSong} from "../db/Song.db";
import {ISong} from "../src/common/ISong";

let router: Router = express.Router();

router.get('/', (request: Request, response: Response) => {
    const sortParam: string | undefined = request.query.sortBy as string;
    const filterParam: string|undefined = request.query.filterBy as string;

    getSongs().then((sortedData: ISong[]) => {
        /*switch (sortParam) {
            case "name":
                sortedData.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "kategorie":
                sortedData.sort((a, b) => a.kategorie.localeCompare(b.kategorie));
                break;
        }
        switch (filterParam){
            case "Berg":
                sortedData= sortedData.filter((station) => station.kategorie.includes("Berg"));
                break;
            case "Ort":
                sortedData = sortedData.filter((station) => station.kategorie.includes("Ort"));
                break;
            case "See":
                sortedData = sortedData.filter((station) => station.kategorie.includes("See"));
                break;
            case "See all":
                sortedData = sortedData;
                break;
        }

         */
        response.send(sortedData);
    })
})

router.post('/', (request:Request, response:Response) => {
    const song:ISong = request.body as ISong;

    insertSong(song).then(() => {
        response.location(request.url+`/${song.songName}`).status(201).send(song)
    }).catch((error) => {
        response.status(409).send(error)
    })
})

module.exports = router;