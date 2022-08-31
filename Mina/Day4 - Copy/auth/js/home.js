
  $("#btn").on('click', function() {
    var data = parsedArr;
    var template = " Name: {{ name }} <br> Email: {{ email }} <br> Contact Number: {{ cnumber }} <br> Birthdate: {{ birthday }} <br> Age: {{ age }} ";
    var text = Mustache.render(template, data);

    $("#mypanel").html(text);
});