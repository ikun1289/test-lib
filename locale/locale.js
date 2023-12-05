import en from "./en";
import vn from "./vn";

const locale = function (manualAppend = false) {
    if (window.app_context.locale) {
        let append = {};
        switch (window.app_context.lang) {
            case "en":
                append = en;
                break;

            default:
                append = vn;
                break;
        }
        if (manualAppend) {
            return append;
        } else {
            window.app_context.locale = { ...window.app_context.locale, ...append };
        }
    }
}

const t = function (key) {
    let append = {};
    switch (window.app_context.lang) {
        case "en":
            append = en;
            break;

        default:
            append = vn;
            break;
    }
    return append[key] || key;
}

export {
    locale,
    t
}