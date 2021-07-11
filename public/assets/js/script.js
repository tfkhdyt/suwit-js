var skorKamu = 0;
var skorBot = 0;
var textKamu = document.getElementById('textKamu');
var textBot = document.getElementById('textBot');

textKamu.style.color = 'blue';
textBot.style.color = 'blue';

function check(user) {
  var com = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  var warna;
  switch (com) {
    case 1:
      com = 'gunting';
      warna = 'danger';
      icon = 'hand-scissors';
      break;
    case 2:
      com = 'kertas';
      warna = 'success';
      icon = 'hand-paper';
      break;
    case 3:
      com = 'batu';
      warna = 'primary';
      icon = 'hand-rock';
      break;
  }
  switch (user) {
    case 'gunting':
      warnaUser = 'danger';
      iconUser = 'hand-scissors';
      break;
    case 'kertas':
      warnaUser = 'success';
      iconUser = 'hand-paper';
      break;
    case 'batu':
      warnaUser = 'primary';
      iconUser = 'hand-rock';
      break;
  }
  var hasil = '';
  if (user == com) {
    hasil = 'SERI'
  } else if (user == 'gunting') {
    hasil = (com == 'kertas') ? 'MENANG': 'KALAH';
  } else if (user == 'kertas') {
    hasil = (com == 'gunting') ? 'KALAH': 'MENANG';
  } else if (user == 'batu') {
    hasil = (com == 'gunting') ? 'MENANG': 'KALAH';
  }
  var elementHasil = document.getElementById('hasil');
  var warnaAlert;
  
  switch (hasil) {
    case 'MENANG':
      warnaAlert = 'success'
      skorKamu++;
      break;
    case 'KALAH':
      warnaAlert = 'danger'
      skorBot++;
      break;
    case 'SERI':
      warnaAlert = 'primary'
      break;
  }
  
  var skor = document.getElementById('skor');
  skor.innerHTML = `${skorKamu} - ${skorBot}`;
  if (skorKamu > skorBot){
    textKamu.style.fontWeight = 'bold';
    textBot.style.fontWeight = '400';
    textKamu.style.color = 'green';
    textBot.style.color = 'red';
  }else if (skorKamu < skorBot){
    textBot.style.fontWeight = 'bold';
    textKamu.style.fontWeight = '400';
    textBot.style.color = 'green';
    textKamu.style.color = 'red';
  }else{
    textBot.style.fontWeight = null;
    textKamu.style.fontWeight = null;
    textBot.style.color = 'blue';
    textKamu.style.color = 'blue';
  }
  
  elementHasil.innerHTML = `
  <div class="alert alert-${warnaAlert} pt-3 pb-2 alert-dismissible fade show" role="alert">
    <div class="ms-4">
      Kamu memilih <span class="badge bg-${warnaUser}"><i class="fa fa-${iconUser}"></i> ${user}</span><br>
      Bot memilih <span class="badge bg-${warna}"><i class="fa fa-${icon}"></i> ${com}</span>
      <h5>ANDA ${hasil}!</h5>
      <div type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></div>
    </div>
  </div>
  `;
}

function gunting() {
  var user = 'gunting';
  check(user);
}
function kertas() {
  var user = 'kertas';
  check(user);
}
function batu() {
  var user = 'batu';
  check(user);
}


