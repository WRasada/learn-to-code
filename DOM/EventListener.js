
var events = document.querySelectorAll('.toggle-container li a code');
var eventList = [];

events.forEach(function(events){
  eventList.push(events.textContent);
});

var sortedEventList = eventList.slice().sort(),
    dupes = [];

for (var i = 0; i < sortedEventList.length - 1; i++) {
  if (sortedEventList[i + 1] == sortedEventList[i]){
    dupes.push(sortedEventList[i]);
  }
}
