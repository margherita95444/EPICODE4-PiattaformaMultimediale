var aaudio = document.getElementById("myaudio")

$(document).ready(function () {
    $.ajax({
        url: "media.json",
        type: "get",
        dataType: "json",
        success: function (data) {
            var oggvideo = data.video;
            var oggaudio = data.audio; 
        
            $.each(oggvideo, function (i, el) {
                var titolov = el.title;
                var filev = el.file;
            
                $('ul:last').append("<li class='list-group-item' ><a href= 'assets/video/"+ filev + "'>" + titolov + "</a></li>");
            
                $('ul:last a').click(function(event) {
                    event.preventDefault();
                    var media = $(this).attr("href");  
                    console.log(media);                
                    
                    var vvideo = $("#myvideo");
                    vvideo.attr('src', media);    
                    document.getElementById('myvideo').play();  
                })
            });
            $.each(oggaudio, function (i, el) {
                var titoloa = el.title;
                var filea = el.file;
            
            $('ul:first').append("<li class='list-group-item'><a href= 'assets/audio/" + filea + "'>" + titoloa + "</a></li>");
            
            $('ul:first a').click(function(event) {
                event.preventDefault();
                var music = $(this).attr("href");  
                console.log(music);                
                
                var aaudio = $("#myaudio");
                aaudio.attr('src', music);  
                document.getElementById('myaudio').play();  
            })
        
            });
        }
    })
});


