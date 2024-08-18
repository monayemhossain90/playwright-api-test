const { test, expect } = require('@playwright/test');

test("Api post req", async({request})=>{

    const response = await request.post('https://jsonplaceholder.typicode.com/posts',
        {
            data:{
                title: 'monayem',
                body: 'Engr',
                userId: 1,

            }
        }
    );


    expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain("monayem")
    console.log(await response.json())
})