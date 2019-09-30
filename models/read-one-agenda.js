$(document).ready(function () {
    $("#listar_with_code").click(function () {
        $("#loading2").text('Loading...');
        var code = $("#search").val();
        var url = "http://167.71.177.248:3333/agenda/" + code + "?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2OTcwODgwNH0.dqkfpzlv5I-uph_NcxkHRNCFHR_mwfcE0i-zID3BPOc";
        if (code != "" & code > 0) {
            $.getJSON(url, function (result) {
                console.log(result);
                $.each(result, function (i, item) {
                    ativo = item.ativa;
                    var id = item.id;
                    var dataHora = item.data_hora;
                    var medico = item.medico;
                    var esp = item.especialidade;
                    var paciente = item.paciente;
                    var atendido = item.atendido;
                    //var mtv_cancel = item.motivo_cancelamento;
                    // motivo de n cancelamento seria o pq n foi a consulta na data marcada sem aviso previo

                    var data =
                        "ID:<br>" + "<input type='text' class='inpCor' id='idItem' style='color:#626262;background:#fafafa' value='" + id + "' " + "readonly />" + "<br><br>" +
                        "<b>Data e hora:</b><br>" + "<input type='text' class='inpCor' id='dtime' style='color:#626262' value='" + dataHora + "' " + "readonly />" + "<br><br>" +
                        "<b>Medico:</b><br>" + "<input type='text' class='inpCor' id='med' style='color:#626262' value='" + medico + "' " + "readonly />" + "<br><br>" +
                        "<b>Especialidade:</b><br>" + "<input type='text' class='inpCor' id='espec' style='color:#626262' value='" + esp + "' " + "readonly />" + "<br><br>" +
                        "<b>Paciente:</b><br>" + "<input type='text' class='inpCor' id='pac' style='color:#626262' value='" + paciente + "' " + "readonly />" + "<br><br>" +
                        "Opções" +
                        "<p><label><input type='checkbox' id='check' value='"+atendido+"' /><span>Realizado</span></label>&nbsp;&nbsp;<a class='waves-effect waves-teal btn-flat' id='save'>salvar</a></p>";

                    result = data;

                });
                $("#loading2").text('');
                // exibe o content sómente se a var 'flag' ativo for true
                // if (ativo === true) {
                //     $("#listview").html("<h6 style='color:#454545'>Encontrado: </h6>" + result);
                // }
                $("#listview").html("<h6 style='color:#454545'>Encontrado: </h6>" + result);
                $("#del_agend, #cancel_agend").css("display", "inline-block");
                $(".inpCor").css("border", "1px solid #83b582");
            });
        } else if (code == "") {
            $("#loading2").text('');
            $("#error").text("Preencha o campo");

        } else {
            $("#loading2").text('');
            $("#error").text("Valor inválido!");
        }
    });
});