# NarrowingConcept

A comprehensive demonstration of TypeScript type narrowing concepts with practical examples.

## What is Type Narrowing?

Type narrowing is a feature in TypeScript that allows you to refine types to more specific types within conditional blocks. This improves type safety and provides better type inference, helping catch potential errors at compile time rather than runtime.

## Examples Included

This repository demonstrates 8 different type narrowing techniques:

### 1. **typeof Type Guards**
Narrow types using JavaScript's `typeof` operator to distinguish between primitive types.

```typescript
function processValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase(); // value is string here
    } else {
        return value.toFixed(2); // value is number here
    }
}
```

### 2. **instanceof Type Guards**
Use `instanceof` to narrow types for class instances.

```typescript
function makeSound(animal: Dog | Cat): string {
    if (animal instanceof Dog) {
        return animal.bark(); // animal is Dog here
    } else {
        return animal.meow(); // animal is Cat here
    }
}
```

### 3. **Discriminated Unions**
Use a common property (discriminant) to narrow union types.

```typescript
type Shape = Circle | Square | Rectangle;

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "rectangle":
            return shape.width * shape.height;
    }
}
```

### 4. **Truthiness Narrowing**
Leverage JavaScript's truthiness to eliminate null/undefined values.

```typescript
function processNullableValue(value: string | null | undefined): string {
    if (value) {
        return value.toLowerCase(); // value is string here
    }
    return "default value";
}
```

### 5. **Equality Narrowing**
Use equality checks to narrow types based on shared values.

```typescript
function compareValues(x: string | number, y: string | boolean): void {
    if (x === y) {
        // Both must be strings for this to be true
        console.log(x.toUpperCase());
    }
}
```

### 6. **The 'in' Operator Narrowing**
Check for property existence to narrow object types.

```typescript
function move(animal: Bird | Fish): void {
    if ("fly" in animal) {
        animal.fly(); // animal is Bird here
    } else {
        animal.swim(); // animal is Fish here
    }
}
```

### 7. **User-Defined Type Guards**
Create custom type guard functions with type predicates.

```typescript
function isAdmin(user: UnknownUser): user is Admin {
    return (user as Admin).privileges !== undefined;
}

function processUser(user: UnknownUser): string {
    if (isAdmin(user)) {
        return `Admin ${user.name}`; // user is Admin here
    } else {
        return `Employee ${user.name}`; // user is Employee here
    }
}
```

### 8. **Control Flow Analysis**
TypeScript tracks type narrowing through control flow.

```typescript
function controlFlowExample(value: string | number | null): string {
    if (value === null) {
        return "null value";
    }
    // value is string | number here (null eliminated)
    
    if (typeof value === "string") {
        return value; // value is string here
    }
    // value must be number here
    return value.toString();
}
```

## Installation

```bash
npm install
```

## Usage

### Run the demo
```bash
npm run demo
```

### Build the project
```bash
npm run build
```

### Run tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm run test:watch
```

### Type check
```bash
npm run typecheck
```

## Benefits of Type Narrowing

- **Enhanced Type Safety**: Catch type-related errors at compile time
- **Better IntelliSense**: Improved auto-completion and IDE support
- **Self-Documenting Code**: Type narrowing makes code intent clearer
- **Reduced Runtime Errors**: Prevents common type-related bugs
- **Improved Maintainability**: Makes refactoring safer and easier

## Learn More

- [TypeScript Handbook: Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [TypeScript Type Guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards)
- [Discriminated Unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)

## License

ISC
