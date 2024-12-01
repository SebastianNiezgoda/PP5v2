
    let customersList = []; // Tablica przechowująca klientów

    function resetForm() {
        document.getElementById('client-form').reset();
        document.getElementById("inputCheck").checked = false;
        document.getElementById("editIndex").value = ""; // Reset ukrytego pola
    }

    function save(event) {
        event.preventDefault();
    
        // Pobieranie danych z formularza
        const newCustomer = {
            name: document.getElementById("inputName").value,
            nip: document.getElementById("inputNIP").value,
            miasto: document.getElementById("inputMiasto").value,
            ulica: document.getElementById("inputUlica").value,
            number: document.getElementById("inputNumber").value,
            numberM: document.getElementById("inputNumberM").value || null,
            kod: document.getElementById("inputKod").value,
            uwagi: document.getElementById("inputUwagi").value || null,
            branza: document.getElementById("inputBranza").value,
            check: document.getElementById("inputCheck").checked
        };
    
        const editIndex = document.getElementById("editIndex").value;
    
        if (editIndex) {
            // Aktualizacja istniejącego klienta
            customersList[editIndex] = newCustomer;
        } else {
            // Dodanie nowego klienta
            customersList.push(newCustomer);
        }
    
        // Resetowanie formularza i wyświetlenie listy klientów
        resetForm();
        showCustomer();
    }
    

    function showCustomer() {
        const ul = document.getElementById("customer-list");
        ul.innerHTML = ''; // Czyszczenie listy przed dodaniem klientów
    
        customersList.forEach((customer, index) => {
            ul.innerHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <strong>Nazwa:</strong> ${customer.name}, <strong>NIP:</strong> ${customer.nip}, <strong>Miasto:</strong> ${customer.miasto}
                    </div>
                    <div>
                        <button onclick="editClient(${index})" class="btn btn-sm btn-secondary mx-1">Edytuj</button>
                        <button onclick="deleteClient(${index})" class="btn btn-sm btn-danger mx-1">Usuń</button>
                    </div>
                </li>
            `;
        });
    
        showList();
    }
    

    function editClient(index) {
        const client = customersList[index];
    
        // Wypełnianie formularza danymi klienta
        document.getElementById("inputName").value = client.name;
        document.getElementById("inputNIP").value = client.nip;
        document.getElementById("inputMiasto").value = client.miasto;
        document.getElementById("inputUlica").value = client.ulica;
        document.getElementById("inputNumber").value = client.number;
        document.getElementById("inputNumberM").value = client.numberM || '';
        document.getElementById("inputKod").value = client.kod;
        document.getElementById("inputUwagi").value = client.uwagi || '';
        document.getElementById("inputBranza").value = client.branza;
        document.getElementById("inputCheck").checked = client.check;
    
        // Zapamiętanie indeksu edytowanego klienta
        document.getElementById("editIndex").value = index;
    
        // Wyświetlenie formularza
        showForm();
    }
    

    function deleteClient(index) {
        customersList.splice(index, 1); // Usunięcie klienta
        showCustomer(); // Odświeżenie listy
    }

    function showList() {
        document.getElementById('formSection').style.display = 'none';
        document.getElementById('client-list').style.display = 'block';
    }

    function showForm() {
        document.getElementById('formSection').style.display = 'block';
        document.getElementById('client-list').style.display = 'none';
    }

    function fillForm() {
        const testCustomer = {
            name: "Testowa Firma",
            nip: "1234567890",
            miasto: "Warszawa",
            ulica: "Testowa",
            number: "10",
            numberM: "5",
            kod: "00-001",
            uwagi: "Przykładowe uwagi",
            branza: "Informatyka",
            check: true
        };
    
        // Wypełnianie formularza
        document.getElementById("inputName").value = testCustomer.name;
        document.getElementById("inputNIP").value = testCustomer.nip;
        document.getElementById("inputMiasto").value = testCustomer.miasto;
        document.getElementById("inputUlica").value = testCustomer.ulica;
        document.getElementById("inputNumber").value = testCustomer.number;
        document.getElementById("inputNumberM").value = testCustomer.numberM;
        document.getElementById("inputKod").value = testCustomer.kod;
        document.getElementById("inputUwagi").value = testCustomer.uwagi;
        document.getElementById("inputBranza").value = testCustomer.branza;
        document.getElementById("inputCheck").checked = testCustomer.check;
    
        // Blokowanie pól formularza
        //document.querySelectorAll("#client-form input, #client-form textarea, #client-form select").forEach(input => {
           // input.disabled = true;
        //});
    }