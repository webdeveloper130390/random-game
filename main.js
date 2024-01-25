var inp = document.querySelector('input');
var h1 = document.querySelector("h1");
var numRan = Math.floor(Math.random() * 10)
var count = 0

function fn() {
    count = count + 1
    var val = inp.value;
    if (count <= 3) {
        if (numRan > val) {
            h1.textContent = "kamyuter raqami katta"
        }
        else if (numRan < val) {
            h1.textContent = "kampyuter raqami kichik"
        } else if (numRan == val) {
            h1.textContent = "yutdingiz ! javob (" + numRan + ")edi"
        } 
    }else {
        h1.textContent = "yutqazdingiz javob " + numRan + "edi"
    }

    inp.value = '';
    inp.focus()
}