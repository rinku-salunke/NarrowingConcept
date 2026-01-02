/**
 * TypeScript Type Narrowing Examples
 * 
 * Type narrowing is the process of refining types to more specific types
 * within conditional blocks. This improves type safety and provides better
 * type inference.
 */

// Example 1: typeof Type Guards
export function processValue(value: string | number): string {
    if (typeof value === "string") {
        // TypeScript knows value is a string here
        return value.toUpperCase();
    } else {
        // TypeScript knows value is a number here
        return value.toFixed(2);
    }
}

// Example 2: instanceof Type Guards
export class Dog {
    bark(): string {
        return "Woof!";
    }
}

export class Cat {
    meow(): string {
        return "Meow!";
    }
}

export function makeSound(animal: Dog | Cat): string {
    if (animal instanceof Dog) {
        // TypeScript knows animal is a Dog here
        return animal.bark();
    } else {
        // TypeScript knows animal is a Cat here
        return animal.meow();
    }
}

// Example 3: Discriminated Unions
export interface Circle {
    kind: "circle";
    radius: number;
}

export interface Square {
    kind: "square";
    sideLength: number;
}

export interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

export type Shape = Circle | Square | Rectangle;

export function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            // TypeScript knows shape is a Circle here
            return Math.PI * shape.radius ** 2;
        case "square":
            // TypeScript knows shape is a Square here
            return shape.sideLength ** 2;
        case "rectangle":
            // TypeScript knows shape is a Rectangle here
            return shape.width * shape.height;
    }
}

// Example 4: Truthiness Narrowing
export function processNullableValue(value: string | null | undefined): string {
    if (value) {
        // TypeScript knows value is a string here (truthy)
        return value.toLowerCase();
    }
    return "default value";
}

// Example 5: Equality Narrowing
export function compareValues(x: string | number, y: string | boolean): void {
    if (x === y) {
        // TypeScript knows both x and y are strings here
        console.log(x.toUpperCase());
        console.log(y.toUpperCase());
    }
}

// Example 6: The 'in' Operator Narrowing
export interface Bird {
    fly(): void;
    layEggs(): void;
}

export interface Fish {
    swim(): void;
    layEggs(): void;
}

export function move(animal: Bird | Fish): void {
    if ("fly" in animal) {
        // TypeScript knows animal is a Bird here
        animal.fly();
    } else {
        // TypeScript knows animal is a Fish here
        animal.swim();
    }
}

// Example 7: User-Defined Type Guards
export interface Admin {
    name: string;
    privileges: string[];
}

export interface Employee {
    name: string;
    startDate: Date;
}

export type UnknownUser = Admin | Employee;

// Type predicate function
export function isAdmin(user: UnknownUser): user is Admin {
    return (user as Admin).privileges !== undefined;
}

export function processUser(user: UnknownUser): string {
    if (isAdmin(user)) {
        // TypeScript knows user is an Admin here
        return `Admin ${user.name} has ${user.privileges.length} privileges`;
    } else {
        // TypeScript knows user is an Employee here
        return `Employee ${user.name} started on ${user.startDate.toDateString()}`;
    }
}

// Example 8: Control Flow Analysis
export function controlFlowExample(value: string | number | null): string {
    if (value === null) {
        return "null value";
    }
    
    // TypeScript knows value is string | number here (null eliminated)
    if (typeof value === "string") {
        return value; // TypeScript knows it's a string
    }
    
    // TypeScript knows value must be a number here
    return value.toString();
}
