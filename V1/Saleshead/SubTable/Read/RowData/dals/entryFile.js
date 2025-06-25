import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inRowIndex, inKeyName, inPk }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inRowIndex, inKeyName, inPk });

    return LocalFromLowDb;
};

export {
    GetFunc
};