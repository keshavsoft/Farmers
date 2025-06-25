const StartFunc = () => {
    let jVarLocalPartyName = jFLocalTableFooterPartyNameInputId();
    let jVarLocalVoucherType = jFLocalTableFooterVoucherTypeInputId();
    let jVarLocalDate = jFLocalTableFooterDateInputId();
    let jVarLocalReference = jFLocalTableFooterReferenceInputId();
    let jVarLocalVoucherCancelled = jFLocalTableFooterVoucherCancelledInputId();

    if (
        jVarLocalPartyName === "" ||
        jVarLocalVoucherType === "" ||
        jVarLocalDate === "" ||
        jVarLocalReference === "" ||
        jVarLocalVoucherCancelled === ""
    ) {
        jFLocalValidateEmptyFields();
        return false;
    };

    let LocalObj = {};
    LocalObj.PARTYNAME = jVarLocalPartyName;
    LocalObj.VOUCHERTYPE = jVarLocalVoucherType;
    LocalObj.DATE = jVarLocalDate;
    LocalObj.REFERENCE = jVarLocalReference;
    LocalObj.VOUCHERCANCELLED = jVarLocalVoucherCancelled;

    return LocalObj;
};

let jFLocalValidateEmptyFields = () => {
    let jVarLocalHtmlId = document.getElementById("TableFooterPartyNameInputId");
    if (jVarLocalHtmlId.value.trim() === "") {
        jVarLocalHtmlId.classList.add("is-invalid");
    } else {
        jVarLocalHtmlId.classList.remove("is-invalid");
    };

    jVarLocalHtmlId = document.getElementById("TableFooterVoucherTypeInputId");
    if (jVarLocalHtmlId.value.trim() === "") {
        jVarLocalHtmlId.classList.add("is-invalid");
    } else {
        jVarLocalHtmlId.classList.remove("is-invalid");
    };

    jVarLocalHtmlId = document.getElementById("TableFooterDateInputId");
    if (jVarLocalHtmlId.value.trim() === "") {
        jVarLocalHtmlId.classList.add("is-invalid");
    } else {
        jVarLocalHtmlId.classList.remove("is-invalid");
    };

    jVarLocalHtmlId = document.getElementById("TableFooterReferenceInputId");
    if (jVarLocalHtmlId.value.trim() === "") {
        jVarLocalHtmlId.classList.add("is-invalid");
    } else {
        jVarLocalHtmlId.classList.remove("is-invalid");
    };

    jVarLocalHtmlId = document.getElementById("TableFooterVoucherCancelledInputId");
    if (jVarLocalHtmlId.value.trim() === "") {
        jVarLocalHtmlId.classList.add("is-invalid");
    } else {
        jVarLocalHtmlId.classList.remove("is-invalid");
    };
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