export const formatDate = function(dateString) {
    let d = new Date(dateString);
    let cur = new Date();
    if (!d.getDate()) {
      return dateString;
    }
    if (d.getDay() !== cur.getDay() || d.getMonth() !== cur.getMonth() || d.getYear() !== cur.getYear()) {
      return d.getDay() + '-' + d.getMonth() + '-' + d.getFullYear();
    }
    return d.getHours() + ':' + d.getMinutes();
  }