let modal = document.getElementById("Modal");
let cerrarModal = document.getElementById("cerrarModal");

cerrarModal.addEventListener("click", cerrar);
        function cerrar(){
            modal.close();
        }

        function abrir(){
            modal.showModal();
        }

        abrir();