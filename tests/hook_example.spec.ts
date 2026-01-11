import {test} from '@playwright/test'

test.beforeAll(async()=>{
    console.log("Setting up things before all tests...")
});

test.beforeEach(async()=>{
    console.log("..Running before each test...")
});

test('Test1',()=>{
    console.log('Running Test 1 ')
});

test('Test2 ',()=>{
    console.log('Running Test 2 ')
});

test('Test3 ',()=>{
    console.log('Running Test 3  ')
});

test('Test4 ',()=>{
    console.log('Running Test 4 to validate checkout page  ')
});

test('Test5 ',()=>{
    console.log('Running Test 5 to validate checkout page  ')
});

test.afterEach(async()=>{
    console.log("Test finished afterEach executed...")
});


test.afterAll(async()=>{
    console.log("Cleaning up after all tests...")
});