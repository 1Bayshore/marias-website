var titles = ["Text Input:text_input", "Paragraph Input:paragraph_input", "Number Input:number", "Choice:choice", "Dropdown Menu:dropdown", "Instructions:instructions", "Image:image", "Checkbox:checkbox", "Payment:payment", "Submit:submit", "Custom Widget:custom"];
var starting_id = 0;
var last_file = null;

function takeInput(text) {
    var result = window.prompt(text + ":");
    return result;
}

function getElementId() {
    starting_id += 1;
    return starting_id;
}

function offerElements() {
    var elementsAvalibleString = "";
    for (i = 0; i < titles.length; i++) {
        var element_title = titles[i].split(":")[0];
        var element_submit = titles[i].split(":")[1];
        elementsAvalibleString += "<button class='elementAddButton' onclick='addFormElement(`" + element_submit + "`)'>" + element_title + "</button>";
    }
    document.getElementsByClassName("elements")[0].innerHTML += elementsAvalibleString + '<br><br>';
}

function createFormElement(element) {
    if (element == 'text_input') {
        var name = takeInput('Name of Text Input');
        var htmlName = name.replace(' ', '_').replace("'", '').replace('"','');
        return `<span>${name}</span>
        <br>
        <input type='text' name='${htmlName}'>`;
    }
    if (element =='choice') {
        var option_name = takeInput('Name of Choice');
        var number_of_options = Number(takeInput('Number of Options'));
        var htmlName = option_name.replace(' ', '_').replace("'", '').replace('"','');
        var toReturn = `<input type='hidden' id="${htmlName}" name='${htmlName}'>
        <span>${option_name}</span>`
        for (i = 0; i < number_of_options; i++) {
            var value = takeInput('Option ' + i + ' Value');
            toReturn += `<br>
            <input type='radio' onclick='document.getElementById("${htmlName}").value = "${value}"' name='${htmlName}'>
            <span>${value}</span>`;
        };
        return toReturn;
    }
    if (element == 'checkbox') {
        var option_name = takeInput('Name of Checkbox');
        var htmlName = option_name.replace(' ', '_').replace("'", '').replace('"','');
        return `<input type='checkbox' id='${htmlName}' name='${htmlName}'>
        <span>${option_name}</span>`
    }
    if (element == 'submit') {
        var name = takeInput('Name of Submit Button');
        var form_action = takeInput('Url to POST data to');
        document.getElementsByClassName('formContents')[0].action = form_action;
        return `<button type='submit' class='submitButton'>${name}</button>`;
    }
    if (element == 'instructions') {
        var text = takeInput('Text of instructions');
        return `<span>${text}</span>`;
    }
    if (element == 'dropdown') {
        var option_name = takeInput('Name of Dropdown');
        var number_of_options = Number(takeInput('Number of Options'));
        var htmlName = option_name.replace(' ', '_').replace("'", '').replace('"','');
        var toReturn = `<input type='hidden' id='${htmlName}' name='${htmlName}'>
        <span>${option_name}</span>
        <br>
        <select>`
        for (i = 0; i < number_of_options; i++) {
            var value = takeInput('Option ' + i + ' Value');
            toReturn += `<option onclick='document.getElementById("${htmlName}").value = "${value}"'>${value}</option>`;
        };
        toReturn += `</select>`
        return toReturn;
    }
    if (element == 'custom') {
        var custom_code = '';
        while (true) {
            toAppend = takeInput('Enter your line of custom code here, or enter "q" to quit.');
            if (toAppend == 'q') {
                break;
            }
            custom_code += toAppend;
        }
        return custom_code;
    }
    if (element == 'image') {
        var imageURL = takeInput('Image URL');
        return `<img src='${imageURL}'></img>`;
    }
    if (element == 'number') {
        var name = takeInput('Name of Number Input');
        var htmlName = name.replace(' ', '_').replace("'", '').replace('"','');
        return `<span>${name}</span>
        <br>
        <input type='number' id='${htmlName}' name='${htmlName}'>`;
    }
    if (element == 'paragraph_input') {
        var name = takeInput('Name of paragraph input');
        var htmlName = name.replace(' ', '_').replace("'", '').replace('"','');
        return `<span>${name}</span>
        <br>
        <textarea name='${htmlName}'></textarea>`;
    }
    if (element == 'payment') {
        var fieldId = takeInput('Name of the form field that specifies the correct price (if number) or changes it when checked (checkbox)');
        var htmlFieldId = fieldId.replace(' ', '_').replace("'", '').replace('"','');
        var field = document.getElementById(htmlFieldId);
        var checkQuestion = (field.type == 'checkbox');
        var numberQuestion = (field.type == 'number');
        if (!checkQuestion && !numberQuestion) {
            return "Invalid choice."
        }
        if (checkQuestion == true) {
            var amountIfChecked = takeInput('What amount should the total go up if this is checked?');
            field.onchange = `updateTotal(amountIfChecked, '${HtmlFieldId}')`;
            var others = takeInput('Are there other fields that should change the total?');
            if (others == "yes") {
                while (true) {
                    var newFieldId = takeInput('Name of another form field that should change the total (checkbox only), or q to quit');
                    if (newFieldId == 'q') {
                        break;
                    }
                    var newFieldHtmlId = newFieldId.replace(' ', '_').replace("'", '').replace('"','');
                    var newField = document.getElementById(newFieldId);
                    if (newField.type == 'checkbox') {
                        var newAmountIfChecked = takeInput('What amount should the total go up if this is checked?');
                        newField.onchange = `updateTotal(newAmountIfChecked, '${newFieldHtmlId}')`;
                    }
                }
            }
        }
        else {
            field.onchange = `updateTotal('${htmlFieldId}')`;
        }
        return `<span>Your Total So Far:</span><span id='currentTotal'>0</span>`;
    }
}

function updateTotal(amount, positive) {
    var field = document.getElementById(amount);
    if (field == null) {
        if (document.getElementById(positive).checked) {
            var updatedAmount = Number(document.getElementById('total').innerHTML) + Number(amount);
            document.getElementById('total').innerHTML = updatedAmount;
            return;
        }
    }
    var updatedAmount = field.value;
    document.getElementById('total').innerHTML = updatedAmount;
}

function getFormEditButtons(elementId) {
    return `<br>
    <button type='button' class='formEditButton' onclick='editElement("${elementId}")'>Edit</button>
    <button type='button' class='formEditButton' onclick='deleteElement("${elementId}")'>Delete</button>
    <button type='button' class='formEditButton' onclick='moveUp("${elementId}")'>Move Up</button>
    <button type='button' class='formEditButton' onclick='moveDown("${elementId}")'>Move Down</button>`;
}

function editElement(elementId) {
    var element = document.getElementById(elementId);
    var elementType = element.className;
    var newContents = createFormElement(elementType);
    element.innerHTML = newContents + getFormEditButtons(elementId);
}

function deleteElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function swapSibling(node1, node2) {
    node1.parentNode.replaceChild(node1, node2);
    node1.parentNode.insertBefore(node2, node1); 
}

function moveUp(elementId) {
    var element = document.getElementById(elementId);
    var prev = element.previousElementSibling;
    swapSibling(prev, element);
}

function moveDown(elementId) {
    var element = document.getElementById(elementId);
    var next = element.nextElementSibling;
    swapSibling(element, next);
}

function addFormElement(element) {
    var id = getElementId();
    document.getElementsByClassName("formContents")[0].innerHTML += `<div class='${element}' id='${id}'>` + createFormElement(element) + getFormEditButtons(id);
}

function saveForm() {
    document.getElementsByClassName('elements')[0].parentNode.removeChild(document.getElementsByClassName('elements')[0]);
    var form_action = document.getElementsByClassName('formContents')[0].action;
    var form = `<form class="formContents" method="POST" action="${form_action}">` + document.getElementsByClassName("formContents")[0].innerHTML + `</form>`;
    if (last_file == null) {
        var filename = takeInput('Filename');
    }
    else {
        var filename = last_file;
    }
    if (!(filename.endsWith('.html'))) {
        filename += '.html';
    }
    download(form, filename, ".html");
    location.reload();
}

function loadForm() {
    upload();
}

function exportForm() {
    var form = document.getElementsByClassName("formContents")[0];
    var buttons = document.getElementsByClassName('formEditButton');
    var len = buttons.length;
    for (i = 0; i < len; i++) {
        buttons[0].parentNode.removeChild(buttons[0]);
    }
    document.getElementsByClassName('elements')[0].parentNode.removeChild(document.getElementsByClassName('elements')[0]);
    var filename = takeInput('Filename of the export');
    if (!(filename.endsWith('.html'))) {
        filename += '.html';
    }
    var title = takeInput('Title of the form');
    var formHtml = form.parentElement.innerHTML;
    var exportHtml = `
    <html>
        <head>
            <title>${title} | Maria's</title>
        </head>
        <body>
            <h2 class='title'>${title}</h2>
            ${formHtml}
        </body>
    </html>`;
    download(exportHtml, filename, ".html");
    location.reload();
}

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function upload(filepath) {
    document.getElementsByClassName('elements')[0].style = 'display: none';
    document.write(`<input type='file' id='fileToUpload'>`);
    document.getElementById('fileToUpload').onchange = function(e) {
        var formFile = document.getElementById('fileToUpload').files[0];
        var filereader = new FileReader();
        filereader.readAsText(formFile/*, "UTF-8"*/);
        filereader.onload = function(e) {
            var form = filereader.result;
            alert(form);
            document.head.innerHTML =`<title>Create an Html Form with Drag and Drop | Maria's</title>
            <script type="text/javascript" src="form-editor.js"></script>
            <link rel="stylesheet" type="text/css" href="style.css">`;
            document.body.innerHTML = `<div class="elements">
            <p>Click the buttons below to add elements to your form. When you have finished, press the "Export" button to export your form.</p>
            <button type="button" class="fileAppButton" onclick="saveForm()">Save</button>
            <button type="button" class="fileAppButton" onclick="loadForm()">Load</button>
            <button type="button" class="fileAppButton" onclick="exportForm()">Export</button>
            Elements:
            </div>
            ` + form;
            offerElements();        
        }
    }
}
