import { StartFunc as StartFuncFromStatus200 } from "./status200.js";
import { StartFunc as StartFuncFromStatus409 } from "./status409.js";

let StartFunc = ({ inFetchStatus }) => {
    switch (inFetchStatus.status) {
        case 200:
            StartFuncFromStatus200({ inFetchResult: inFetchStatus.text() });

            break;
        case 409:
            StartFuncFromStatus409({ inFetchResult: inFetchStatus.text() });

            break;
        default:

            break;
    };
};

export { StartFunc };
