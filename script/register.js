$(function () {
  let accounts = ["root123456", "周易123456", "亦歌123456", "高中123456"];
  let psds = ["123456", "123456", "123456", "123456"];

  $("#signUp").click(function () {
    let username = $("#username").val();
    let password = $("#password").val();
    let password2 = $("#password2").val();

    if (!username) {
      $("#msg").text("您未输入用户名！");
      return;
    }
    if (!password) {
      $("#msg").text("您未输入密码！");
      return;
    }

    // if (username.length < 8) {
    //     $("#msg").text("用户名长度过短！")
    //     return;
    // }

    // if (username.length > 15) {
    //     $("#msg").text("用户名长度过长！")
    //     return;
    // }

    // if (password.length < 6) {
    //     $("#msg").text("密码长度过短！")
    //     return;
    // }

    // if (password.length > 8) {
    //     $("#msg").text("密码长度过长！")
    //     return;
    // }
    if (!password2) {
      $("#msg").text("请输入确认密码！");
      return;
    }

    if (password != password2) {
      $("#msg").text("两次密码输入不一致！");
      return;
    }

    axios({
      method: "POST",
      url: "http://127.0.0.1:8888/user/addOrUpdateUser",
      data: {
        userName: username,
        password: password,
      },
    }).then(
      (response) => {
        let data = response.data;
        $("#msg").text(data.message);
        showAlert(data.message);
        if (data.code == 1) {
          $("#msg").text("注册成功！请登录");
          url = "login.html"; //此处拼接内容
          location.replace(url);
        }
        return response.data;
      },
      (error) => {
        $("#msg").text(error.message);
        showAlert(error.message);
      }
    );

    $("#username").val("");
    $("#password").val("");
    $("#password2").val("");
  });
});
