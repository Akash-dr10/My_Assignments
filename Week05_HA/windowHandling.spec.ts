import {test,expect} from "@playwright/test"

test("Window Handling", async({page,context})=>{

    //Pre-condition
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com') 
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    await page.getByRole('button', {name: "Salesforce Help"}).click()

    //Click on the "Salesforce Help” button
    const[newPage] =await Promise.all([context.waitForEvent('page'),page.locator(`(//span[@class='itemLabel'])[1]`).click()])
    await newPage.waitForLoadState('domcontentloaded')
    
    //Click the ‘Confirm’ button on the page  
    await newPage.getByRole('button', {name:'Confirm'}).click()
   
    //Capture the title of the new window that opens 
    const title = await newPage.title()
    const url = newPage.url()

    //Assert the title and url of the page 
    await expect(newPage).toHaveTitle(title)
    await expect(newPage).toHaveURL(url)
    console.log("Title: "+ title)
    console.log("URL: "+ url)
})