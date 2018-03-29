//Thankfully I did not have to write this Moble Page Transfering Code myself; it was on Stack Overflow!

function mobliePageTransfer (page) {
  var check = moblieCheck();
  if (check) {
    location.href = "mobile/"+page;
  }
}

function moblieCheck () {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
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

function addFormToPage(email_val) {
  var timeout = setTimeout(pageLoadError, 10000);
  var form_holder = document.getElementById('googleFormHolder');
  form_holder.innerHTML = ``;
  var loading_container_div = document.createElement('div');
  loading_container_div.className = 'loadContainer';
  var loading_div = document.createElement('div');
  loading_div.className = 'loader';
  loading_container_div.appendChild(loading_div);
  form_holder.appendChild(loading_container_div);
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
        for (x = 0; x < dates_data.values.length; x++) {
          var tr_x = document.createElement('tr');
          var date_td = document.createElement('td');
          var date_span = document.createElement('span');
          var date_input = document.createElement('input');
          date_input.type = 'hidden';
          date_input.name = `row${x}date`;
          date_input.value = dates_data.values[x][0];
          date_span.className = 'smallText';
          date_span.innerHTML = dates_data.values[x][0];
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
        submitAndContinueShopping.innerHTML = 'Submit and Continue Shopping';
        form.appendChild(submitAndContinueShopping);
        var submitAndPay = document.createElement('button');
        submitAndPay.className = 'pizzaFormButton';
        submitAndPay.value = 'submit';
        submitAndPay.setAttribute("onclick", `javascript: setCookie('payOnReturn, true, 0.5)`);
        submitAndPay.innerHTML = 'Submit and Pay';
        form.appendChild(submitAndPay);
        document.getElementById('googleFormHolder').innerHTML = ``;
        document.getElementById('googleFormHolder').appendChild(form);
        clearTimeout(timeout);
      });
    });
  });
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
  var collums = document.getElementsByClassName(`row0`).length - 2;
  var price = 0;
  for (i = 0; i < rows; i++) {
    for (j = 0; j < collums; j++) {
      var element = document.getElementById(`row${i}col${j}`);
      if (element.type == 'number') {
        price += Number(document.getElementById(`priceCol${j}`).innerHTML.replace('$','')) * Number(element.value);
      }
      if (element.type == 'checkbox') {
        if (element.checked) {
          price += Number(document.getElementById(`priceCol${j}`).innerHTML.replace('$',''));
        }
      }
    }
  }
  price = "$" + price.toFixed(2);
  return price;
}

function setTotalSoFar() {
  var price = computeTotalPrice();
  document.getElementById("currentTotal").innerHTML = price;
}

function findPrice() {
  var price = computeTotalPrice();
  prev_price_val = getCookie('price');
  if (prev_price_val !== undefined && prev_price_val !== null) {
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
  }
}

function loadForm(email_val) {
  /*if (getCookie('payOnReturn') !== undefined && getCookie('payOnReturn') !== null) {
    var newWin = openPayment();
    if(!newWin || newWin.closed || typeof newWin.closed=='undefined') {
      document.getElementById('googleFormHolder').value = '<p>To continue to PayPal, please click below:<br><a href="#" onclick="openPayment()">PayPal</a></p>';
    }
    //setCookie('price', 0, 0);
  }*/
  if (getCookie('payOnReturn') !== undefined && getCookie('payOnReturn') !== null) {
    window.open('payment.html','_top');
  }
  if (checkEmailInvoice(email_val)) {
    var checked = true;
  }
  else {
    setCookie("email", email_val, 5);
    setCookie("prevEmail", email_val, 360*24*60);
    addFormToPage(email_val);
    console.log('Email val: ' + email_val);

    //("<iframe style ='border: none;' width=50% height=500px src=https://docs.google.com/a/luebke.us/forms/d/e/1FAIpQLSeLN67cNKxAPe8c1pdC36rfhph1OKX-mAg0X6pdRt2wuXbLGA/viewform?emailAddress=" + email_val + "></iframe><div id='orderOrPay'><br><a>Your Current Total:</a><input type='text' id='price' class='priceBox' disabled='disabled' value='$0.00'><br><button type='button' onclick='location.reload()'>Place another order</button><button type='button' onclick='openPayment(price)'>Pay for your order now</button></div>");
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
