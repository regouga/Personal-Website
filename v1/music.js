$(document).ready(function() {

    $.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=regouga&api_key=0486b81ad30a89efc0ad41b0b65dae95&limit=2&format=json&callback=?", function(data) {

        var html = ''; 
        var counter = 1; 
        $.each(data.recenttracks.track, function(i, item) {
            if(counter == 1) {
                html += 'Just listened to <span><a href="' + item.url + '" target="_blank">' + item.name + '</a> by ' + item.artist['#text'] + '</span>';
            } 
            counter++ 
        }); 
        $('.listening-to').append(html); 
    });

}); 