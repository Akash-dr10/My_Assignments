import test from "@playwright/test"

test("Edit Individuals", async({page})=>{

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

    //Search the Individuals last name
    await page.getByRole('searchbox', {name: "Search this list..."}).click()
    await page.getByRole('searchbox', {name: "Search this list..."}).fill("DR")
    await page.keyboard.press('Enter')

    //Click on the Dropdown icon and Select Edit 
    await page.locator(`[data-cell-type="lstListViewRowLevelAction"]`).first().click()
    await page.locator(`(//a[@class='highlightButton'])[1]`).click()

    //Select Salutation as 'Mr' 
    await page.getByRole('button', {name: "--None--"}).click()
    await page.getByText("Mr.").click()

    //Now enter the first name 
    await page.locator(`//input[@class='firstName compoundBorderBottom form-element__row input']`).fill("Akash")

    //Click on Save and Verify the first name 
    await page.locator(`(//span[@class=' label bBody'])[3]`).click()
    const fname = await page.getByText("Akash DR").first().innerText()
    console.log(fname)



})