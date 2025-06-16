const StartFunc = () => {
    let jVarLocalPartyName = jFLocalTableFooterPartyNameInputId();
    let jVarLocalVoucherType = jFLocalTableFooterVoucherTypeInputId();
    let jVarLocalDate = jFLocalTableFooterDateInputId();
    let jVarLocalReference = jFLocalTableFooterReferenceInputId();
    let jVarLocalVoucherCancelled = jFLocalTableFooterVoucherCancelledInputId();

    let LocalObj = {};
    LocalObj.PARTYNAME = jVarLocalPartyName;
    LocalObj.VOUCHERTYPE = jVarLocalVoucherType;
    LocalObj.DATE = jVarLocalDate;
    LocalObj.REFERENCE = jVarLocalReference;
    LocalObj.VOUCHERCANCELLED = jVarLocalVoucherCancelled;

    return LocalObj;
};

let jFLocalTableFooterPartyNameInputId = () => {
    let jVarLocalTableFooterPartyNameInputId = 'TableFooterPartyNameInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterPartyNameInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterVoucherTypeInputId = () => {
    let jVarLocalTableFooterVoucherTypeInputId = 'TableFooterVoucherTypeInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterVoucherTypeInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterDateInputId = () => {
    let jVarLocalTableFooterDateInputId = 'TableFooterDateInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterDateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterReferenceInputId = () => {
    let jVarLocalTableFooterReferenceInputId = 'TableFooterReferenceInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterReferenceInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterVoucherCancelledInputId = () => {
    let jVarLocalTableFooterVoucherCancelledInputId = 'TableFooterVoucherCancelledInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterVoucherCancelledInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };
