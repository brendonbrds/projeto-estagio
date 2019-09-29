$(document).ready(function () {
    $("#listar").click(function () {
        $("#loading").text('Loading...');
        var content = "";
        var url = "http://167.71.177.248:3333/agenda?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2OTcwODgwNH0.dqkfpzlv5I-uph_NcxkHRNCFHR_mwfcE0i-zID3BPOc";
        $.getJSON(url, function (data) {
            console.log(data);
            $.each(data, function (i, item) {
                var dataHora = item.data_hora;
                var medico = item.medico;
                var esp = item.especialidade;
                var paciente = item.paciente;
                var ativo = item.ativa;
                var atendido = item.atendido;
                var mtv_cancel = item.motivo_cancelamento;
                var mtv_natendido = item.motivo_nao_atendimento;
                // motivo de n cancelamento seria o pq n foi a consulta na data marcada sem aviso previo
                content += "<ul style='background:#f2f2f2'>";
                content += "<li>" + "<strong>Data e hora:</strong> " + dataHora + "</li>";
                content += "<li>" + "<strong>Medico:</strong> " + medico + "</li>";
                content += "<li>" + "<strong>Especialidade:</strong> " + esp + "</li>";
                content += "<li>" + "<strong>Paciente:</strong> " + paciente + "</li>";
                if (atendido === true) {
                    content += "<li>" + "<strong>Atendido:</strong> Sim</li>";
                } else {
                    content += "<li>" + "<strong>Atendido:</strong> Não</li>";
                }
                if ($.trim(mtv_cancel).length > 0) {
                    content += "<li>" + "<strong>Motivo do cancelamento:</strong> " + mtv_cancel + "</li>";
                }
                if ($.trim(mtv_natendido).length > 0) {
                    content += "<li>" + "<strong>Motivo de não atendimento:</strong> " + mtv_natendido + "</li>";
                }
                content += "</ul>";

            });
            $("#loading").text('');
            $("#listview").html(content);
        });

    });
});