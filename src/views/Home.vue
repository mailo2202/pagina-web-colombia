<template>
  <div class="home">
    <!-- Mi compañia ahora optimiza -->
    <!-- <% @title="HandelBay: plataforma digital de comercio empresarial"%> -->
    <section id="handelbay_optimizes" class="section-top-contend">
      <div class="handelbay_optimizes-content">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-8 col-md-offset-1 col-xs-9">
              <div class="title" itemscope :itemtype="url">
                <h2 class="title-1" itemprop="HandelBay proveedores">¿Buscas <strong>optimizar</strong> tu gestión de compras? </h2>
                <div>
                  <a :href="url.lp" class="btn no-margin-left btn-handelbay-success btn-handelbay-black">Quiero saber cómo</a>
                </div>
                <h3 class="title-2" itemprop="HandelBay clientes">
                  <br>
                  ¿Quieres ampliar tus <strong>oportunidades</strong> de ventas? 
                </h3>
              </div>
              <div class="title-footer">
                <router-link class="btn no-margin-left btn-handelbay-success provider-link btn-handelbay-black" to="proveedores">
                  QUIERO VENDER MÁS
                </router-link>
              </div>
            </div>
          </div>
          <!-- .row -->
        </div>
      </div>
        <!-- .container -->
    </section>
    <!-- End mi compañia ahora optimiza -->

    <!-- SUMERGETE EN LA NUEVA OLA DE NEGOCIOS -->
    <section id="immerse">
      <div class="immerse_background hidden-xs">
        <img src="../assets/images/landing/handelbay/handelbay_sumergete.png" alt="Sumergete en la nueva ola">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-6 col-md-offset-1 text-left">
            <div class="title" itemscope itemtype="https://handelbay.com/">
              <h2 class="title-2" itemprop="HandelBay sumérgete">Sumérgete en la nueva
                <br> ola de los negocios</h2>
              <span class="handelbay-active"></span>
            </div>
            <div class="handelbay-text" itemscope itemtype="https://handelbay.com/">
              <p itemprop="HandelBay es un murketplace">
                  HandelBay es un marketplace (B2B - Business to Business) que reúne a compradores y proveedores a través de una red social y plataforma de compras. Queremos optimizar los procesos internos asociados<br>a las compras y ventas empresariales.
              </p>
            </div>
          </div>
        </div>
          <!-- .row -->
          <div class="row">
            <div class="col-md-10 col-sm-12 col-md-offset-1">
              <div class="handelbay-allows-you text-center">
                <div class="title-footer">
                  <h3 style="font-size:23px;">
                    <strong>HandelBay</strong> te permite gestionar dos de los procesos
                    <br> más importantes de tu negocio:
                    <strong>ABASTECIMIENTO </strong>y
                    <strong>VENTAS</strong>.
                  </h3>
                  <a class="btn btn-handelbay-success btn-handelbay-black" data-toggle="modal" @click="showModalDemo = true" data-target="#modal-demo">Agenda tu demo ahora</a>
                </div>
              </div>
              <!-- .handelbay-allows-you -->
            </div>
          </div>
          <!-- .row -->
      </div>
    </section>
    <!-- END SUMERGETE EN LA NUEVA OLA DE NEGOCIOS -->
    <ModalTuDemo v-show="showModalDemo" @close="showModalDemo=false"/>
    <!-- .handelbay-background-curva -->
    <section id="handelbay-background-curva">

    </section>
    <!-- .handelbay-background-curva -->

    <!-- CONOCE LOS BENEFICIOS QUE TENEMOS PARA TI -->
    <section id="benefits">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-sm-12 col-md-offset-1 text-left">
            <div class="title" itemscope itemtype="https://handelbay.com/">
              <h2 class="title-2" itemprop="HandelBay beneficios">Conoce los beneficios
                <br> que tenemos para ti</h2>
              <span class="handelbay-active"></span>
            </div>
            <Benefit />
            <!-- .row -->
          </div>
        </div>
        <!-- .row -->
      </div>
    </section>
    <!-- END CONOCE LOS BENEFICIOS QUE TENEMOS PARA TI -->

    <!-- VINCULA TU EMPRESA AHORA -->
    <section id="link-company">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-sm-12 col-md-offset-1 text-left">
            <div class="title" itemscope :itemtype="url">
              <h2 class="title-2" itemprop="HandelBay beneficios">Vincula
                <br> tu empresa AHORA</h2>
              <span class="handelbay-active"></span>
            </div>
          </div>
        </div>
        <!-- .row -->
      </div>
      <div class="img-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 images-left">
              <img src="../assets/images/landing/handelbay/handelbay_vinculaempresa1.png" alt="Vincula tu empresa ahora">
            </div>
            <div class="col-md-6 images-right">
              <img src="../assets/images/landing/handelbay/handelbay_vinculaempresa2.png" alt="Vincula tu empresa ahora">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="title-footer text-center">
            <a :href="url.sign_up" class="btn btn-handelbay-success btn-handelbay-black">
              REGÍSTRATE GRATIS
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- END VINCULA TU EMPRESA AHORA -->

    <!-- LA MEJOR FORMA DE OPTIMIZAR TU TIEMPO -->
    <section id="optimize-time-video" style="display: none;">
      <div class="embed-responsive_ embed-optimize">
        <iframe src="https://www.youtube.com/embed/If5O5Q0zX_Y?rel=0&autoplay=0" height="100%" width="100%"></iframe>
        <a href="javascript:void(0)" class="btn btn-handelbay-success btn-handelbay-write" onclick="showEmbed('1')">
          <i class="fa fa-times-circle"></i>
          <span>Ocultar video</span>
        </a>
      </div>
    </section>
    <section id="optimize-time">
      <div class="optimize-time_content">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-6 text-left">
              <h2 class="title-video">SUMÉRGETE EN LA OLA DE NEGOCIOS</h2>
              <p>
                HandelBay es la red social empresarial que te ayuda a disminuir tiempos operativos y optimizar tus compras.
              </p>
              <p>
                Te invitamos a ver el siguiente vídeo para que puedas comprender por qué tu empresa debería estar en HandelBay.
              </p>
              <br>
              <a href="javascript:void(0)" class="btn no-margin-left btn-handelbay-success btn-handelbay-write" onclick="showEmbed('0')">
                <i class="fa fa-play-circle"></i>
                <span>Ver vídeo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END LA MEJOR FORMA DE OPTIMIZAR TU TIEMPO -->

    <!-- NO ESPERES MAS TIEMPO -->
    <section id="do-no-wait-for-time">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-5 col-md-offset-1 text-left">
            <div class="title" itemscope :itemtype="url.url">
              <h2 class="title-2" itemprop="HandelBay en tu día a día">¡No esperes
                <br> más tiempo!</h2>
              <span class="handelbay-active"></span>
            </div>
            <div class="handelbay-text" itemscope :itemtype="url.url">
              <p itemprop="HandelBay es la solución">
                  Empieza a disfrutar de los beneficios del nuevo marketplace empresarial
              </p>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 text-left">
            <div class="row items">
              <div class="col-md-6 col-sm-12">
                <div class="more">
                    ✔
                </div>
                <span>Compras en línea 24/7</span>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="more">
                    ✔
                </div>
                <span>Transparencia</span>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="more">
                    ✔
                </div>
                <span>Red verificada</span>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="more">
                    ✔
                </div>
                <span>Más ventas</span>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="more">
                    ✔
                </div>
                <span>Ahorros</span>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="more">
                    ✔
                </div>
                <span>Mejores proveedores</span>
              </div>
            </div>
          </div>
        </div>
        <!-- .row -->
        <div class="row">
          <div class="col-md-12">
            <div class="title-footer text-center">
              <a href="#" class="btn btn-handelbay-success" data-toggle="modal" data-target="#modal-demo">Agenda tu demo</a>
              <a :href="url.sign_up" class="btn btn-handelbay-success btn-handelbay-black">
                REGISTRATE GRATIS
              </a>
            </div>
          </div>
        </div>
      </div>
        <!-- .container -->
    </section>
    <!-- END NO ESPERES MAS TIEMPO -->

    <!-- .handelbay-background-curva -->
    <section id="handelbay-background-curva-bottom">

    </section>
    <!-- .handelbay-background-curva -->

    <!-- END BECAUSE HANDELBAY -->
    <PorqueHandelbay />
    <!-- END BECAUSE HANDELBAY -->

    <!--   CON RESPALDO DE -->
    <section id="with-support-from">
      <div class="container text-center">
        <div class="row btn-content-handelbay">
          <div class="col-md-12 text-center" itemscope>
            <h3 itemprop="handelbay">
              Conoce por qué debes hacer parte de HandelBay
            </h3>
            <router-link to="/porquehandelbay" class="btn btn-handelbay-success">
              Haz click aquí
            </router-link>
          </div>
        </div>
        <div class="indicators_wrap">
          <Indicator />
        </div>
        <div class="content-text">
          <div class="text d-none">
              <h2>Algunos de nuestros clientes</h2>
          </div>
          <div class="respaldo_logos d-none">
            <!-- <%= render partial:"landing/home/partials/carousel" %> -->
          </div>
          <div class="btn--handelbay">
            <a href="#" data-toggle="modal" data-target="#modal-pdf" class="btn btn-handelbay-success btn-handelbay-black">Recibe toda la información detallada de HandelBay en PDF</a>
          </div>
        </div>
      </div>
      <a style="background: none; position: fixed; right:50px; bottom: 50px; z-index:9999" href="https://api.whatsapp.com/send?phone=573147711318'" target="_blank">
        <img src="https://handelbay-socialmedia.s3.us-east-2.amazonaws.com/Whatsapp.png" height="50" width="50">
      </a>
    </section>

    <!-- <%= render "landing/home/modal_pdf" %> -->


    <!-- END CON RESPALDO DE -->
    <!--
    <script>


      var indicatorData = {
        indicators: $('.indicators_wrap'),
        nav: $('.navbar-default')
      }

      function indicator() {
          var stickyIndicator = 0;
          if (indicatorData.indicators.length > 0) {
              stickyIndicator = indicatorData.indicators.offset().top;
          }
          return stickyIndicator;
      }

      var scrollControl = false;

      /**
      *
      * @param {number} [stickyIndicator] position in window of element
      */
      function indicatorCounter(stickyIndicator) {
          if ($(window).scrollTop() > stickyIndicator) {
              if(!scrollControl) {
                  $('.count').each(function () {
                      $(this).prop('Counter',0).animate({
                          Counter: $(this).text()
                      }, {
                          duration: 1000,
                          easing: 'swing',
                          step: function (now) {
                              $(this).text(now);
                          }
                      });
                  });
              }
              scrollControl = true;
          } else {
              scrollControl = false;
          }
      }
      $(document).ready(function() {
        var stickyIndicator = indicator() - indicatorData.indicators.height();

        $(window).scroll(function () {
            indicatorCounter(stickyIndicator);
        });
        $("#subscription").hide();
      });
    </script>
    -->
  </div>
</template>

<script>
// @ is an alias to /src
import global from '@/components/Global.vue'
import ModalTuDemo from '@/components/ModalTuDemo.vue'
import Benefit from "@/components/Benefits.vue"
import Indicator from "@/components/Indicator.vue"
import PorqueHandelbay from "@/components/PorqueHandelbay.vue"

export default {
  name: 'Home',
  components: {
    ModalTuDemo,
    Benefit,
    Indicator,
    PorqueHandelbay
  },
  data(){
    return{
      url: global,
      showModalDemo: false
    }
  }
  
}
</script>
