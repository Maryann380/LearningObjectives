$(document).ready(function(){
 $('.dropdown-toggle').dropdown();
 
// function submit(){
//     function createNode(element) {
//         return document.createElement(element);
//     }
    
//     function append(parent, el) {
//       return parent.appendChild(el);
//     }
    
//     const ul = document.getElementById('#country');
//     const url = 'https://gist.githubusercontent.com/Maryann380/ead39e3ed34bbfb619a3acd07a4682c4/raw/21124a369f57b489c1102e11f40be787bb732d33/country1.json';
//     fetch(url)
    
//     .then((resp) => resp.json())
//     .then(function(data) {
//         debugger;
//       let airports = data;
//       return airports.map(function(country) {
//       })
//     })
// }
var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;
  
      // an array that will be populated with substring matches
      matches = [];
  
      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, "i");
  
      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });
  
      cb(matches);
    };
  };
  
  var states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];
  
  $(document).ready(function() {
    $("#country .typeahead").typeahead(
      {
        hint: true,
        highlight: true,
        minLength: 1
      },
      {
        name: "states",
        source: substringMatcher(states)
      }
    );
  });  
})

// $('.dropdown-toggle').dropdown();

$('#datetimepickerFrom').Zebra_DatePicker({
  direction: 1,
  pair: $('.modal-body .form-group #datetimepickerTo'),
	always_visible: $('#myModal .form-group #datetimepickerFrom')
});
$('#datetimepickerTo').Zebra_DatePicker({
  direction: 2, 
  always_visible: $('#myModal .form-group #datetimepickerTo')
});
