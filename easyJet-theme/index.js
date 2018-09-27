// // // function loginDetails(){
// // //     var fname= document.getElementById('fname').value;
// // //     var surname= document.getElementById('surname').value;

// // //     if(fname == '' || surname == ''){
// // //         document.getElementById('login').innerHTML = 'please introduce yourself';
// // //         $('#login').addClass('alert alert-danger');
// // //         $('#login').css('text-align','center');
// // //         $('#login').css('margin-bottom','20px');
// // //     }
// // //     else{
// // //         alert("welcome " + fname + " " + surname + " " + "How was your day today?");
// // //         $('#login').removeClass('alert alert-danger');

// // //     }
// // // }
 $(document).ready(function() {
 
   $('#datetimepickerDeparture').datetimepicker();
    $('#datetimepickerTo').datetimepicker({
         useCurrent: false
    });
         $("#datetimepickerDeparture").on("dp.change", function(e) {
        $('#datetimepickerTo').data("DateTimePicker").minDate(e.date);
     });
        $("#datetimepickerTo").on("dp.change", function(e) {
        $('#datetimepickerDeparture').data("DateTimePicker").maxDate(e.date);
    });
})
// //     $('.typeahead').typeahead({
// //         source:function (query, result){
// //             $.ajax({
// //                 url:'https://restcountries.eu/rest/v2/region/europe',
// //                 method: 'POST',
// //                 data:{query:query},
// //                 dataType:'JSON',
// //                 success: function(data){
// //                     result($.map(data, function(item){
// //                         return item;
// //                     }));
// //                 }
// //             })
// //         }
// //     })
// // });


// // $('#scrollable-dropdown-menu .typeahead').typeahead(null, {
// //     name: 'countries',
// //     limit: 10,
// //     source: countries
// //   });


// $(document).ready(function() {

//     // the basics
//     // ----------
  
//     var substringMatcher = function(strs) {
//       return function findMatches(q, cb) {
//         var matches, substringRegex;
  
//         // an array that will be populated with substring matches
//         matches = [];
  
//         // regex used to determine if a string contains the substring `q`
//         substrRegex = new RegExp(q, 'i');
  
//         // iterate through the pool of strings and for any string that
//         // contains the substring `q`, add it to the `matches` array
//         $.each(strs, function(i, str) {
//           if (substrRegex.test(str)) {
//             matches.push(str);
//           }
//         });
  
//         cb(matches);
//       };
//     };
  
//     var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
//       'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
//       'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
//       'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
//       'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
//       'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
//       'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
//       'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
//       'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
//     ];
  
//     $('#the-basics .typeahead').typeahead({
//       hint: true,
//       highlight: true,
//       minLength: 1
//     },
//     {
//       name: 'states',
//       source: substringMatcher(states)
//     });
  
//     // bloodhound
//     // ----------
  
//     // constructs the suggestion engine
//     var states = new Bloodhound({
//       datumTokenizer: Bloodhound.tokenizers.whitespace,
//       queryTokenizer: Bloodhound.tokenizers.whitespace,
//       // `states` is an array of state names defined in "The Basics"
//       local: states
//     });
  
    // $('#bloodhound .typeahead').typeahead({
    //   hint: true,
    //   highlight: true,
    //   minLength: 1
    // },
    // {
    //   name: 'states',
    //   source: states
    // });
  
    // prefetch
    // --------
  
    // var countries = new Bloodhound({
    //   datumTokenizer: Bloodhound.tokenizers.whitespace,
    //   queryTokenizer: Bloodhound.tokenizers.whitespace,
    //   // url points to a json file that contains an array of country names, see
    //   // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
    //   prefetch: 'https://restcountries.eu/rest/v2/region/europe'
    // });
  
    // // passing in `null` for the `options` arguments will result in the default
    // // options being used
    // $('#prefetch .typeahead').typeahead(null, {
    //   name: 'countries',
    //   source: countries
    // });
  
    // remote
    // ------
  
//     var bestPictures = new Bloodhound({
//       datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
//       queryTokenizer: Bloodhound.tokenizers.whitespace,
//       prefetch: '../data/films/post_1960.json',
//       remote: {
//         url: '../data/films/queries/%QUERY.json',
//         wildcard: '%QUERY'
//       }
//     });
  
//     $('#remote .typeahead').typeahead(null, {
//       name: 'best-pictures',
//       display: 'value',
//       source: bestPictures
//     });
  
//     // default suggestions
//     // -------------------
  
//     var nflTeams = new Bloodhound({
//       datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
//       queryTokenizer: Bloodhound.tokenizers.whitespace,
//       identify: function(obj) { return obj.team; },
//       prefetch: '../data/nfl.json'
//     });
  
//     function nflTeamsWithDefaults(q, sync) {
//       if (q === '') {
//         sync(nflTeams.get('Detroit Lions', 'Green Bay Packers', 'Chicago Bears'));
//       }
  
//       else {
//         nflTeams.search(q, sync);
//       }
//     }
  
//     $('#default-suggestions .typeahead').typeahead({
//       minLength: 0,
//       highlight: true
//     },
//     {
//       name: 'nfl-teams',
//       display: 'team',
//       source: nflTeamsWithDefaults
//     });
  
//     // custom templates
//     // ----------------
  
//     $('#custom-templates .typeahead').typeahead(null, {
//       name: 'best-pictures',
//       display: 'value',
//       source: bestPictures,
//       templates: {
//         empty: [
//           '<div class="empty-message">',
//             'unable to find any Best Picture winners that match the current query',
//           '</div>'
//         ].join('\n'),
//         suggestion: Handlebars.compile('<div><strong>{{value}}</strong> – {{year}}</div>')
//       }
//     });
  
//     // multiple datasets
//     // -----------------
  
//     var nbaTeams = new Bloodhound({
//       datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
//       queryTokenizer: Bloodhound.tokenizers.whitespace,
//       prefetch: '../data/nba.json'
//     });
  
//     var nhlTeams = new Bloodhound({
//       datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
//       queryTokenizer: Bloodhound.tokenizers.whitespace,
//       prefetch: '../data/nhl.json'
//     });
  
//     $('#multiple-datasets .typeahead').typeahead({
//       highlight: true
//     },
//     {
//       name: 'nba-teams',
//       display: 'team',
//       source: nbaTeams,
//       templates: {
//         header: '<h3 class="league-name">NBA Teams</h3>'
//       }
//     },
//     {
//       name: 'nhl-teams',
//       display: 'team',
//       source: nhlTeams,
//       templates: {
//         header: '<h3 class="league-name">NHL Teams</h3>'
//       }
//     });
  
//     // scrollable dropdown menu
//     // ------------------------
  
//     $('#scrollable-dropdown-menu .typeahead').typeahead(null, {
//       name: 'countries',
//       limit: 10,
//       source: countries
//     });
// })

// function createNode(element) {
//     return document.createElement(element);
// }

// function append(parent, el) {
//   return parent.appendChild(el);
// }

// const ul = document.getElementById('submit-flight-search');
// const url = 'http://localhost:9000/validate-data/validator-FindFlight.json';
// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
//   let country = data.results;
//   return country.map(function(country) {
//     let tr = createNode('tr'),
//         td = createNode('td'), 
//         title = createNode('title'), 
//         name = createNode('name'), 
//         surname = createNode('surname'), 
//         dob = createNode('dob'), 
//         span = createNode('span'); 
//     img.src = country.picture.medium;
//     span.innerHTML = `${country.code} ${country.text} ${country.type}`;
//     append(tr, td);
//     // append(li, span);
//     // append(ul, li);
//   })
// })
// .catch(function(error) {
//   console.log(JSON.stringify(error));
// });   


// var infoElm = $(".info");
//     //arraying through every element on the page
//     infoElm.each(function(){
//         var self = $(this),
//     //getting and saving the element of self
//           selfTooltipText = self.data('tooltip-text');
//         if(selfTooltipText)
//     //creating an element
//         $('<span/>', {
//             class:'tooltip', text: selfTooltipText}).appendTo(self);
//         });
    
// (function($){
//     // $(window).on("load",function(){
//     //     $(".content").mCustomScrollbar();
//     // });
//     $("#departure").keyup(function(){
//         $("#result").html('');
//         var searchField =$('#search').val();
//         var expression = new RegExp(searchField, "i");
//         $.getJSON('data.json', function(data){
//             $.each(data, function(key, value){
//                 if(value.name.search(expression) != -1 || value.location.search(
//                     expression)!= -1){
//                         $("#result").append('<tr class = "countries"><td>' + value.code + 'height="40" width="40" class="country"/>' + value.text + '</tr>')
//                     }
//                 })
//             })
//         })
// })(jQuery);



// $(document).ready(function(){
//     // Defining the local dataset
//     var cars = ['Audi', 'BMW', 'Bugatti', 'Ferrari', 'Ford', 'Lamborghini', 'Mercedes Benz', 'Porsche', 'Rolls-Royce', 'Volkswagen'];
    
//     // Constructing the suggestion engine
//     var cars = new Bloodhound({
//         datumTokenizer: Bloodhound.tokenizers.whitespace,
//         queryTokenizer: Bloodhound.tokenizers.whitespace,
//         local: cars
//     });
    
//     // Initializing the typeahead
//     $('.typeahead').typeahead({
//         hint: true,
//         highlight: true, /* Enable substring highlighting */
//         minLength: 1 /* Specify minimum characters required for showing result */
//     },
//     {
//         name: 'cars',
//         source: cars
//     });
// });  

