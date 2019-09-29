<div class="tab">
  <button class="btn_back tablinks" onclick="openPage(event, 'home')"><i class="tiny material-icons">home</i></button>
  <button class="tablinks" onclick="openPage(event, 'consultas')">Consultas</button>
  <button class="tablinks" onclick="openPage(event, 'agenda')">Agenda</button>
</div>

<div id="consultas" class="tabcontent">
  <?php include "views/consultas.php" ?>
</div>

<div id="agenda" class="tabcontent">
  <?php include "views/agenda.php" ?>
</div>