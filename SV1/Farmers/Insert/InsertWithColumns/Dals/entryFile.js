import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnFarmerName,LocalCoumnFarmerMobile,LocalCoumnFarmerCity,LocalCoumnFarmerField}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnFarmerName,LocalCoumnFarmerMobile,LocalCoumnFarmerCity,LocalCoumnFarmerField});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};