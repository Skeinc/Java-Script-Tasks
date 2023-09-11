/*
Create function for parse current date to SQL format DATE.
*/
const parseToDate = () => {
    const date = [];
    const currentDate = new Date();

    if(currentDate.getDate().toString().length !== 2) {
        date.push("0" + currentDate.getDate()); // day
    }
    else {
        date.push(currentDate.getDate()); // day
    }
    if((currentDate.getMonth()+1).toString().length !== 2) {
        date.push("0" + (currentDate.getMonth()+1)); // month
    }
    else {
        date.push(currentDate.getMonth()+1); // month
    }
    date.push(currentDate.getFullYear()); // year

    return date.join("-");
};