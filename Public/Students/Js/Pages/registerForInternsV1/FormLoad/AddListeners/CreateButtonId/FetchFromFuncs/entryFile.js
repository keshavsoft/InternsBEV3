import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/entryFile.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = CheckFunc();
    // jVarLocalFromCheck = false;

    if (jVarLocalFromCheck === false) {
        let jVarLocalFormId = document.getElementById('FormId');

        let jVarLocalFirstInValid = jVarLocalFormId.querySelector(".is-invalid");
        jVarLocalFirstInValid.focus();

        return false;
    };

    let jVarLocalFromFetch = await StartFuncFetchFuncs();

    StartFuncAfterFetch({ inFetchStatus: jVarLocalFromFetch });
};

export { StartFunc }