import {Station} from "./Station.model.db";
import {mockdata} from "../mockdata/mockdata";
import {IStation} from "../src/common/IStation";
import e from "express";


export const insertMockStations = async () => {
    await Station.deleteMany();
    await Station.insertMany(mockdata);
}


export const insertWeatherStation = async(station:IStation)=>{
    const newStation = new Station(station);
    await newStation.save();
}

export const getStations = async ():Promise<IStation[]> => {
    const stations = await Station.find();
    return stations;
}