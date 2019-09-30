// medicos - combo1
$(document).ready(function () {
    $("select[name='combo_m']").change(function () {
        var combom = $(this).val();
        var url = "http://167.71.177.248:3333/medico?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2OTcwODgwNH0.dqkfpzlv5I-uph_NcxkHRNCFHR_mwfcE0i-zID3BPOc";
        $.getJSON(
            url, {
                combom: combom
            },
            function (data) {
                var option = new Array();
                resetCombom('combo1');
                $.each(data, function (i, obj) {
                    console.log(data);

                    option[i] = document.createElement('option'); //criando o option
                    $(option[i]).attr({
                        value: obj.id
                    }); //colocando o value no option
                    $(option[i]).append(obj.nome); //colocando o 'label'

                    $("select[name='combo1']").append(option[i]); //jogando um à um os options no próximo combo
                });
            }
        );
    });
});

function resetCombom(cm) {
    $("select[name='" + cm + "']").empty();
    var option = document.createElement('option');
    $(option).attr({
        value: "0"
    });
    $(option).append('Escolher');
    $("select[name='" + cm + "']").append(option);
    $("select[name='" + cm + "']").css("display", "block");
    $("select[name='combo_m']").css("display", "none");

}
// pacientes - combo2
$(document).ready(function () {
    $("select[name='combo_p']").change(function () {
        var combop = $(this).val();
        // alert(combop);
        var url = "http://167.71.177.248:3333/paciente?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2OTcwODgwNH0.dqkfpzlv5I-uph_NcxkHRNCFHR_mwfcE0i-zID3BPOc";
        $.getJSON(
            url, {
                combop: combop
            },
            function (data) {
                var option = new Array();
                resetCombo('combo2');
                $.each(data, function (i, obj) {
                    console.log(data);

                    option[i] = document.createElement('option'); //criando o option
                    $(option[i]).attr({
                        value: obj.id
                    }); //colocando o value no option
                    $(option[i]).append(obj.nome); //colocando o 'label'

                    $("select[name='combo2']").append(option[i]); //jogando um à um os options no próximo combo
                });
            }
        );
    });
});

function resetCombo(cp) {
    $("select[name='" + cp + "']").empty();
    var option = document.createElement('option');
    $(option).attr({
        value: "0"
    });
    $(option).append('Escolher');
    $("select[name='" + cp + "']").append(option);
    $("select[name='" + cp + "']").css("display", "block");
    $("select[name='combo_p']").css("display", "none");

}