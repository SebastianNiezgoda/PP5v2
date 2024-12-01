

const customersList:Customer[] = [];

function showCustomer() {
  let customerList: HTMLElement = getElementById("customer-list") as HTMLElement;
  customerList.innerHTML = '';
  customersList.forEach((customer) => {
    let ul = getElementById("customer-list") as HTMLElement;;
    ul.innerHTML += `<li class="list-group-item" onclick="showForm();loadClient(${customer.nip});">${customer.getCustomerInfo()}</li>`;
  });
  showList();
}

function showForm(){
  getElementById("client-form").style.display = "block";
  getElementById("client-list").style.display = "none";
}

function showList(){
  getElementById("client-form").style.display = "none";
  getElementById("client-list").style.display = "block";
}

function save(event: Event) {
  event.preventDefault();
  let newCustomer = new Customer();
  newCustomer.name = getElementById("company-name").value;
  newCustomer.nip = getElementById("nip").value;
  newCustomer.miasto = getElementById("miasto").value;
  newCustomer.ulica = getElementById("ulica").value;
  newCustomer.number = getElementById("number").value;
  newCustomer.numberM = getElementById("numberM").value;
  newCustomer.kod = getElementById("kod").value;
  newCustomer.uwagi = getElementById("uwagi").value;
  newCustomer.branza = getElementById("branza").value;
  newCustomer.check = getElementById("check").checked;

  console.log(newCustomer)
  let foundCustomer = null;
  for (let i = 0; i < customersList.length; i++) {
    if(customersList[i].nip == newCustomer.nip){
      foundCustomer = customersList[i];
      customersList[i] = newCustomer;
    }
  }
  if(foundCustomer == null){
    customersList.push(newCustomer);
  }
  console.log(customersList)
  showCustomer();
}

function loadClient(nip: string) {
  let newCustomer = customersList.find((customer) => customer.nip == nip);
  console.log(newCustomer)
  if(newCustomer == null){
    newCustomer = new Customer()
  }
getElementById("company-name").value;
getElementById("nip").value;
getElementById("miasto").value;
getElementById("ulica").value;
getElementById("number").value;
getElementById("numberM").value;
getElementById("kod").value;
getElementById("uwagi").value;
getElementById("branza").value;
 getElementById("check").checked;
}

function getElementById(elementName: string): HTMLInputElement{
  return document.getElementById(elementName) as HTMLInputElement;
}
