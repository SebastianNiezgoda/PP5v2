class Customer{
    constructor(){}

    name="";
    nip="";
    miasto="";
    ulica="";
    number="";
    numberM="";
    kod="";
    uwagi=""
    branza="";
    check=true;

    getAddress(){
        return this.kod+" "+this.miasto+" ul."+this.ulica+" nr."+this.number+" nr.mieszkania "+this.numberM
    };
    getCustomerInfo():string {
        return `${this.name} (${this.nip})`;
    }

    

}