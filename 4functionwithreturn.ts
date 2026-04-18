
function launchBrowser(bname:string):boolean
{

    switch(bname.toLowerCase().trim())
    {
        case 'chrome':
            console.log("chrome is launch");
            return true;

        case 'edge':
            console.log("edge is launch");
            return true;

        case 'firefox':
            console.log("firefox is launch");
            return true;
        default:
            console.log("Invalid browser");
            return false;
            

    }
}

//call
let isLaunched=launchBrowser('edge');
if(isLaunched)
{
    console.log("start application");
    
}