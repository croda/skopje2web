//will be used later for responsiveness of map
var bigmapheight = 650;
var smallmapheight = 300;
var mapbreakwidth = 720;
var highzoom = 8;
var lowzoom = 7;
var initzoom;

//draw map
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
            }),
            latlng = L.latLng(41.996374, 21.428020);

        var map = L.map('lmap', {center: latlng, zoom: 13, hoverToWake: false,  layers: [tiles]});


        
                var myicon = L.DivIcon.extend({     
                iconSize: [50, 50]
         });

        //var eb = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/skopje.jpg);"><div/></div>'});
        

var gorki = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/skopje.jpg);"><div/></div>'}),
osten = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/skopje.jpg);"><div/></div>'}),
kamenimost = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/kamenimost.jpg);"><div/></div>'}),
MNT = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/mnt.jpg);"><div/></div>'}),
MNH = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/skopje.jpg);"><div/></div>'}),
MNB = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/MNB.jpg);"><div/></div>'}),
menada = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/skopje.jpg);"><div/></div>'}),
MOB = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/skopje.jpg);"><div/></div>'}),
ANU = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/skopje.jpg);"><div/></div>'}),
MKC = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/MKC.jpg);"><div/></div>'}), 
saem = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/saem.jpg);"><div/></div>'}),
bHills = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/skopje.jpg);"><div/></div>'}),
MKukja = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/MKukja.jpg);"><div/></div>'}),
ramstore = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/ramstore.jpg);"><div/></div>'}),
MGSK = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/skopje.jpg);"><div/></div>'}),
SZoo = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/skopje.jpg);"><div/></div>'}),
Luna = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/Luna.jpg);"><div/></div>'}),
filip2 = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/filip2.jpg);"><div/></div>'}),
kinoteka = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/citymall.jpg);"><div/></div>'}),
citymall = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/citymall.jpg);"><div/></div>'}),
skolka = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/skopje.jpg);"><div/></div>'}),
borist = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/skopje.jpg);"><div/></div>'}),
aquap = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/skopje.jpg);"><div/></div>'}),
palas = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/palas.jpg);"><div/></div>'}),
capitolm = new myicon({ html: '<div class="marker-icon-container"><div class="mrk-ico" style="background-image: url(assets/images/skopje.jpg);"><div/></div>'});

var ikoni = [osten, gorki, kamenimost, MNT, MNH, MNB, menada, MOB, ANU, MKC, saem, bHills, MKukja, ramstore, MGSK, SZoo, Luna, filip2, kinoteka, citymall, skolka, borist, aquap, palas, capitolm]
        var markers = L.markerClusterGroup();
        
        for (var i = 0; i < addressPoints.length; i++) {
            var a = addressPoints[i];
            var title = a[2];
	        var ikona = ikoni[i];
            var marker = L.marker(new L.LatLng(a[0], a[1]), {title: title, icon: ikona});
            marker.bindPopup(title);
            markers.addLayer(marker);
        }

        map.addLayer(markers);

L.control.locate({
    drawCircle: false,
    drawMarker: true,
    markerClass: L.marker,
    strings: {
        title: "Show me where I am !"
    }
}).addTo(map);

//for map responsiveness
map.on('resize', function (e) {
    if (e.newSize.x < mapbreakwidth) {
        map.setZoom(lowzoom);
        $("#map").css('height', smallmapheight);
    }
    if (e.newSize.x > mapbreakwidth) {
        map.setZoom(highzoom);
        $("#map").css('height', bigmapheight);
        $("#map").css('height', bigmapheight);
    }
});

