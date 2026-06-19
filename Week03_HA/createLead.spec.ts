import test from "@playwright/test"

test("Create Lead", async({page})=>{

    //Login to the page
    await page.goto("https://login.salesforce.com")

    //Fill the user name
    await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com")

    //Fill the password
    await page.locator(`#password`).fill("TestLeaf@2025")

    //Click on the login button
    await page.locator(`#Login`).click()

    //Click on toggle menu button from the left corner
    await page.locator(`//div[@class='slds-icon-waffle']`).click()

    //Click view All and click Sales from App Launcher
    await page.getByRole('button', {name: "View All Applications"}).click()
    await page.getByText("Manage your sales process with accounts, leads, opportunities, and more").click()

    // Click on Leads tab 
    await page.getByRole('link', {name:"Leads"}).click()

    // Click on New button
    await page.locator(`//div[@title='New']`).click()

    //Select Salutation dropdown
    await page.getByRole('combobox', {name: "Salutation"}).click()

    //Enter the Last Name 
    await page.getByPlaceholder("Last Name",{exact: true}).fill("DR")

    //Enter the Company Name 
    await page.getByRole('textbox', {name: "Company"}).fill("BB")

    //Click Save and Verify Leads name created
    await page.locator(`(//button[@class='slds-button slds-button_brand'])[3]`).click()
    const leadLname = await page.locator(`(//span[@class='slds-grid slds-grid_align-spread'])[2]`).innerText()
    console.log(leadLname)

})