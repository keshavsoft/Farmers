import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnPARTYNAME,LocalCoumnVOUCHERTYPE,LocalCoumnDATE,LocalCoumnREFERENCE,LocalCoumnVOUCHER_CANCELLED}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnPARTYNAME,LocalCoumnVOUCHERTYPE,LocalCoumnDATE,LocalCoumnREFERENCE,LocalCoumnVOUCHER_CANCELLED});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};