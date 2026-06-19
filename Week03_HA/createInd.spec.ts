import test from "@playwright/test"

test("Create Individuals", async({page})=>{

    //Login to the page
    await page.goto("https://login.salesforce.com")

    //Fill the user name
    await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com")

    //Fill the password
    await page.locator(`#password`).fill("TestLeaf@2025")

    //Click on the login button
    await page.locator(`#Login`).click()

    //Click on the toggle menu button from the left corner 
    await page.locator(`//div[@class='slds-icon-waffle']`).click()

    //Click View All and click Individuals from App Launcher 
    await page.getByRole('button', {name: "View All Applications"}).click()
    await page.getByText("Individuals").click()

    //Click on the Dropdown icon in the Individuals tab 
    await page.getByText("Individuals List").click()

    //Click on New Individual
    await page.getByText("New Individual").click()

    //Enter the Last Name
    await page.getByRole('textbox', {name: "Last Name"}).fill("DR")

    //Click save and verify Individuals Name 
    await page.locator(`(//span[@class=' label bBody'])[3]`).click()
    const Lname = await page.locator(`(//span[@class='slds-grid slds-grid_align-spread'])[2]`).innerText()
    console.log(Lname)







})