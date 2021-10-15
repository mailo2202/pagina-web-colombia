<template>
  <header class="header">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid handelbay-container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header navbar-header-logo d-none">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-handelbay-tradicionalcollapse-1"
              aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/" style="display: none;">
            <img src="landing/handelbay/handelbay_logo_menu.png" alt="HandelBay">
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse handelbay-navbar-collapse" id="bs-handelbay-tradicionalcollapse-1">
          <div class="container without-padding-left">
            <ul class="nav navbar-nav handelbay-navbar-left">
              <li>
                <router-link class="logo-handelbay-img" to="/">
                  <h1>
                    <img src="../assets/images/landing/handelbay/handelbay_logo_menu.png" alt="HandelBay">
                  </h1>
                </router-link>
              </li>
              <li class="header-list i" v-on:click="classActive('i')">
                <router-link class="navbar-nav_link" to="/">Inicio</router-link>
              </li>
              <li>
                <a class="navbar-nav_link">
                  Empresas
                  <span class="han-sr-only"></span>
                </a>
                <ul class="submenu">
                  <li class="submenu_item">
                    <router-link to="/compradores">
                      Compradores
                      <span class="han-sr-only"></span>
                    </router-link>
                  </li>
                  <li class="submenu_item">
                    <router-link to="/proveedores">
                      Proveedores
                      <span class="han-sr-only"></span>
                    </router-link>
                  </li>
                  <li class="submenu_item">
                    <router-link to="/dual">
                      Dual
                      <span class="han-sr-only"></span>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="header-list t" v-on:click="classActive('t')">
                <router-link class="navbar-nav_link" to="/tarifas">
                  Tarifas
                  <span class="han-sr-only"></span>
                </router-link>
              </li>
              <li class="header-list p" v-on:click="classActive('p')">
                <router-link class="navbar-nav_link" to="/porquehandelbay">
                  ¿Por qué handelbay?
                  <span class="han-sr-only"></span>
                </router-link>
              </li>
              <li class="header-list a" v-on:click="classActive('a')">
                <router-link class="navbar-nav_link" to="/alianzas">
                  Alianzas
                  <span class="han-sr-only"></span>
                </router-link>
              </li>
              <li class="header-list b" v-on:click="classActive('b')">
                <a class="navbar-nav_link" :href="url.blog">
                  Blog
                  <span class="han-sr-only"></span>
                </a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right handelbay-navbar-right">
              <li class="active navbar-right_item">
                <a :href="url.sign_up">
                  REGÍSTRATE GRATIS
                </a>
              </li>
              <li class="navbar-right_item">
                <a :href="url.sign_in">
                  Ingresar
                </a>
              </li>
              <li>
          <!-- <a href="/buscar" class="search-icon-landing"> -->
          <a :href="url.search" class="search-icon-landing">
            <i class="icon dripicons-search"></i>
          </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- /.navbar-collapse -->

        <!-- <a href="/buscar" class="search-icon-landing"> -->
        <a :href="url.search" class="search-icon-landing">
          <i class="icon dripicons-search"></i>
        </a>
      </div>
      <!-- /.container-fluid -->
      </nav>
  </header>
</template>

<script>

import global from '@/components/Global.vue'

export default {
  methods:{
    classActive: function (clas){
      $('li.header-list.active').removeClass('active');
      $("."+clas).addClass('active');
      $("body").focus();
    }
  },
  data(){
    return{
      url: global
    }
  }
}
 
</script>
<style>
.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
    color: #f4f8fb;
    background-color: #e7e7e7;
}
</style>
