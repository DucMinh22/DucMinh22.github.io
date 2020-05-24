document.addEventListener("DOMContentLoaded", function(){
    var buttoncategory = document.querySelector('.head-title');
    var listcate = document.querySelector('.list-cate');
    var buttonpr = document.getElementsByClassName('button-pr');
    var contentpr = document.getElementsByClassName('content-pr');
    
    for(i = 0; i < buttonpr.length; i++){
        buttonpr[i].onclick = function(){
            var nd = this.getAttribute('data-mk');
            var phantushow = document.getElementById(nd);
            for(k = 0; k < buttonpr.length; k++){
                contentpr[k].classList.remove('show');
            }
            
            phantushow.classList.toggle('show');
        }
    }
    buttoncategory.onclick = function(){
        
        listcate.classList.toggle('list-cate');
    }
    
})


// document.addEventListener("DOMContentLoaded", function(){
//     //    truy cập đến phần tử lấy ra mảng
//     var nut = document.getElementsByClassName('nuttq');
//     var ndhr = document.getElementsByClassName('danhsach')
//     // lấy ra giá trị, tât cả bỏ màu trắng
//     for (var i = 0; i < nut.length; i++){
//         nut[i].onclick = function () {
//             console.log(this.classList[2])
//             if(this.classList[2] == "tg-white"){ // click vòa cái đã hiển thị r
//                 // chính nó biến mất màu trắng
//                 this.classList.remove('tg-white');
//                 var nd = this.getAttribute('data-mk');
//                 var phantushow = document.getElementById(nd);
//                 // chính nó biến mất danh sách
//                 phantushow.classList.remove('show');
//             }
//             else{ // click vào các cái còn lại
//                 for(var k = 0; k < nut.length; k++){
//                     nut[k].classList.remove('tg-white');
//                 }
//                 // cho đối tượng click thành màu trắng
//                 this.classList.toggle('tg-white');
//                 // lấy về data hiện lên
//                 var nd = this.getAttribute('data-mk');
//                 var phantushow = document.getElementById(nd);
//                 // cho tất cả các div danh sách ẩn đi 
//                 for(i = 0; i < ndhr.length ; i++ ){
//                     ndhr[i].classList.remove('show');
//                 }
//                 // cho div của đối tượng được click hiển thị ra
//                 phantushow.classList.toggle('show');
//             }

//         }
//     }
// },false)

