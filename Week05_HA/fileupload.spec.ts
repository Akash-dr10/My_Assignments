//File Upload 
// - Upload a document without clicking the Upload button on the page 
// - Upload an image inside the red square area 
// - Assert that the file has been uploaded 

import {test,expect} from "@playwright/test"
import path from 'path'

test("File Upload", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")

    const[upload] = await Promise.all([page.waitForEvent('filechooser'), page.locator(`#drag-drop-upload`).click()])
    await upload.setFiles(path.join(__dirname,'../../data/03_Fibonacci Series-TypeScript.pdf'))
    await expect(page.locator(`(//div[@class='dz-filename']/span)[1]`)).toHaveText(/03_Fibonacci Series-TypeScript.pdf.*/)  
})