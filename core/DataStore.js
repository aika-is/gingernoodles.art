import EventDispatcher from "./EventDispatcher.js";

class DataStore {
    static _instance;

    constructor() {
        this._data = {}
    }

    setStore(key, value) {
        this._data[key] = value;
        EventDispatcher.getInstance().dispatchEvent(key, "update", value);
    }

    static getInstance(){
        if(!this._instance){
            this._instance = new DataStore();
        }
        return this._instance;
    }
}
export default DataStore;