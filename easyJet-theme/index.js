// @ts-check
var $elCorporateBookingPodPanel = $('.main-panel__search-panel__form .corporate-booking');
var $elHomePanel = $('.control-panel--main-container__home-view');


$(document).ready(function () {
  $('.dropdown-toggle').dropdown();

  $(window).on("load",function(){
    $(".searchFlights").mCustomScrollbar();
});

  $(document).ready(function () {
    $('#departureFrom').click(function () {
      var displayResources = $('#searchFlightCountry');
       displayResources.text('Loading data from JSON source...');
        $.ajax({
        type: "GET",
        dataType: 'JSON',
        url: "https://gist.githubusercontent.com/Maryann380/cf0ed54d862f91c4dc0a6938200e5750/raw/679140b84ab54cc2b9b421b5f66acb96914ae75f/airports.json",
        success: function (data) {
          console.log(data.airports);
          var output = "<div><ul>";
          for (var i = 0; i < data.airports.length; i++) {
            output += "<li><button class='btn-link btn' data-target='#myCountry'>" + data.airports[i].label + "</button></li>";
          }
          output += "</ul></div>";

          displayResources.html(output);
          $("li").addClass("col-sm-12  reset-padding-right reset-padding-left");
        }
      });

    });
  });

$('body').on('click', '#searchFlightCountry button[data-target="#myCountry"]', function() {
  //$ is used only if we are trying to return a jquery object
  var myCountry = $(this).text();
  var inputId = $('#flightDeparture').val(); // the input type hidden
  $('#' + inputId).val(myCountry);
  $('#myCountry').modal('toggle');
});
$('.input-group-addon').on('click',function(){
  var $input = $(this).prev('.twitter-typeahead').find('.tt-input');
  $('#flightDeparture').val($input.attr('id'));
});

$(document).ready(function () {
  $('#submit-flight-search').click(function () {
      var displayResources = $('#result');
       displayResources.text('Loading data from JSON source...');
        $.ajax({
        type: "GET",
        dataType: 'JSON',
        url: "https://gist.githubusercontent.com/Maryann380/d9d1bccc02ff1348ffeaf36575718cb1/raw/b61b030aa676ed292dd42db528038ea8f1b4b3b0/flight-search.json",
        success: function (data) {
          console.log(data.flight_data);
          var output = "<thead><tr><th>Airline</th><th>Flight_number</th><th>From</th><th>To</th><th>Departure</th><th>Arrival</th><th>Duration</th><th>Cost</th></thead><tbody class='scroll-shadow mCustomScrollbar _mCS_14'>";
          for (var i = 0; i < data.flight_data.length; i++) {
            output += "<tr><td>" + data.flight_data[i].airline + "</td><td>" + data.flight_data[i].flight_number + "</td><td>" + data.flight_data[i].from + "</td><td>" + data.flight_data[i].to + "</td><td>" + data.flight_data[i].departure + "</td><td>" + data.flight_data[i].arrival + "</td><td>" + data.flight_data[i].duration + "</td><td>" + data.flight_data[i].cost + "</td></tr>";
          }
          output += "</tbody>";

          displayResources.html(output);
          $("table").addClass("table");
          $("section #result").css("border", '1px solid');
        }
      });
      if($('#submit-flight-search').hasClass()){
        $('#submit-flight-search button').toggle();
      }
    });
  });
});


var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex; // an array that will be populated with substring matches
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


// // $('.dropdown-toggle').dropdown();

function onSelect() {
  var $modal = $(this.data('target'));
  $modal.modal('toggle');
}

$('#departure').Zebra_DatePicker({
  direction: true,
  pair: $('.modal-body .form-group #datetimepickerTo'),
  always_visible: $('#myModal .form-group #datetimepickerFrom'),
  onSelect
});
$('#to').Zebra_DatePicker({
  direction: 2,
  always_visible: $('#myModal .form-group #datetimepickerTo'),
  onSelect
});

$('#customer-link').on('click', function ( event ) {
  event.preventDefault();
  $('.control-panel--main-container > div').addClass('hide');
  $elHomePanel.removeClass('hide');
  $elCorporateBookingPodPanel.addClass('hide');
  $( this ).parents('.custom-dropdown').find('.filter-option').html('Customer');
} );

$(function(){
  $(".dropdown-menu-right li a").click(function(){
   $("#dropdown-user-type:first-child").text($(this).text());
     $("#dropdown-user-type:first-child").val($(this).text());
     if($('.dropdown-menu.dropdown-menu-right').hasClass('open')){
       $('.dropdown-menu.dropdown-menu-right').toggle();
     }
  });
});


 

