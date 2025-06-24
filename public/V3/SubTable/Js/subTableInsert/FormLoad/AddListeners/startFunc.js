import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as RefreshBSTableClass } from "./RefreshBSTableClass/entryFile.js";

let StartFunc = () => {
    StartFuncBuildBsTable();
    RefreshBSTableClass();
};

export { StartFunc };