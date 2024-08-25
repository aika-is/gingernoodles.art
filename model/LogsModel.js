class LogsModel {
    static messages = [{message: "LOG 1"}]
    
    static fetchLogs(){
        return this.messages
    }

    static submitLog(payload){
        return this.messages.splice(0,0, payload);
    }

    static getSuggestedTags(payload){
        const a = []
        a.push({key: "a", value: "s"+Math.floor(Math.random()*9999)})
        a.push({key: "a", value: "s"+Math.floor(Math.random()*9999)})
        a.push({key: "a", value: "s"+Math.floor(Math.random()*9999)})
        a.push({key: "a", value: "s"+Math.floor(Math.random()*9999)})
        return a;
    }
}
export default LogsModel;