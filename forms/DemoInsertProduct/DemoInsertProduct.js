btnSubmitProduct.onclick=function(){
    let name = inptProduct.value
    let accountType = inptPrice.value
    let query = "INSERT INTO products (`product_name`,`price`) VALUES ('" + productName + "', '" + price + "')"
    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)

    if (req.status == 200) {
        if (req.responseText == 500) 
            lblMessage2.textContent = "You have successfully added a product!"
        else
            lblMessage2.textContent = "There was a problem with adding the product to the database."
    } else 
        lblMessage2.textContent = "Error: " + req.status
}

