"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStations = exports.insertWeatherStation = exports.insertMockStations = void 0;
const Station_model_db_1 = require("./Station.model.db");
const mockdata_1 = require("../mockdata/mockdata");
const insertMockStations = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Station_model_db_1.Station.deleteMany();
    yield Station_model_db_1.Station.insertMany(mockdata_1.mockdata);
});
exports.insertMockStations = insertMockStations;
const insertWeatherStation = (station) => __awaiter(void 0, void 0, void 0, function* () {
    const newStation = new Station_model_db_1.Station(station);
    yield newStation.save();
});
exports.insertWeatherStation = insertWeatherStation;
const getStations = () => __awaiter(void 0, void 0, void 0, function* () {
    const stations = yield Station_model_db_1.Station.find();
    return stations;
});
exports.getStations = getStations;
