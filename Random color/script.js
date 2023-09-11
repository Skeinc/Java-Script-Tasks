/* 
Get random rgb or hex color. Enter 1 if you want get rgb format or enter 2 if you want get hex format color
*/

const randomColor = (type) => {
    if(type === 1) {
        const rgb = [];
        const randomNumber = () => {
            return Math.round(Math.random() * 255);
        }

        for(let i = 0; i < 3; i++) {
            rgb.push(randomNumber());
        }
        return "rgb(" + rgb.toString() + ")";
    }
    else if(type === 2) {
        const hex = [];
        const randomChar = () => {
            const chars = "0123456789ABCDEF";
            return chars[Math.round(Math.random() * chars.length - 1)];
        }

        for(let i = 0; i < 6; i++) {
            hex.push(randomChar());
        }
        return "#" + hex.join("");
    }
    else {
        return new Error("Неверно введен параметр");
    }
}