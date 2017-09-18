'use strict';

$(function() {


  /*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */
 
  thesaas.config({

    /*
    |--------------------------------------------------------------------------
    | Google API Key
    |--------------------------------------------------------------------------
    |
    | Here you may specify your Google API key if you need to use Google Maps
    | in your application
    |
    | https://developers.google.com/maps/documentation/javascript/get-api-key
    |
    */

    googleApiKey: 'AIzaSyDRBLFOTTh2NFM93HpUA4ZrA99yKnCAsto',

    /*
    |--------------------------------------------------------------------------
    | Google Analytics Tracking
    |--------------------------------------------------------------------------
    |
    | If you want to use Google Analytics, you can specify your Tracking ID in
    | this option. Your key would be a value like: UA-12345678-9
    |
    */

    googleAnalyticsId: '',

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    |
    | If true, the browser's scrollbar moves smoothly on scroll and gives your
    | visitor a better experience for scrolling.
    |
    */
   
    smoothScroll: true

  });





  /*
  |--------------------------------------------------------------------------
  | Custom Javascript code
  |--------------------------------------------------------------------------
  |
  | Now that you configured your website, you can write additional Javascript
  | code below this comment. You might want to add more plugins and initialize
  | them in this file.
  |
  */


  function getParameterByName(name)
  {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if(results == null)
      return "";
    else
      return decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  $('#contact-message').val(getParameterByName("content"));


  //Language switching

  var url = location.href;
  var curLang = $('.lang .nav-submenu .nav-link.active').text();

  if (~url.indexOf('/zh')) {
    curLang = 'English';
  } else {
    curLang = '简体中文';
  }

  $('#cur_lang').text(curLang);

  if(~url.indexOf('/zh') || ~url.indexOf('/en') ) {
    url = url.replace('/en/', '/zh/');
    $('#lang_zh').attr('href',url);
    url = url.replace('/zh/', '/en/');
    $('#lang_en').attr('href',url);
  } else {
    var url_zh = url + 'zh/';
    var url_en = url + 'en/';
    $('#lang_zh').attr('href',url_zh);
    $('#lang_en').attr('href',url_en);
  }


  $('.lang .nav-submenu .nav-link').click(function(){
    $('.lang .nav-submenu .nav-link.active').removeClass('active');
    $(this).addClass('active');
  });


});
