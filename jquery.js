
var burger = $('.royale');
var pizza = $('.pizza');
var ribs = $('.ribs');
var iceCream = $('.iceCream');

 var table = $("table")[0];

var subTotal = $('.subTotal')[0];
var subTotalInt = 0;

var gilfolyeTax = 0.0666;
var tax = $('.tax')[0];
var taxInt = 0;

var total = $('.total')[0];

$(burger).on('click', $('card-action'), function (event) {
  let item = $(burger).find('span')[0];
  let price = $(burger).find('p')[0];
  let row = $('<tr>');
  let element = $('<td>');
  let element2 = $('<td>');
  subTotalInt += parseFloat($(price).text().substring(1));
  element.html($(item).text());
  $(row).append(element);
  element2.html($(price).text());
  $(row).append(element2);
  $(table).append(row);
  $(subTotal).html('$'+(subTotalInt.toFixed(2)));
  taxInt = (subTotalInt * gilfolyeTax);
  $(tax).html('$'+(taxInt.toFixed(2)));
  $(total).html('$'+((subTotalInt+taxInt).toFixed(2)));
});

$(pizza).on('click', $('card-action'), function (event) {
  let item = $(pizza).find('span')[0];
  let price = $(pizza).find('p')[0];
  let row = $('<tr>');
  let element = $('<td>');
  let element2 = $('<td>');
  subTotalInt += parseFloat($(price).text().substring(1));
  element.html($(item).text());
  $(row).append(element);
  element2.html($(price).text());
  $(row).append(element2);
  $(table).append(row);
  $(subTotal).html('$'+(subTotalInt.toFixed(2)));
  taxInt = (subTotalInt * gilfolyeTax);
  $(tax).html('$'+(taxInt.toFixed(2)));
  $(total).html('$'+((subTotalInt+taxInt).toFixed(2)));
});

$(ribs).on('click', $('card-action'), function (event) {
  let item = $(ribs).find('span')[0];
  let price = $(ribs).find('p')[0];
  let row = $('<tr>');
  let element = $('<td>');
  let element2 = $('<td>');
  subTotalInt += parseFloat($(price).text().substring(1));
  element.html($(item).text());
  $(row).append(element);
  element2.html($(price).text());
  $(row).append(element2);
  $(table).append(row);
  $(subTotal).html('$'+(subTotalInt.toFixed(2)));
  taxInt = (subTotalInt * gilfolyeTax);
  $(tax).html('$'+(taxInt.toFixed(2)));
  $(total).html('$'+((subTotalInt+taxInt).toFixed(2)));
});

$(iceCream).on('click', $('card-action'), function (event) {
  let item = $(iceCream).find('span')[0];
  let price = $(iceCream).find('p')[0];
  let row = $('<tr>');
  let element = $('<td>');
  let element2 = $('<td>');
  subTotalInt += parseFloat($(price).text().substring(1));
  element.html($(item).text());
  $(row).append(element);
  element2.html($(price).text());
  $(row).append(element2);
  $(table).append(row);
  $(subTotal).html('$'+(subTotalInt.toFixed(2)));
  taxInt = (subTotalInt * gilfolyeTax);
  $(tax).html('$'+(taxInt.toFixed(2)));
  $(total).html('$'+((subTotalInt+taxInt).toFixed(2)));
});

$( document ).ready(function(){
  $(".button-collapse").sideNav();
})



var delivery = $('#delivery');

$(delivery).submit( function(event) {
  event.preventDefault();
  Materialize.toast('Falafel is coming in your direction!', 4000);
});
