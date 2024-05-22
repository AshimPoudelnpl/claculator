let string = "";
$("button").click((event) => {
    console.log(event.target);
    if (event.target.innerHTML == '=') {
        string = eval(string);
        console.log(string);
        $(".output").text(string);
    }
    else if (event.target.innerHTML == 'C') {
        string = '';
        $(".output").text(string);
    }
    else if (event.target.innerHTML == '&lt;') {
        string = string.substring(0, string.length - 1);
        $(".output").text(string);
    }
    else {
        string = string + event.target.innerHTML;
        console.log(string);
        $(".output").text(string);
    }
})
d