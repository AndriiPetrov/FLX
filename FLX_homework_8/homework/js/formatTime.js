function formatTime(minutes) {
    let hours = Math.trunc(minutes / 60);
    hours = hours % 24;

    let days = Math.trunc(minutes / (60 * 24));
    days = days % 365;
    
    minutes = minutes % 60;

    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`
}

formatTime(120);
formatTime(59);
formatTime(3601);