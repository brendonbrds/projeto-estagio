$(document).ready(function () {
    $("#cancel_agend").click(function () {
        var id = $("#idItem").val();
        var cancelado = $("#mtv-cancel").val();
        var dataUrl = "&motivo_cancelamento=" + cancelado;

        if (
            $.trim(id).length > 0 & $.trim(cancelado).length > 0
        ) {
            $.ajax({
                type: "POST",
                url: "http://167.71.177.248:3333/agenda/" + id+ dataUrl+"&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2OTcwODgwNH0.dqkfpzlv5I-uph_NcxkHRNCFHR_mwfcE0i-zID3BPOc",
                data: dataUrl,
                dataType: "html",
                crossDomain: true,
                cache: false,
                beforeSend: function () {
                    $("#loading_upagend").text('Aguarde...');
                },
                success: function (result) {
                    $("#result_upagend").html(result);
                },
                error: function (result) {
                    console.log(result);
                },
                complete: function () {
                    $("#loading_upagend").text('')
                }
            });
        }
        return false;
    });
});