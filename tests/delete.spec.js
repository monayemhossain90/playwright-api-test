const { test, expect } = require('@playwright/test');

test("delete api test",async({request})=>{
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1')
    expect(response.status()).toBe(200)

})