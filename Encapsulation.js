class BankAccount {
    #balance; // Private field

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance; // Cannot be accessed directly outside the class
    }

    // Public method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`${this.owner} deposited $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Public method to get balance (controlled access)
    getBalance() {
        return this.#balance;
    }
}

// Creating an account
const myAccount = new BankAccount("Alice", 1000);
myAccount.deposit(500); 
console.log(myAccount.getBalance()); 