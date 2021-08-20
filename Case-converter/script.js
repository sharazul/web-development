// change content to upper-case
let e1 = document.querySelector("#upper-case");
let box = document.querySelector("#text1");
 e1.addEventListener("click",function(){
     box.value = box.value.toUpperCase();
});
 // change content to lower case
let lower_case = document.querySelector("#lower-case");
lower_case.addEventListener("click",function(){
    box.value = box.value.toLowerCase();
});

// change content to proper-case
let proper_case = document.querySelector("#proper-case");
proper_case.addEventListener('click',function (){
    let arr = box.value
    let empty_string = ''
    let l = arr.split(" ");
    for (let i=0; i < l.length;i++){
        let upper = l[i][0].toUpperCase();
        let q = l[i].replace(l[i][0], upper);
        empty_string = empty_string + ' ' + q;
    }
    box.value = empty_string.trim();
});
// change to sentence-case
let sentence_case = document.querySelector("#sentence-case");
sentence_case.addEventListener('click',function (){
    let arr = box.value;
    let trm = [];
    let str = [];
    let l = arr.split(".");
    if (l.slice(-1) == ''){
        l.pop();
    }
    for (let i = 0; i < l.length; i++) {
        trm.push(l[i].trim());
        let upper_1 = trm[i][0].toUpperCase();
        let other_letter = trm[i].slice(1).toLowerCase();
        let final = upper_1 + other_letter;
        str.push(final + '.')
    }
    box.value = str.join(' ');
});
// to download the content
let save_content = document.querySelector("#save-text-file");
save_content.addEventListener("click",function (){
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

// Start file download.
    download("text.txt",box.value);
})

