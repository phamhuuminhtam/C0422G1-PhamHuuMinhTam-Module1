var arr=[]
function display() {
    var bang='<table border="0">'
    bang= bang + '<tr>' + '<td colspan="2" style="font-weight: bolder; text-align: left">'+ 'Display Product' + '</td>' + '<td style=" color: red">' + arr.length + " product" +'</td>'
    for (let i=0;i<arr.length;i++){
        bang= bang + '<tr>'
        bang =bang + '<td>' + arr[i] +"</td>"


    }
    bang= bang + '</tr>' +"</table>"
    document.getElementById("tableProduct").innerHTML=bang
}
onload=display()
function addProduct() {
    arr.push(document.getElementById('inputProduct').value)
    document.getElementById('inputProduct').value=""
    display()
}
function deletei(i) {
    arr.splice(i,1)
    display()
}
function edit(i) {
    arr[i]=prompt("nhập thông tin mới của sản phẩm")
    display()
}

console.log(arr)