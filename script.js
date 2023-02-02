let w;
let startPoint = {
    x: 0,
    y: 0
}
let span = {
    x: 100,
    y: 100,
}


let arr = []
    for (let i = 0; i < 30; i++) {
        arr.push(Math.floor((Math.random() * (1 - 99) + 99)))
    }
    console.log(arr)


function foo(){
    let w = window.open("", "", `width=400, height=400, top=100, left=700`);
    w.document.write(`<body style="background: grey">
    <table>
        <caption>Таблица</caption>
        <tr>
            <td>${arr[0]}</td>
            <td>${arr[1]}</td>
            <td>${arr[2]}</td>
            <td>${arr[3]}</td>
            <td>${arr[4]}</td>
        </tr>
        <tr>
            <td>${arr[5]}</td>
            <td>${arr[6]}</td>
            <td>${arr[7]}</td>
            <td>${arr[8]}</td>
            <td>${arr[9]}</td>
        </tr>
        <tr>
            <td>${arr[10]}</td>
            <td>${arr[11]}</td>
            <td>${arr[12]}</td>
            <td>${arr[13]}</td>
            <td>${arr[14]}</td>
        </tr>
        <tr>
            <td>${arr[15]}</td>
            <td>${arr[16]}</td>
            <td>${arr[17]}</td>
            <td>${arr[18]}</td>
            <td>${arr[19]}</td>
        </tr>
        <tr>
            <td>${arr[20]}</td>
            <td>${arr[21]}</td>
            <td>${arr[22]}</td>
            <td>${arr[23]}</td>
            <td>${arr[24]}</td>
        </tr>
        <tr>
            <td>${arr[2]}</td>
            <td>${arr[3]}</td>
            <td>${arr[4]}</td>
            <td>${arr[5]}</td>
            <td>${arr[6]}</td>
        </tr>
    </table>
    </body>`)
    windows.push(w);
    startPoint.x += span.x;
    startPoint.y += span.y;
}