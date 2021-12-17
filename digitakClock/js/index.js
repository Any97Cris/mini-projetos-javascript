function showTime() {
    var date = new Date()
    var h = date.getHours() //0h - 23h
    var m = date.getMinutes() //0m - 59m
    var s = date.getSeconds() //0s - 59s    
    var session = "AM"

    if (h == 0){
        h = 12        
    }
    if (h > 12){
        h = h - 12
        session = "PM"
    }
    if (session == "AM"){
        document.getElementById("msg").innerHTML = "O sol está brilhando em sua intensidad máxima, faça como ele e brilhe também"
    }
    if (session == "PM"){
        document.getElementById("msg").innerHTML = "Que as estrelas guiem os nossos melhores sonhos para se tornarem realidade"
    }
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : h
    s = (s < 10) ? "0" + s : s

    var time = h + ":" + m + ":" + s + " " + session

    document.getElementById("MyClockDisplay").innerHTML = time
    document.getElementById("MyClockDisplay").innerHTML = time

    setTimeout(showTime, 1000)
}

showTime();