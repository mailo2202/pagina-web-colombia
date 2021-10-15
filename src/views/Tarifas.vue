<template>
  <div>
    <!-- TARIFAS -->
    <section id="tarifas">
      <div class="">
        <div class="row">
          <div class="col-md-5 col-sm-6 col-md-offset-1 text-left">
            <div class="title" itemscope itemtype="https://handelbay.com/">
              <h2 class="title-1" itemprop="HandelBay Innvador">Tarifas y costos</h2>
              <h3 class="title-2" itemprop="HandelBay en tu día a día">
                HandelBay
              </h3>
              <span class="handelbay-active"></span>
            </div>
          </div>
        </div>
        <!-- .row -->
        <!-- .handelbay-background-curva -->
        <div id="handelbay-background-curva">
        </div>
        <!-- .handelbay-background-curva -->
        <div class="handelbay-content-planes">
          <div class="container">
            <div class="row ">
              <div class="col-md-10 col-md-offset-1">
                <div class="handelbay-progress-title text-center">
                  <h2 class="title-plan">Tu perfil y tu plan</h2>
                </div>
                <div>
                  <div class="tabs-handelbay-planes text-center">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" role="tablist">
                      <li role="presentation" class="buyer">
                        <a href="#buyer" aria-controls="buyer" role="tab" data-toggle="tab" onclick="change_plan(1);">COMPRADOR</a>
                      </li>
                      <li role="presentation" class="active dual">
                        <a href="#dual" aria-controls="dual" role="tab" data-toggle="tab" onclick="change_plan(2); active_p_b();">DUAL</a>
                      </li>
                      <li role="presentation" class="provider" id="prov">
                        <a href="#provider" aria-controls="provider" role="tab" data-toggle="tab" onclick="change_plan(3);">PROVEEDOR</a>
                      </li>
                      <input type="hidden" value="2" id="type_user">                                       
                    </ul>
                  </div>
                  <!-- Tab panes -->
                  <div class="tab-content">
                    <div class="months_plan months text-center">
                      <p class="time_licence text-center">Tiempo de licencia</p>
                      <button class="btn-time" onclick="change_month(this,1);" ><span>1 mes</span></button>
                      <button class="btn-time" onclick="change_month(this,2);"><span>6 meses</span> </button>
                      <button class="btn-time active" onclick="change_month(this,3);"><span>12 meses</span></button>
                    </div>
                    <div role="tabpanel" class="tab-pane active" id="buyer">
                      <div class="title-tab text-center title-type-plan">
                        <p class="text-center">
                          PERFIL COMPRADOR
                        </p>
                      </div>
                      <hr class="hr-space-planes">
                      <h2 style="text-align:center; font-family: 'gotham_bold';">
                        <a :href="'https://web.whatsapp.com/send?phone=' + global.indicative + global.cellphone">
                          <i class="fa fa-whatsapp" style="color:green"></i>
                          {{global.cellphone}}
                        </a>
                      </h2>
                      <div class="row-handelbay-plannes buyer-row">
                        <div class="col-plan-handelbay-1">
                          <div class="item text-center">
                            <strong>
                              <h4 class="plan_buyer_b" style="font-family: 'gotham_bold';">BASIC</h4>
                            </strong>
                            <br>
                            <strong>1 usuario</strong>
                            <ul>
                              <li class="first-li">
                                <a href="javascript:void(0)">
                                  <strong>5 procesos / mes</strong>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Solicitud RFQ:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Comparaciones:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Tracker:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Reportes:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Transferencias:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Aprobaciones:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Descargar Data:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Validación:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Áreas usuarias:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Integración con ERP:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Solicitud RFI:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="handelbay-buttons">
                            <a :href="global.sign_up" class="btn btn-handelbay-planes">
                              Quiero este plan
                            </a>
                          </div>
                        </div>
                        <div class="col-plan-handelbay-1">
                          <div class="item text-center">
                            <strong>
                              <h4 class="plan_buyer_b" style="font-family: 'gotham_bold';">SINGLE</h4>
                            </strong>
                            <br>
                            <strong>1 usuario</strong>
                            <ul>
                              <li class="first-li">
                                <a href="javascript:void(0)">
                                  <strong>10 procesos / mes</strong>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Solicitud RFQ:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Comparaciones:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Tracker:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Reportes:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Transferencias:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Aprobaciones:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Descargar Data:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Validación:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Áreas usuarias:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Integración con ERP:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Solicitud RFI:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="handelbay-buttons">
                            <a :href="global.sign_up" class="btn btn-handelbay-planes">
                              Quiero este plan
                            </a>
                          </div>
                        </div>
                        <div class="col-plan-handelbay-1 active">
                          <div class="recommended">
                            <span>Recomendado</span>
                          </div>
                          <div class="item text-center">
                            <strong>
                              <h4 class="plan_buyer_b" style="font-family: 'gotham_bold';">TEAM</h4>
                            </strong>
                            <br>
                            <strong>5 usuarios</strong>
                            <ul>
                              <li class="first-li">
                                <a href="javascript:void(0)">
                                  <strong>Procesos ilimitados</strong>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Solicitud RFQ:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Comparaciones:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Tracker:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Reportes:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Transferencias:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Aprobaciones:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Descargar Data:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Validación:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Áreas usuarias:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Integración con ERP:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Solicitud RFI:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="handelbay-buttons">
                            <a :href="global.sign_up" class="btn btn-handelbay-planes">
                              Quiero este plan
                            </a>
                          </div>
                        </div>
                        <div class="col-plan-handelbay-1">
                          <div class="item text-center">
                            <strong>
                              <h4 class="plan_buyer_b" style="font-family: 'gotham_bold';">PRO</h4>
                            </strong>
                            <br>
                            <strong>30 usuarios</strong>
                            <ul>
                              <li class="first-li">
                                <a href="javascript:void(0)">
                                  <strong>Procesos ilimitados</strong>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Solicitud RFQ:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Comparaciones:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Tracker:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Reportes:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Transferencias:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Aprobaciones:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Descargar Data:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Validación:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Áreas usuarias:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Integración con ERP:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li buyer">
                                <a href="javascript:void(0)">
                                  <strong>Solicitud RFI:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="handelbay-buttons">
                            <a :href="global.sign_up" class="btn btn-handelbay-planes">
                              Quiero este plan
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" class="tab-pane active" id="provider">
                      <div class="title-tab text-center title-type-plan">
                        <p class="text-center">
                          PERFIL PROVEEDOR
                        </p>
                      </div>
                      <hr class="hr-space-planes">
                      <div class="row-handelbay-plannes provider-row">
                        <div class="col-plan-handelbay-1">
                          <div class="item text-center">
                            <strong>
                              <h5 class="plan_prov">BASIC</h5>
                            </strong>
                            <h2 class="plan_prov_value">0</h2>
                            <span>por mes</span>
                            <strong>1 usuario</strong>
                            <ul>
                              <li class="first-li">
                                <a href="javascript:void(0)">
                                  <strong>6 Cotizaciones / mes</strong>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>Recepción de invitaciones:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>Carga masiva portafolio:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Verificación de empresa:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>SECOP:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Soporte:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Reportes:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Transferencia de procesos:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Modelo KAM:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="handelbay-buttons">
                            <a :href="global.sign_up" class="btn btn-handelbay-planes">
                              Quiero este plan
                            </a>
                          </div>
                        </div>
                        <div class="col-plan-handelbay-1">
                          <div class="recommended">
                            <span>Recomendado</span>
                          </div>
                          <div class="item text-center">
                            <strong>
                              <h5 class="plan_prov">TEAM</h5>
                            </strong>
                            <h2 class="plan plan_mensual">$85.500</h2>
                            <h2 class="plan plan_semestral">$76.700</h2>
                            <h2 class="plan plan_anual active">$59.000</h2>
                            <span>por mes</span>
                            <strong>2 usuarios</strong>
                            <ul>
                              <li class="first-li">
                                <a href="javascript:void(0)">
                                  <strong>Cotizaciones ilimitadas</strong>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>Recepción de invitaciones:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>Carga masiva portafolio:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>Verificación de empresa:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>SECOP:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>Soporte:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Reportes:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Transferencia de procesos:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                              <li class="next-li x">
                                <a href="javascript:void(0)">
                                  <strong>Modelo KAM:</strong>
                                  <i class="icon dripicons-plus point"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="handelbay-buttons">
                            <a :href="global.sign_up" class="btn btn-handelbay-planes">
                              Quiero este plan
                            </a>
                          </div>
                        </div>
                        <div class="col-plan-handelbay-1">
                          <div class="item text-center">
                            <strong>
                              <h5 class="plan_prov">PRO</h5>
                            </strong>
                            <h2 class="plan plan_mensual">$159.500</h2>
                            <h2 class="plan plan_semestral">$143.000</h2>
                            <h2 class="plan plan_anual active">$110.000</h2>
                            <span>por mes</span>
                            <strong>10 usuarios</strong>
                            <ul>
                              <li class="first-li">
                                <a href="javascript:void(0)">
                                  <strong>Cotizaciones ilimitadas</strong>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>Recepción de invitaciones:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>Carga masiva portafolio:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>Verificación de empresa:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>SECOP:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>Soporte:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>Reportes:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>Transferencia de procesos:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                              <li class="next-li provider">
                                <a href="javascript:void(0)">
                                  <strong>Modelo KAM:</strong>
                                  <i class="icon dripicons-checkmark point"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="handelbay-buttons">
                            <a :href="global.sign_up" class="btn btn-handelbay-planes">
                              Quiero este plan
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr class="hr-space-step">
                    <div class="button-footer-plan text-center">
                      <a :href="global.sign_up" class="btn btn-handelbay-success btn-handelbay-buyer" id="success">
                        Continuar
                      </a>
                    </div>
                  </div>
                  <!-- Aún no decides-->
                  <div class="title-footer text-center">
                    <h2 class="title" style="margin-bottom:20px;">¿Aún no decides cuál es el mejor plan para tu empresa?</h2>
                    <!--<a href="#" class="btn btn-handelbay-success btn-handelbay-black" data-toggle="modal" data-target="#compare-planes" id="plan" onclick="show_or_hide_type_user_modal()">¡Ve a la comparación de planes y elige!</a>-->
                    <a target="_blank" :href="'https://web.whatsapp.com/send?phone=' + global.indicative + global.cellphone +'%27'" class="btn btn-handelbay-success btn-handelbay-black" id="plan">¡Ve a la comparación de planes y elige!</a>
                  </div>
                  <!-- end Aún no decides-->
                </div>
              </div>
            </div>
            <!-- .row -->
          </div>
        </div>
        <!-- handelbay-content-planes -->
      </div>
    </section>
    <!-- END TARIFAS -->

    <!-- PRUEBA GRATIS -->
    <section id="free-trial">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-5 col-md-offset-1">
            <div class="title" itemscope itemtype="https://handelbay.com/">
              <h2 class="title-1" itemprop="HandelBay Innvador">Empieza tu periodo</h2>
              <h3 class="title-2" itemprop="HandelBay en tu día a día">
                de prueba gratis
              </h3>
              <span class="handelbay-active"></span>
            </div>
            <div class="handelbay-text" itemscope itemtype="https://handelbay.com/">
              <p itemprop="HandelBay es la solución">
                Prueba HandelBay gratis y accede al plan Enterprise con todos los beneficios de la red de negocios. No requieres tarjeta
                de crédito y puedes cancelar en cualquier momento.
              </p>
            </div>
            <div class="title-footer text-left">
              <a :href="global.sign_up" class="btn btn-handelbay-success btn-handelbay-black">
                REGÍSTRATE GRATIS
              </a>
            </div>
          </div>
        </div>
        <!-- .row -->
      </div>
    </section>
    <!-- END PRUEBA GRATIS -->

    <!-- PREGUNTAS FRECUENTES -->
    <section id="frequent-questions">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-sm-12 col-md-offset-1 text-left">
            <div class="title" itemscope itemtype="https://handelbay.com/">
              <h2 class="title-2" itemprop="HandelBay en tu día a día">
                Preguntas frecuentes
                <br>sobre tarifas
              </h2>
              <span class="handelbay-active"></span>
            </div>
            <div class="handelbay-text" itemscope itemtype="https://handelbay.com/">
              <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <p itemprop="HandelBay es la solución" style="margin-bottom:10px;">
                    <strong style="">¿Qué características contiene la prueba gratuita?</strong>
                    <br>Prueba HandelBay gratis y accede al plan Enterprise con todos los beneficios de la red de negocios durante 15 días. No requieres tarjeta de crédito y puedes cancelar en cualquier momento.
                  </p>
                  <a :href="global.soporte" style="color:#30e7a3">Ver más</a>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <p itemprop="HandelBay es la solución" style="margin-bottom:10px;">
                    <strong style="">¿Qué beneficios tiene adquirir el perfil Dual?</strong>
                    <br>Al adquirir un perfil Dual debes seleccionar un plan para Comprador y otro para plan Proveedor. HandelBay efectuará automáticamente el 50% de DESCUENTO sobre el plan de menor valor.
                  </p>
                  <a :href="global.soporte" style="color:#30e7a3">Ver más</a>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <p itemprop="HandelBay es la solución" style="margin-bottom:10px;">
                    <strong style="">¿Puedo modificar mi plan de pago ?</strong>
                    <br>Sí. Al subir de plan incrementan los beneficios que HandelBay te ofrece, tales como número de usuarios, publicaciones/cotizaciones, además del precio. Si deseas un plan con menos beneficios, debes desactivar algunos usuarios, no tener de procesos en estado abiertos y/o en ejecución.
                  </p>
                  <a :href="global.soporte" style="color:#30e7a3">Ver más</a>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <p itemprop="HandelBay es la solución" style="margin-bottom:10px;">
                    <strong style="">¿Existen cláusulas de permanencia dentro de HandelBay?</strong>
                    <br>No. Eres libre de retirarte cuando lo consideres necesario. En HandelBay tienes derecho a permanecer el tiempo por el que has pagado. Podrás retirarte en cualquier momento pero no se realiza reembolso de tu dinero.
                  </p>
                  <a :href="global.soporte" style="color:#30e7a3">Ver más</a>
                </div>
              </div>
              <!-- .row -->
              <div class="button-questions text-center">
                <a :href="global.soporte" class="btn btn-handelbay-success btn-questions">Ver más preguntas frecuentes</a>
              </div>
            </div>
          </div>
        </div>
        <!-- .row -->
      </div>
    </section>
    <!-- END PREGUNTAS FRECUENTES -->

    <!-- .handelbay-background-curva -->
    <section id="handelbay-background-curva-bottom">
    </section>
    <!-- .handelbay-background-curva -->

    <PorqueHandelbay />
    <ModalPlans />

    <!--
    <script>
      function change_plan(plan){
        element = document.querySelector(".months_plan.months");
        success = document.getElementById("success");
        switch(plan){
          case 1:
            element.classList.add("buyer");
            element.classList.remove("provider");
            success.classList.add("btn-handelbay-buyer");
            success.classList.remove("btn-handelbay-provider");
            break;
          case 2:
            element.classList.remove("buyer");
            element.classList.remove("provider");
            success.classList.add("btn-handelbay-buyer");
            success.classList.remove("btn-handelbay-provider");
            break;
          case 3:
            element.classList.add("provider");
            element.classList.remove("buyer");
            success.classList.remove("btn-handelbay-buyer");
            success.classList.add("btn-handelbay-provider");
            break;
        }
      }
      function change_month(element,id){
        btnTime = document.getElementsByClassName("btn-time");
        for(i=0;i<btnTime.length;i++){
          btnTime[i].classList.remove("active")
        }
        element.classList.add("active");
        switch(id){
          case 1:
            price = document.getElementsByClassName("plan_mensual");
            break;
          case 2:
            price = document.getElementsByClassName("plan_semestral");
            break;
          case 3:
            price = document.getElementsByClassName("plan_anual");
            break;
        }
        btnPlan =	document.getElementsByClassName("plan");
        for(i=0; i<btnPlan.length; i++){
          btnPlan[i].classList.remove("active");
        }
        for(i=0; i<price.length;i++){
          price[i].classList.add("active");
        }
      }
      function active_p_b(){
        document.getElementById("buyer").classList.add("active");
        document.getElementById("provider").classList.add("active");
      }
    </script>-->
  </div>
</template>
<script>
import global from '@/components/Global.vue'
import PorqueHandelbay from "@/components/PorqueHandelbay.vue"
import ModalPlans from "@/components/ModalPlans.vue"

export default {
  components:{
    PorqueHandelbay,
    ModalPlans
  },
  data(){
    return{
      global: global
    }
  }
}
</script>
<style>
.plan_mensual,.plan_semestral,.plan_anual{
  display:none;
}
.plan_mensual.active,.plan_semestral.active,.plan_anual.active{
  display:block;
}
#tarifas .handelbay-content-planes .months_plan.months.buyer .btn-time{
  color: #30e7a3;
  border: 1px solid #30e7a3;
}
#tarifas .handelbay-content-planes .months_plan.months.buyer .btn-time.active{
  background-color: #30e7a3;
  color:#fff;
}
#tarifas .handelbay-content-planes .months_plan.months.provider .btn-time{
  color: #36aeea;
  border: 1px solid #36aeea;
}
#tarifas .handelbay-content-planes .months_plan.months.provider .btn-time.active{
  background-color: #36aeea;
  color:#fff;
}	
</style>