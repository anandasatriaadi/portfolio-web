function validateForm() {
  toastr.options = {
    "positionClass": "toast-top-center",
    "showDuration": "500",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "100",
  }
  if( document.vaksinForm.nama.value == "" ) {
      toastr['warning']('Silahkan isi nama anda!', 'Warning!');
      document.vaksinForm.nama.focus() ;
      return false;
  }

  if(document.vaksinForm.nrp){
      if(document.vaksinForm.nrp.value == ""){
        toastr['warning']('Silahkan isi NRP anda!', 'Warning!');
          document.vaksinForm.nrp.focus();
          return false;
      }
      if(document.vaksinForm.nrp.value != "" && !/^[0-9]+$/.test(document.vaksinForm.nrp.value)){
        toastr['warning']('Formulir NRP harus diisi dengan angka!', 'Warning!');
          document.vaksinForm.nrp.focus() ;
          return false;
      }
  }
  
  if( document.vaksinForm.email.value == "" ) {
      toastr['warning']('Silahkan isi Email anda!', 'Warning!');
      document.vaksinForm.email.focus() ;
      return false;
  }

  if( document.vaksinForm.alamat.value == "" ) {
      toastr['warning']('Silahkan isi alamat anda!', 'Warning!');
      document.vaksinForm.alamat.focus() ;
      return false;
  }

  if( document.vaksinForm.jurusan.selectedIndex < 1 ) {
      toastr['warning']('Silahkan isi departemen anda!', 'Warning!');
      document.vaksinForm.jurusan.focus() ;
      return false;
  }

  if( document.vaksinForm.status_vaksin.selectedIndex < 1 ) {
      toastr['warning']('Silahkan isi status vaksinisasi anda!', 'Warning!');
      document.vaksinForm.status_vaksin.focus() ;
      return false;
  }

  toastr['success']('Data anda berhasil diunggah!', 'Berhasil!');
  document.vaksinForm.reset();
  return (false);
}
