let salesData = [];

function renderTable() {
    const tableBody = document.querySelector("#softwareTable tbody");
    tableBody.innerHTML = '';
    
    salesData.forEach((item, index) => {
        const row = document.createElement("tr");
        
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.license}</td>
            <td>${item.customer}</td>
            <td>
                <button class="btn btn-update" onclick="editSoftware(${index})">Edit</button>
                <button class="btn btn-delete" onclick="deleteSoftware(${index})">Delete</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById("softwareName").value;
    const price = document.getElementById("price").value;
    const license = document.getElementById("licenseType").value;
    const customer = document.getElementById("customerType").value;
    const editIndex = document.getElementById("editIndex").value;
    
    if (editIndex !== '') {
        salesData[editIndex] = { name, price, license, customer };
    } else {
        salesData.push({ name, price, license, customer });
    }

    document.getElementById("softwareForm").reset();
    document.getElementById("editIndex").value = '';
    document.getElementById("submitBtn").innerText = 'Add Software';
    
    renderTable();
}

function editSoftware(index) {
    const item = salesData[index];
    
    document.getElementById("softwareName").value = item.name;
    document.getElementById("price").value = item.price;
    document.getElementById("licenseType").value = item.license;
    document.getElementById("customerType").value = item.customer;
    document.getElementById("editIndex").value = index;
    document.getElementById("submitBtn").innerText = 'Update Software';
}

function deleteSoftware(index) {
    salesData.splice(index, 1);
    renderTable();
}

renderTable();

document.getElementById("softwareForm").addEventListener("submit", handleFormSubmit);