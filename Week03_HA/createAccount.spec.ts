import {test, expect} from "@playwright/test"

test("Create Account", async({page})=>{

    //Navigate to the url https://login.salesforce.com/ 
    await page.goto("https://login.salesforce.com/")

    //Enter username using getByLabel 
    await page.getByLabel('Username').fill("dilipkumar.rajendran@testleaf.com")

    //Enter password using getByLabel 
    await page.getByLabel('Password').fill("TestLeaf@2025")

    // Click Login 
    await page.getByRole('button', {name: "Log In"}).click()

    //Verify the title and url of the page using appropriate assertions 
    await expect(page).toHaveTitle("Home | Salesforce")

    const verifyURL = await page.url()

    if(verifyURL.endsWith("home"))
    {
        console.log("Successfully logged in to the page")
    } 

    //Click App Launcher using the class locator
    await page.locator(`//button[@class='slds-button slds-context-bar__button slds-icon-waffle_container slds-show']`).click()

    //Click View All using getByText 
    await page.getByText('View All', {exact: true}).nth(2).click()

    //Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder 
    await page.getByPlaceholder("Search apps or items...",{exact: true}).fill("service")

    //Click Service using index based XPath 
    await page.locator(`(//p[@class='al-app-tile-description'])[1]`).click()

    //Click Accounts using attribute based CSS selector 
    //await page.locator(`(//span[@class='slds-truncate'])[6]`).click()
    await page.locator(".slds-truncate").nth(6).click()

    // Click New using getByRole
    await page.getByRole('button', {name: "New"}).click()

    //Enter Account name using attribute based CSS selector
    await page.locator(".slds-input").nth(2).fill("Akash")

    // Click Save button using XPath 
    await page.locator(`(//button[@class='slds-button slds-button_brand'])[2]`).click()

    //Verify the toast message displayed 
    const toast = page.locator('.toastMessage');
    await expect(toast).toBeVisible();
    console.log('Message:', await toast.textContent()); 
})