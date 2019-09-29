$(document).ready(function () {
    $("#listar").click(function () {
        $("#loading").text('Loading...');
        var content = "";
        var url = "http://167.71.177.248:3333/agenda?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2OTcwODgwNH0.dqkfpzlv5I-uph_NcxkHRNCFHR_mwfcE0i-zID3BPOc";
        $.getJSON(url, function (data) {
            console.log(data);
            $.each(data, function (i, item) {
                //var ativo deve ser global
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
                content += "<ul style='background:#f2f2f2'>";
                content += "<li>" + "<b>ID:</b> " + id + "</li>";
                content += "<li>" + "<b>Data e hora:</b> " + dataHora + "</li>";
                content += "<li>" + "<b>Medico:</b> " + medico + "</li>";
                content += "<li>" + "<b>Especialidade:</b> " + esp + "</li>";
                content += "<li>" + "<b>Paciente:</b> " + paciente + "</li>";
                if (atendido === true) {
                    content += "<li>" + "<b>Atendido:</b> Sim</li>";
                } else {
                    content += "<li>" + "<b>Atendido:</b> Não</li>";
                }
                if ($.trim(mtv_cancel).length > 0) {
                    content += "<li>" + "<b>Motivo do cancelamento:</b> " + mtv_cancel + "</li>";
                }
                if ($.trim(mtv_natendido).length > 0) {
                    content += "<li>" + "<b>Motivo de não atendimento:</b> " + mtv_natendido + "</li>";
                }
                content += "</ul>";

            });
            $("#loading").text('');
            // exibe o content sómente se a var 'flag' ativo for true
            if (ativo === true) {
                $("#listview").html("<h6 style='color:#454545'>Encontrados: </h6>" + content);
            }
        });

    });
});