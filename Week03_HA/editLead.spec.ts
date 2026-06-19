import test from "@playwright/test"

test("Edit Lead", async({page})=>{

    //Launch the browser
    await page.goto("http://leaftaps.com/opentaps/control/main")

    //Enter the username
    await page.locator(`(//input[@class='inputLogin'])[1]`).fill("democsr")

    //Enter the password
    await page.locator(`(//input[@class='inputLogin'])[2]`).fill("crmsfa")

    //Click Login
    await page.getByRole('button', {name: "Login"}).click()

    //Click CRM/SFA link
    await page.getByRole('link', {name: "CRM/SFA"}).click()

    //Click Leads link
    await page.getByRole('link', {name: "Leads"}).click()

    // Click on Create Lead 
    await page.getByRole('link', {name: "Create Lead"}).click()

    //Enter company name 
    await page.locator(`(//input[@class='inputBox'])[1]`).fill("BBES")

    //Enter first name 
    await page.locator(`(//input[@class='inputBox'])[3]`).fill("Akash")

    //Enter last name
    await page.locator(`(//input[@class='inputBox'])[4]`).fill("DR")

    //Click on Create Lead button
    await page.locator(`//input[@class='smallSubmit']`).click()

    //Click Edit
    await page.getByRole('link', {name: "Edit"}).click()

    //Change the company name
    await page.locator(`(//input[@class='inputBox'])[1]`).fill("Bluebinaries")

    //Click Update
    await page.locator(`(//input[@class='smallSubmit'])[1]`).click()











})