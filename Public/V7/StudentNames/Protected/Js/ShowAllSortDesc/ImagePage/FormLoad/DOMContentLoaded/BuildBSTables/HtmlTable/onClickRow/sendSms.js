import UrlJson from "./url.json" with { type: "json" };
import commonConfig from '../../../../../../../Config.json' with {type: 'json'};

const StartFunc = (row, field) => {
    if ("pk" in row) {
        let jVarTableName = commonConfig.TableName;

        let LocalroutePath = UrlJson.DeleteUrl;
        const jVarLocalRowPk = row.pk;

        const jVarLocalUrl = `${jVarTableName}/${LocalroutePath}/${jVarLocalRowPk}`;

        window.open(jVarLocalUrl, "_blank");
    };
};

export { StartFunc };
