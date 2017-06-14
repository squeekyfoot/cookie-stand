'use strict';

// Create a constructor function to create and hold store objects

function Store (name, minCustomers, maxCustomers, averageCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.hourlyTotals = [];
  this.dailyTotals = 0;
  this.generateCustomers = function () {
    for (var i = 0; i < 15; i++) {
      this.hourlyTotals.push(Math.floor((Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers) * this.averageCookies));
      this.dailyTotals += this.hourlyTotals[i];
    }
  };
  this.render = function () {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var th = document.createElement('th');
    th.textContent = this.name;
    tr.appendChild(th);
    for (var i = 0; i < hoursOpen.length; i++) {
      var td = document.createElement('td');
      td.textContent = this.hourlyTotals[i];
      tr.appendChild(td);
    }
    th = document.createElement('th');
    th.textContent = this.dailyTotals;
    tr.appendChild(th);
  };
}

// Initialize a new object for each store location

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// Create an array to hold all of the created store objects
var allStores = [pike, seatac, seattleCenter, capitolHill, alki];

var hoursOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

// Initiate the generateCustomers method from all Store objects
// Store all output into the hourlyTotals property for each object

for (var i = 0; i < allStores.length; i++) {
  allStores[i].generateCustomers();
  console.log(allStores[i].hourlyTotals);
}

// Set the parent element for sales table to attach to:

var parentElement = document.getElementById('salesInfo');

// Main heading for the sales page:

var mainHeading = document.createElement('h1');
mainHeading.textContent = 'Cookie Sales Report for All Stores';
parentElement.appendChild(mainHeading);

// Create the table element to put sales information in:

var table = document.createElement('table');
table.setAttribute('id', 'sales_table');
parentElement.appendChild(table);

// Create the initial row of headings for hours and totals:
// ROW 1:

function createHeader() {
  var tr = document.createElement('tr');
  table.appendChild(tr);

  for (i = 0; i < 17; i++) {
    var th = document.createElement('th');
    if (i == 0) {
      th.textContent = 'Store Name';
    } else if (i < 16) {
      th.textContent = hoursOpen[i - 1];
    } else {
      th.textContent = 'Daily Location Total';
    }
    tr.appendChild(th);
  }
}

createHeader();

// Render each Store's row within the table:
// ROWS 2 - 6:

pike.render();
seatac.render();
seattleCenter.render();
capitolHill.render();
alki.render();

// STRETCH GOAL: Create a footer row for the table to display totals for each hour:
