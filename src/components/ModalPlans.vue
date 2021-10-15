<template>
  <div class="modal fade handelbay-modal" id="compare-planes" tabindex="-1" role="dialog" aria-labelledby="compare-planesLabel">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div id="agendatudemo">
          <div class="modal-header text-center">
            <h3 class="modal-title" id="compare-planesLabel" style="color: black;font-weight: bold;font-family: inherit;">Comparador de planes</h3>
          </div>
          <div class="modal-body">
            <div class="title-body modal_tabs">
              <div class="tabs-handelbay-planes text-center">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="buyer active" id="li_comp">
                    <a href="#buyerM" aria-controls="buyerM" role="tab" data-toggle="tab"><span>COMPRADOR</span></a>
                  </li>
                  <li role="presentation" class="dual" id="li_dual">
                    <a href="#dualM" aria-controls="dualM" role="tab" data-toggle="tab">DUAL</a>
                  </li> 
                  <li role="presentation" class="provider" id="li_proveedor">
                    <a href="#providerM" aria-controls="providerM" role="tab" data-toggle="tab">PROVEEDOR</a>
                  </li>                                                                       
                </ul>
              </div>
            </div>

            <!-- COMPRADOR -->
            
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="buyerM">
                <div class="scroll_table">
                  <div class="scroll_table-content">       
                    <!-- PRECIO -->
                    <table class="table_price table planes-users">
                      <caption>Precios de planes</caption>
                      <thead>
                        <tr>
                          <th colspan="2"></th>
                          <th>    
                            <h3 class="planes-users_title">BASIC</h3>
                            <span class="planes-users_text">1 usuarios</span>
                          </th>
                          <th>    
                            <h3 class="planes-users_title">SINGLE</h3>
                            <span class="planes-users_text">1 usuarios</span>
                          </th>
                          <th>    
                            <h3 class="planes-users_title">TEAM</h3>
                            <span class="planes-users_text">5 usuarios</span>
                          </th>
                          <th>    
                            <h3 class="planes-users_title">PRO</h3>
                            <span class="planes-users_text">30 usuarios</span>
                          </th>
                          <th style="width: 35px;"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="col" colspan="7" class="title">
                            Precio
                          </th>
                          <td rowspan="4" class="more">-</td>
                        </tr>
                        <tr class="tr-body" style="">
                          <th scope="col" colspan="2" class="subtitle">
                            Anual
                          </th>
                          <td class="text-center">
                            $0
                          </td>
                          <td class="text-center">
                            $190.000
                          </td>
                          <td class="text-center">
                            $650.000
                          </td>
                          <td class="text-center">
                            $1.350.000
                          </td>
                        </tr>
                        <tr class="tr-body" style="">
                          <th scope="col" colspan="2" class="subtitle">
                            Semestral
                          </th>
                          <td class="text-center">
                            $0
                          </td>
                          <td class="text-center">
                            $247.000
                          </td>
                          <td class="text-center">
                            $845.000
                          </td>
                          <td class="text-center">
                            $1.755.000
                          </td>
                        </tr>
                        <tr class="tr-body" style="">
                          <th scope="col" colspan="2" class="subtitle">
                            Mensual
                          </th>
                          <td class="text-center">
                            $0
                          </td>
                          <td class="text-center">
                            $275.500
                          </td>
                          <td class="text-center">
                            $942.500
                          </td>
                          <td class="text-center">
                            $1.957.500
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- RED SOCIAL EMPRESARIAL -->
                    <table class="table_price table">
                      <caption>Red social empresarial</caption>
                      <tbody>
                        <tr>
                          <th scope="col" colspan="7" class="title">
                            Red social empresarial
                          </th>
                          <td rowspan="4" class="more">-</td>
                        </tr>
                        <tr class="tr-body" v-for="head of headers" :key="head.id">
                          <th scope="col" colspan="2" class="subtitle">
                            {{head}}
                          </th>
                          <td class="text-center">
                            <span class="point">✔</span>
                          </td>
                          <td class="text-center">
                            <span class="point">✔</span>
                          </td>
                          <td class="text-center">
                            <span class="point">✔</span>
                          </td>
                          <td class="text-center">
                            <span class="point">✔</span>
                          </td>
                          <td class="text-center">
                            <span class="point">✔</span>
                          </td>                                   
                        </tr>
                      </tbody>
                    </table>

                    <!-- PROCESO DE COMPRA  -->
                    <table class="table_price table">
                        <caption>Proceso de compra</caption>
                        <tbody>
                            <tr>
                                <th scope="col" colspan="7" class="title" style="border-bottom: 0px;">
                                    Proceso de compra
                                </th>
                                <td rowspan="30" class="more" data-original-title="" title="" style="width: 35px;">-</td>
                            </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Publicaciones por mes
                                    </th>
                                        <td class="text-center">
                                            <span class="point">2</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">10</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">Ilimitadas</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">Ilimitadas</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">Ilimitadas</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Requisiciones
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Agrupación de requisiciones
                                    </th>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Aprobaciones de requisiciones
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Envío de multimedia
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Compra con excel
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Publicación de procesos públicos
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Publicación de procesos privados
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Log de eventos
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Programar procesos
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Replicar procesos
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Recepción de cotizaciones
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Comparaciones
                                    </th>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Comparación con promedio ponderado
                                    </th>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Exportar comparativos en PDF
                                    </th>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Solicitud de recotizaciones
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Aprobaciones de compra
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Exportar cotizaciones a PDF
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Generación de Órdenes de compras
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Compras por cotización
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Compras por producto
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Postcompra
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Calificaciones
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Chat privado por proceso
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Chat grupal por proceso
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Leídos / no leídos
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Invitaciones abiertas
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Invitaciones limitadas
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        COP/USD
                                    </th>
                                      <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                        </tbody>
                    </table>

                    <!-- PERFIL COMPRADOR -->
                    <table class="table_price table">
                        <caption>Perfil comprador</caption>
                        <tbody>
                            <tr>
                                <th scope="col" colspan="7" class="title" style="border-bottom: 0px;">
                                    Perfil comprador
                                </th>
                                <td rowspan="9" class="more" data-original-title="" title="" style="width: 35px;">-</td>
                            </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Categorías
                                    </th>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>                                   
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Productos
                                    </th>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>                                   
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Áreas empresa
                                    </th>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>                                   
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Histórico de precios
                                    </th>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>                                   
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Dashboard
                                    </th>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>                                   
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Presupuesto
                                    </th>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>                                   
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Proveedores Favoritos
                                    </th>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>                                   
                                </tr>
                                <tr class="tr-body" style="">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Clasificación de proveedores
                                    </th>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>                                   
                                </tr>
                        </tbody>
                    </table>

                    <!-- VARIOS -->
                    <table class="table_price table">
                        <caption>Varios</caption>
                        <tbody>
                            <tr>
                                <th scope="col" colspan="7" class="title" style="border-bottom: 1px solid rgb(195, 195, 195);">
                                    Varios
                                </th>
                                <td rowspan="" class="more" data-original-title="" title="" style="width: 35px;">+</td>
                            </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Documentación
                                    </th>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>                                   
                                </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Multiusuario
                                    </th>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>                                   
                                </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Excel
                                    </th>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>                                   
                                </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Codificación UNSPSC
                                    </th>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>                                   
                                </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Transferencia de procesos
                                    </th>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>                                   
                                </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Multiples roles para usuario
                                    </th>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="point">✔</span>
                                    </td>                                   
                                </tr>
                        </tbody>
                    </table>

                    <!-- GENERALES -->
                    <table class="table_price table">
                        <caption>Generales</caption>
                        <tbody>
                            <tr>
                                <th scope="col" colspan="7" class="title">
                                    Generales
                                </th>
                                <td rowspan="4" class="more" data-original-title="" title="">+</td>
                            </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Cantidad de usuarios
                                    </th>
                                        <td class="text-center">
                                            <span class="point">1</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">4</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">8</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">16</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">24</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Soporte
                                    </th>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Cuenta
                                    </th>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Notificaciones
                                    </th>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Configuraciones generales
                                    </th>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Referidos
                                    </th>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Planes
                                    </th>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                        </tbody>
                    </table>

                    <!-- REPORTES -->
                    <table class="table_price table">
                        <caption>Reportes</caption>
                        <tbody>
                            <tr>
                                <th scope="col" colspan="7" class="title">
                                    Reportes
                                </th>
                                <td rowspan="4" class="more" data-original-title="" title="">+</td>
                            </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Procesos
                                    </th>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Usuarios
                                    </th>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                                <tr class="tr-body" style="display: none;">
                                    <th scope="col" colspan="2" class="subtitle">
                                        Personalizados
                                    </th>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                </tr>
                        </tbody>
                    </table>
                  </div>
                </div>
                <hr>
                <div class="text-center buttons-modal">
                  <button data-dismiss="modal" class="btn btn-handelbay-success btn-transparent-success">CERRAR</button>
                  <a :href="global.sign_up" class="btn btn-handelbay-success">
                    REGISTRARME
                  </a>
                </div>                        
                <br>                               
              </div>
              <!-- PROVEEDOR -->
              <div role="tabpanel" class="tab-pane" id="providerM">                                
                <div class="scroll_table">
                  <div class="scroll_table-content">       
                    <!-- PRECIO -->
                    <table class="table_price_prov table planes-users">
                        <caption>Precios de planes</caption>
                        <thead>
                          <tr>
                            <th colspan="2"></th>
                            <th>    
                              <h3 class="planes-users_title">BASIC</h3>
                              <span class="planes-users_text">2 usuarios</span>
                            </th>
                            <th>    
                              <h3 class="planes-users_title">TEAM</h3>
                              <span class="planes-users_text">4 usuarios</span>
                            </th>
                            <th>    
                              <h3 class="planes-users_title">PRO</h3>
                              <span class="planes-users_text">10 usuarios</span>
                            </th>
                            <th style="width: 35px;"></th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col" colspan="7" class="title" style="border-bottom: 1px solid rgb(195, 195, 195);">
                                    Precio
                                </th>
                                <td rowspan="" class="more" data-original-title="" title="" style="width: 35px;">+</td>
                            </tr>
                            <tr class="tr-body" style="display: none;">
                                <th scope="col" colspan="2" class="subtitle">
                                    Anual
                                </th>
                                <td class="text-center">
                                    $0
                                </td>
                                <td class="text-center">
                                    $59.000
                                </td>
                                <td class="text-center">
                                    $110.000
                                </td>
                            </tr>
                            <tr class="tr-body" style="display: none;">
                                <th scope="col" colspan="2" class="subtitle">
                                    Semestral
                                </th>
                                <td class="text-center">
                                    $0
                                </td>
                                <td class="text-center">
                                    $76.700
                                </td>
                                <td class="text-center">
                                    $143.000
                                </td>
                            </tr>
                            <tr class="tr-body" style="display: none;">
                                <th scope="col" colspan="2" class="subtitle">
                                    Mensual
                                </th>
                                <td class="text-center">
                                    $0
                                </td>
                                <td class="text-center">
                                    $85.500
                                </td>
                                <td class="text-center">
                                    $159.500
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- RED SOCIAL EMPRESARIAL -->
                    <table class="table_price_prov table">
                        <caption>Red social empresarial</caption>
                        <tbody>
                            <tr>
                                <th scope="col" colspan="7" class="title">
                                    Red social empresarial
                                </th>
                                <td rowspan="4" class="more">-</td>
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Perfil
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                   
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Multimedia en el perfil
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                   
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Reputaciones
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Mensajes
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Recomendaciones
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Actividad reciente
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Clientes sugeridos
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                        </tbody>
                    </table>
                    <!-- VARIOS -->
                    <table class="table_price_prov table">
                        <caption>Procesos handelBay</caption>
                        <tbody>
                            <tr>
                                <th scope="col" colspan="7" class="title">
                                    Varios
                                </th>
                                <td rowspan="4" class="more">-</td>
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Documentación
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                   
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Multiusuario
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                   
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Múltiples roles de usuario
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Codificación UNSPSC
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Transferencia de procesos
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>                                
                        </tbody>
                    </table>
                    <!-- GENERALES -->
                    <table class="table_price_prov table">
                        <caption>Interaciones handelBay</caption>
                        <tbody>
                            <tr>
                                <th scope="col" colspan="7" class="title">
                                    Generales
                                </th>
                                <td rowspan="4" class="more">-</td>
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Cantidad de usuarios
                                </th>
                                <td class="text-center">
                                    2
                                </td>
                                <td class="text-center">
                                    4
                                </td>
                                <td class="text-center">
                                    8
                                </td>
                                <td class="text-center">
                                    Ilimitados
                                </td>
                                <td class="text-center">
                                    Ilimitados
                                </td>                                   
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Soporte
                                </th>
                                <td class="text-center">
                                    <span class="point"></span>
                                </td>
                                <td class="text-center">
                                    <span class="point"></span>
                                </td>
                                <td class="text-center">
                                    <span class="point"></span>
                                </td>
                                <td class="text-center">
                                    <span class="point"></span>
                                </td>
                                <td class="text-center">
                                    <span class="point"></span>
                                </td>                                   
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Cuenta
                                </th>
                                <td class="text-center">
                                    <span class="point"></span>
                                </td>
                                <td class="text-center">
                                    <span class="point"></span>
                                </td>
                                <td class="text-center">
                                    <span class="point"></span>
                                </td>
                                <td class="text-center">
                                    <span class="point"></span>
                                </td>
                                <td class="text-center">
                                    <span class="point"></span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Notificaciones
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Configuraciones generales
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Referidos
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>   
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Planes
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>                             
                        </tbody>
                    </table>
                    <!-- PROCESO DE COTIZACIÓN -->
                    <table class="table_price_prov table">
                        <caption>Proceso de cotización</caption>
                        <tbody>
                            <tr>
                                <th scope="col" colspan="7" class="title">
                                    Proceso de cotización
                                </th>
                                <td rowspan="4" class="more">-</td>
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Cantidad de cotizaciones
                                </th>
                                <td class="text-center">
                                    6
                                </td>
                                <td class="text-center">
                                    15
                                </td>
                                <td class="text-center">
                                    Ilimitados
                                </td>
                                <td class="text-center">
                                    Ilimitados
                                </td>
                                <td class="text-center">
                                    Ilimitados
                                </td>                                   
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Invitaciones a cotizar
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                   
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Leídos / No leídos
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Aviso de cierre de proceso
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Cotizaciones en línea
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Adjuntos multimedia
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>   
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Chat privado por proceso
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Chat grupal por proceso
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Log de eventos
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>   
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Cotizar por excel
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Recepción de Ocs
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Cotizar adicionales
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Postventa
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Calificaciones
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Recotizaciones
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    Exportar ordenes de compra a pdf
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>
                            <tr class="tr-body">
                                <th scope="col" colspan="2" class="subtitle">
                                    COP/USD
                                </th>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>
                                <td class="text-center">
                                    <span class="point">✔</span>
                                </td>                                                             
                            </tr>               
                        </tbody>
                    </table>

                    <!-- PERFIL PROVEEDOR -->
                    <table class="table_price_prov table">
                        <% k = ["Líneas de negocio","Productos","KAM's","Dashboard","Metas comerciales","Portafolio en línea"] %>
                        <caption>Perfil proveedor</caption>
                        <tbody>
                            <tr>
                                <th scope="col" colspan="7" class="title">
                                    Perfil proveedor
                                </th>
                                <td rowspan="4" class="more">-</td>
                            </tr>
                            <% k.each_with_index do |perf, i| %>
                                <tr class="tr-body">
                                    <th scope="col" colspan="2" class="subtitle">
                                        <%= perf%>
                                    </th>
                                    <% if i == 4 %>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                    <%else %>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                    <%end%>                                   
                                </tr>
                            <%end%>
                        </tbody>
                    </table>

                    <!-- REPORTES -->
                    <table class="table_price_prov table">
                        <caption>Reportes</caption>
                        <tbody>
                            <tr>
                                <th scope="col" colspan="7" class="title">
                                    Reportes
                                </th>
                                <td rowspan="4" class="more">-</td>
                            </tr>
                            <% f.each_with_index do |rep, i| %>
                                <tr class="tr-body">
                                    <th scope="col" colspan="2" class="subtitle">
                                        <%= rep%>
                                    </th>
                                    <% if i == 0 || i == 1 %>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                    <%elsif i == 2 %>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">X</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                        <td class="text-center">
                                            <span class="point">✔</span>
                                        </td>
                                    <%end%>                                   
                                </tr>
                            <%end%>
                        </tbody>
                    </table>
                  </div>
                </div>
                <hr>
                <div class="text-center buttons-modal">
                  <button data-dismiss="modal" class="btn btn-handelbay-success btn-transparent-success">CERRAR</button>
                  <a :href="global.sign_up" class="btn btn-handelbay-success">
                    REGISTRARME
                  </a>
                </div>                        
                <br>
              </div> <!-- .buyerM -->
              <div role="tabpanel" class="tab-pane text-center" id="dualM">
                  <div class="title">
                      <h3>¡LO MEJOR DE DOS MUNDOS!</h3>
                  </div>
                  <p class="text">
                      Recuerda que para el perfil DUAL debes eligir un plan comprador y un plan proveedor
                  </p>
                  <p class="plan_text1 plan_txt text-center">Plan comprador</p>
                  <span class="more">
                      +
                  </span>
                  <p class="plan_text2 plan_txt text-center">Plan proveedor</p>
                  <div class="text-center buttons-modal">
                    <a href="" class="btn btn-handelbay-success" data-dismiss="modal">CERRAR</a>
                    <a :href="global.sign_up" class="btn btn-handelbay-success">
                      REGISTRARME
                    </a>
                  </div> 
                  <br>
              </div><!-- .dualM -->
            </div>                        
          </div>
          <!-- end primera parte  -->
        </div>                
      </div>
        <!-- .modal-content -->
    </div>
  </div>
    <!-- END MODAL AGENDA TU DEMO AHORA -->
<!--
<script>
  $(document).ready(function() {
    $('.table_price > tbody > .tr-body').css("display","none");
    $('.table_price_prov > tbody > .tr-body').css("display","none");
    $('.more').text("+");
  });
</script>
-->
</template>
<script>
import global from "@/components/Global.vue"
export default {
  data(){
    return{
      headers: ["Perfil","Multimedia en el perfil","Reputaciones","Mensajes","Recomendaciones", "Seguidores","Actividad reciente","Clientes sugeridos"],
      global: global
    }
  }
}
</script>