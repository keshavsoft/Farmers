import { StartFunc as SaveButtonId } from "./SaveButtonId/entryFile.js";
import { StartFunc as StartFuncFromHeaderItemFarmersId } from "./HeaderItemFarmersId/entryFile.js";

let StartFunc = () => {
    SaveButtonId();
    StartFuncFromHeaderItemFarmersId();
};

export { StartFunc };