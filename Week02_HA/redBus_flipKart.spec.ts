// Scenario-1

// import test, {chromium, firefox} from "@playwright/test"

// test("Red Bus", async()=>{

//     const browser = await chromium.launch({headless:false})
//     const context = await browser.newContext()
//     const page = await context.newPage()
//     await page.goto("https://www.redbus.in")
//     const title = await page.title()
//     console.log("Title of the page is:" +title)
//     const redBus = await page.url()
//     console.log("Redbus URL is:", redBus)
// })

// test("Flipkart", async()=>{

//     const browser = await firefox.launch({headless:false})
//     const context = await browser.newContext()
//     const page = await context.newPage()
//     await page.goto("https://www.flipkart.com")
//     const title = await page.title()
//     console.log("Title of the page is:" +title)
//     const flipkart = await page.url()
//     console.log("Flipkart URL is:", flipkart)
// })

// Scenario-2
import test, {chromium, firefox} from "@playwright/test"

test("Redbus and Flipkart", async()=>{

    const redBusBrowser = await chromium.launch({headless:false}) // launch the chromium for Redbus
    const flipKartBrowser = await firefox.launch({headless:false}) // launch the firefox for Flipkart
    const redBusContext = await redBusBrowser.newContext() //Create a new browser context for Redbus
    const flipkartContext = await flipKartBrowser.newContext() //Create a new browser context for Flipkart
    const redBuspage = await redBusContext.newPage() //Create a new indenpendent page for Redbus
    const flipKartpage = await flipkartContext.newPage() //Cfreate a new indenpendent page for Flipkart
    await redBuspage.goto("https://www.redbus.in") //Load the Redbus home page
    await flipKartpage.goto("https://www.flipkart.com") //Load the Flipkart home page
    const redBusTitle = await redBuspage.title()
    const flipKartTitle = await flipKartpage.title()
    console.log("Title of the Redbus page is:" +redBusTitle) //Print the Redbus title
    console.log("Title of the Flipkart page is:" +flipKartTitle) //Print the Flipkart title
    const redBusUrl = await redBuspage.url()
    const flipKartUrl = await flipKartpage.url()
    console.log("Redbus URL is:", redBusUrl) //Print the Redbus URL
    console.log("Flipkart URL is:", redBusUrl) //Print the Flipkart URL
})