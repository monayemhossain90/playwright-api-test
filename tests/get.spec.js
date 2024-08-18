const { test, expect } = require('@playwright/test');

// api get request
test("API GET request", async({request})=>{
    const response = await request.get('https://jsonplaceholder.typicode.com/todos/1');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain("delectus")
    console.log(await response.json())

})