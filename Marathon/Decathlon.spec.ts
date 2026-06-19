import {test,expect} from "@playwright/test"

test("Decathlon login page", async({page})=>{

    //Navigate to https://www.decathlon.in/
    await page.goto("https://www.decathlon.in/")

    //Verify the user is navigated to the Decathlon home page
    await expect(page.getByLabel('Decathlon Home')).toBeVisible()

    //Click on the Search icon on the home page
    await page.getByRole("searchbox", {name: 'Search for 60+ sports and 6,000+ products'}).click()

    //Verify the search input field is enabled
    await page.keyboard.press('Enter')

    //Enter the product name as "shoes" in the search field
    await page.getByRole("searchbox", {name: 'Search for 60+ sports and 6,000+ products'}).fill("shoes")

    //Press Enter to search the product
    await page.keyboard.press('Enter')

    //Verify the page title is displayed as "Search | shoes"
    await expect(page).toHaveTitle("Search | shoes")

    //Click on the "Running" category filter from "Sport"
    await page.locator(`[data-test-id="title:Sport"]`).click()
    
    await page.locator(`[data-test-id=filter-item-sport_pratice_en-Running]`).click()

    //Click on the "Men" gender filter from "Gender"
    await page.locator(`[data-test-id="title:Gender"]`).click()

    await page.locator(`[data-test-id="filter-item-gender_id_en-MEN"]`).click()

    //Click on the shoe size filter "UK 10.5"
    await page.locator(`[data-test-id="title:Size"]`).click()
        
    await page.locator(`[data-test-id="filter-item-indian_size-9"]`).click()

    //Click on the Sort option
    await page.locator(`[data-test-id="sort-bar-desktop:chevron-down-icon"]`).click()

    //Select the sorting option "Price: High to Low"
    await page.locator(`(//span[@class='flex items-center gap-2'])[2]`).click()

    //Click on the first product from the displayed product list
    await page.locator(`//img[@data-test-id='product-card-product-image:img']`).click()

    //Select the shoe size "UK 10.5 - EU 45" on the product detail page
    await page.locator(`//span[@data-test-id='pdp-size-option-text-5']`).click()

    //lick on the "Add to Cart" button
    await page.locator(`//button[@data-test-id='pdp:add-to-cart-button']`).click()

    //Click on the Cart option and Fetch the total cart value
    await page.locator(`//span[@data-test-id='header-desktop:cart-count-badge']`).click()

    //Print the total cart amount in the console
    const totalPrice = await page.locator(`[data-test-id="cart:cart-checkout-total-cart-value"]`).innerText()

    console.log(totalPrice)






})