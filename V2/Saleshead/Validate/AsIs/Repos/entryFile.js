import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnPARTYNAME,LocalCoumnVOUCHERTYPE,LocalCoumnDATE,LocalCoumnREFERENCE,LocalCoumnVOUCHER_CANCELLED}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnPARTYNAME,LocalCoumnVOUCHERTYPE,LocalCoumnDATE,LocalCoumnREFERENCE,LocalCoumnVOUCHER_CANCELLED});

    return LocalFromDal;
};

export {
    postDefaultFunc
};