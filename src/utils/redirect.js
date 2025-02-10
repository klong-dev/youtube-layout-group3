export const redirect = (url, params) => {
    if (params.length > 0) {
        url += "?";
        for (let i = 0; i < params.length; i++) {
            url += params[i];
            if (i < params.length - 1) {
                url += "&";
            }
        }
    }
    window.location.href = url;
}

export const loginRedirect = () => {
    window.location.href = import.meta.env.VITE_API_URL + "/auth/google";
}