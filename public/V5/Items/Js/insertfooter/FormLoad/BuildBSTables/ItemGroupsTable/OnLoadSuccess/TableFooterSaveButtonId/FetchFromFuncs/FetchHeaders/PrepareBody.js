const StartFunc = () => {
    let jVarLocalItemName = jFLocalTableFooterItemNameInputId();
    let jVarLocalItemRate = jVarLocalTableFooterItemRateInputId();

    let jVarLocalIsValid = true;

    if (jVarLocalItemName === "") {
        document.getElementById("TableFooterItemNameInputId").classList.add("is-invalid");
        jVarLocalIsValid = false;
    };

    if (jVarLocalItemRate === "") {
        document.getElementById("TableFooterItemRateInputId").classList.add("is-invalid");
        jVarLocalIsValid = false;
    };

    if (jVarLocalIsValid === false) {
        return;
    };

    let LocalObj = {};
    LocalObj.ITEMNAME = jVarLocalItemName;
    LocalObj.ITEMRATE = jVarLocalItemRate;

    return LocalObj;
};

let jFLocalTableFooterItemNameInputId = () => {
    let jVarLocalTableFooterRateInputId = 'TableFooterItemNameInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jVarLocalTableFooterItemRateInputId = () => {
    let jVarLocalTableFooterItemRateInputId = 'TableFooterItemRateInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };