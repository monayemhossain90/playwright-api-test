const { test, expect } = require('@playwright/test');

test("patch api test",async({request})=>{
    const response = await request.patch('https://jsonplaceholder.typicode.com/posts/1',{

        data:{
            title: 'Title by monayem',
        }
    })

    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain("title");
    console.log(await response.json())
})