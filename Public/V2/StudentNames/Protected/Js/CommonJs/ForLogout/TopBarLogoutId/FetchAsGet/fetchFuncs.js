let StartFunc = async () => {
    let jVarLocalFetchUrl = "/Secret/Logout";

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

