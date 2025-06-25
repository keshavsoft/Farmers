let StartFunc = async () => {
    let jVarLocalFetchUrl = `/V1/Farmers/Read/AsIs`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

