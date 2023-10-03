$(Document).ready(function () {
    $(".slide_items").hover(function () {
        $(".slide_down").css("display:block");
        $(".slide_down").slideToggle("fast");
    })
    $(".slide_items2").hover(function () {
        $(".slide_down2").css("display:block")
        $(".slide_down2").slideToggle("fast");
    })
    $(".slide_items3").hover(function () {
        $(".slide_down3").css("display:block")
        $(".slide_down3").slideToggle("fast");
    })
    $(".instruct").hover(function () {
        $(".instruct_ul").css("display:block")
        $(".instruct_ul").slideToggle("fast");
    })
    //////////////////////////////
    $(".sp_buy_notification").hover(function () {
        $(".buy_notification").toggle();
    })
    /////////////////////////
    $(".mobile-img").on("click", function () {
        $(".catavlog").toggle();
    })
    $(".catavlog_up").on("click", function () {
        $(".catavlog").toggle();
    })
    $(".icon_hide").on("click", function () {
        $(".notification_sp").hide();
    })
    $(".notification-img").on("click", function () {
        $(".notification_sp").show();
    })
    // $(".nav_cart").on("click", function () {
    //     // $(".cart_sp").toggle();
    //     // $(".cart_sp-content--li").addClass("scroll");
    // })

    ///////////////////////////////
    $('.content_sp').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        cssEase: "ease-in-out",
        // centerPadding:'100px',
        infinite: false,
        dots: true,
        arrows: true,//mui ten
        prevArrow:
            `<button type='button' class='slick-prev pull-next'><i class="caret_opa fa-solid fa-caret-left"></i></button>`,
        nextArrow:
            `<button type='button' class='slick-next pull-next'><i class="caret_act fa-solid fa-caret-right"></i></button>`,
        autoplaySpeed: 3000,
    });
    $('.secrets_box').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        cssEase: "ease-in-out",
        centerPadding: '100px',
        infinite: false,
        dots: false,
        arrows: true,//mui ten
        prevArrow:
            `<button type='button' class=' slick-prev_secrets slick-prev pull-next'><i class=" caret_opa-clor caret_opa fa-solid fa-caret-left"></i></button>`,
        nextArrow:
            `<button type='button' class=' slick-next_secrets slick-next pull-next'><i class="caret_act-clor caret_act fa-solid fa-caret-right"></i></button>`,
        // autoplaySpeed: 5000, 
    });
})


//////giohang////////



// const cartIcon = document.querySelectorAll(".promotion-icon");

// // const cartNumber = document.getElementById("cart_number").innerText;
// cartIcon.forEach(function (items, index) {
//     items.addEventListener("click", function (event) {
//         const cartBtn = event.target;
//         const product = cartBtn.parentElement;
//         const cartImg = product.querySelector("img").src; 
//         const cartName = product.querySelector(".list-detail span").innerText;
//         const cartPrice = product.querySelector(".list-detail p").innerText;
//         addCart(cartImg, cartName, cartPrice);
//     })
// })

// function addCart(cartImg, cartName, cartPrice) {
//     const addTr = document.createElement("tr");
// const trItems = '<tr><td><img src="' + cartImg + '"alt=""></td><td class="text_title"><span>' + cartName + '</span></td> <td class="number_sp-x"><span>x</span><span>1</span></td><td class="text_price"><span>' + cartPrice + '</span></td><td><i class="icon_remove fa-solid fa-circle-xmark"></i></td></tr>';
//     addTr.innerHTML = trItems;
//     const addTbody = document.querySelector(".cart_tb tbody");
//     addTbody.appendChild(addTr);
//     cartTotal();
// }


// //////////ThanhToan/////
// function cartTotal() {
//     const itemTr = document.querySelectorAll(".cart_tb tr");
//     let numberTotal = 0;
//     for (let i = 0; i < itemTr.length; i++) {
//         let cartSp = itemTr[i].querySelector(".text_price span").innerText;
//         // let numberX = itemTr[i].querySelector(".number_sp-x span").innerText;
//         let cart = cartSp.replace(/[^\d\.\-\ ]/g, '');
//         let cart2 = Number(cart);
//         numberTotal = numberTotal + cart2;
//         numberTotalA = numberTotal.toLocaleString()
//     }
//     const cartItemTotal = document.querySelector(".total_price");
//     cartItemTotal.innerHTML = numberTotalA;
//     const cartItemTotal2 = document.querySelector(".total_price2");
//     cartItemTotal2.innerHTML = numberTotalA;
// }


///////////////code/////////////

// const cartItem = document.querySelectorAll(".promotion-icon");
// // const test1 = document.querySelectorAll(".quantity");
// // let quantityNumber = 0;
// // console.log(test1)

// cartItem.forEach(function (items, index) {
//     items.addEventListener("click", function (items2) {
//         const cartBtn = items2.target;

//         const cartProduct = cartBtn.parentElement;
//         const cartImg = cartProduct.querySelector(".promotion-item  img").src
//         const cartText = cartProduct.querySelector("span").innerText;
//         const cartPrice = cartProduct.querySelector("p").innerText;
//         addCart(cartImg, cartText, cartPrice);


//         // test1.addEventListener("click", function (event) {
//         //     const test2 = event.target;
//         //     quantityNumber = quantityNumber + 1;
//         //     test2.innerHTML = quantityNumber;
//         //     console.log(test2)
//         // })
//         // const test0 = document.querySelectorAll(".cart_tb tr")
//         // for (let i = 0; i < test0.length; i++) {
//         //     const test1 = test0[i].querySelectorAll(".quantity");
//         // }

//         // let test1 = document.querySelector(".quantity").innerText;
//         // let quantity2 = Number(test1);
//         // test1.innerHTML = quantityNumber;
//         // if (cartBtn) {
//         //     quantityNumber = quantity2 + 1;
//         //     // quantity2.innerHTML=quantityNumber;
//         // }
//         // quantity2.innerText = quantityNumber;
//     })

// })



// function addCart(cartImg, cartText, cartPrice) {
//     const addTr = document.createElement("tr");

//     const trItems = '<tr><td><img src="' + cartImg + '"alt=""></td><td class="text_title"><span>' + cartText + '</span></td> <td class="number_sp-x"><span>x</span><span class="quantity">0</span></td><td class="text_price"><span>' + cartPrice + '</span></td><td><i class="icon_remove fa-solid fa-circle-xmark"></i></td></tr>';
//     addTr.innerHTML = trItems;
//     const addTbody = document.querySelector(".cart_tb tbody");
//     addTbody.appendChild(addTr);
//     cartTotal();
// }

// function cartTotal() {
//     const cartTr = document.querySelectorAll(".cart_tb tr");
//     let numberTotal = 0;
//     for (let i = 0; i < cartTr.length; i++) {
//         const cartItems = cartTr[i].querySelector(".text_price span").innerText;
//         const cart2 = cartItems.replace(/[^\d\.\-\ ]/g, '')
//         const cart3 = Number(cart2);
//         numberTotal += cart3;
//         numberTotalA = numberTotal.toLocaleString()
//     }
//     const cartTotalNumber = document.querySelectorAll(".total_price");
//     cartTotalNumber.forEach(function (item, index) {
//         item.innerHTML = numberTotalA;
//     })

// }




/////////cach 2/////////

/////jquery
$(".promotion-icon").on("click", function () {
    $(".no_sp").hide();//khi co sp trong gh thi an di
    $("#cart_sp").hide();//thm sp moi thi an cart
    // $(".total_btn").show();//show nut thanh toan gh
    // $(".cart_tb tbody").show();//show sp
    $("#toast-container").show().fadeOut(1500);
})

/////////////////////////////

///hien thi gio hang///
// document.getElementById("cart_sp").style.display = "none";

function showCart() {
    let x = document.getElementById("cart_sp");
    document.querySelector(".no_sp").style.display = "none"
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    addmycart();
}

//////lay ra element cua sp

let cart = JSON.parse(localStorage.getItem("giohang"));

if (cart != null) {
    var giohang = cart;
} else {
    var giohang = [];
}
// var giohang = [];


function addCart(event) {
    let boxsp = event.parentElement.children;
    let img = boxsp[0].children[0].src;
    let namesp = boxsp[2].children[0].innerText;
    let pricesp = boxsp[2].children[1].innerText;
    let slsp = 1;
    let kttrung = 0;

    ///ktra trung ten sp
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i][1] == namesp) {
            giohang[i][3] += slsp;
            kttrung = 1;
            break;
        }
    };
    ////neu kttrung === 0 thi add ; neu khong co sp thi add sp
    if (kttrung == 0) {
        let newSp = new Array(img, namesp, pricesp, slsp);
        giohang.push(newSp);
    }

    // showcountSp();//ham dem slsp

    //luu gio hang len sessionStorage
    localStorage.setItem("giohang", JSON.stringify(giohang));//luu trinh duyet
    ///lay ve  //// tăng số lượng sp trùng
    let cart = JSON.parse(localStorage.getItem("giohang"));
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        let lenghtsp = cart[i][3];
        sum += lenghtsp;
        if (cart != null) {
            document.getElementById("cart_number").innerHTML = sum;
        }
    }
}

////////đếm số lượng sp
// function showcountSp() {
//     document.getElementById("cart_number").innerHTML = giohang.length;
//    
// }


///////thêm sp vào giỏ hàng
function addmycart() {
    let ttgh = "";
    let ttgh2 = "";
    let ttgh3 = "";
    let tong = 0;
    let tong2;
    for (let i = 0; i < giohang.length; i++) {
        let total = parseInt(giohang[i][2].replace(/[^\d\.\-\ ]/g, ''));
        let totalPrice = (total * giohang[i][3]);
        let totalPrice2 = totalPrice.toLocaleString("en-US");
        let id = i ;
        tong += totalPrice;
        tong2 = tong.toLocaleString("en-US");
        ttgh += '<tr class="items_id-'+ id +'">' +
            ' <td colspan="2"><img src="' + giohang[i][0] + '"alt=""></td>' +
            ' <td class="text_title"><span>' + giohang[i][1] + '</span></td>' +
            ' <td class="number_sp-x"><span>x</span><span id="quantity">' + giohang[i][3] + '</span></td>' +
            ' <td class="text_price"><span>' + totalPrice2 + '</span><span> đ</span></td>' +
            ' <td><i onclick="xoasp(this)" class="icon_remove fa-solid fa-circle-xmark"></i></td>' +
            ' </tr> ';
    }
    //tong tien
    ttgh2 +=
        '<p>' +
        '<span>Thành tiền </span>' +
        '<span class="total_price">' + tong2 + '</span><span> đ</span>' +
        '</p>' +
        '<p>' +
        '<span>Tổng cộng </span>' +
        '<span class="total_price">' + tong2 + '</span><span> đ</span>' +
        '</p>'

    ttgh3 += ' <a href="./giohang.html"><button class="btn_view btn_cart">XEM GIỎ HÀNG</button></a>' +
        '<a href="./giohang.html"><button class="btn_tt btn_cart">THANHTOÁN</button></a>';

    document.querySelector(".cart_sp-content--li tbody").innerHTML = ttgh;
    document.querySelector(".cart_total").innerHTML = ttgh2;
    document.querySelector(".btn_tr").innerHTML = ttgh3;
    // cartTotal();

}



///xoa sp////
function xoasp(index) {
    // let xoaTr = index.parentElement.parentElement;
    // let layratensp = xoaTr.children[1].innerText;

    // for (let i = 0; i < giohang.length; i++) {////cap nhat lai gio hang khi xoa
    //     if (giohang[i][1] == layratensp) {
    //         giohang.splice(i, 1);
    //     }
    // }

    // addmycart();
    // loadsldm();

    // showcountSp();

    /////////////////////////////////

    let cart = JSON.parse(localStorage.getItem("giohang"));
    let item_id = index.parentElement.parentElement;
    for (let i = 0; i < cart.length; i++) {
        let x=item_id.document.querySelector('items_id-'+ id);
    }


}






//////tinh tong don hang/////
// function cartTotal() {
//     const cartTr = document.querySelectorAll(".cart_tb tr");
//     let numberTotal = 0;
//     let numberTotalA;
//     for (let i = 0; i < cartTr.length; i++) {
//         const cartItems = cartTr[i].querySelector(".text_price span").innerText;
//         const cart2 = cartItems.replace(/[^\d\.\-\ ]/g, '')//chuyển xóa dấu của giá tiền 
//         const cart3 = parseInt(cart2);//chuyển thành number
//         numberTotal += cart3;
//         numberTotalA = numberTotal.toLocaleString("en-US");//them dau phay vao number
//     }
//     const cartTotalNumber = document.querySelectorAll(".total_price");
//     cartTotalNumber.forEach(function (item, index) {
//         item.innerHTML = numberTotalA;
//     })

//     // sessionStorage.stringify()
// }








///giohang
// trang2/////////////////////////////////////////////////////////////////
function giohangtt() {
    let gh = localStorage.getItem("giohang");
    let giohang = JSON.parse(gh);
    let ttgh = "";
    let ttgh2 = "";
    let tong = 0;
    let tong2;
    let ttgh3 = "";
    let ttgh4 = "";
    ttgh3 += '<thead>' +
        '<tr class="cart_tr">' +
        ' <td class="td_boder">Hình ảnh</td>' +
        '<td class="text_left">Tên sản phẩm</td>' +
        '<td class="sl_sp">Số lượng</td>' +
        '<td class="unit_price">Đơn Giá</td>' +
        '<td class="td_boder-right">Tổng cộng</td>' +
        '</tr> ' +
        '</thead>';

    for (let i = 0; i < giohang.length; i++) {
        let total = parseInt(giohang[i][2].replace(/[^\d\.\-\ ]/g, ''));
        let unit_price = (parseInt(giohang[i][2].replace(/[^\d\.\-\ ]/g, ''))).toLocaleString("en-US");
        let totalPrice = (total * giohang[i][3]);
        let totalPrice2 = totalPrice.toLocaleString("en-US");
        tong += totalPrice;
        tong2 = tong.toLocaleString("en-US");
        ttgh += '<tr>' +
            ' <td><img src="' + giohang[i][0] + '"alt=""></td>' +
            ' <td class="text_title"><span class="text_color">' + giohang[i][1] + '</span></td>' +

            ' <td class="number_sp-x"><span class="option"><input type="text" name="quantity[906064]" value="' + giohang[i][3] + '" size="1" class="sl btnn form-control"><button type="submit" class="sl btnn btn-primary" data-original-title="Cập nhật" aria-describedby="tooltip974573"><i class="fa fa-refresh"></i></button> <button type="button"  class="sl btnn btn-danger" data-original-title="Loại bỏ"><i class="fa fa-times-circle"></i></button>  </span></td>' +

            ' <td class="text_price"><span>' + unit_price + '</span><span> đ</span></td>' +
            ' <td class="text_price"><span>' + totalPrice2 + '</span><span> đ</span></td>' +
            // ' <td><i onclick="xoasp(this)" class="icon_remove fa-solid fa-circle-xmark"></i></td>' +
            ' </tr> ';
    }

    ttgh4 +=
        ' <div class="vip_contnet">' +
        '<h2><img width = "22px" height = "22px" src = "https://www.kosmebox.com/media/rewardpoints/image/icon_gift.png" alt = "" ><span> ÁP DỤNGVIP HOẶC ĐIỂM THƯỞNG TÍCH LUỸ</span></h2>' +
        '</div>' +
        '<div class="text_vip"><span> Nếu bạn đã có điểm thưởng tích luỹ trước đây vui lòng <span style = "color: blue;font-weight: bold;cursor: pointer;"> đăng nhập</span> để dùng điểm</span></div> '

    // tong tien
    ttgh2 +=
        '<tr> ' +
        '<td style=" text-align: right;font-weight:600;font-size: 14px;padding:10px;" colspan="5">Thành tiền: <span style="margin-left:60px;"> ' + tong2 + ' đ</span></td>' +
        '</tr> ' +
        '<tr>' +
        '<td style=" text-align: right;font-weight:600;font-size: 14px;padding:10px;" colspan="5">Tổng cộng:<span style="margin-left:60px;">  ' + tong2 + ' đ</span></td>' +
        '</tr>'
        ;


    //    show ttgh nho
    // document.querySelector(".cart_sv").innerHTML = ttgh + ttgh2;

    //   show ttgh lon 

    document.querySelector(".cart_tv tbody").innerHTML = ttgh3 + ttgh;
    document.querySelector(".vip").innerHTML = ttgh4;
    document.getElementById("total").innerHTML = ttgh2;

    addmycart();
    // showcountSp();
}





/////load lai so lg sp cac trang


function loadslsp() {
    ///lay ve
    let cart = JSON.parse(localStorage.getItem("giohang"));
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        let lenghtsp = cart[i][3];
        sum += lenghtsp;
        if (cart != null) {
            document.getElementById("cart_number").innerHTML = sum;
        }
    }
}


////////////////trang dang ky///////


// let btn = document.querySelector(".btn_register");
// btn.onclick = function (e) {
//     e.preventDefault();
//     let name = document.getElementById("input-fisrtname").value;
//     let email = document.getElementById("input-email").value;
//     let password = document.getElementById("input-password").value;
//     let confirm = document.getElementById("input-confirm").value;
//     let phone = document.getElementById("input-phone").value;
//     let address = document.getElementById("input-address").value;
//     let addressCity = document.getElementById("address").value;
//     let addressDistrict = document.getElementById("dstrict").value;
//     let notification = document.querySelector('input[type="radio"]').checked;
//     let member = document.querySelector('input[type="checkbox"]').checked;

//     let userName = {
//         name: name,
//         email: email,
//         password: password,
//         confirm: confirm,
//         phone: phone,
//         address: address,
//         addressCity: addressCity,
//         addressDistrict: addressDistrict,
//         notification: notification,
//         member: member,
//     }
//     if (name && email && password && confirm && phone && address && addressCity && addressDistrict) {
//         alert('Đăng kí Thành Công')
//         localStorage.setItem(name, JSON.stringify(userName));
//         window.location = "http://127.0.0.1:5500/thuctapdoan2023/thuc-tap/dang-nhap/login.html";
//     } else {
//         alert('Vui Lòng Nhập Đủ Thông Tin')
//     }
// }



// ///////////////////ttsp//////
// let quantity = document.querySelector(".quantityValue").value;
// let quantityNumber = parseInt(quantity);

// function reduce() {
//     document.querySelector(".quantityValue").value = quantityNumber;
//     if (quantityNumber != 1) {
//         quantityNumber = quantityNumber - 1;
//     }
// }
// function increase() {
//     quantityNumber = quantityNumber + 1;
//     document.querySelector(".quantityValue").value = quantityNumber;
// }

////1 lay ra elm form
///2 check tren local
///them sp vao cart 

function addsp() {
    let cart = JSON.parse(localStorage.getItem("giohang"));

    let textTitle = document.querySelector(".right-head h1").innerText;
    // let ktt = 0
    if (cart == null) {
        console.log('khong co sp');
    }
    ////check xem co sp trong gh khong
    for (let i = 0; i < cart.length; i++) {
        if (textTitle == cart[i][1]) {
            let slsp = cart[i][3];
            slsp += 1;
            localStorage.getItem("cart",JSON.stringify(cart))
        }
        // addmycart()
    };
}