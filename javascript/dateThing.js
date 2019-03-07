Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

addDays = function(date, days){
  var date = new Date(date);
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
}

var date = '2019-03-31'

console.log(addDays(date, -5));