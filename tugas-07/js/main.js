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

function getBenua() {
  const xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    const jsonResponse = JSON.parse(this.responseText);
    let htmlText = `<option label="Pilih Benua" hidden></option>`;
    let index = 0;
    for (let x of Object.keys(jsonResponse)) {
      htmlText += `<option value='${index}'>${x}</option>`;
      index++;
    }
    document.getElementById("select-benua").innerHTML = htmlText;
    document.getElementById(
      "select-negara"
    ).innerHTML = `<option label="Pilih Negara" hidden></option>`;
  };
  xhttp.open("GET", "/tugas-07/content/continents.json", true);
  xhttp.send();
}

function getDept() {
  let benua = document.getElementById("select-benua").value;
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const jsonResponse = JSON.parse(this.responseText);
    let htmlText = `<option label="Pilih Negara" hidden></option>`;
    for (let x of Object.values(jsonResponse)[benua]) {
      htmlText += `<option>${x}</option>`;
    }
    document.getElementById("select-negara").innerHTML = htmlText;
  };
  xhttp.open("GET", "/tugas-07/content/continents.json", true);
  xhttp.send();
}
