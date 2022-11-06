import * as React from "react";

const plainChili = './images/plain-chili.svg';
const redChili = './images/red-chili.svg';

function getStrength(level) {
    switch (level) {
        case "Mild":
            return 1;
        case "Medium":
            return 2;
        case "Hot":
            return 3;
        default:
            return 0;
    };
}

function getImgSrc(strength, maxStrength) {
    return strength <= maxStrength ? plainChili : redChili;
}

export default ({ level }) => (
    <>
        <img src={getImgSrc(getStrength(level), 2)} />
        <img src={getImgSrc(getStrength(level), 1)} />
        <img src={getImgSrc(getStrength(level), 0)} />
    </>
);