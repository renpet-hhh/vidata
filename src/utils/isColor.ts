const isColor = (string: string) => {
    const div = document.createElement("div");
    div.style.color = "black";
    const div_first_color = div.style.color;
    div.style.color = string;
    const div_string_color = div.style.color;
    if (string === "" || string === null || string == undefined) return false;
    if (div_first_color !== div_string_color || string === "black") return true;
    return false;
};

export default isColor;