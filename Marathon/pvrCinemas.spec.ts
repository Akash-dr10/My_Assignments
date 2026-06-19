import test from "@playwright/test"

test("Book the Cinema", async({page})=>{

    // Navigate to https://www.pvrcinemas.com/
    await page.goto('https://www.pvrcinemas.com/')

    //Select the required city.
    await page.locator(`(//span[text()='Bengaluru'])[1]`).click()

    //Click on the Cinema option.
    await page.locator(`//span[text()='Select Movie']`).click()

    // Select any available cinema from the list
    await page.locator(`(//span[text()='BACKROOMS'])[3]`).click()

    //Select any available date (Today/Tomorrow/Upcoming).
    await page.locator(`//span[text()='Today']`).click()

    //Select any available movie from the movie list
    await page.locator(`(//li[@class='p-dropdown-item'])[4]`).click()

    //Select any available show time.
    await page.locator(`(//li[@class='p-dropdown-item'])[3]`).click()

    //Click on the Submit button.
    await page.locator(`(//span[text()='Book'])[4]`).click()

    //Accept the consent/cookie popup if displayed.
    await page.locator(`//button[text()='Accept']`).click()

    //Accept any additional confirmation popup if displayed.
    page.waitForTimeout(3000)
    await page.locator(`//button[text()='Accept']`).click()

    //Select any available seat from the seating layout.
    page.waitForTimeout(3000)
    await page.locator(`(//span[@class='seat-current-pvr'])[10]`).click()

    //Click on the Proceed button.
    await page.locator(`//button[text()='Proceed']`).click()

    page.waitForTimeout(3000)

    const seatConfirmation = await page.url()

    if(seatConfirmation.endsWith("food"))
    {
        console.log("Your booking is confirmed, enjoy your day!")
    }    

})