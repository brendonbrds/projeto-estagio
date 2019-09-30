<div class="content-agenda">
    <div class="container">

        <div class="row">
            <h5>Faça um Agendamento!</h5>
            <div class="col s12">

                <p>
                    <label>Selecione um Medico</label>
                    <select class="browser-default">
                        <option value="" disabled selected>Escolher</option>
                        <option value="1">Option 1</option>
                    </select>
                </p>

                <p>
                    <label>Selecione um Paciente</label>
                    <select class="browser-default">
                        <option value="" disabled selected>Escolher</option>
                        <option value="1">Option 1</option>
                    </select>
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