<script src="models/read-all-agenda.js"></script>
<script src="models/read-one-agenda.js"></script>
<div class="content-main">
    <div class="container">
        <h5>Agendamentos</h5>
        <div class="row" style="display:flex;flex-direction:row;flex-wrap:wrap;align-items: center;justify-content: space-between;">
            <div class="col s6">
                <button class="waves-effect waves-light btn" id="listar">listar todos</button>
                <div id="loading"></div>
            </div>
            <div class="col s6">
                <nav>
                    <div class="nav-wrapper">
                        <div class="input-field">
                            <input id="search" type="search" placeholder="Pesquisar com ID" required>
                            <label id="listar_with_code" class="label-icon" style="cursor:pointer" for="search"><i class="material-icons" style="color:#263238">search</i></label>
                            <i class="material-icons i-clear">close</i>
                        </div>
                    </div>
                </nav>
                <div id="loading2"></div>
                <div id="error"></div>                
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <div id="listview"></div>
                <a class="waves-effect waves-light btn-small" id="update" style="display: none"><i class="material-icons left">edit</i>Editar</a>
                <a class="waves-effect waves-light btn-small" id="cancel" style="display: none"><i class="material-icons left">cancel</i>Cancelar agendamento</a>
            </div>
        </div>
    </div>
</div>

<script>
    $(document).ready(function() {
        $(".i-clear").click(function() {
            $("#search").val("");
        });
    });
</script>