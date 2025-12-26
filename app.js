function q1() {
    var names = []

    alert("JS Literal Array: [ ]");
}

function q2() {
    var names = new Array();

    alert("JS Object Array: new array( )")
}

function q3() {
    var items = ["Apple", "Mango", "Grape"]

    alert(items.join(" | "))
}

function q4() {
    var nums = [10, 20, 30]

    alert(nums.join(" | "))
}

function q5() {
    var bools = ["true", "false"]

    alert(bools.join(" | "))
}

function q6() {
    var mixed = ["true", 10, "Apple"]

    alert(mixed.join(" | "))
}

function q7() {
    var qualification = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M. Phil", "PhD"]

    document.write("<h1>Educational Qualifications : </h1><br>" +
        "1) " + qualification[0] + 
        "<br>2) " + qualification[1] + 
        "<br>3) " + qualification[2] + 
        "<br>4) " + qualification[3] + 
        "<br>5) " + qualification[4] + 
        "<br>6) " + qualification[5] + 
        "<br>7) " + qualification[6] + 
        "<br>8) " + qualification[7])
}

function q8() {
    var student = ["Michael", "Jhon", "Tony"]
    var student_num = [320, 230, 480]

    percentage = [(student_num[0] / 500) * 100, (student_num[1] / 500) * 100, (student_num[2] / 500) * 100,]

    document.write("<h1>Student Progress: </h1>" +
        "Score of " + student[0] + " is " + student_num[0] + ". Percentage: " + percentage[0] + "%<br>" +
        "Score of " + student[1] + " is " + student_num[1] + ". Percentage: " + percentage[1] + "%<br>" +
        "Score of " + student[2] + " is " + student_num[2] + ". Percentage: " + percentage[2] + "%<br>")
}

function q9() {
    var color = ["White", "Purple", "Red", "Green", "Black"]
    var colors = ["White", "Purple", "Red", "Green", "Black"]

    var startColor = prompt("Enter a color to add to the beginning:")
    colors.unshift(startColor)

    var endColor = prompt("Enter a color to add to the end:")
    colors.push(endColor)
    
    colors.pop()

    var indexToAdd = prompt("At which index do you want to add a color?")
    var colorName = prompt("Enter the color name:")

    colors.splice(indexToAdd, 0, colorName)

    document.write("<b>Array Colors:  </b>" + color.join(" | ") + "<br><br>" +
        "<b>Final Updated Array:  </b>" + colors.join(" | ")
    )
}

function q10() {
    var unsortedArray = [320, 230, 480, 120]

    document.write("<b>Un-Sorted Array:</b>  " + unsortedArray.join(", ") + "<br><br>" +
        "<b>Sorted Array:</b>  " + unsortedArray.sort().join(", ")
    )
}

function q11() {
    var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]

    document.write("<b>Cities List:</b> <br>" + cities + "<br><br>" +
        "<b>Selected Cities List:</b> <br>" + cities.slice(2, 4)
    )


    display.innerHTML = "<b>Cities List:</b> <br>" + cities + "<br><br>" +
        "<b <b>Cities List:</b> <br>" + cities.slice(2, 4)
}

function q12() {
    var catArray = ["This", "is", "my", "cat"]

    document.write("<b>Array:</b>" + catArray + "<br><br>" + 
        "<b>Join String: </b>" + catArray.join(" ")
    )
}

function q13() {
    var devices = ["keyboard", "mouse", "printer", "monitor"]

    document.write("<h2>Devices: </h2>" + devices + "<br><br>" + 
        "<b>Out: </b>" + " " + devices.shift() + "<br>" +
        "<b>Out: </b>" + " " + devices.shift() + "<br>" +
        "<b>Out: </b>" + " " + devices.shift() + "<br>" +
        "<b>Out: </b>" + " " + devices.shift() + "<br>"
    )
}

function q14() {
    var devices = ["keyboard", "mouse", "printer", "monitor"]

    document.write("<h2>Devices: </h2>" + devices + "<br><br>" + 
        "<b>Out: </b>" + " " + devices.pop() + "<br>" +
        "<b>Out: </b>" + " " + devices.pop() + "<br>" +
        "<b>Out: </b>" + " " + devices.pop() + "<br>" +
        "<b>Out: </b>" + " " + devices.pop() + "<br>"
    )
}

function q15() {
    var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

    document.write("<select>" +
        "<option>" + phone[0] + "</option>" +
        "<option>" + phone[1] + "</option>" +
        "<option>" + phone[2] + "</option>" +
        "<option>" + phone[3] + "</option>" +
        "<option>" + phone[4] + "</option>" +
        "<option>" + phone[5] + "</option>" +
        "</select>")
}