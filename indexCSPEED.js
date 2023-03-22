function calculatingCarSpeed(){
  let speed = parseInt(document.getElementById('speed').value)
  let demeritPoints = (speed - 70) / 5
      if (speed<=70) {
        text.innerText = 'points 0'
      }else if (speed > 70 && speed <121){
        text.innerText = `points ${demeritPoints}`
      }else{
        text.innerText = `License suspended`
      }
}  