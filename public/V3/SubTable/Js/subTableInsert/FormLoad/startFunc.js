import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as RowDataGetFetch } from "./RowDataGetFetch/Entry.js";
// import { StartFunc as ToDataList } from "./ToDataList/startFunc.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    RowDataGetFetch();
    // ToDataList();
};

export { StartFunc };
