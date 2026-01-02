import {
    processValue,
    Dog,
    Cat,
    makeSound,
    calculateArea,
    processNullableValue,
    isAdmin,
    processUser,
    controlFlowExample,
    type Circle,
    type Square,
    type Rectangle,
    type Admin,
    type Employee
} from '../src/narrowing-examples';

describe('Type Narrowing Examples', () => {
    describe('typeof Type Guards', () => {
        test('processValue with string input', () => {
            expect(processValue("hello")).toBe("HELLO");
        });

        test('processValue with number input', () => {
            expect(processValue(42.567)).toBe("42.57");
        });
    });

    describe('instanceof Type Guards', () => {
        test('makeSound with Dog', () => {
            const dog = new Dog();
            expect(makeSound(dog)).toBe("Woof!");
        });

        test('makeSound with Cat', () => {
            const cat = new Cat();
            expect(makeSound(cat)).toBe("Meow!");
        });
    });

    describe('Discriminated Unions', () => {
        test('calculateArea for circle', () => {
            const circle: Circle = { kind: "circle", radius: 5 };
            expect(calculateArea(circle)).toBeCloseTo(78.54, 2);
        });

        test('calculateArea for square', () => {
            const square: Square = { kind: "square", sideLength: 4 };
            expect(calculateArea(square)).toBe(16);
        });

        test('calculateArea for rectangle', () => {
            const rectangle: Rectangle = { kind: "rectangle", width: 5, height: 3 };
            expect(calculateArea(rectangle)).toBe(15);
        });
    });

    describe('Truthiness Narrowing', () => {
        test('processNullableValue with string', () => {
            expect(processNullableValue("HELLO")).toBe("hello");
        });

        test('processNullableValue with null', () => {
            expect(processNullableValue(null)).toBe("default value");
        });

        test('processNullableValue with undefined', () => {
            expect(processNullableValue(undefined)).toBe("default value");
        });
    });

    describe('User-Defined Type Guards', () => {
        test('isAdmin identifies admin correctly', () => {
            const admin: Admin = { name: "Alice", privileges: ["read", "write"] };
            expect(isAdmin(admin)).toBe(true);
        });

        test('isAdmin identifies employee correctly', () => {
            const employee: Employee = { name: "Bob", startDate: new Date("2020-01-01") };
            expect(isAdmin(employee)).toBe(false);
        });

        test('processUser with admin', () => {
            const admin: Admin = { name: "Alice", privileges: ["read", "write"] };
            expect(processUser(admin)).toBe("Admin Alice has 2 privileges");
        });

        test('processUser with employee', () => {
            const employee: Employee = { name: "Bob", startDate: new Date("2020-01-01") };
            const result = processUser(employee);
            expect(result).toContain("Employee Bob started on");
        });
    });

    describe('Control Flow Analysis', () => {
        test('controlFlowExample with null', () => {
            expect(controlFlowExample(null)).toBe("null value");
        });

        test('controlFlowExample with string', () => {
            expect(controlFlowExample("test")).toBe("test");
        });

        test('controlFlowExample with number', () => {
            expect(controlFlowExample(42)).toBe("42");
        });
    });
});
