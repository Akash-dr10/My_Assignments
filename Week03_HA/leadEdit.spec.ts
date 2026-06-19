import {test, expect} from "@playwright/test"

test("Edit Lead", async({page})=>{

    //Navigate to the url http://leaftaps.com/opentaps/control/main
    await page.goto("http://leaftaps.com/opentaps/control/main")

    //Enter the username
    await page.locator(`(//input[@class='inputLogin'])[1]`).fill("democsr")

    //Enter the password
    await page.locator(`(//input[@class='inputLogin'])[2]`).fill("crmsfa")

    //Click the Login button
    await page.getByRole('button', {name: "Login"}).click()

    //Click CRM/SFA
    await page.getByRole('link', {name: "CRM/SFA"}).click()

    //Click Leads
    await page.getByRole('link', {name: "Leads"}).click()

    //Click Find Leads button
    await page.getByRole('link', {name: "Find Leads"}).click()

    //Click the first resulting Lead ID
    await page.getByRole('link', {name: "10126"}).click()

    // Click Edit
    await page.getByRole('link', {name: "Edit"}).click()

    //Edit Company name
    await page.locator(`(//input[@class='inputBox'])[1]`).fill("BB")

    //Edit Annual Revenue 
    await page.locator(`(//input[@class='inputBox'])[11]`).fill("123,456,789,000")

    //Edit Department
    await page.locator(`(//input[@class='inputBox'])[10]`).fill("SW Department")

    // Enter Description 
    await page.locator('#updateLeadForm_description').fill("Playwright Automation Testing")

    //Click Update 
    await page.locator(`(//input[@class='smallSubmit'])[1]`).click()

    //Verify the edited fields using appropriate assertions 
    //1.Auto retrying assertion

    await expect(page.locator(`#viewLead_companyName_sp`)).toContainText("BB (10126)")
    await expect(page.locator(`#viewLead_annualRevenue_sp`)).toContainText("$123,456,789,000")
    await expect(page.locator(`#viewLead_departmentName_sp`)).toContainText("SW Department")
    await expect(page.locator(`#viewLead_description_sp`)).toContainText("Playwright Automation Testing")

    //2.Non retrying assertions

    const companyName = await page.locator(`#viewLead_companyName_sp`).textContent()
    expect(companyName).toBe("BB (10126)")

    const annualRevenue = await page.locator(`#viewLead_annualRevenue_sp`).textContent()
    expect(annualRevenue).toBe("$123,456,789,000.00")

    const departmentName = await page.locator(`#viewLead_departmentName_sp`).textContent()
    expect(departmentName).toBe("SW Department")

    const description = await page.locator(`#viewLead_description_sp`).textContent()
    expect(description).toBe("Playwright Automation Testing")










})