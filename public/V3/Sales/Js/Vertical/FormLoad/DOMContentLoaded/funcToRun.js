import { StartFunc as StartFuncFromAddListeners } from "./AddListeners/entryFile.js";
import { StartFunc as StartFuncFromShowOnDom } from "./showOnDom.js";

let StartFunc = () => {
    StartFuncFromAddListeners();
    StartFuncFromShowOnDom();
};

export { StartFunc };