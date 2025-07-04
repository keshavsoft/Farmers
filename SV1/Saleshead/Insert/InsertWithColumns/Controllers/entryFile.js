import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnVOUCHER_CANCELLED = LocalRequestBody.VOUCHER_CANCELLED;
	let LocalCoumnREFERENCE = LocalRequestBody.REFERENCE;
	let LocalCoumnDATE = LocalRequestBody.DATE;
	let LocalCoumnVOUCHERTYPE = LocalRequestBody.VOUCHERTYPE;
	let LocalCoumnPARTYNAME = LocalRequestBody.PARTYNAME;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnPARTYNAME,LocalCoumnVOUCHERTYPE,LocalCoumnDATE,LocalCoumnREFERENCE,LocalCoumnVOUCHER_CANCELLED});

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