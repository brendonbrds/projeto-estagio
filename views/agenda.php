<script src="models/create-agenda.js"></script>
<script src="models/load_data.js"></script>
<div class="content-main">
    <div class="container">

        <div class="row">
            <h5>Faça um Agendamento!</h5>
            <div class="col s12">

                <p>
                    <label>Selecione um Médico</label>
                    <select name="combo_m" class="browser-default">
                        <option value="" disabled selected>Selecionar</option>
                        <option value="">Carregar Lista</option>
                    </select>
                    <select name="combo1" class="browser-default" style="display:none"></select>
                </p>

                <p>
                    <label>Selecione um Paciente</label>
                    <select name="combo_p" class="browser-default">
                        <option value="" disabled selected>Selecionar</option>
                        <option value="">Carregar Lista</option>
                    </select>
                    <select name="combo2" class="browser-default" style="display:none"></select>
                </p>

                <div class="input-field col s6">
                    <input type="date" name="data">
                    <input type="time" name="hora">
                    <label>Data e Hora</label>
                    <button class="waves-effect waves-light btn" id="new_agend">Pronto</button>
                </div>

                <div id="loading_agend"></div>
                <a class="waves-effect waves-light btn-small" id="update" style="display: none"><i class="material-icons left">edit</i>Editar</a>
                <a class="waves-effect waves-light btn-small" id="cancel" style="display: none"><i class="material-icons left">cancel</i>Cancelar agendamento</a>
            </div>
        </div>
    </div>
</div>