import DesktopHeader from '../components/DesktopHeader.js';
import LogForm from '../components/logform/LogForm.js';
import SuggestedTags from '../components/logform/SuggestedTags.js';
import LogList from '../components/loglist/LogList.js';
import MobileHeader from '../components/MobileHeader.js';
import DataStore from '../core/DataStore.js';
import EventDispatcher from '../core/EventDispatcher.js';
import LogsModel from '../model/LogsModel.js';

EventDispatcher.getInstance().addEventListener(null,"startApplication",(payload) => {
    console.log("APPLICATION STARTED");
    const logs = LogsModel.fetchLogs();
    DataStore.getInstance().setStore("logsList", logs);
});

EventDispatcher.getInstance().addEventListener(null,"submitLog",(payload) => {
    LogsModel.submitLog(payload);
    const logs = LogsModel.fetchLogs();
    DataStore.getInstance().setStore("logsList", logs);
});

EventDispatcher.getInstance().addEventListener(null,"textChange",(payload) => {
    const tags = LogsModel.getSuggestedTags(payload);
    DataStore.getInstance().setStore("suggestedTags", tags);
});

export default {DesktopHeader, MobileHeader, LogList, LogForm, SuggestedTags};