$(document).ready(function () {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    // Kiểm tra form đăng ký

    function kiemTraEmailDK() {
        if ($("#email_dk").val() == "") {
            $("#tbemail_dk").html("* Bắt buộc nhập");
            return false;
        }
        let mail = $("#email_dk").val();
        let regexmail = /^([a-zA-Z0-9_])+\@(([a-zA-Z])+\.)com$/;
        if (!regexmail.test(mail)) {
            $("#tbemail_dk").html("Ví dụ: nhquan2622003@gmail.com");
            return false;
        } else {
            $("#tbemail_dk").html("*");
            return true;
        }
    }
    $("#email_dk").blur(kiemTraEmailDK);

    function kiemTraUserName() {
        if ($("#username_dk").val() == "") {
            $("#tbusername_dk").html("* Bắt buộc nhập");
            return false;
        }
        let hoten = $("#username_dk").val();
        let regexHoten = /^[A-Za-z0-9_\.]{6,35}$/;
        if (!regexHoten.test(hoten)) {
            $("#tbusername_dk").html("Bắt đầu là kí tự và tối thiểu 6 kí tự");
            return false;
        } else {
            $("#tbusername_dk").html("*");
            return true;
        }
    }
    $("#username_dk").blur(kiemTraUserName);

    function kiemTraSDT() {
        if ($("#tel_dk").val() == "") {
            $("#tbtel_dk").html("* Bắt buộc nhập");
            return false;
        }
        let sodt = $("#tel_dk").val();
        let regexSdt = /^0[345789]\d{8}/;
        if (!regexSdt.test(sodt)) {
            $("#tbtel_dk").html("Gồm 10 số và có các đầu số 03, 04, 05, 07, 08, 09");
            return false;
        } else {
            $("#tbtel_dk").text("*");
            return true;
        }
    }
    $("#tel_dk").blur(kiemTraSDT);

    function kiemTraMK() {
        let mk = $("#pass_dk").val();
        let mauKT = /[a-zA-Z0-9]{6,}/;
        if (!mauKT.test(mk)) {
            $("#tbpass_dk").html("Ít nhất 6 kí tự");
            return false;
        }
        $("#tbpass_dk").text("*");
        return true;
    }
    $("#pass_dk").blur(kiemTraMK);

    function kiemTraNLMK() {
        if ($("#verify-pass_dk").val() != $("#pass_dk").val()) {
            $("#tbv-pass_dk").html("Mật khẩu không khớp, nhập lại");
            return false;
        }
        $("#tbv-pass_dk").html("*");
        return true;
    }
    $("#verify-pass_dk").blur(kiemTraNLMK);


    var i = 1;
    $("#Save").click(function () {
        if (kiemTraEmailDK() == true && kiemTraUserName() == true && kiemTraSDT() == true && kiemTraMK() == true && kiemTraNLMK() == true) {
            trnew = "<tr><th>" + (i++) + "</th><th>" + $("#username_dk").val() + "</th><th>" + $("#email_dk").val() + "</th><th>" + $("#tel_dk").val() + "</th><th>" + $("#pass_dk").val() + "</th></tr>",
                $("#danhSach").append(trnew);
                alert("Đăng ký thành công, xem thông tin bên dưới!");
        }
    });



    // Kiem tra form đăng nhập

    function kiemTraEmailDN() {
        let mail = $("#email_dn").val();
        var regexmail = /^([a-zA-Z0-9_])+\@(([a-zA-Z])+\.)com$/;
        if (!regexmail.test(mail)) {
            $("#tbemail_dn").html("Ví dụ: nhquan2622003@gmail.com");
            return false;
        }
        $("#tbemail_dn").html("*");
        return true;
    }
    $("#email_dn").blur(kiemTraEmailDN);

    function kiemTraMatKhauDN() {
        let mauKT = /[a-zA-Z0-9]{6,}/;
        if (!mauKT.test($("#pass_dn").val())) {
            $("#tbpass_dn").text("Tối thiểu 6 ký tự");
            return false;
        }
        $("#tbpass_dn").html("");
        return true;
    }
    $("#pass_dn").blur(kiemTraMatKhauDN);

    $('#btnDN').click(function(){
        if (kiemTraEmailDN() == true && kiemTraMatKhauDN() == true)
        alert("Đăng nhập thành công");
    })
});





