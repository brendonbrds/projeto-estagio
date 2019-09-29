<script src="models/read-teste.js"></script>
<div class="content-consultas">
    <div class="container">
        <div class="row" style="display:flex;flex-direction:row;flex-wrap:wrap;align-items: center;justify-content: space-between;">
            <div class="col s6">
                <button class="waves-effect waves-light btn" id="listar">listar</button>
                <div id="loading"></div>
            </div>
            <div class="col s6">
                <nav>
                    <div class="nav-wrapper">
                        <div class="input-field">
                            <input id="search" type="search" placeholder="Pesquisar" required>
                            <label class="label-icon" for="search"><i class="material-icons" style="color:#263238">search</i></label>
                            <i class="material-icons i-clear">close</i>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <div id="listview"></div>
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