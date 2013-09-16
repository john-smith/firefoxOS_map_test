var Main = {
    init: function() {
      Main.setupMap();
    },

    setupMap: function() {
        var watchID = navigator.geolocation.watchPosition(function(position) {
            document.getElementById("latlon").innerHTML = position.coords.latitude + ", " + position.coords.longitude;
            var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var opts = {
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: latlng
            };
            var map = new google.maps.Map(document.getElementById("map"), opts);
       });
    },
}

$(document).ready(function() {
  Main.init();
});
