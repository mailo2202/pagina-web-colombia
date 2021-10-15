<template>
  <!-- MODAL AGENDA TU DEMO AHORA -->
  <!-- Modal -->
  <div class="modal fade handelbay-modal" id="modal-demo" tabindex="-1" role="dialog" aria-labelledby="modal-demoLabel" style="">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div id="agendatudemo" style="">
          <div class="modal-header text-center">
            <h3 class="modal-title" style="color:black;font-family: inherit;" id="modal-demoLabel">
              Agenda tu DEMO ahora
            </h3>
          </div>
          <div class="modal-body">
            <p class="title-body">
              Ingresa tu correo electrónico empresarial y recibe la fecha y hora de tu DEMO
            </p>
            <div class="row">
              <div class="col-md-4 col-sm-4 col-xs-2">
                <div class="img-profile">
                  <img src="../assets/images/landing/handelbay/handelbay_agenda_profile.png" alt="">
                </div>
              </div>
              <div class="col-md-8 col-sm-8 col-xs-10">
                <form id="form_demo" class="form-valid">
                  <input type="hidden" id="token_rdstation" name="token_rdstation" value="04a3ede998e2464898b7b68c513486a3">
                  <input type="hidden" id="identificador" name="identificador" value="demo">
                  <div class="form-group">
                    <label for="name">
                      <span class="modal-title">Nombre completo de la empresa</span>
                      <input type="text" class="floating" name="name_demo" id="name_demo" minlength="3" required>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="" for="emailF"> <span>Tu correo electrónico empresarial</span>
                      <input type="email" class="floating" name="email_demo" id="email_demo" pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$" title="Correo inválido." required>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="" for="phone_demo" style="width: 85%">
                      <span> Número de contacto</span>
                      <input type="phone" class="floating" name="phone_demo" id="phone_demo" title="Teléfono de contacto inválido." required>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="" for="profiles">
                      <span>Selecciona el perfil</span>
                      <select type="select" class="floating" name="type_demo" id="type_demo" required>
                        <option value="comprador">Comprador</option>
                        <option value="proveedor">Proveedor</option>
                        <option value="dual">Dual</option>
                      </select>
                    </label>
                  </div>
                  <div class="form-group-check">
                    <p>Al registrarte estás de acuerdo con nuestros 
                      <a href="<%=terminoscondiciones_path%>" style="text-decoration-line: inherit;" target="_blank">
                        <strong>Términos y política de privacidad</strong>
                      </a>
                    </p>
                  </div>
                  <hr>
                  <div class="success-demo">
                    <button data-dismiss="modal" class="btn btn-handelbay-success btn-transparent-success">CERRAR</button>
                    <button type="submit" class="btn btn-handelbay-success" style="margin:0px 0px 15px 0;">AGENDA TU DEMO</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- end primera parte  -->
        </div>
        <!-- SEGUNDO MODAL DEL DEMO -->
        <div id="excelente" style="display:none;">
          <div class="modal-header text-center">
            <h3 class="modal-title" id="modal-demoLabel" style="color: black;font-family:inherit;">¡Excelente!</h3>
          </div>
          <div class="modal-body">
            <p class="title-body">
                Ahora recibirás un correo electrónico con todos los detalles necesarios para el DEMO de
                HandelBay: La nueva ola de negocios.
            </p>
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-2">
                    <div class="img-profile">
                        <img src="../assets/images/landing/handelbay/handelbay_agenda_profile.png" alt="">
                    </div>
                </div>
                <div class="col-md-8 col-sm-8 col-xs-10">
                    <div class="equipo text-center">
                        <p>Nuestro equipo estará feliz de conversar contigo y contarte cómo funciona HandelBay
                        </p>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-3">
                            <button data-dismiss="modal" class="btn btn-handelbay-success btn-transparent-success">CERRAR</button>
                        </div>
                        <div class="col-md-9">
                            <p style="margin-left: 20px;">
                                Si no recibes tu correo con los detalles, vuelve al paso anterior y rectifica
                                tus datos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <!-- end segunda parte -->
      </div>
      <!-- .modal-content -->
    </div>
  </div>
  <!-- END MODAL AGENDA TU DEMO AHORA -->
</template>
<script>
export default {
  data(){
    return{
      showModalDemo: false
    }
  }
  
}
/*
  $(document).ready(function () {

    $("#modal-demo").on('shown.bs.modal', function () {
      $(this).find('#name_demo').focus();
    });

    $("#form_demo").submit(function (e) {
      e.preventDefault(); //prevent default form submit
      if ($("#name_demo").val() != "" && $("#email_demo").val() != "" && $("#type_demo").val() != "") {
        $.ajax({
          url: "/landing/home/schedule_demo.json?name=" + $("#name_demo").val() + "&email=" + $("#email_demo").val() + "&phone=" + $("#phone_demo").val() + "&type=" + $("#type_demo").val(),
          type: 'get',
          success: function (response) {
            if (response.status == "OK") {
              $("#excelente").show();
              $('div#agendatudemo').hide();
            } else {
              alert("Vuelve a intentarlo");
            }
          }
        });
      }
    });
  });*/
</script>