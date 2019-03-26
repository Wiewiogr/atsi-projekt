let DateFormatter = {
  formatDate: timestamp => {
      console.log(timestamp);
    var date = new Date(timestamp);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = '0' + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = '0' + date.getSeconds();
    // Will display time in 10:30:23 format
    var days = '0' + date.getDay();
    var months = '0' + date.getMonth();
    var years = date.getFullYear();

    // return `${years}-${months}-${days} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;

    return `${date.toDateString()} ${date.toLocaleTimeString()}`;
  }
};

export default DateFormatter;