const StartFunc = ({ inFetchResult }) => {
    if (confirm("Already Registered, Call")) {
        var url = "tel:+91-984-816-3021";
        var win = window.open(url, '_blank');  ///similar to above solution
        win.focus();
    };
};

export { StartFunc };