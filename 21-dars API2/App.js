let selectRow = null;

function onforsubmit(e) {
    e.preventDefault();
    var formData = readFormData();
    if (selectRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    var formData = {};
    formData['productcode'] = document.getElementById("Productcode").value;
    formData['productname'] = document.getElementById("Productname").value;
    formData['quenty'] = document.getElementById("Quenty").value;
    formData['perPrice'] = document.getElementById("Price").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("starList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);
    
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productcode;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productname;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.quenty;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.perPrice;

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `
        <button onclick="onEdit(this)">Edit</button>
        <button onclick="onDelete(this)">Delete</button>
    `;
}

function onEdit(td) {
    selectRow = td.parentElement.parentElement;
    document.getElementById("Productcode").value = selectRow.cells[0].innerHTML;
    document.getElementById("Productname").value = selectRow.cells[1].innerHTML;
    document.getElementById("Quenty").value = selectRow.cells[2].innerHTML;
    document.getElementById("Price").value = selectRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectRow.cells[0].innerHTML = formData.productcode;
    selectRow.cells[1].innerHTML = formData.productname;
    selectRow.cells[2].innerHTML = formData.quenty;
    selectRow.cells[3].innerHTML = formData.perPrice;
    selectRow = null;
}

function onDelete(td) {
    if (confirm("Do you want to delete this item")) {
        row = td.parentElement.parentElement;
        document.getElementById("starList").deleteRow(row.rowIndex);
    }
}

function resetForm() {
    document.getElementById("Productcode").value = "";
    document.getElementById("Productname").value = "";
    document.getElementById("Quenty").value = "";
    document.getElementById("Price").value = "";
    selectRow = null;
}