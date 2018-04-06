//google redirect notice to url: `https://www.google.com/url?warn=true&q=${YOUR_URL_HERE}`
//Thankfully I did not have to write this Moble Page Transfering Code myself; it was on Stack Overflow!

function mobliePageTransfer() {
  if (navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ) {
    location.href = "https://s3.us-east-2.amazonaws.com/pizzatest/mobile/index.html";
  }
}

function displayChildren(elementID) {
  var children = new Array(document.getElementById(elementID).childNodes);
  for (i = 0; i < children; i++) {
    children[i].style = 'display:block';
  }
}

function checkAvalibility(page_name) {
  var not_avalible_pages = new Array();
  if (page_name in not_avalible_pages || page_name == not_avalible_pages) {
    var elements = document.body.children;
    alert(elements);
    var number_removed = 0;
    for (i = 0; i < elements.length; i++) {
      alert(elements[i].className);
      if (elements[i].className !== 'nav') {
        alert(number_removed);
        if (number_removed == 0) {
          document.body.insertBefore(createElement('iframe').id = 'toreplace', elements[i]);
          alert('working');
        }
        document.body.removeChild(elements[i]);
      }
    }
    var p = document.createElement('p');
    p.innerHTML = `This page is currently not avalible. Please return to the <a href='javascript:location.back(-1)'>previous page</a> or choose a different page from the menu above.`;
    document.body.replaceChild(p, document.getElementById('toreplace'));
  }
}

function sessionExpired() {
  alert('Your session has expired. Click okay to restart.');
  location.reload();
}

API_KEY = 'AIzaSyDASqIVw33D0GF9keRiBkwlaouKwJrvMfE';

function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    scope: "https://www.googleapis.com/auth/spreadsheets.readonly"
  });
}

function pageLoadError() {
  document.getElementById('googleFormHolder').innerHTML = `<span>The form load has timed out. Please <a href='javascript:location.reload()'>reload the page</a> to restart.</span>`;
}

function addFormToPage(email_val, sessionTimeout) {
  var timeout = setTimeout(pageLoadError, 10000);
  var form_holder = document.getElementById('googleFormHolder');
  var form = document.createElement('form');
  form.id = "PizzaOrder";
  form.onsubmit = 'findPrice()';
  form.method = "POST";
  form.action = "https://script.google.com/a/luebke.us/macros/s/AKfycbx5wU3Bu4XLHMUbxArP5IVxIdco7XPKpqn6rgaJDjYUW1s25w/exec";
  var students_name_text = document.createElement('span');
  var students_name_input = document.createElement('input');
  students_name_text.innerHTML = "Student's Name";
  students_name_input.type = "text";
  students_name_input.name = "studentsName";
  form.appendChild(students_name_text);
  form.appendChild(document.createElement('br'));
  form.appendChild(students_name_input);
  form.appendChild(document.createElement('br'));
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1MGoW4y5FofTEukCY7oaazlDiVORZ4VQ3KbB3U6s-02Y',
    range: 'Classrooms!A1:B',
  }).then(function(response) {
    var range_data = response.result;
    var classroom_title = document.createElement('span');
    classroom_title.innerHTML = 'Classroom';
    form.appendChild(classroom_title);
    form.appendChild(document.createElement('br'));
    var hidden_cls = document.createElement('input');
    hidden_cls.type = 'hidden';
    hidden_cls.name = 'classroom';
    hidden_cls.id = 'classroom';
    form.appendChild(hidden_cls);
    for (i = 0; i < range_data.values.length; i++) {
      var radio_btn = document.createElement("input");
      radio_btn.type = 'radio';
      eval(`radio_btn.onchange = function() {updateClassroomValue('${range_data.values[i][0]}')};`);
      radio_btn.id = range_data.values[i][1];
      radio_btn.name = 'classMenu';
      var span = document.createElement('span');
      span.className = 'smallText';
      span.innerHTML = range_data.values[i][0];
      form.appendChild(radio_btn);
      form.appendChild(span);
      form.appendChild(document.createElement('br'));
    }
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1MGoW4y5FofTEukCY7oaazlDiVORZ4VQ3KbB3U6s-02Y',
      range: 'Dates!A1:B',
    }).then(function(response) {
      var dates_data = response.result;
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1MGoW4y5FofTEukCY7oaazlDiVORZ4VQ3KbB3U6s-02Y',
        range: 'Products!A2:F',
      }).then(function(response) {
        var products_data = response.result;
        var title = document.createElement('span');
        title.innerHTML = "Pizza Lunch Order";
        form.appendChild(title);
        form.appendChild(document.createElement('br'));
        var button = document.createElement('button');
        button.type = 'button';
        button.setAttribute("onclick",'repeatOrder()');
        button.innerHTML = 'Apply first week order to all other weeks';
        form.appendChild(button);
        var table = document.createElement('table');
        table.className = "lunchOrderTable";
        table.border = 1;
        var tr_titles = document.createElement('tr');
        var tr_prices = document.createElement('tr');
        var title_date_td = document.createElement('td');
        var date_td_span = document.createElement('span');
        date_td_span.className = 'smallText';
        date_td_span.innerHTML = 'Date';
        title_date_td.appendChild(date_td_span);
        tr_titles.appendChild(title_date_td);
        var clear_row_td = document.createElement('td');
        var clear_row_span = document.createElement('span');
        clear_row_span.className = 'smallText';
        clear_row_span.innerHTML = 'Clear Order';
        clear_row_td.appendChild(clear_row_span);
        tr_titles.appendChild(clear_row_td);
        var price_td = document.createElement('td');
        var price_span = document.createElement('span');
        price_span.className = 'smallText';
        price_span.innerHTML = 'Price:';
        price_td.appendChild(price_span);
        tr_prices.appendChild(price_td);
        tr_prices.appendChild(document.createElement('td'));
        for (i = 0; i < products_data.values.length; i++) {
          var td_title = document.createElement('td');
          var span_title = document.createElement('span');
          span_title.className = 'smallText';
          if (products_data.values[i][1] == 'Pizza') {
            var title_innerHTML = `Slices ${products_data.values[i][0]} Pizza`;
          }
          else {
            var title_innerHTML = products_data.values[i][0];
          }
          span_title.innerHTML = title_innerHTML;
          td_title.appendChild(span_title);
          tr_titles.appendChild(td_title);
          var td_price = document.createElement('td');
          var span_price = document.createElement('span');
          span_price.className = 'smallText';
          span_price.innerHTML = products_data.values[i][4];
          span_price.id = `priceCol${i}`;
          td_price.appendChild(span_price);
          tr_prices.appendChild(td_price);
        }
        table.appendChild(tr_titles);
        table.appendChild(tr_prices);
        var date_len = dates_data.values.length;
        var toAdd = 0;
        for (x = 0; x < date_len; x++) {
          // if the current date is past the cutoff date (stored Friday date - 1 day of milliseconds), disable it
          var now = new Date().getTime();
          var cutoff_date = new Date(dates_data.values[x + toAdd][0]).getTime() - 1000*60*60*24;
          if (now > cutoff_date) {
            x -= 1;
            date_len -= 1;
            toAdd += 1;
            continue;
          }
          var tr_x = document.createElement('tr');
          var date_td = document.createElement('td');
          var date_span = document.createElement('span');
          var date_input = document.createElement('input');
          date_input.type = 'hidden';
          date_input.name = `row${x}date`;
          date_input.value = dates_data.values[x + toAdd][0];
          date_span.className = 'smallText';
          date_span.innerHTML = dates_data.values[x + toAdd][0];
          date_td.appendChild(date_span);
          date_td.appendChild(date_input);
          var clear_td = document.createElement('td');
          var clear_button = document.createElement('button');
          clear_button.type = 'button';
          clear_button.setAttribute("onclick",`clearRow(${x})`);
          clear_button.innerHTML = 'Clear';
          clear_td.appendChild(clear_button);
          tr_x.appendChild(date_td);
          tr_x.appendChild(clear_td);
          for (y = 0; y < products_data.values.length; y++) {
            var td_cell = document.createElement('td');
            if (products_data.values[y][1] == 'Pizza') {
              var td_innerHTML = document.createElement('input');
              td_innerHTML.onchange = function() {setTotalSoFar()};
              td_innerHTML.type = 'number';
              td_innerHTML.value = 0;
              td_innerHTML.min = 0;
              td_innerHTML.className = `row${x}`
              td_innerHTML.name = `row${x}col${y}`;
              td_innerHTML.id = `row${x}col${y}`;
            }
            else {
              var td_innerHTML = document.createElement('input');
              td_innerHTML.onchange = function() {setTotalSoFar()};
              td_innerHTML.type = 'checkbox';
              td_innerHTML.className = 'lCheck';
              td_innerHTML.className = `row${x}`
              td_innerHTML.name = `row${x}col${y}`;
              td_innerHTML.id = `row${x}col${y}`;
            }
            td_cell.appendChild(td_innerHTML);
            tr_x.appendChild(td_cell);
          }
          table.appendChild(tr_x);
        }
        form.appendChild(table);
        var email_input = document.createElement('input');
        email_input.type = 'hidden';
        email_input.id = 'emailInput';
        email_input.name = 'email';
        email_input.value = email_val;
        form.appendChild(email_input);
        var submition_time_input = document.createElement('input');
        submition_time_input.type = 'hidden';
        submition_time_input.id = 'submitionTime';
        submition_time_input.name = 'submitionTime';
        submition_time_input.value = Date.now.toString();
        form.appendChild(submition_time_input);
        var number_of_weeks = document.createElement('input');
        number_of_weeks.type = 'hidden';
        number_of_weeks.name = 'number_of_weeks';
        number_of_weeks.value = table.rows.length - 2;
        form.appendChild(number_of_weeks);
        var number_of_products = document.createElement('input');
        number_of_products.type = 'hidden';
        number_of_products.name = 'number_of_products';
        number_of_products.value = products_data.values.length;
        form.appendChild(number_of_products);
        form.appendChild(document.createElement('br'));
        var total_so_far_text = document.createElement('span');
        total_so_far_text.className = 'smallText';
        total_so_far_text.innerHTML = 'Total So Far:';
        form.appendChild(total_so_far_text);
        var currentTotal = document.createElement('b');
        currentTotal.id = 'currentTotal';
        currentTotal.value = 0;
        form.appendChild(currentTotal);
        form.appendChild(document.createElement('br'));
        var double_check = document.createElement('span');
        double_check.className = 'smallText';
        double_check.innerHTML = 'Please <b>double-check</b> your order before submiting it!';
        form.appendChild(double_check);
        form.appendChild(document.createElement('br'));
        form.appendChild(document.createElement('br'));
        var submitAndContinueShopping = document.createElement('button');
        submitAndContinueShopping.className = 'pizzaFormButton';
        submitAndContinueShopping.value = 'submit';
        submitAndContinueShopping.disabled = 'disabled';
        submitAndContinueShopping.innerHTML = 'Submit and Continue Shopping';
        submitAndContinueShopping.id = 'continueShopping';
        submitAndContinueShopping.setAttribute("onclick", `prepForReturn(false, ${sessionTimeout})`);
        form.appendChild(submitAndContinueShopping);
        var submitAndPay = document.createElement('button');
        submitAndPay.className = 'pizzaFormButton';
        submitAndPay.value = 'submit';
        submitAndPay.disabled = 'disabled';
        submitAndPay.setAttribute("onclick", `prepForReturn(true, ${sessionTimeout})`);
        submitAndPay.id = 'submitAndPay';
        submitAndPay.innerHTML = 'Submit and Pay';
        form.appendChild(submitAndPay);
        document.getElementById('googleFormHolder').innerHTML = ``;
        document.getElementById('googleFormHolder').appendChild(form);
        clearTimeout(timeout);
      });
    });
  });
}

function prepForReturn(pay, sessionTimeout) {
  clearTimeout(sessionTimeout);
  if (pay == true) {
    setCookie('payOnReturn', true, 1);
    findPrice();
  }
  var form_holder = document.getElementById('googleFormHolder');
  var loading_container_div = document.createElement('div');
  loading_container_div.className = 'loadContainer';
  var loading_div = document.createElement('div');
  loading_div.className = 'loader';
  loading_container_div.appendChild(loading_div);
  form_holder.appendChild(loading_container_div);
}

function updateClassroomValue(classroom) {
  document.getElementById('classroom').value = classroom;
}

function clearRow(row)  {
  var rowData = Array.from(document.getElementsByClassName(`row${row}`));
  for (i = 0; i < rowData.length; i++) {
    if (rowData[i].type == 'number') {
      rowData[i].value = 0;
    }
    else {
      rowData[i].checked = false;
    }
  }
  setTotalSoFar();
}

function repeatOrder()  {
  var first_week = document.getElementsByClassName(`row0`);
  var num_weeks = document.getElementsByClassName('lunchOrderTable')[0].rows.length;
  for (i = 1; i < num_weeks; i++) {
    var week_row = document.getElementsByClassName(`row${i}`);
    for (j = 0; j < week_row.length; j++) {
      if (week_row[j].type == 'number') {
        week_row[j].value = first_week[j].value;
      }
      else {
        week_row[j].checked = first_week[j].checked;
      }
    }
  }
  setTotalSoFar();
}

function computeTotalPrice()  {
  var rows = document.getElementsByClassName('lunchOrderTable')[0].rows.length - 2;
  var collums = document.getElementsByClassName(`row0`).length;
  var price = 0;
  for (i = 0; i < rows; i++) {
    for (j = 0; j < collums; j++) {
      var element = document.getElementById(`row${i}col${j}`);
      if (element.type == 'number') {
        if (element.value < 0 || element.value.toString().includes('.')) {
          element.value = 0;
        }
        price += Number(document.getElementById(`priceCol${j}`).innerHTML.replace('$','')) * Number(element.value);
      }
      if (element.type == 'checkbox') {
        if (element.checked) {
          price += Number(document.getElementById(`priceCol${j}`).innerHTML.replace('$',''));
        }
      }
    }
  }
  price = price.toFixed(2);
  return price;
}

function setTotalSoFar() {
  var price = "$" + computeTotalPrice();
  document.getElementById("currentTotal").innerHTML = price;
  if (Number(price.replace('$','')) > 0 && document.getElementById('PizzaOrder').studentsName !== '' && document.getElementById('classroom').value !== '') {
    document.getElementById('continueShopping').disabled = '';
    document.getElementById('submitAndPay').disabled = '';
  }
  else {
    document.getElementById('continueShopping').disabled = 'disabled';
    document.getElementById('submitAndPay').disabled = 'disabled';
  }
}

function findPrice() {
  var price = computeTotalPrice();
  prev_price_val = getCookie('price');
  if (prev_price_val !== undefined && prev_price_val !== null && prev_price_val !== NaN) {
    var prevPrice = Number(prev_price_val);
  }
  else {
    var prevPrice = 0.0;
  }
  var newPrice = Number(price);
  setCookie("price", newPrice+prevPrice, 5);
}

function setCookie(cname, cvalue, exminutes) {
  var d = new Date();
  d.setTime(d.getTime() + (exminutes*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return undefined;
}

function checkCookie() {
  var email_val = getCookie("email");
  if (email_val !== undefined && email_val !== null) {
    loadForm(email_val);
    return;
  }
  var prev_email_val = getCookie('prevEmail');
  if (prev_email_val !== undefined && prev_email_val !== null) {
    document.getElementById('emailcached').value = prev_email_val;
  }
}

function loadForm(email_val) {
  var form_holder = document.getElementById('googleFormHolder');
  form_holder.innerHTML = ``;
  var loading_container_div = document.createElement('div');
  loading_container_div.className = 'loadContainer';
  var loading_div = document.createElement('div');
  loading_div.className = 'loader';
  loading_container_div.appendChild(loading_div);
  form_holder.appendChild(loading_container_div);
  gapi.load('client', function() {
    if (getCookie('payOnReturn') !== undefined && getCookie('payOnReturn') !== null) {
      window.open('payment.html','_top');
    }
    if (checkEmailInvoice(email_val)) {
      var checked = true;
    }
    else {
      checkIfGapiLoaded(email_val);
    }
  });
}

function checkIfGapiLoaded(email_val, timeout) {
  if (timeout === undefined) {
    var timeout = setTimeout(pageLoadError, 10000);
  }
  if (gapi.client.sheets !== undefined) {
    clearTimeout(timeout);
    setCookie("email", email_val, 5);
    setCookie("prevEmail", email_val, 365*24*60);
    var sessionTimeout = setTimeout(sessionExpired, 5*60*1000);
    console.log('Email val: ' + email_val);
    addFormToPage(email_val, sessionTimeout);
  }
  else {
    setTimeout(checkIfGapiLoaded, 1000, email_val, timeout);
  }
}

function getScript(source, callback) {
  var script = document.createElement('script');
  var prior = document.getElementsByTagName('script')[0];
  script.async = 1;
  prior.parentNode.insertBefore(script, prior);

  script.onload = script.onreadystatechange = function( _, isAbort ) {
      if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
          script.onload = script.onreadystatechange = null;
          script = undefined;

          if(!isAbort) { if(callback) callback(); }
      }
  };

  script.src = source;
}

function oops() {
  alert("Whoops! Something went wrong.");
}

function pieWrite(applePies,pumpkinPies,chocoPies,pieDishes) {
  alert(applePies + " apple pies and " + pumpkinPies + " pumpkin pies and " + chocoPies + " chocolate chess pies and " + pieDishes + " pie dishes ordered. Please wait while order is writen.");
  oops();
}

function checkEmailInvoice(email) {
  if (['me@idontpay.com'].includes(email)) {
    document.getElementById("googleFormHolder").innerHTML = ("<iframe src='../issue.html' id='noInvoiceFrame' style = 'border: none;' width=50% height=500px></iframe>");
    return true;
  }
  return false;
}

function whyNotAvalible() {
  alert("You have not paid an invoice due to you. Please pay before ordering pizza.")
  var pay = confirm("Would you like to pay the invoice now?")
  if (pay) {
    location.href = "https://mail.google.com/mail/u/0/#search/from%3Anoreply%40paypal.com"
  }
}

function loadPriceFromUrl() {
  var price = location.hash.replace("#", "");
  document.getElementById("pizzaPriceBox").innerHTML = "$" + price
  document.getElementById("paypalPrice_secure").innerHTML = price
}

function loadPriceFromCookies() {
  var price = getCookie('price');
  document.getElementById('pizzaPriceBox').value = '$' + price;
  document.getElementById('paypalPrice_secure').value = price;
  var email = getCookie('email');
  document.getElementById('emailOrderNumber').value = email + "," + Date.now().toString();
  setCookie('price', 0, 0);
}

/*function openPayment() {
  var newWin = window.open('../payfororder/index.html','newwindow', 'width=300px, height=500px');
  return newWin;
}*/

/*
function colectOrderData() {
  alert("called the function!")
  var data = [["name1", "classroom1", "order"], ["name2", "classroom2", "anotherorder"]];
  var csvContent = "data:text/csv;charset=utf-8,";
  data.forEach(function(infoArray, index){

    dataString = infoArray.join(",");
    csvContent += index < data.length ? dataString+ "\n" : dataString;

  }); 

/*$(document).on("keypress", 'form', function (e) {
  var code = e.keyCode || e.which;
  if (code == 13) {
    e.preventDefault();
    return false;
  }
})
*/
