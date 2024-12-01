class Customer {
    constructor() {
        this.name = "";
        this.nip = "";
        this.city = "";
        this.street = "";
        this.number = "";
        this.numberM = "";
        this.kod = "";
        this.uwagi = "";
        this.branza = "";
        this.check = true;
    }
    getAddress() {
        return kod + " " + city + " ul." + street + " nr." + number + " nr.mieszkania " + numberM;
    }
    ;
    getData() {
        return `Nazwa:`;
    }
    ;
}
class Supplier extends Customer {
    constructor(account_number) {
        super();
        this.invocices = [];
        account_number = account_number;
    }
}
