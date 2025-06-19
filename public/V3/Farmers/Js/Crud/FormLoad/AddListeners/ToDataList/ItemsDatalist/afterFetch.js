const jVarCommonDataListId = "FarmerNameDataListId";

const StartFunc = (data) => {

    data.forEach(element => {
        jFLocalAddToItems({ inFARMERNAME: element.FARMERNAME });
    });
};

const jFLocalAddToItems = ({ inFARMERNAME }) => {
    var option = $('<option value="' + inFARMERNAME + '"></option>');
    $(`#${jVarCommonDataListId}`).append(option);
};

export { StartFunc };