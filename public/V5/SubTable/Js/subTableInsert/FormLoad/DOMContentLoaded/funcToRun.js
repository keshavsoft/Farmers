import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as RowDataGetFetch } from "./RowDataGetFetch/Entry.js";
import { StartFunc as StartFuncshowOnDom } from "./showOnDom.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    RowDataGetFetch();
    StartFuncshowOnDom();
};

export { StartFunc };
