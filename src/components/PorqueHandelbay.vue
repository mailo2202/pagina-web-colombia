<template>
  <section id="because-handelbay" class="home-not-background">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-12 col-xs-12 col-md-offset-1 text-left">
          <div class="title" itemscope :itemtype="global.url">
            <h2 class="title-2" itemprop="HandelBay en tu día a día">¿Por qué
              <br>HandelBay?</h2>
            <span class="handelbay-active"></span>
          </div>
          <div class="handelbay-text" itemscope :itemtype="global.url">
            <p itemprop="HandelBay es la solución">
              Queremos transformar el futuro de las compras empresariales y estamos convencidos que dependen de 3 pilares fundamentales:
            </p>
          </div>
        </div>
        <div class="col-md-7 col-sm-12 col-xs-12">
          <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-6">
              <div class="image-1">
                <span>1</span>
                <a href="javascript:void(0)">
                  <img src="../assets/images/landing/handelbay/handelbay_porque_1.png" alt="Agilidad">
                  <div class="handelbay-effect-hover" itemscope :itemtype="global.url" style="display: none;">
                    <div class="because-handelbay_text">
                      <h3 class="title" itemprop="futuro">Agilidad</h3>
                      <p>
                        Reduce un 70% el
                        tiempo operativo del
                        área de compras.
                        Optimiza en un 80% la
                        gestión comercial.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
              <div class="col-md-4 col-sm-4 col-xs-6">
                <div class="image-1">
                  <span>2</span>
                  <a href="javascript:void(0)">
                    <img src="../assets/images/landing/handelbay/handelbay_porque_2.png" alt="Agilidad">
                    <div class="handelbay-effect-hover" itemscope itemtype="https://handelbay.com/" style="display: none;">
                      <div class="because-handelbay_text">
                        <h3 class="title" itemprop="transformar">Transparencia</h3>
                        <p>
                          Trabaja
                          colaborativamente y
                          conserva la trazabilidad
                          de tus procesos para
                          facilitar la toma de
                          decisiones.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-6">
                <div class="image-1">
                  <a href="javascript:void(0)">
                    <span>3</span>
                    <img src="../assets/images/landing/handelbay/handelbay_porque_3.png" alt="Agilidad">
                    <div class="handelbay-effect-hover" itemscope itemtype="https://handelbay.com/" style="display: none;">
                      <div class="because-handelbay_text">
                        <h3 class="title" itemprop="empresariales">Seguridad</h3>
                        <p>
                          HandelBay verifica la
                          legitimidad de las
                          empresas registradas a
                          través de las entidades
                          reguladoras.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
      <!-- .row -->
    </div>
  </section>
</template>
<script>

import global from "@/components/Global.vue"

export default {
  data(){
    return{
      global: global
    }
  }
}
</script>