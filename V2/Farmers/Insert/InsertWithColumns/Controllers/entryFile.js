import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnFarmerField = LocalRequestBody.FarmerField;
	let LocalCoumnFarmerCity = LocalRequestBody.FarmerCity;
	let LocalCoumnFarmerMobile = LocalRequestBody.FarmerMobile;
	let LocalCoumnFarmerName = LocalRequestBody.FarmerName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnFarmerName,LocalCoumnFarmerMobile,LocalCoumnFarmerCity,LocalCoumnFarmerField});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};