<script src="models/create-agenda.js"></script>
<script src="models/load_data.js"></script>
<div class="content-main">
    <div class="container">

        <div class="row">
            <h5>Faça um Agendamento!</h5>
            <div class="col s12">

                <form>
                    <p>
                        <label>Selecione um Médico</label>
                        <select name="combo_m" class="browser-default">
                            <option value="" disabled selected>Selecionar</option>
                            <option value="">Carregar Lista</option>
                        </select>
                        <select name="combo1" class="browser-default" id="combo_m" style="display:none"></select>
                    </p>

                    <p>
                        <label>Selecione um Paciente</label>
                        <select name="combo_p" class="browser-default">
                            <option value="" disabled selected>Selecionar</option>
                            <option value="">Carregar Lista</option>
                        </select>
                        <select name="combo2" class="browser-default" id="combo_p" style="display:none"></select>
                    </p>

                    <div class="input-field col s6">
                        <input type="date" name="data" id="data" required>
                        <input type="time" name="hora" id="hora" required>
                        <label>Data e Hora</label>
                        <button class="waves-effect waves-light btn" id="insert_agend">Pronto</button>
                        <button type="reset" class="waves-effect waves-light btn">Limpar</button>
                        <div id="loading_agend"></div>
                        <div id="result_agend"></div>
                    </div>
                </form>


                <a class="waves-effect waves-light btn-small" id="updatei" style="display: none"><i class="material-icons left">edit</i>Editar</a>
                <a class="waves-effect waves-light btn-small" id="canceli" style="display: none"><i class="material-icons left">cancel</i>Cancelar agendamento</a>
            </div>
        </div>
    </div>
</div>