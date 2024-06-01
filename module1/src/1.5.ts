// Reference Type --> Object

const user: {
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    firstName: "Md",
    middleName: "Nure",
    lastName: "Alom"
}

// =================================================
const user0: {
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
} = {
    firstName: "Md Nure",
    lastName: "Alom"
}

// =================================================
const user1: {
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    firstName: "Md Nure",
    lastName: "Alom",
    isMarried: false
}

// =================================================
const user2: {
    company: 'Bekar Dot Com'; // type --> literal types (when a value act as a type {fixed value})
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    // company: "Bekar.Com", // not allowed
    company: "Bekar Dot Com",
    firstName: "Md Nure",
    lastName: "Alom",
    isMarried: false
}

// =================================================
const user3: {
    readonly company: string; // fixed a value using access modifier
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: "Bekar Dot Com",
    firstName: "Md Nure",
    lastName: "Alom",
    isMarried: false
}

// user3.company = 'Bekar.com'; // not allowed