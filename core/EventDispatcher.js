class EventDispatcher {
    static _instance;

    constructor() {
        this._listeners = {}
    }

    addEventListener(target, event, callback) {
        this._listeners[target] ||= {};
        this._listeners[target][event] ||= [];
        this._listeners[target][event].push(callback);
    }

    removeEventListener(target, event, callback) {
        const i = this._listeners[target][event].indexOf(callback);
        this._listeners[target][event].splice(i, 1);
    }

    dispatchEvent(target, event, payload) {
        console.log("EVENT", target, event, payload);
        if(this._listeners[target] && this._listeners[target][event]){
            console.log("FIRE EVENT", target, event, payload);
            this._listeners[target][event].forEach((callback) => callback(payload));
        }
    }

    static getInstance(){
        if(!this._instance){
            this._instance = new EventDispatcher();
            if(window){
                window.EventDispatcher = this._instance;
            }
        }
        return this._instance;
    }
}
export default EventDispatcher;