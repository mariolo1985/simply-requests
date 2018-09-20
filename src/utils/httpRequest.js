export const httpRequest = (filePath, callBackFn) => {
    const xReq = new XMLHttpRequest();
    xReq.open("GET", filePath, true);
    xReq.onload = () => {
        if (xReq.readyState === 4) {
            if (xReq.status === 200) {
                callBackFn(xReq);
            } else {
                callBackFn(null);
            }
        }
    };
    xReq.onerror = () => {
        callBackFn(undefined);
    }
    xReq.send(null);
};
