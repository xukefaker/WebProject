
$(function () {
  let accounts = ["root123456", "周易123456", "亦歌123456", "高中123456"];
  let psds = ["123456", "123456", "123456", "123456"];

  $("#signIn").click(function () {
    let username = $("#username").val();
    let password = $("#password").val();

    if (!username) {
      $("#msg").text("您未输入用户名！");
      showAlert("您未输入用户名！");
      return;
    }
    if (!password) {
      $("#msg").text("您未输入密码！");
      showAlert("您未输入密码！");

      return;
    }

    // if (username.length < 8) {
    //   $("#msg").text("用户名长度过短！");
    //   showAlert("用户名长度过短！");
    //   return;
    // }

    // if (username.length > 15) {
    //   $("#msg").text("用户名长度过长！");
    //   return;
    // }

    axios({
      method: "POST",
      url: "http://127.0.0.1:8888/user/doLogin",
      data: {
        name: username,
        password: password,
      },
    }).then(
      (response) => {
        console.log(response.data.code);

        let data = response.data;
        $("#msg").text(data.message);
        showAlert(data.message);
        if (data.code == 1) {
          localStorage.setItem("username", username);
          localStorage.setItem("token", data.object.token);
          url = "index.html"; //此处拼接内容
          location.replace(url);
        }
        return response.data;
      },
      (error) => {
        $("#msg").text(error.message);
        showAlert(error.message);
      }
    );

    //  for(let i=0;i<accounts.length;i++){
    //      if(accounts[i]==username){
    //        hasAccount=true;
    //        if(psds[i]==password){
    //         $("#msg").text("登录成功！")
    //         //H5中Web Storage中的localStorage对象
    //         localStorage.setItem("username",username);
    //         url = "index.html";//此处拼接内容
    //         window.location.href = url;

    //         return;
    //        }else{
    //         $("#msg").text("密码错误！")
    //         return;
    //        }
    //      }

    //  }

    //  $("#msg").text("账号不存在！")
  });
});
