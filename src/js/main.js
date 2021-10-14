//funcion mensaje de warning
function cuidado() {
  Swal.fire({
    title: "¡Cuidado!",
    text: "No podrás volver atrás",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Borrado!", "Tu archivo ha sido borrado", "success");
    }
  });
}


//funcion de mensaje de succes
function vamos() {
  Swal.fire({
    icon: "success",
    title: "¡Vamos!",
    text: "Todo a salido bien :)",
    confirmButtonText: "Cerrar pestaña",
  });
}

//funcion mensaje danger
function upss() {
  Swal.fire({
    icon: "error",
    title: "Upss",
    text: "Algo ha pasado",

    showConfirmButton: false,
    timer: 1500,
  });
}
