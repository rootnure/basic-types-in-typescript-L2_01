{
    // Learning Function

    /*
     - Normal Function
     - Arrow Function
    */

    // define parameter type in normal function
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }
    // add(2, true); // boolean not allowed
    // add(2, '2');  // number as string not allowed
    add(2, 5);

    // define both parameter and return type in normal function
    function addTwoNumbers(num1: number, num2: number): number {
        return num1 + num2;
    }
    addTwoNumbers(22, 5);

    // Arrow function
    const addArrow = (num1: number, num2: number): number => num1 + num2;
    addArrow(5, 7);

    // Default Value
    const addArrowToo = (num1: number, num2: number = 55): number => num1 + num2;
    addArrowToo(5);


    // function inside object --> method

    const poorUser = {
        name: "Nur",
        balance: 0,
        addBalance(balance: number): number { // type declare for method with return type
            return this.balance + balance;
        }
    }

    const poorUser2 = {
        name: "Nur",
        balance: 0,
        addBalance(balance: number): string { // type declare for method with proper return type
            return `My new balance is ${this.balance + balance}`;
        },
    }

    // type define for array method
    const arr: number[] = [1, 4, 10];
    const newArr: number[] = arr.map((element: number): number => element * element);
}