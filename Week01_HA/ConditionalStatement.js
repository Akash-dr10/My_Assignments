let browserName = "Edge"
function launchBrowser(browserName)
{
    if(browserName == "Chrome")
    {
        console.log("Browser is Chrome")
    }
    else
    {
        console.log("Browser is Edge")
    }
}
launchBrowser(browserName)


let testType = "Regression"
function runTests(testType)
{
    switch (testType) {
        case "Sanity":
            console.log("Sanity test")
            break;
        case "Regression":
            console.log("Regression test")
            break;
        default:
            console.log("Smoke test")
            break;
    }

}
runTests(testType)