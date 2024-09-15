let a = 0;
document.querySelector('#OkButton').onclick = function () {
    document.querySelector('.OneTimeDisplay').style.display = 'none';
    a = a + 1;
    if (a == 1) {
        document.querySelector('.whole').style.backgroundImage = "url('1.gif')";
        document.querySelector('.controls').style.display = 'block';
        document.querySelector('.LoginContainer').style.display = 'block';
    }
}

document.querySelector('#change1').onclick = function () {
    a = a + 1;
    if (a == 1) {
        document.querySelector('.whole').style.backgroundImage = "url('1.gif')";
    }
    else if (a == 2) {
        document.querySelector('.whole').style.backgroundImage = "url('2.gif')";
    }
    else if (a == 3) {
        document.querySelector('.whole').style.backgroundImage = "url('3.gif')";
    }
    else if (a == 4) {
        document.querySelector('.whole').style.backgroundImage = "url('4.gif')";
    }
    else if (a == 5) {
        document.querySelector('.whole').style.backgroundImage = "url('5.gif')";
    }
    else if (a == 6) {
        document.querySelector('.whole').style.backgroundImage = "url('6.gif')";
    }
    else if (a == 7) {
        document.querySelector('.whole').style.backgroundImage = "url('7.gif')";
    }
    else if (a == 8) {
        document.querySelector('.whole').style.backgroundImage = "url('8.gif')";
    }
    else if (a == 9) {
        document.querySelector('.whole').style.backgroundImage = "url('9.gif')";
    }
    else if (a == 10) {
        document.querySelector('.whole').style.backgroundImage = "url('10.gif')";
    }
    else if (a == 11) {
        document.querySelector('.whole').style.backgroundImage = "url('11.gif')";
    }
    else if (a == 12) {
        document.querySelector('.whole').style.backgroundImage = "url('12.gif')";
    }
    else if (a == 13) {
        document.querySelector('.whole').style.backgroundImage = "url('13.gif')";
        a = 0;
    }
}
document.querySelector('#change2').onclick = function () {
    a = a - 1;
    if (a == -1) {
        a = 1;
    }
    else if (a == 1) {
        document.querySelector('.whole').style.backgroundImage = "url('1.gif')";
    }
    else if (a == 2) {
        document.querySelector('.whole').style.backgroundImage = "url('2.gif')";
    }
    else if (a == 3) {
        document.querySelector('.whole').style.backgroundImage = "url('3.gif')";
    }
    else if (a == 4) {
        document.querySelector('.whole').style.backgroundImage = "url('4.gif')";
    }
    else if (a == 5) {
        document.querySelector('.whole').style.backgroundImage = "url('5.gif')";
    }
    else if (a == 6) {
        document.querySelector('.whole').style.backgroundImage = "url('6.gif')";
    }
    else if (a == 7) {
        document.querySelector('.whole').style.backgroundImage = "url('7.gif')";
    }
    else if (a == 8) {
        document.querySelector('.whole').style.backgroundImage = "url('8.gif')";
    }
    else if (a == 9) {
        document.querySelector('.whole').style.backgroundImage = "url('9.gif')";
    }
    else if (a == 10) {
        document.querySelector('.whole').style.backgroundImage = "url('10.gif')";
    }
    else if (a == 11) {
        document.querySelector('.whole').style.backgroundImage = "url('11.gif')";
    }
    else if (a == 12) {
        document.querySelector('.whole').style.backgroundImage = "url('12.gif')";
    }
    else if (a == 13) {
        document.querySelector('.whole').style.backgroundImage = "url('13.gif')";
        a = 0;
    }
}
