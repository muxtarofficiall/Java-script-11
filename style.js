let entryNumber = 1;


function saveData() {
    const nameValue = document.getElementById('row2_input').value;
    const surnameValue = document.getElementById('row3_input').value;
    const ageValue = document.getElementById('row4_input').value;

    if (nameValue && surnameValue && ageValue) {
        const table = document.getElementById('dataTable');
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerHTML = entryNumber++;
        cell2.innerHTML = nameValue;
        cell3.innerHTML = surnameValue;
        cell4.innerHTML = ageValue;

       
        const editButton = document.createElement('button');
        editButton.textContent = 'Redakte Et';
        
        editButton.onclick = function () {
            editRow(row);
        };
        const cell5 = row.insertCell(4);
        cell5.appendChild(editButton);
    } else {
        alert('Məlumatları daxil edin.');
    }
}
function editRow(row) {
    const cells = row.getElementsByTagName('td');
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = cells[1].innerHTML;
    cells[1].innerHTML = '';
    cells[1].appendChild(nameInput);

    const surnameInput = document.createElement('input');
    surnameInput.type = 'text';
    surnameInput.value = cells[2].innerHTML;
    cells[2].innerHTML = '';
    cells[2].appendChild(surnameInput);

    const ageInput = document.createElement('input');
    ageInput.type = 'text';
    ageInput.value = cells[3].innerHTML;
    cells[3].innerHTML = '';
    cells[3].appendChild(ageInput);

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Yadda Saxla';
    saveButton.onclick = function () {
        saveChanges(row, nameInput.value, surnameInput.value, ageInput.value);
    };
    const operationCell = cells[4];
    operationCell.innerHTML = '';
    operationCell.appendChild(saveButton);
}

function saveChanges(row, newName, newSurname, newAge) {
    const cells = row.getElementsByTagName('td');
    cells[1].innerHTML = newName;
    cells[2].innerHTML = newSurname;
    cells[3].innerHTML = newAge;

    const editButton = document.createElement('button');
    editButton.textContent = 'Düzəliş et';
    editButton.onclick = function () {
        editRow(row);
    };
    const operationCell = cells[4];
    operationCell.innerHTML = '';
    operationCell.appendChild(editButton);
}


