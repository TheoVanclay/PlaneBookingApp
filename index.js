function validFormFieldInput(data) {
    let isValid = false;
    
    //const newTaskNameInput = document.querySelector("#oneway")
    const isReturn = document.querySelector("#return").checked

    //Checking the Airports for validity
    const destination = document.querySelector("#arrival_port").value
    const origin = document.querySelector("#departure_port").value
    
    const isValidOrigin = validPort(origin)
    const isValidDestination = validPort(destination)
    
    //Valid Dates
    const date1 = document.querySelector("#date1").value
    const date2 = document.querySelector("#date2").value

    const isDate1Valid = validDate(date1)
    let isDate2Valid = true
    if (isReturn) {isDate2Valid = validDate(date2)}

    //Valid Contact Information
    const email = document.querySelector("#email").value
    const mobile = document.querySelector("#mobile").value

    const isValidMobile = validString(mobile, 10)
    const isValidEmail = validString(email, 1)
    
    //Valid Passenger Details
    //Passenger 1
    const pass1_name = document.querySelector("#pass1_name").value
    const pass1_age = parseInt(document.querySelector("#pass1_age").value)
    
    const isPass1Valid = validPassenger(pass1_name, pass1_age)
    //Passenger 2
    const pass2_name = document.querySelector("#pass2_name").value
    const pass2_age = parseInt(document.querySelector("#pass2_age").value)
    
    const isPass2Valid = validPassenger(pass2_name, pass2_age)

    //Make sure every check is valid
    const allChecks = [
        isValidOrigin, isValidDestination,
        isDate1Valid, isDate2Valid,
        isValidEmail, isValidMobile,
        isPass1Valid, isPass2Valid
    ]

    console.log(allChecks)
    isValid = checkAll(allChecks);
    //If every check was valid the move onto then redirect
    if(isValid) {
        console.log("All forms are filled in correctly")
        window.open("/success.html")
    }


}

function checkAll(bool_list) {
    if(bool_list.includes(false)){
        return false;
    } else {return true}
}

const all_ports = [
    "Trouble Town",
    "Cozy Cove",
    "Mega Metropolis",
    "Faroff Fields",
    "Dusty Desert" 
]


function validPort(port) {
    if (port.length == 0 || typeof port != "string") {
        console.log("Must fill in Port")
        return false;
    }
    if(all_ports.includes(port)) {
        return true;
    } else {
        console.log(`${port} is not a valid airport`)
        return false;
    }
}

function validDate(date) {
    if(date !== "") {
        return true
    } else {
        return false
    }
}

function validString(user_input, req_length) {
    if(typeof user_input === "string"){
        if(user_input.length >= req_length) {
            return true
        } else {return false}
    } else {return false}
}

function validPassenger(name, age) {
    if (validString(name, 5) && typeof age === "number") {
        return true
    } else {return false}

}