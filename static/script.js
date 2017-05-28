var residentDataGetter = function(resident) {
    $.getJSON(resident, function (response2) {
        var HTMLContent = "<tr class='resident_row'><td>";
        HTMLContent += response2.name;
        HTMLContent += "</td>";
        HTMLContent += "<td>";
        HTMLContent += response2.height/100 ;
        HTMLContent += " m</td>";
        HTMLContent += "<td>";
        HTMLContent += response2.mass;
        HTMLContent += " kg</td>";
        HTMLContent += "<td>";
        HTMLContent += response2.skin_color;
        HTMLContent += "</td>";
        HTMLContent += "<td>";
        HTMLContent += response2.hair_color;
        HTMLContent += "</td>";
        HTMLContent += "<td>";
        HTMLContent += response2.eye_color;
        HTMLContent += "</td>";
        HTMLContent += "<td>";
        HTMLContent += response2.birth_year;
        HTMLContent += "</td>";
        HTMLContent += "<td>";
        HTMLContent += response2.gender;
        HTMLContent += "</td></tr>";
        $('.resident_first_row').after(HTMLContent);
    });
};

$(".residents_btn").click(function(){
     $('.modal-title').empty();
     $('.resident_row').empty();
     var loopIndex = $(this).siblings().text();
     $.getJSON('//swapi.co/api/planets/', function(response) {
    var planets = response["results"];
    $.each(planets, function(index, planet) {
        if (loopIndex-1 === index) {
            $('.modal-title').html(planet.name);
             var residents = planet.residents;
             $.each(residents, function(index, resident) {
                 residentDataGetter(resident)
             });
        }
    });
 });
});

$('#btn_next').click(function(evt) {
    $('.planet_data').remove();
    evt.preventDefault();
    $.getJSON('//swapi.co/api/planets/', function(response) {
        var next_page = response["next"];
        $.getJSON(next_page, function(response) {
            console.log(response["results"])
        })

    });

})