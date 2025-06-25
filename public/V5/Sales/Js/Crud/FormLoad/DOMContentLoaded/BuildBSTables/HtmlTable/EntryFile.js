// import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";

const StartFunc = () => {

    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        onPostBody: StartFuncOnLoadSuccess
        // onClickRow: StartFuncOnClickRowFunc
    });
};

export { StartFunc };
