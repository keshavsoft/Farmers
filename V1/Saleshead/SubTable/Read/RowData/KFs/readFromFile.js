import { StartFunc as StartFuncFileRead } from "../../../../CommonFuncs/fileRead.js";

let StartFunc = ({ inRowIndex, inKeyName, inPk }) => {
    let LocalReturnData = { KTF: false };
    let LocalFileRead = StartFuncFileRead();

    if (LocalFileRead.KTF === false) {
        LocalReturnData = { ...LocalFileRead };
        return LocalReturnData;
    }

    try {
        const LoalRowData = LocalFileRead.JsonData.find(el => el.pk == inRowIndex);

        if (!LoalRowData) {
            LocalReturnData.KReason = `No Row Data with index ${inRowIndex}`;
            return LocalReturnData;
        }

        if (!Array.isArray(LoalRowData[inKeyName])) {
            LocalReturnData.KReason = `${inKeyName} Key Not SubTable`;
            return LocalReturnData;
        }

        let subTableData = LoalRowData[inKeyName];

        if (inPk) {
            subTableData = subTableData.filter(item => item.pk == inPk);

            if (subTableData.length === 0) {
                LocalReturnData.KReason = `No sub-row found with pk ${inPk}`;
                return LocalReturnData;
            }
        }

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = subTableData;
        return LocalReturnData;

    } catch (err) {
        LocalReturnData.KReason = err.message;
        return LocalReturnData;
    }
};

export { StartFunc };
