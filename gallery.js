$(document).ready(function() {
  $("#one").click(function() {
    $("#images").empty();
    for (var i = 0; i < piclist[0].length; i++) {
        console.log("hi")
        $("#images").append("<img src='" + baseurl + piclist[0][i][1] + "'>")
    }
  })
  $("#two").click(function() {
    $("#images").empty();
    for (var i = 0; i < piclist[0].length; i++) {
        console.log("hi")
        $("#images").append("<img src='" + baseurl + piclist[1][i][1] + "'>")
    }
  })
  $("#three").click(function() {
    $("#images").empty();
    for (var i = 0; i < piclist[0].length; i++) {
        console.log("hi")
        $("#images").append("<img src='" + baseurl + piclist[2][i][1] + "'>")
    }
  })

})
