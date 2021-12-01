function getText() {
  const xhttp = new XMLHttpRequest();

  if (xhttp) {
    const container = document.getElementById("text-container");
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
    let html = `<option label="Pilih fakultas" hidden></option>`;
    let idx = 0;
    for (let x of Object.keys(jsonResponse)) {
      html += `<option value='${idx}'>${x}</option>`;
      idx++;
    }
    document.getElementById("fakultas").innerHTML = html;
    document.getElementById(
      "departemen"
    ).innerHTML = `<option label="Pilih fakultas terlebih dahulu" hidden></option>`;
  };
  xhttp.open("GET", "/tugas-07/content/fakultas.json", true);
  xhttp.send();
}

function getDept() {
  let fakultas = document.getElementById("fakultas").value;
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const myObj = JSON.parse(this.responseText);
    let html = `<option label="Pilih departemen" hidden></option>`;
    for (let x of Object.values(myObj)[fakultas]) {
      html += `<option>${x}</option>`;
    }
    document.getElementById("departemen").innerHTML = html;
  };
  xhttp.open("GET", "/tugas-07/content/fakultas.json", true);
  xhttp.send();
}
