const startOfDay = () => {
    let start = new Date();
    start.setUTCHours(0,0,0,0);
    return start;
}

const endOfDay = () => {
    let end = new Date();
    end.setUTCHours(23,59,59,999);
    return end;
}

module.exports = {
    startOfDay,
    endOfDay
}