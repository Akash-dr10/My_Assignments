import {test, expect} from "@playwright/test"

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

    // Fill the Salutation 
    await page.locator(`(//input[@class='inputBox'])[7]`).fill("Mr.")

    //Fill the Title 
    await page.locator(`(//input[@class='inputBox'])[9]`).fill("Quality Assurance")

    //Fill the Annual Revenue 
    await page.locator(`(//input[@class='inputBox'])[11]`).fill("123456")

    //Fill the Department 
    await page.locator(`(//input[@class='inputBox'])[10]`).fill("SW Testing")

    //Fill the Phone number 
    await page.locator(`(//input[@class='inputBox'])[17]`).fill("9876543210")

    //Click Create Lead button
    await page.locator(`//input[@class='smallSubmit']`).click()

    //Verify the company name, first name, last name and the status using auto retrying and non retrying assertions 

    //1. Auto retrying 
    await expect(page.locator('#viewLead_companyName_sp')).toContainText("BBES")  
    await expect(page.locator('#viewLead_firstName_sp')).toContainText("Akash")  
    await expect(page.locator('#viewLead_lastName_sp')).toContainText("DR")  

    //2. Non retrying assertion
    const companyName = await page.locator('#viewLead_companyName_sp').textContent()
    expect(companyName).toBe("BBES (15412)")

    const firstName = await page.locator('#viewLead_firstName_sp').textContent()
    expect(firstName).toBe("Akash")

    const lastName = await page.locator('#viewLead_lastName_sp').textContent()
    expect(lastName).toBe("DR")

})