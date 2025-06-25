const CommonFieldName = "RATE";

const StartFunc = ({ inColumns }) => {
    let LocalFind = inColumns.find(element => {
        return element.field === CommonFieldName;
    });

    LocalFind.footerFormatter = () => {
        return `    <div class="input-group">
                                            <input class="form-control" id="TableFooterRateInputId" type="number"
                                                placeholder="Enter Rate">
                                            <div class="invalid-feedback">
                                                Please enter Valid date
                                            </div>
                                        </div>`;
    };
};

export { StartFunc };
