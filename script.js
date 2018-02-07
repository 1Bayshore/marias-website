var PIZZA_FORM_CODE = `
<form id="PizzaOrder" onsubmit="findPrice(5)" method="POST" action="https://script.google.com/a/luebke.us/macros/s/AKfycbx5wU3Bu4XLHMUbxArP5IVxIdco7XPKpqn6rgaJDjYUW1s25w/exec">
  <a class="larga">Student's Name</a>
  <br>
  <input type="text" name="studentsName">
  <br>
  <a class="larga">Classroom</a>
<br>
  <input type="radio" onclick="updateClassroomValue()" id="cls1" name="classMenu" value="CH1 (Turtle)"><a>CH1 (Turtle)</a><br>
  <input type="radio" onclick="updateClassroomValue()" id="cls2" name="classMenu" value="CH2 (Dolphin)"><a>CH2 (Dolphin)</a><br>
  <input type="radio" onclick="updateClassroomValue()" id="cls3" name="classMenu" value="CH3 (Hummingbird)"><a>CH3 (Hummingbird)</a><br>
  <input type="radio" onclick="updateClassroomValue()" id="cls4" name="classMenu" value="CH4 (Cardinal)"><a>CH4 (Cardinal)</a><br>
  <input type="radio" onclick="updateClassroomValue()" id="cls5" name="classMenu" value="LE1"><a>LE1</a><br>
  <input type="radio" onclick="updateClassroomValue()" id="cls6" name="classMenu" value="LE2"><a>LE2</a><br>
  <input type="radio" onclick="updateClassroomValue()" id="cls7" name="classMenu" value="UE"><a>UE</a><br>
  <input type="radio" onclick="updateClassroomValue()" id="cls8" name="classMenu" value="MS"><a>MS</a><br>
  <input type="hidden" id="classroom" name="classroom">
  <a class="larga">Pizza Lunch Order</a>
  <br>
  <!--<button onclick="repeatOrder(total # of weeks)">
Apply first week order to all other weeks
</button>-->
  <button type="button" onclick="repeatOrder(5)">
    Apply first week order to all other weeks
  </button>
  <table class="lunchOrderTable" border="1">
    <tr>
      <td>
        <a>Date</a>
      </td>
      <td>
        <a>Clear Order</a>
      </td>
      <td>
        <a>Slices Cheese Pizza</a>
      </td>
      <td>
        <a>Slices Pepperoni Pizza</a>
      </td>
      <td>
        <a>Slices Pesto Pizza</a>
      </td>
      <td>
        <a>Pirate's Booty</a>
      </td>
      <td>
        <a>Veggie Straws</a>
      </td>
      <td>
        <a>Animal Crackers</a>
      </td>
      <td>
        <a>Applesauce</a>
      </td>
      <td>
        <a>Fruit Leather</a>
      </td>
      <td>
        <a>Lemonade</a>
      </td>
      <td>
        <a>Apple Juice</a>
      </td>
      <td>
        <a>Garlic Knot</a>
      </td>
    </tr>
    <tr>
      <td>
        <a>Price:</a>
      </td>
      <td><a>$</a></td>
      <td>
        <a id="cheesePrice">2.00</a>
        <input name="cheesePrice" type="hidden" value="2.00">
      </td>
      <td>
        <a id="pepperoniPrice">2.50</a>
        <input name="pepperoniPrice" type="hidden" value="2.50">
      </td>
      <td>
        <a id="pestoPrice">2.50</a>
        <input name="pestoPrice" type="hidden" value="2.50">
      </td>
      <td>
        <a id="piratesBootyPrice">1.50</a>
        <input name="piratesBootyPrice" type="hidden" value="1.50">
      </td>
      <td>
        <a id="veggieStrawsPrice">1.00</a>
        <input name="veggieStrawsPrice" type="hidden" value="1.00">
      </td>
      <td>
        <a id="animalCrackersPrice">1.50</a>
        <input name="animalCrackersPrice" type="hidden" value="1.50">
      </td>
      <td>
        <a id="applesaucePrice">1.50</a>
        <input name="applesaucePrice" type="hidden" value="1.50">
      </td>
      <td>
        <a id="fruitLeatherPrice">1.00</a>
        <input name="fruitLeatherPrice" type="hidden" value="1.00">
      </td>
      <td>
        <a id="lemonadePrice">1.50</a>
        <input name="lemonadePrice" type="hidden" value="1.50">
      </td>
      <td>
        <a id="appleJuicePrice">1.50</a>
        <input name="appleJuicePrice" type="hidden" value="1.50">
      </td>
      <td>
        <a id="garlicKnotPrice">2.00</a>
        <input name="garlicKnotPrice" type="hidden" value="2.00">
      </td>
    </tr>
    <tr>
      <td>
        <a>09/07</a>
        <input name="row1date" type="hidden" value="09/07">
      </td>
      <!-- add disabled="disabled" to disable checkboxes, buttons and inputs on Thursday so parents can only order for dates past that Friday.-->
      <td>
        <button type="button" onclick="clearRow(1);">
          Clear
        </button>
      </td>
      <td>
        <a>Slices Cheese:</a>
        <input type="number" value="0" name="row1A">
      </td>
      <td>
        <a>Slices Pepperoni:</a>
        <input type="number" value="0" name="row1B">
      </td>
      <td>
        <a>Slices Pesto:</a>
        <input type="number" value="0" name="row1C">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row1checkA">
      </td>
      <td>
      <input type="checkbox" class="lCheck" name="row1checkB">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row1checkC">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row1checkD">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row1checkE">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row1checkF">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row1checkG">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row1checkH">
      </td>
    </tr>
    <tr>
      <td>
        <a>09/14</a>
        <input type="hidden" value="09/14" name="row2date">
      </td>
      <td>
        <button type="button" onclick="clearRow(2)">
          Clear
        </button>
      </td>
      <td>
        <a>Slices Cheese:</a>
        <input type="number" value="0" name="row2A">
      </td>
      <td>
        <a>Slices Pepperoni:</a>
        <input type="number" value="0" name="row2B">
      </td>
      <td>
        <a>Slices Pesto:</a>
        <input type="number" value="0" name="row2C">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row2checkA">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row2checkB">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row2checkC">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row2checkD">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row2checkE">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row2checkF">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row2checkG">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row2checkH">
      </td>
    </tr>
    <tr>
      <td>
        <a>09/21</a>
        <input type="hidden" name="row3date" value="09/21">
      </td>
      <td>
        <button type="button" onclick="clearRow(3)">
          Clear
        </button>
      </td>
      <td>
        <a>Slices Cheese:</a>
        <input type="number" value="0" name="row3A">
      </td>
      <td>
        <a>Slices Pepperoni:</a>
        <input type="number" value="0" name="row3B">
      </td>
      <td>
        <a>Slices Pesto:</a>
        <input type="number" value="0" name="row3C">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row3checkA">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row3checkB">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row3checkC">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row3checkD">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row3checkE">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row3checkF">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row3checkG">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row3checkH">
      </td>
    </tr>
    <tr>
      <td>
        <a>09/28</a>
        <input type="hidden" name="row4date" value="09/28">
      </td>
      <td>
        <button type="button" onclick="clearRow(4)">
          Clear
        </button>
      </td>
      <td>
        <a>Slices Cheese:</a>
        <input type="number" value="0" name="row4A">
      </td>
      <td>
        <a>Slices Pepperoni:</a>
        <input type="number" value="0" name="row4B">
      </td>
      <td>
        <a>Slices Pesto:</a>
        <input type="number" value="0" name="row4C">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row4checkA">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row4checkB">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row4checkC">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row4checkD">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row4checkE">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row4checkF">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row4checkG">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row4checkH">
      </td>
    </tr>
    <tr>
      <td>
        <a>10/05</a>
        <input type="hidden" value="10/05" name="row5date">
      </td>
      <td>
        <button type="button" onclick="clearRow(5)">
          Clear
        </button>
      </td>
      <td>
        <a>Slices Cheese:</a>
        <input type="number" value="0" name="row5A">
      </td>
      <td>
        <a>Slices Pepperoni:</a>
        <input type="number" value="0" name="row5B">
      </td>
      <td>
        <a>Slices Pesto:</a>
        <input type="number" value="0" name="row5C">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row5checkA">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row5checkB">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row5checkC">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row5checkD">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row5checkE">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row5checkF">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row5checkG">
      </td>
      <td>
        <input type="checkbox" class="lCheck" name="row5checkH">
      </td>
    </tr>
  </table>
  <input type="hidden" id="emailInput" name="email">
  <a>Please <b>double-check</b> your order before submiting it!</a>
  <br>
  <button class="pizzaFormButton" value="submit">
    Submit and Continue Shopping
  </button>
  <button class="pizzaFormButton" value="submit" onclick="setCookie('payOnReturn', true, 0.5)">
    Submit and Pay
  </button>
  <br>
</form>
<a>Your Current Total:</a>
<br>
<form name="priceForm">
  <input type="text" name="pizzaPriceBox" disabled="disabled" class="priceBox" id="pizzaPriceBox"></input>
</form>
`

//Thankfully I did not have to write this Moble Page Transfering Code myself; it was on Stack Overflow!

function mobliePageTransfer (page) {
  var check = moblieCheck()
  if (check) {
    location.href = eval("mobile/"+page);
  }
}

function moblieCheck () {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function updateClassroomValue () {
  var classroom = '';
  if (document.getElementById('cls1').checked) {
    classroom = 'CH1 (Turtles)';
  }
  if (document.getElementById('cls2').checked) {
    classroom = 'CH2 (Dolphin)';
  }
  if (document.getElementById('cls3').checked) {
    classroom = 'CH3 (Hummingbird)';
  }
  if (document.getElementById('cls4').checked) {
    classroom = 'CH4 (Cardinal)';
  }
  if (document.getElementById('cls5').checked) {
    classroom = 'LE1';
  }
  if (document.getElementById('cls6').checked) {
    classroom = 'LE2';
  }
  if (document.getElementById('cls7').checked) {
    classroom = 'UE';
  }
  if (document.getElementById('cls8').checked) {
    classroom = 'MS';
  }
  document.getElementById('classroom').value = classroom;
}

function clearRow(row)  {
  eval("PizzaOrder.row" + row + "A.value = 0;")
  eval("PizzaOrder.row" + row + "B.value = 0;")
  eval("PizzaOrder.row" + row + "C.value = 0;")
  eval("PizzaOrder.row" + row + "checkA.checked = false;")
  eval("PizzaOrder.row" + row + "checkB.checked = false;")
  eval("PizzaOrder.row" + row + "checkC.checked = false;")
  eval("PizzaOrder.row" + row + "checkD.checked = false;")
  eval("PizzaOrder.row" + row + "checkE.checked = false;")
  eval("PizzaOrder.row" + row + "checkF.checked = false;")
  eval("PizzaOrder.row" + row + "checkG.checked = false;")
  eval("PizzaOrder.row" + row + "checkH.checked = false;")

}

function repeatOrder(rows)  {
  var updateRows = rows+1;
  for (i = 1; i < updateRows; i++) { 
         eval("PizzaOrder.row" + i + "A.value = PizzaOrder.row1A.value");
         eval("PizzaOrder.row" + i + "B.value = PizzaOrder.row1B.value");
         eval("PizzaOrder.row" + i + "C.value = PizzaOrder.row1C.value");
         eval("PizzaOrder.row" + i + "checkA.checked = PizzaOrder.row1checkA.checked");
         eval("PizzaOrder.row" + i + "checkB.checked = PizzaOrder.row1checkB.checked");
         eval("PizzaOrder.row" + i + "checkC.checked = PizzaOrder.row1checkC.checked");
         eval("PizzaOrder.row" + i + "checkD.checked = PizzaOrder.row1checkD.checked");
         eval("PizzaOrder.row" + i + "checkE.checked = PizzaOrder.row1checkE.checked");
         eval("PizzaOrder.row" + i + "checkF.checked = PizzaOrder.row1checkF.checked");
         eval("PizzaOrder.row" + i + "checkG.checked = PizzaOrder.row1checkG.checked");
         eval("PizzaOrder.row" + i + "checkH.checked = PizzaOrder.row1checkH.checked");
    }
}

function findPrice(rows)  {
//  var keepGoing = confirm("Submiting your order for " + PizzaOrder.studentsName.value + ".");
//  if (keepGoing === false) {
//    window.open('localhost:8000/order/pizza.html', '_top')
//    return
//  }
  var loopRows = rows + 1;
  var price = 0;
  for (i = 1; i < loopRows; i++) {
    eval("price = price + (Number(PizzaOrder.row" + i + "A.value) * Number(PizzaOrder.cheesePrice.value))");
    eval("price = price + (Number(PizzaOrder.row" + i + "B.value) * Number(PizzaOrder.pepperoniPrice.value))");
    eval("price = price + (Number(PizzaOrder.row" + i + "C.value) * Number(PizzaOrder.pestoPrice.value))");
    var checked = false
    eval("checked = PizzaOrder.row" + i + "checkA.checked");
    if (checked)  {
      price = price + Number(PizzaOrder.piratesBootyPrice.value);
    }
    eval("checked = PizzaOrder.row" + i + "checkB.checked");
    if (checked)  {
      price = price + Number(PizzaOrder.veggieStrawsPrice.value);
    }
    eval("checked = PizzaOrder.row" + i + "checkC.checked");
    if (checked)  {
      price = price + Number(PizzaOrder.animalCrackersPrice.value);
    }
    eval("checked = PizzaOrder.row" + i + "checkD.checked");
    if (checked)  {
      price = price + Number(PizzaOrder.applesaucePrice.value);
    }
    eval("checked = PizzaOrder.row" + i + "checkE.checked");
    if (checked)  {
      price = price + Number(PizzaOrder.fruitLeatherPrice.value);
    }
    eval("checked = PizzaOrder.row" + i + "checkF.checked");
    if (checked)  {
      price = price + Number(PizzaOrder.lemonadePrice.value);
    }
    eval("checked = PizzaOrder.row" + i + "checkG.checked");
    if (checked)  {
      price = price + Number(PizzaOrder.appleJuicePrice.value);
    }
    eval("checked = PizzaOrder.row" + i + "checkH.checked");
    if (checked)  {
      price = price + Number(PizzaOrder.garlicKnotPrice.value);
    }
  }
  price_val = getCookie('price')
  if (price_val !== undefined && price_val !== null) {
    var oldPrice = Number(price_val);
  }
  else {
    var oldPrice = 0.0;
  }
  var newPrice = Number(price);
  setCookie("price", newPrice+oldPrice, 5)
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
  if (getCookie('payOnReturn') !== undefined && getCookie('payOnReturn') !== null) {
    window.open('../payfororder/index.html','newwindow', 'width=300px, height=500px');
  }
  if (checkEmailInvoice(email_val)) {
    var checked = true;
  }
  else {
    setCookie("email", email_val, 5);
    setCookie("prevEmail", email_val, 360*24*60);
    document.getElementById("googleFormHolder").innerHTML = PIZZA_FORM_CODE;
    console.log('Email val: ' + email_val);
    document.getElementById('emailInput').value = email_val;

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

function loadFromCookies() {
  var price = getCookie('price');
  document.getElementById('pizzaPriceBox').value = '$' + price;
  document.getElementById('paypalPrice_secure').value = price;
  var email = getCookie('email');
  document.getElementById('emailOrderNumber').value = email + "," + Date.now().toString();
}

function openPayment(price) {
  window.open('../payfororder/index.html','newwindow');
}

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
