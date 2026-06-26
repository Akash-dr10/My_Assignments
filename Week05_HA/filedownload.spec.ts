//File Download 
// - Download file.json from the list of files 
// - Assert that the file has been downloaded in the required path 

import {test,expect} from "@playwright/test"
import path from 'path'
import fs from 'fs'

test("File Download", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/download")

    const[download] = await Promise.all([page.waitForEvent('download'), page.click('text=inputdata.json')])
    const filePath =path.join(__dirname,'../../data/',download.suggestedFilename())
    await download.saveAs(filePath)
    expect(fs.existsSync(filePath)).toBeTruthy()

})