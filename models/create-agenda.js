$(document).ready(function () {
    $("#insert_agend").click(function () {
        var medico = $("#combo_m").val();
        var paciente = $("#combo_p").val();
        var data = $("#data").val();
        var hora = $("#hora").val();
        var datetime = data + "_" + hora;
        var dataUrl = "medico=" + medico + "&paciente=" + paciente + "&data_hora=" + datetime;

        if (
            $.trim(medico).length > 0 & $.trim(paciente).length > 0 & $.trim(data).length > 0 &
            $.trim(hora).length > 0
        ) {
            $.ajax({
                type: "POST",
                url: "http://167.71.177.248:3333/agenda?" + dataUrl + "&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2OTcwODgwNH0.dqkfpzlv5I-uph_NcxkHRNCFHR_mwfcE0i-zID3BPOc",
                data: dataUrl,
                dataType: "html",
                crossDomain: true,
                cache: false,
                beforeSend: function () {
                    $("#loading_agend").text('Enviando...');
                },
                success: function (result) {
                    $("#result_agend").html(result);
                },
                error: function (result) {
                    console.log(result);
                },
                complete: function () {
                    $("#loading_agend").text('')
                }
            });
        }
        return false;
    });
});