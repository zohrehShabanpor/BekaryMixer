function changeCount(isIncrease) {
    let control = document.getElementById('productCount');
    let count = parseInt(control.value );
    count = isIncrease ? count+=1 : (count === 1 ? 1 : count-=1);
    control.value  = String(count);
}

if (window.innerWidth <= breakpoints.xSmall) {
    let p = Array.prototype.slice.call(document.getElementsByClassName("second-section-paragraph-1"));
    p[0].innerText = 'ستون و سطرآنچنان که لازم است استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با';


    let button6 = Array.prototype.slice.call(document.getElementsByClassName("forth-section-item-button"));

    for (let i = 0; i < button6.length; i++) {
        button6[i].innerText = 'خریـــد';
    }
}