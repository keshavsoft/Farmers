import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnFarmerName,LocalCoumnFarmerMobile,LocalCoumnFarmerCity,LocalCoumnFarmerField}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnFarmerName,LocalCoumnFarmerMobile,LocalCoumnFarmerCity,LocalCoumnFarmerField});

    return LocalFromDal;
};

export {
    postDefaultFunc
};