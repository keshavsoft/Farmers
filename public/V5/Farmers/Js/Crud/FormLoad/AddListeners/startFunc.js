import { StartFunc as StartFuncRefreshBSTableClass } from "./RefreshBSTableClass/entryFile.js";
import { StartFunc as StartFuncToDataList } from "./ToDataList/startFunc.js";

let StartFunc = () => {
    StartFuncRefreshBSTableClass();
    StartFuncToDataList();
};

export { StartFunc };