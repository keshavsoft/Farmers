import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inRowIndex, inKeyName, inPk }) => {
    return GetFuncDal({ inRowIndex, inKeyName, inPk });
};

export {
    GetFunc
};