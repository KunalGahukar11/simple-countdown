const countdown_date_value = '12 May 2023 6:04 AM';    //end date

document.getElementById("past-date").innerText = countdown_date_value;

const inputs = document.querySelectorAll("input");

function countdown() {
    const end_date = new Date(countdown_date_value);
    // console.log(end_date);

    const current_date = new Date();  //value of current date
    // console.log(current_date);

    // difference between end date & current date
    const diff = (end_date - current_date)/1000;
    console.log(diff);

    if (diff < 0) return;  //condition to avoid the negative values
    inputs[0].value = Math.floor(diff/3600/24);  //calculating days
    // console.log(days);

    inputs[1].value = Math.floor((diff/3600)%24); // claculating hours
    // console.log(hours);

    inputs[2].value = Math.floor((diff/60)%60);  //calculating minutes
    // console.log(minutes);

    inputs[3].value = Math.floor((diff)%60);  //calculating seconds
    // console.log(seconds);
}

setInterval(() => {
    countdown();
}, 1000);
