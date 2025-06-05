const StartFunc = () => {
    let jVarLocalItemName = jFLocalTableFooterItemNameInputId();
    let jVarLocalItemCategory = jVarLocalTableFooterItemCategoryInputId();
    let jVarLocalItemGroup = jFLocalTableFooterItemGroupInputId();
    let jvarlocalfield = jFLocalToInputTableFooterFarmerFieldInputId();
    let LocalObj = {};
    LocalObj.FARMERNAME = jVarLocalItemName;
    LocalObj.FARMERMOBILE = jVarLocalItemCategory;
    LocalObj.FARMERCITY = jVarLocalItemGroup;
    LocalObj.FARMERFIELD = jvarlocalfield;
    return LocalObj;
};

let jFLocalTableFooterItemNameInputId = () => {
    let jVarLocalTableFooterRateInputId = 'TableFooterItemNameInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jVarLocalTableFooterItemCategoryInputId = () => {
    let jVarLocalTableFooterItemCategoryInputId = 'TableFooterItemCategoryInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemCategoryInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};
let jFLocalTableFooterItemGroupInputId = () => {
    let jVarLocalTableFooterItemGroupInputId = 'TableFooterItemGroupInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemGroupInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};
let jFLocalToInputTableFooterFarmerFieldInputId = () => {
    let jVarLocalHtmlId = 'TableFooterFarmerFieldInputId';
    let jVarLocalTableFooterFarmerFieldInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterFarmerFieldInputId === null === false) {
        return jVarLocalTableFooterFarmerFieldInputId.value.trim();
    };
};
export { StartFunc }