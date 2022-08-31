
function changeCount(isIncrease) {
    let control = document.getElementById('productCount');
    let count = parseInt(control.value );
    count = isIncrease ? count+=1 : (count === 1 ? 1 : count-=1);
    control.value  = String(count);
}

