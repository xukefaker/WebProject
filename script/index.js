$(function () {
  $("input").attr("data-role", "none"); //去除JQuery Mobile中的默认input样式

  $("#curUser").text(localStorage.getItem("username"));
  if(localStorage.getItem==null)location.replace("login.html");
});
