#!/usr/bin/env node

/**
 * Demo script to showcase TypeScript type narrowing in action
 * Run with: npm run demo
 */

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
} from './narrowing-examples.js';

console.log('='.repeat(60));
console.log('TypeScript Type Narrowing Demonstration');
console.log('='.repeat(60));

console.log('\n1. typeof Type Guards:');
console.log('   processValue("hello"):', processValue("hello"));
console.log('   processValue(42.567):', processValue(42.567));

console.log('\n2. instanceof Type Guards:');
const dog = new Dog();
const cat = new Cat();
console.log('   makeSound(dog):', makeSound(dog));
console.log('   makeSound(cat):', makeSound(cat));

console.log('\n3. Discriminated Unions:');
const circle = { kind: "circle" as const, radius: 5 };
const square = { kind: "square" as const, sideLength: 4 };
const rectangle = { kind: "rectangle" as const, width: 5, height: 3 };
console.log('   Circle area (r=5):', calculateArea(circle).toFixed(2));
console.log('   Square area (side=4):', calculateArea(square));
console.log('   Rectangle area (5x3):', calculateArea(rectangle));

console.log('\n4. Truthiness Narrowing:');
console.log('   processNullableValue("HELLO"):', processNullableValue("HELLO"));
console.log('   processNullableValue(null):', processNullableValue(null));
console.log('   processNullableValue(undefined):', processNullableValue(undefined));

console.log('\n5. User-Defined Type Guards:');
const admin = { name: "Alice", privileges: ["read", "write", "delete"] };
const employee = { name: "Bob", startDate: new Date("2020-01-01") };
console.log('   isAdmin(admin):', isAdmin(admin));
console.log('   isAdmin(employee):', isAdmin(employee));
console.log('   processUser(admin):', processUser(admin));
console.log('   processUser(employee):', processUser(employee));

console.log('\n6. Control Flow Analysis:');
console.log('   controlFlowExample(null):', controlFlowExample(null));
console.log('   controlFlowExample("test"):', controlFlowExample("test"));
console.log('   controlFlowExample(42):', controlFlowExample(42));

console.log('\n' + '='.repeat(60));
console.log('All examples demonstrate how TypeScript narrows types');
console.log('within conditional blocks for better type safety!');
console.log('='.repeat(60) + '\n');
