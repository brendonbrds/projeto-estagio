$(document).ready(function () {
    $("#listar").click(function () {
        $("#loading").text('Loading...');
        var content = "";
        var url = "http://167.71.177.248:3333/medico?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2OTcwODgwNH0.dqkfpzlv5I-uph_NcxkHRNCFHR_mwfcE0i-zID3BPOc";
        $.getJSON(url, function (data) {
            console.log(data);
            $.each(data, function (i, item) {
                var id = item.id;
                var nome = item.nome;
                var esp = item.especialidade;
                var cod = item.codigo;
                content += "<ul style='background:#f2f2f2'>";
                content += "<li>" + "<strong>Id:</strong> " + id + "</li>";
                content += "<li>" + "<strong>Nome:</strong> " + nome + "</li>";
                content += "<li>" + "<strong>Especialidade:</strong> " + esp + "</li>";
                content += "<li>" + "<strong>cod:</strong> " + cod + "</li>";
                content += "</ul>";

            });
            $("#loading").text('');
            $("#listview").html(content);
        });

    });
});