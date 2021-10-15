<template>
  <div>
<main class="main-content">
    <div class="alliances-banner_wrap">
        <div class="alliances-banner_inner">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 col-sm-12 col-md-offset-1">
                        <% @headerPage = {
                            title: 'Nuestra nueva alianza',
                            colorBlack: true,
                            titleActive: false,
                            subtitle: 'Asociación Colombiana de Profesionales en Compras',
                            subtitleActive: true,
                            text: '<p>Conoce los beneficios que tenemos para tu empresa</p>'
                        } %>
                        <%= render partial: "landing/home/partials/page_title" %>
                    </div>
                    <div class="col-md-6 col-sm-12">
                          <img src="<%= asset_path 'landing/logo_acopc.png' %>" style="width:500px;heigth:300px" alt="Es hora de usar HandelBay en tu día a día">
                   </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="section-page_wrap">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-md-offset-1">
                    <% @headerPage = {
                        subtitle: 'Nuestra alianza',
                        subtitleActive: true,
                        text: '<p>¿Falta de tiempo para realizar actividades estratégicas por estar ocupados apagando incendios o dedicados a tareas operativas? ACOPC y HandelBay han unido esfuerzos, a fin de permitirle a las empresas liberar tiempo de actividades operativas, sistematizar muchos procedimientos manuales y permitir a los compradores dedicarse a actividades estratégicas.</p>',
                        buttons: {
                            primary: {
                                url: 'https://handelbay.com/users/sign_up',
                                title: 'Regístrate'
                            }
                        }
                    } %>
                    <%= render partial: "landing/home/partials/page_title" %>
                </div>
                <div class="col-md-4 col-sm-6">
                    <img src="<%= asset_path 'landing/handelbay/handelbay_computador.png' %>" alt="Nuestra alianza" class="img-full-width">
                </div>
            </div>
        </div>
        <div class="section-page_wrap">
            <div class="row">
                <div class="col-md-10 col-sm-12 col-md-offset-1">
                    <% @headerPage = {
                        subtitle: '¿Qué es ACOPC?',
                        subtitleActive: true,
                        text: '<p>La Asociación Colombiana de Profesionales en Compras(ACOPC) es una Entidad Civil del ámbito privado, sin ánimo de lucro,
                                debidamente registrada antes las autoridades Colombianas respectivas, y está sometida a la vigilancia, inspección
                                y control por las entidades de control correspondientes.</p>
                                <p>Fundada en 2017, la Asociación tiene como objeto primordial lograr la profesionalización de la disciplina de
                                abastecimiento/Compras y de todas las personas, profesionales o técnico, que la ejercen.</p>
                                <p>Disponemos de presencia física de Representantes(Ejecutivos Certificados) en las Regionales de Bogotá y Medellín,
                                pero son bienvenidos a afiliarse Miembros de todas las ciudades y regiones del país.</p>'
                    } %>
                    <%= render partial: "landing/home/partials/page_title" %>
                </div>
            </div>
        </div>
    </div>
    <div class="section-page_wrap">
        <section id="handelbay-background-curva">
        </section>
    </div>
    <section id="benefits">
        <div class="container">
            <div class="col-md-10 col-sm-12 col-md-offset-1">
                <% @headerPage = {
                    subtitle: 'Beneficios',
                    subtitleActive: true
                } %>
                <%= render partial: "landing/home/partials/page_title" %>
                <% @benefits = {
                    benefitsItems: [
                        {
                            header: {
                                bg: 'landing/handelbay/Icono_ACOPC-02.png',
                            },
                            body: {
                                bodyTitle: {
                                    label: 'Seminario Individual'
                                },
                                bodyDescription: {
                                    text: 'Descuento del 5% en los seminarios abiertos de abastecimiento estratégico ofertados en el calendario de eventos de ACOPC.             '
                                }
                            },
                            footer: {
                                buttons: {
                                    primary: {
                                        url: "https://www.acopc.com.co/capacitacion/",
                                        title: 'Ver más',
                                        target: true
                                    }
                                }
                            }
                        },
                        {
                            header: {
                                bg: 'landing/handelbay/Icono_ACOPC2-02.png',
                            },
                            body: {
                                bodyTitle: {
                                    label: 'Seminario Grupal'
                                },
                                bodyDescription: {
                                    text: 'Descuento del 10% en seminarios privados, dentro de las empresas.  Este modelo es ideal para empresas que cuenten con un gran numero de compradores y los quieran capacitar a todos.'
                                }
                            },
                            footer: {
                                buttons: {
                                    primary: {
                                        url: "https://www.acopc.com.co/seminarios-cerrados/",
                                        title: 'Ver más',
                                        target: true
                                    }
                                }
                            }
                        }
                    ]
                }%>
                <%= render partial: "landing/home/partials/benefits" %>
            </div>
        </div>
    </section>
    <section id="handelbay-background-curva-bottom">
    </section>

    <div class="container">
        <div class="section-page_wrap">
            <div class="row">
                <div class="col-md-10 col-sm-12 col-md-offset-1">
                    <% @headerPage = {
                        subtitle: 'Contacto',
                        subtitleActive: true
                    } %>
                    <%= render partial: "landing/home/partials/page_title" %>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 col-sm-4 hidden-xs col-md-offset-2">
                    <div class="img-profile">
                        <img src="../assets/images/landing/handelbay/handelbay_agenda_profile.png" alt="Si quieres tener más información de los beneficios de esta alianza, ¡contáctanos!" class="img-full-width">
                    </div>
                </div>
                <div class="col-md-6 col-sm-7">
                    <div class="auth-form_wrap">
                        <div class="auth-form_head">
                            <div class="auth-form_head-title">
                                <h3 class="title">Si quieres tener más información de los beneficios de esta alianza,
                                ¡contáctanos!</h3>
                            </div>
                        </div>
                        <div class="auth-form_body">
                            <form action="" class="form-valid">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="name">Nombre completo</label>
                                            <input type="text" name="name" id="name" required="required" class="floating inputs" title="Nombre requerido">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="email">Correo electrónico</label>
                                            <input type="email" name="email" id="email" required="required" class="floating inputs" title="Correo invalido." pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="phone">Teléfono</label>
                                            <input type="text" name="phone" id="phone" required="required" class="floating inputs">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="company_name">Nombre de tu empresa</label>
                                            <input type="text" name="company_name" id="company_name" required="required" class="floating inputs">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group-check">
                                            <div class="squared">
                                                <input type="checkbox" required="" id="downloader-privacity">
                                                <label class="downloader-privacity" for="downloader-privacity"></label>
                                            </div>
                                            <div class="check_text inline-block">
                                                <div class="titles">
                                                    <label for="downloader-privacity">
                                                        Me gustaria recibir información y ofertas sobre HandelBay
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="auth-form_body-info">
                                            <p>Al registrarse está de acuerdo con nuestro Términos de servicio y Política de Privacidad</p>
                                        </div>
                                        <div class="sendAction">
                                            <hr>
                                            <%= button_tag 'Regístrate', class:"btn btn-handelbay-success" %>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
  </div>
</template>