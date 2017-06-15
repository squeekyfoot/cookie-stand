'use strict';

// Calculate how many cookies each store must make every day
// Hours of operation: 6am - 8pm everyday

// Individual stores should be made into objects

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
//
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
//
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//
// Store the results for each location in a separate array... perhaps as a property of the object representing that location
//
// Display the values of each array as unordered lists in the browser
//
// Calculating the sum of these hourly totals; In a list

// Stores: 1st and Pike, SeaTac Airport, Seattle Center, Capitol Hill, Alki
var storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

var pike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  averageCookies: 6.3,
  hourlyTotals: [],
  generateCustomers: function (min, max, avg) {
    for (var i = 0; i < 15; i++) {
      this.hourlyTotals.push(Math.floor((Math.random() * (max - min + 1) + min) * avg));
    }
  }
};

pike.generateCustomers(pike.minCustomers, pike.maxCustomers, pike.averageCookies);
console.log(pike.hourlyTotals);


var seatac = {
  name: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  averageCookies: 1.2,
  hourlyTotals: [],
  generateCustomers: function (min, max, avg) {
    for (var i = 0; i < 15; i++) {
      this.hourlyTotals.push(Math.floor((Math.random() * (max - min + 1) + min) * avg));
    }
  }
};

seatac.generateCustomers(seatac.minCustomers, seatac.maxCustomers, seatac.averageCookies);
console.log(seatac.hourlyTotals);

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  averageCookies: 3.7,
  hourlyTotals: [],
  generateCustomers: function (min, max, avg) {
    for (var i = 0; i < 15; i++) {
      this.hourlyTotals.push(Math.floor((Math.random() * (max - min + 1) + min) * avg));
    }
  }
};

seattleCenter.generateCustomers(seattleCenter.minCustomers, seattleCenter.maxCustomers, seattleCenter.averageCookies);
console.log(seattleCenter.hourlyTotals);

var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  averageCookies: 2.3,
  hourlyTotals: [],
  generateCustomers: function (min, max, avg) {
    for (var i = 0; i < 15; i++) {
      this.hourlyTotals.push(Math.floor((Math.random() * (max - min + 1) + min) * avg));
    }
  }
};

capitolHill.generateCustomers(capitolHill.minCustomers, capitolHill.maxCustomers, capitolHill.averageCookies);
console.log(capitolHill.hourlyTotals);

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  averageCookies: 4.6,
  hourlyTotals: [],
  generateCustomers: function (min, max, avg) {
    for (var i = 0; i < 15; i++) {
      this.hourlyTotals.push(Math.floor((Math.random() * (max - min + 1) + min) * avg));
    }
  }
};

alki.generateCustomers(alki.minCustomers, alki.maxCustomers, alki.averageCookies);
console.log(alki.hourlyTotals);



// Set the parent element for lists to attach to:

var parentElement = document.getElementById('salesInfo');

// Create first article section for Pike store:

for (var i = 0; i < 5; i++) {
  var article = document.createElement('article');
  article.setAttribute('id', 'article' + (i + 1));
  parentElement.appendChild(article);

  var h2 = document.createElement('h2');
  h2.setAttribute('id', 'heading' + (i + 1));
  article.appendChild(h2);
  h2.textContent = storeNames[i];

  var ul = document.createElement('ul');
  ul.setAttribute('id', 'list' + (i + 1));
  article.appendChild(ul);
}

function addListItems (store, listNumber) {
  var list = document.getElementById('list' + listNumber);
  var totalCookies = 0;
  for (var i = 0; i < 15; i++) {
    var li = document.createElement('li');
    var hour = 6 + i;
    var timeOfDay = 'am';
    if (hour > 12) {
      hour = hour - 12;
      timeOfDay = 'pm';
    }
    if (hour == 12) {
      timeOfDay = 'pm';
    }
    li.textContent = hour + timeOfDay + ': ' + store.hourlyTotals[i] + ' cookies';
    totalCookies = totalCookies + store.hourlyTotals[i];
    list.appendChild(li);
  }
  var totalLi = document.createElement('li');
  totalLi.textContent = 'Total: ' + totalCookies + ' cookies';
  list.appendChild(totalLi);
  console.log(totalCookies);
};

addListItems(pike, 1);
addListItems(seatac, 2);
addListItems(seattleCenter, 3);
addListItems(capitolHill, 4);
addListItems(alki, 5);
