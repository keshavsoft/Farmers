import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as StartFuncRefreshBSTableClass } from "./RefreshBSTableClass/entryFile.js";
import { StartFunc as StartFuncModelUpdteButton } from "./ModelUpdteButton/StartFunc.js";

let StartFunc = () => {
    StartFuncBuildBsTable();
    StartFuncRefreshBSTableClass();
    StartFuncModelUpdteButton();
};

export { StartFunc };