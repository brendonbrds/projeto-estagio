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
                    var mtv_cancel = item.motivo_cancelamento;
                    var mtv_natendido = item.motivo_nao_atendimento;
                    // motivo de n cancelamento seria o pq n foi a consulta na data marcada sem aviso previo

                    var data =
                        "ID:<br>" + "<input type='text' class='inpCor' id='idItem' style='color:#626262' value='" + id + "' " + "readonly />" + "<br><br>"
                        + "<b>Data e hora:</b><br>" + "<input type='text' class='inpCor' id='titleUpdate' style='color:#626262' value='" + dataHora + "' " + "/>" + "<br><br>"
                        + "<b>Medico:</b><br>" + "<input type='text' class='inpCor' id='bodyUpdate' style='color:#626262' value='" + medico + "' " + "/>" + "<br><br>"
                        + "<b>Especialidade:</b><br>" + "<input type='text' class='inpCor' id='authorUpdate' style='color:#626262' value='" + esp + "' " + "/>" + "<br><br>"
                        + "<b>Paciente:</b><br>" + "<input type='text' class='inpCor' id='authorUpdate' style='color:#626262' value='" + paciente + "' " + "/>" + "<br><br>";
                        

                    if (atendido === true) {
                        + "<b>Atendido:</b><br>" + "<input type='text' class='inpCor' id='authorUpdate' style='color:#626262' value='Sim' " + "/>" + "<br><br>"
                    } else {
                        + "<b>Atendido:</b><br>" + "<input type='text' class='inpCor' id='authorUpdate' style='color:#626262' value='Nao' " + "/>" + "<br><br>"
                    }
                    if ($.trim(mtv_cancel).length > 0) {
                        + "<b>Motivo do cancelamento:</b><br>" + "<input type='text' class='inpCor' id='authorUpdate' style='color:#626262' value='"+mtv_cancel+"' " + "/>" + "<br><br>"
                    }
                    if ($.trim(mtv_natendido).length > 0) {
                        + "<b>Motivo do cancelamento:</b><br>" + "<input type='text' class='inpCor' id='authorUpdate' style='color:#626262' value='"+mtv_natendido+"' " + "/>" + "<br><br>";
                    }
                    result = data;

                });
                $("#loading2").text('');
                // exibe o content sómente se a var 'flag' ativo for true
                // if (ativo === true) {
                //     $("#listview").html("<h6 style='color:#454545'>Encontrado: </h6>" + result);
                // }
                $("#listview").html("<h6 style='color:#454545'>Encontrado: </h6>" + result);
                $("#update, #cancel").css("display", "inline-block");
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