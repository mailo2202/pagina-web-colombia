<template>
  <!-- FOOTER -->
  <footer id="subscribe">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="handelbay-form-subscribe">
            <div class="title text-center" itemscope>
              <h2 class="text-left title_footer" itemprop="noticias">
                Recibe noticias y conoce más
                <br> de la nueva red de negocios
              </h2>
            </div>
            <div class="text-center">
              <form id="form_handelbay" class="form-inline ng-pristine ng-valid" action="/blog" accept-charset="UTF-8" method="post">
              <input name="utf8" type="hidden" value="✓">
              <div class="row">
                <input type="hidden" id="token_rdstation" name="token_rdstation" value="04a3ede998e2464898b7b68c513486a3">
                <input type="hidden" id="identificador" name="identificador" value="blog">
                <div class="col-md-6 col-sm-6 col-xs-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-2 handelbay-form">
                  <input type="email" name="email" id="email" placeholder="Ingresa tu correo empresarial" class="" style="font-size: 16px !important" required="required">
                  <input type="hidden" name="type" id="type" value="0">
                </div>
                <div class="col-md-2 col-sm-2 col-xs-5 text-left actionSubmit">
                  <input type="submit" name="commit" value="Suscribirme" class="boton g-recaptcha" data-sitekey="6LcMVv0ZAAAAADKTESsXwPsi1ebP7JWY1u9h1xol" data-callback="onSubmit" data-action="submit" data-disable-with="Suscribirme">
                </div>
              </div>
              </form>
            </div>
          </div>
          <!-- .handelbay-form-subscribe -->
        </div>
      </div>
      <!-- .row -->
      <div class="row">
        <div class="col-md-4 col-sm-4 handelbay-img-footer text-center">
          <a :href="global.url">
            <img src="../assets/images/landing/handelbay/handelbay_logo_footer.png" alt="Red social empresarial para compradores potenciales y proveedores competitivos">
          </a>
        </div>
        <div class="col-md-7 col-sm-7">
          <div class="row">
            <div class="col-md-2 col-sm-4 col-xs-4">
              <ul class="handelbay-HandelBay">
                <li class="active">
                  <router-link to="/">
                    Handelbay
                  </router-link>
                </li>
                <li class="">
                  <router-link to="/">
                    Qué es
                  </router-link>
                </li>
                <li class="">
                  <router-link to="/compradores">
                    Comprador
                  </router-link>
                </li>
                <li class="">
                  <router-link to="/proveedores">
                    Proveedor
                  </router-link>
                </li>
                <li class="">
                  <router-link to="/dual">
                    Dual
                  </router-link>
                </li>
                <li class="">
                  <router-link to="Tarifas">
                    Tarifas
                  </router-link>
                </li>
                <li class="">
                  <a :href="global.search">Buscador</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
              <ul class="handelbay-HandelBay">
                <li class="active">
                  <router-link to="/alianzas">
                    Alianzas
                  </router-link>
                </li>
                <li class="">
                  <router-link to="alianzas">
                    ACOPC
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-4">
              <ul class="handelbay-HandelBay">
                <li class="active">
                  <router-link to="/acerca">
                    Compañía
                  </router-link>
                </li>
                <li class="">
                  <router-link to="/acerca">
                    Acerca de
                  </router-link>
                </li>
                <li class="">
                </li>
                <li class="">
                  <router-link to="/terminosycondiciones">
                    Legal
                  </router-link>
                </li>
                <li class="">
                  <router-link to="/porquehandelbay">
                    ¿Por qué HB?
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-4">
              <ul class="handelbay-HandelBay">
                <li class="active">
                  <a :href="global.blog">
                    Blog
                  </a>
                </li>
                <li class="">
                  <a :href="global.blog + '?category=6'">
                    Pequeñas empresas
                  </a>
                </li>
                <li class="">
                  <a :href="global.blog + '?category=7'">
                    Grandes empresas
                  </a>
                </li>
                <li class="">
                  <a :href="global.blog + '?category=8'">
                    Las compras deñ futuro
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
              <ul class="handelbay-HandelBay">
                <li class="active">
                  <a href="#">Soporte</a>
                </li>
                <li class="">
                  <a :href="global.soporte" target="_blank">Soporte</a>
                </li>
                <li class="">
                  <a :href="global.sign_in">
                    Ingresar
                  </a>
                </li>
                <li class="">
                  <a :href="global.sign_up">
                    Registro
                  </a>
                </li>
                <li class="">
                  <a :href="global.soporte" target="_blank">FAQ</a>
                </li>
                  <li class="">
                  <a :href="global.cellphone" target="_blank">
                    Tel: {{global.cellphone}}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>      
      </div>
      <!-- .row -->
      <div class="row">
        <div class="handelbay-social-network text-center">
          <a :href="global.facebook" target="_blank">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a :href="global.instagram" target="_blank">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a :href="global.youtube" target="_blank">
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
          <a :href="global.linkedin" target="_blank">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
        <div class="col-md-12 text-center handelbay-ignite">
          <p>HANDELBAY © {{ new Date().getFullYear() }} Todos los derechos reservados -
            <a href="http://www.ignite.com.co" target="_blank">Ignite Technologies S.A.S.</a>
          </p>
        </div>
      </div>
      <!-- .row -->
    </div>
    <!-- .container -->
    <!-- SEGUNDO MODAL DEL PDF -->
    <!--
    <div class="modal fade handelbay-modal <%= params[:m].nil? ? '' : ' in'%>" id="modal-demo" tabindex="-1" role="dialog" aria-labelledby="modal-demoLabel" style="<%= params[:m].nil? ? '' : 'display: block;'%>">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div id="subscription" style="padding-top:46px;">
            <div class="modal-header text-center">
              <% if params[:m] == "subs"%>
              <h3 class="modal-title" id="modal-demoLabel" style="color: black;font-family:inherit;">¡Excelente!</h3>
              <%end%>
            </div>
            <div class="modal-body">
              <% if params[:m] == "subs"%>
              <p class="title-body">
                Ahora recibirás un correo electrónico con todos los detalles necesarios.
              </p>
              <%end%>
              <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-2">
                  <div class="img-profile">
                    <img src="../assets/images/landing/handelbay/handelbay_agenda_profile.png" alt="">
                  </div>
                </div>
                <div class="col-md-8 col-sm-8 col-xs-10">
                  <div class="equipo text-center">
                    <% if params[:m] == "subs"%>
                    <p>Nuestro equipo estará feliz de conversar contigo y contarte cómo funciona HandelBay
                    </p>
                    <%elsif params[:m] == "error" %>
                    <p>Ya te encuentras suscrito
                    </p>
                    <%end%>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-md-3">
                      <a href="/" class="btn btn-handelbay-success" , style="background: transparent;color: #30de9a;border: 1px solid #30de9a;padding: 15px 31px;margin: 0 15px 15px 165px;">CERRAR</a>
                    </div>
                    <div class="col-md-9">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    -->
    <!-- end segunda parte -->
  </footer>
  <!-- END FOOTER -->
    <!--
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  <script src="https://www.google.com/recaptcha/api.js?render=6LcMVv0ZAAAAADKTESsXwPsi1ebP7JWY1u9h1xol"></script>

  <script>
    function onSubmit(token) {
      document.getElementById("form_handelbay").submit();
    }
  </script>
  <script>
    $(document).ready(function () {
      <% if params[:m] == "subs" %>
      $("#subscription").show();
      <%elsif params[:m] == "error"%>
      $("#subscription").show();
      <%end%>
    });
  </script>
      -->
</template>
<script>

import global from '@/components/Global.vue'

export default {
  data(){
    return{
      global: global
    }
  }
}
 
</script>