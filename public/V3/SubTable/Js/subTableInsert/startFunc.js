import { StartFunc as StartFuncFormLoad } from "./FormLoad/startFunc.js";
import { StartFunc as StartFuncShowOnDom } from "./showOnDom.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;
    if (jVarLocalFromAdmin ) {
        StartFuncFormLoad();
        StartFuncShowOnDom();
    };
};

StartFunc();