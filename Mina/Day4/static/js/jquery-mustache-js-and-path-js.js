$.Mustache.options.warnOnMissingTemplates = true;
$.Mustache.load("templates/app.html").done(function() {
        Path.map("#/qrcode/").to(function() {
            App.canvas.html("").append($.Mustache.render("qrcode"));

       });
});