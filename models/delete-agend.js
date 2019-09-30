$(document).ready(function() {
    $("#del_agend").click(function() {
        var id = $("#idItem").val();
            $.ajax({
                type: "GET",
                url: "http://167.71.177.248:3333/agenda/"+id+"?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2OTcwODgwNH0.dqkfpzlv5I-uph_NcxkHRNCFHR_mwfcE0i-zID3BPOc",
                dataType: "html",
                crossDomain: true,
                cache: false,
                beforeSend: function () {
                    $("#result_del").text('Apagando...');
                },
                success: function (result) {
                    $("#result_del").html(result);
                },
                error: function (result) {
                    console.log(result);
                },
                complete: function () {
                    $("#result_del").text('')
                }
            }); 
            
        return false;
    });
});