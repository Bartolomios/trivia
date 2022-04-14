 export const decodeStrings = (string: string) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = string;
    return txt.value;
};