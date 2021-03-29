let req = ""
let query = ""
let results = ""
let pw = "H54771015$" 
let netID = "erh81010"
let databaseSchema = "375groupb3" 

DemoSelectAccount.onshow=function(){
    txtArea.style.height = "100px"
}

btnSeeAccount.onclick=function(){
    query = "SELECT * FROM account"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)

    if (req.status == 200) {         
    
           console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
        results = JSON.parse(req.responseText)
           console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
        
        if (results.length == 0)   
           lblMessage.textContent = "There are no accounts in the database."
        else {      
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
            txtArea.value = message
     } 

  } else  
        lblMessage.textContent = "Error code: " + req.status
}