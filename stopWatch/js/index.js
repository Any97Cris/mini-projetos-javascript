window.onload = function () {
    var seconds = 00
    var tens = 00
    var appendTens = document.getElementById("tens")
    var appendSecond = document.getElementById("seconds")    
    var appendStar = document.getElementById('bustart')
    var appendStop = document.getElementById('bustop')
    var appendReset = document.getElementById('bureset')
    var Interval

    appendStar.onclick = function() {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 100)        
    }
    appendStop.onclick = function(){
        clearInterval(Interval)        
    }
    appendReset.onclick = function(){
        clearInterval(Interval)
        tens = "00"
        seconds = "00"
        appendTens.innerHTML = tens
        appendSecond.innerHTML = seconds
    }

    function startTimer () {
        
        tens++ 

        if (tens <= 9){
            appendTens.innerHTML = "0" + tens
        }
        if (tens > 9){
            appendTens.innerHTML = tens
        }
        if (tens > 99){
            console.log("seconds")
            seconds++
            appendSecond.innerHTML = "0" + seconds
            tens = 0
            appendTens.innerHTML = seconds
        }
        if (seconds > 9){
            appendSecond.innerHTML = seconds
        }
    }

}
