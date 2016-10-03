export const getMonthName = date => {
    const d = date ? new Date(date) : new Date();
    const month = d.getMonth();

    return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ][month];
};

export const getDayName = date => {
    const d = date ? new Date(date) : new Date();
    const day = d.getDay();

    return [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ][day];
};


export const padding = val => {
    return val < 10 ? `0${val}` : val;
};

export const timeFormater = (format, date) => {
    const d = date ? new Date(date) : new Date();

    format = format.replace(/h/g, padding(d.getHours()));
    format = format.replace(/m/g, padding(d.getMinutes()));
    format = format.replace(/s/g, padding(d.getSeconds()));

    return format;
};

export const dateFormater = (format, date) => {
    const d = date ? new Date(date) : new Date();

    const dm = getMonthName(d);
    const dd = getDayName(d);

    format = format.replace(/yyyy/g, d.getFullYear());
    format = format.replace(/yy/g, String(d.getFullYear()).substr(2, 2));

    format = format.replace(/MMM/g, dm.substr(0, 3).toUpperCase());
    format = format.replace(/Mmm/g, dm.substr(0, 3));
    format = format.replace(/MM/g, dm.toUpperCase());
    format = format.replace(/Mm/g, dm);
    format = format.replace(/mm/g, padding(String(d.getMonth() + 1)));

    format = format.replace(/DDD/g, dd.substr(0, 3).toUpperCase());
    format = format.replace(/Ddd/g, dd.substr(0, 3));
    format = format.replace(/DD/g, dd.toUpperCase());
    format = format.replace(/Dd/g, dd);
    format = format.replace(/dd/g, padding(String(d.getDate())));

    return format;
};

export default dateFormater;
