let DateFormatter = {
    formatDate: timestamp => {
        var date = new Date(timestamp);
        return `${date.toDateString()} ${date.toLocaleTimeString()}`;
    }
};

export default DateFormatter;