function getText() {
  const xhttp = new XMLHttpRequest();

  if (xhttp) {
    const container = document.getElementById("ajax-text");
    xhttp.open("GET", "/tugas-07/content/text.html");
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 1) {
        container.innerHTML = `Loading...`;
      }
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          container.innerHTML = xhttp.responseText;
        } else {
          container.innerHTML = xhttp.statusText;
        }
      }
    };
    xhttp.send(null);
  }
}

function getFakultas() {
  const xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    const jsonResponse = JSON.parse(this.responseText);
    let html = `<option label="Pilih Fakultas" hidden></option>`;
    let idx = 0;
    for (let x of Object.keys(jsonResponse)) {
      html += `<option value='${idx}'>${x}</option>`;
      idx++;
    }
    document.getElementById("select-fakultas").innerHTML = html;
    document.getElementById(
      "select-departemen"
    ).innerHTML = `<option label="Pilih Departemen" hidden></option>`;
  };
  xhttp.open("GET", "/tugas-07/content/fakultas.json", true);
  xhttp.send();
}

function getDept() {
  let fakultas = document.getElementById("select-fakultas").value;
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const jsonResponse = JSON.parse(this.responseText);
    let html = `<option label="Pilih Departemen" hidden></option>`;
    for (let x of Object.values(jsonResponse)[fakultas]) {
      html += `<option>${x}</option>`;
    }
    document.getElementById("select-departemen").innerHTML = html;
  };
  xhttp.open("GET", "/tugas-07/content/fakultas.json", true);
  xhttp.send();
}
