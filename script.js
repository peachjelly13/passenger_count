let count = 0;
let saveEl = document.getElementById("save_")
function increment(){
  count = count + 1;
  document.getElementById("count-ele").innerHTML = count;
}
function decrement(){
  if(count>=1){
    count = count - 1;
  }
  document.getElementById("count-ele").innerHTML = count;
}
function incrementby2(){
  count = count + 2;
  document.getElementById("count-ele").innerHTML = count;
}
function decrementby2(){
  if(count>=2){
      count = count - 2 ;
  }

  document.getElementById("count-ele").innerHTML = count;
}
function save(){
  let countstr = count + " - "
  saveEl.textContent +=  countstr
  count = 0;
  document.getElementById("count-ele").innerHTML = count


}

increment()
decrement()
incrementby2()
decrementby2()
save()
