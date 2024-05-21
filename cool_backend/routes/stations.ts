import express, {Request, Response, Router} from "express";
import {IStation} from "../src/common/IStation";
import {mockdata} from "../mockdata/mockdata";
import {getStations, insertMockStations, insertWeatherStation} from "../db/Station.sb";

let router: Router = express.Router();

router.get('/', (request: Request, response: Response) => {
    const sortParam: string | undefined = request.query.sortBy as string;
    const filterParam: string|undefined = request.query.filterBy as string;

    getStations().then((sortedData: IStation[]) => {
        switch (sortParam) {
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
        response.send(sortedData);
    })
})

router.post('/', (request:Request, response:Response) => {
    const station:IStation = request.body as IStation;

    insertWeatherStation(station).then(() => {
        response.location(request.url+`/${station.name}`).status(201).send(station)
    }).catch((error) => {
        response.status(409).send(error)
    })
})

module.exports = router;