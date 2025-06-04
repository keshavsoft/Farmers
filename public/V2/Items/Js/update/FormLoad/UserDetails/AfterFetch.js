let StartFunc = ({ inDataToShow }) => {
   let jVarLocalData = inDataToShow;

   jFLocalToInputItemNameId({ inItemNameId: jVarLocalData.ITEMNAME });
   jFLocalToInputItemRateId({ inItemRateId: jVarLocalData.ITEMRATE });
  

};

let jFLocalToInputItemNameId = ({ inItemNameId }) => {
   let jVarLocalHtmlId = 'ItemNameId';
   let jVarLocalItemNameId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalItemNameId === null === false) {
      jVarLocalItemNameId.value = inItemNameId;
   };
};

let jFLocalToInputItemRateId = ({ inItemRateId }) => {
   let jVarLocalHtmlId = 'ItemRateId';
   let jVarLocalItemRateId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalItemRateId === null === false) {
      jVarLocalItemRateId.value = inItemRateId;
   };
};

export { StartFunc };