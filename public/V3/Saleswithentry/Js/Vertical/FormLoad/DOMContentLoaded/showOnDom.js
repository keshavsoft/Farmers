let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById(`HeaderItemFarmersId`);
    jVarLocalRefreshBSTableId.click();
};

const jFLocalTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `year-month-day`;
    return formattedDate;
};

export { StartFunc };