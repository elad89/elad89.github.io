
$(function () {
    $.ajax({
        beforeSend: function(request) {
            request.setRequestHeader("secret-key", '$2a$10$HYtp8Zg/dzKzjgUs7Xwjw.uDNtu/yMHkc7DkHq3OJGRZVta3ICVsq');
        },
        
        dataType: "json",
        url: "https://api.jsonbin.io/b/5d19d30953e7950e4f9652e3",
        success: function(data) {
            let list = $('#hexGrid');
            
            $.each(data.contains, function(i,value) {
                list.append($('<li class="hex ' + value.roles + '"><div class="hexIn"><a class="hexLink" href="' + value.link + '"><div class="img" </div><h1 id="demo1">' + value.title + '</h1></div><p id="demo2">' + value.category + ' | ' +  value.topic + '<br /><br />' + value.description + '<br /><br />' + value.duration + '</p></li></a>'))
            });
        }
    });

    $('#click-me').click(function() {
        var height = $("#this").height();
        if( height > 0 ) {
            $('#this').css('height','0');
        } else {
            var clone = $('#this').clone()
                        .css({'position':'absolute','visibility':'hidden','height':'auto'})
                        .addClass('slideClone')
                        .appendTo('body');
            
            var newHeight = $(".slideClone").height();
            $(".slideClone").remove();
            $('#this').css('height',newHeight + 'px');
        }
    });
});