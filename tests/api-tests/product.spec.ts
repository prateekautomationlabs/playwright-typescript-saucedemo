import {test, expect} from '@playwright/test'
import { Test_DATA } from '../fixtures/testData'


test('get api test', async ({request}) =>{
    const response = await request.get(Test_DATA.API_URL);
    console.log(await response.json())
    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(200);
    const responseBody= await response.json();
    expect(Array.isArray(responseBody)).toBeTruthy();

    const firstObject =responseBody[0];
    expect(firstObject).toHaveProperty('id');
    expect(firstObject).toHaveProperty('name');
    expect(firstObject).toHaveProperty('data');


});


test('post api test', async ({request}) =>{
    const payload ={
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   }
};

const response = await request.post(Test_DATA.API_URL,{data:payload});

expect(response.status()).toBe(200);
expect(response.ok()).toBeTruthy();

const responseBody = await response.json();
console.log('Response', responseBody);

expect(responseBody).toHaveProperty('id');

expect(responseBody.name).toBe(payload.name);


});