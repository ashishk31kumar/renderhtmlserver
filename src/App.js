import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  userDetail
} from "./authActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email: "",
      website:"",
      subject:"",
      message:"",
      file:[],
      isformSubmited:false,
      isFileUploaded : false,
      errors:{},
      displayButton:false
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onChangeFile = e => {
    this.setState({
      file: e.target.files ,
        isformSubmited: true,
        isFileUploaded : true
    });
};
onSubmit = e =>{
  e.preventDefault();

  let user= this.state
    this.props.userDetail(user)
    .then(err=>{
      this.setState({displayButton:true,name:"",website:"",email:"",subject:"",message:"",file:""})
    })
    .catch(err=>{

    })
    


}
  render() {
    const errors= this.state.errors
    return (
      <div>
        <body class="page-template-default page page-id-58 wp-custom-logo theme-colorlib-v496 woocommerce-js wpex-theme wpex-responsive full-width-main-layout no-composer wpex-live-site content-right-sidebar has-sidebar has-topbar has-breadcrumbs sidebar-widget-icons hasnt-overlay-header smooth-fonts wpex-mobile-toggle-menu-icon_buttons has-mobile-menu wpb-js-composer js-comp-ver-6.0.5 vc_responsive wpex-docready wpex-window-loaded">
          <div class="wpex-site-overlay">
          </div> <a href="#content" class="skip-to-content">skip to Main Content</a><span data-ls_id="#site_top">
          </span>
          <div id="outer-wrap" class="clr">
            <div id="wrap" class="clr">
              <div id="top-bar-wrap" class="clr">
                <div id="top-bar" class="clr container">
                  <div id="top-bar-content" class="wpex-clr has-content top-bar-left">
                    <span class="ticon ticon-wordpress">
                    </span>
                    <strong>Our free WordPress themes are downloaded over 3 MILLION times.</strong>
                    <a title="Awesome &amp; Free WordPress Themes" href="https://colorlib.com/wp/themes/">Get them now!</a>
                  </div>
                  <div id="top-bar-social" class="clr top-bar-right social-style-none">
                    <ul id="top-bar-social-list" class="wpex-clr">
                      <li>
                        <a href="https://twitter.com/colorlib" title="Twitter" target="_blank" class="wpex-twitter wpex-social-btn wpex-social-btn-no-style">
                          <span class="ticon ticon-twitter" aria-hidden="true">
                          </span>
                          <span class="screen-reader-text">Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/colorlib" title="Facebook" target="_blank" class="wpex-facebook wpex-social-btn wpex-social-btn-no-style">
                          <span class="ticon ticon-facebook" aria-hidden="true">
                          </span>
                          <span class="screen-reader-text">Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/colorlib/" title="Pinterest" target="_blank" class="wpex-pinterest wpex-social-btn wpex-social-btn-no-style">
                          <span class="ticon ticon-pinterest" aria-hidden="true">
                          </span>
                          <span class="screen-reader-text">Pinterest</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/colorlib/" title="Instagram" target="_blank" class="wpex-instagram wpex-social-btn wpex-social-btn-no-style">
                          <span class="ticon ticon-instagram" aria-hidden="true">
                          </span>
                          <span class="screen-reader-text">Instagram</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/colorlib" title="LinkedIn" target="_blank" class="wpex-linkedin wpex-social-btn wpex-social-btn-no-style">
                          <span class="ticon ticon-linkedin" aria-hidden="true">
                          </span>
                          <span class="screen-reader-text">LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/Colorlib" title="Youtube" target="_blank" class="wpex-youtube wpex-social-btn wpex-social-btn-no-style">
                          <span class="ticon ticon-youtube" aria-hidden="true">
                          </span>
                          <span class="screen-reader-text">Youtube</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/colorlibhq/" title="Github" target="_blank" class="wpex-github wpex-social-btn wpex-social-btn-no-style">
                          <span class="ticon ticon-github" aria-hidden="true">
                          </span>
                          <span class="screen-reader-text">Github</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="site-header-sticky-wrapper" class="wpex-sticky-header-holder not-sticky wpex-can-sticky">
                <header id="site-header" class="header-one fixed-scroll shrink-sticky-header dyn-styles clr" itemscope="itemscope" itemtype="http://schema.org/WPHeader">
                  <div id="site-header-inner" class="container clr">
                    <div id="site-logo" class="site-branding clr header-one-logo">
                      <div id="site-logo-inner" class="clr">
                        <a href="https://colorlib.com/wp/" rel="home" class="main-logo">
                          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-logo-top.png" alt="Colorlib" class="logo-img lazyloaded" data-no-retina="data-no-retina" data-lazy-src="https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-logo-top.png" data-was-processed="true" />
                          <noscript>
                            <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-logo-top.png" alt="Colorlib" class="logo-img" data-no-retina="data-no-retina" />
                          </noscript>
                        </a>
                      </div>
                    </div>
                    <div id="site-navigation-wrap" class="navbar-style-one wpex-dropdowns-caret hide-at-mm-breakpoint clr">
                      <nav id="site-navigation" class="navigation main-navigation clr" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement" aria-label="Main menu">
                        <ul id="menu-main-menu" class="dropdown-menu main-navigation-ul sf-menu sf-js-enabled">
                          <li id="menu-item-22043" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children dropdown menu-item-22043"><a href="https://colorlib.com/wp/" class="sf-with-ul">
                            <span class="link-inner">Home</span>
                          </a>
                            <ul class="sub-menu">
                              <li id="menu-item-23228" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-23228">
                                <a href="https://colorlib.com/wp/jobs/">
                                  <span class="link-inner">We Are Hiring!</span>
                                </a>
                              </li>
                              <li id="menu-item-22044" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22044">
                                <a href="https://colorlib.com/wp/about/">
                                  <span class="link-inner">About Colorlib</span>
                                </a>
                              </li>
                              <li id="menu-item-22045" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22045">
                                <a href="https://colorlib.com/wp/advertise/">
                                  <span class="link-inner">Advertise on Colorlib</span>
                                </a>
                              </li>
                              <li id="menu-item-22052" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-58 current_page_item menu-item-22052">
                                <a href="https://colorlib.com/wp/contact-us/" aria-current="page">
                                  <span class="link-inner">Contact us</span>
                                </a>
                              </li>
                              <li id="menu-item-22054" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22054">
                                <a title="Our Contributors and Theme Translators" href="https://colorlib.com/wp/contributors/">
                                  <span class="link-inner">Our Contributors</span>
                                </a>
                              </li>
                              <li id="menu-item-164980" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-164980">
                                <a href="https://colorlib.com/privacy-policy/">
                                  <span class="link-inner">Privacy Policy</span>
                                </a>
                              </li>
                              <li id="menu-item-22062" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22062">
                                <a href="https://colorlib.com/wp/terms-conditions/">
                                  <span class="link-inner">Terms and Conditions</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li id="menu-item-22073" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22073">
                            <a href="https://colorlib.com/wp/forums/"><span class="link-inner">Support Forum
        </span>
                            </a>
                          </li>
                          <li id="menu-item-22066" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-22066">
                            <a title="Best Free WordPress Themes" href="https://colorlib.com/wp/themes/" class="sf-with-ul">
                              <span class="link-inner">Free Themes</span>
                            </a>
                            <ul class="sub-menu">
                              <li id="menu-item-35769" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-35769">
                                <a title="Activello – Simple Multipurpose Blog Theme" href="https://colorlib.com/wp/themes/activello/" class="sf-with-ul">
                                  <span class="link-inner">Activello<span class="nav-arrow second-level ticon ticon-angle-right" aria-hidden="true">
                                  </span>
                                  </span>
                                </a>
                                <ul class="sub-menu">
                                  <li id="menu-item-35776" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35776">
                                    <a title="Activello – Simple Multipurpose Blog Theme" href="https://colorlib.com/wp/themes/activello/">
                                      <span class="link-inner">About Activello</span>
                                    </a>
                                  </li>
                                  <li id="menu-item-35777" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35777">
                                    <a href="https://colorlib.com/wp/support/activello/">
                                      <span class="link-inner">Activello Documentation</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li id="menu-item-44645" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-44645">
                                <a title="Illdy – Free One Page WordPress Business Theme" href="https://colorlib.com/wp/themes/illdy/" class="sf-with-ul">
                                  <span class="link-inner">Illdy Theme<span class="nav-arrow second-level ticon ticon-angle-right" aria-hidden="true">
                                  </span>
                                  </span>
                                </a>
                                <ul class="sub-menu">
                                  <li id="menu-item-46991" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46991">
                                    <a href="https://colorlib.com/wp/themes/illdy/">
                                      <span class="link-inner">About Illdy</span>
                                    </a>
                                  </li>
                                  <li id="menu-item-46989" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46989">
                                    <a href="https://colorlib.com/wp/support/illdy/">
                                      <span class="link-inner">Illdy Documentation</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li id="menu-item-48602" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-48602">
                                <a title="Shapely – One Page WordPress Theme" href="https://colorlib.com/wp/themes/shapely/" class="sf-with-ul">
                                  <span class="link-inner">Shapely<span class="nav-arrow second-level ticon ticon-angle-right" aria-hidden="true">
                                  </span>
                                  </span>
                                </a>
                                <ul class="sub-menu">
                                  <li id="menu-item-54877" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-54877">
                                    <a title="Shapely – One Page WordPress Theme" href="https://colorlib.com/wp/themes/shapely/">
                                      <span class="link-inner">About Shapely</span>
                                    </a>
                                  </li>
                                  <li id="menu-item-54876" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-54876">
                                    <a href="https://colorlib.com/wp/support/shapely/">
                                      <span class="link-inner">Shapely Documentation</span></a></li></ul></li><li id="menu-item-22050" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-22050"><a title="Sparkling – Free Flat Design WordPress Theme" href="https://colorlib.com/wp/themes/sparkling/" class="sf-with-ul">
                                        <span class="link-inner">Sparkling<span class="nav-arrow second-level ticon ticon-angle-right" aria-hidden="true"></span></span></a><ul class="sub-menu"><li id="menu-item-22309" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22309"><a title="Sparkling – Free Flat Design WordPress Theme" href="https://colorlib.com/wp/themes/sparkling/"><span class="link-inner">About Sparkling</span>
                                        </a></li><li id="menu-item-22059" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22059"><a title="Sparkling Theme Documentation" href="https://colorlib.com/wp/support/sparkling/"><span class="link-inner">Sparkling Documentation</span></a>
                                  </li></ul></li><li id="menu-item-22048" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-22048"><a title="Dazzling – Free Flat Design WordPress Business Theme" href="https://colorlib.com/wp/themes/dazzling/" class="sf-with-ul"><span class="link-inner">Dazzling<span class="nav-arrow second-level ticon ticon-angle-right" aria-hidden="true"></span></span></a><ul class="sub-menu"><li id="menu-item-22310" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22310"><a title="Dazzling – Free Flat Design WordPress Business Theme" href="https://colorlib.com/wp/themes/dazzling/">
                                    <span class="link-inner">About Dazzling</span></a>
                                  </li>
                                    <li id="menu-item-22057" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22057">
                                      <a title="Dazzling Theme Documentation" href="https://colorlib.com/wp/support/dazzling/">
                                        <span class="link-inner">Dazzling Documentation</span>
                                      </a>
                                    </li>
                                  </ul>
                              </li>
                              <li id="menu-item-22051" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-22051">
                                <a title="Travelify – Awesome &amp; Responsive Travel WordPress Theme" href="https://colorlib.com/wp/themes/travelify/" class="sf-with-ul">
                                  <span class="link-inner">Travelify<span class="nav-arrow second-level ticon ticon-angle-right" aria-hidden="true">
                                  </span>
                                  </span>
                                </a>
                                <ul class="sub-menu">
                                  <li id="menu-item-22311" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22311">
                                    <a title="Travelify – Awesome &amp; Responsive Travel WordPress Theme" href="https://colorlib.com/wp/themes/travelify/">
                                      <span class="link-inner">About Travelify</span>
                                    </a></li>
                                  <li id="menu-item-22060" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22060">
                                    <a title="Travelify Theme Documentation" href="https://colorlib.com/wp/support/travelify/">
                                      <span class="link-inner">Travelify Documentation</span>
                                    </a></li></ul>
                              </li><li id="menu-item-22063" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-22063">
                                <a title="Unite – Free WordPress Wedding Theme" href="https://colorlib.com/wp/unite/" class="sf-with-ul">
                                  <span class="link-inner">Unite<span class="nav-arrow second-level ticon ticon-angle-right" aria-hidden="true"></span>
                                  </span></a>
                                <ul class="sub-menu">
                                  <li id="menu-item-22308" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22308">
                                    <a title="Unite – Free WordPress Wedding Theme" href="https://colorlib.com/wp/unite/">
                                      <span class="link-inner">About Unite</span></a></li>
                                  <li id="menu-item-22061" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22061">
                                    <a title="Unite Theme Documentation" href="https://colorlib.com/wp/support/unite/">
                                      <span class="link-inner">Unite Documentation</span></a></li></ul></li>
                              <li id="menu-item-22049" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-22049">
                                <a title="Pinbin – Beautiful &amp; Responsive WordPress Theme" href="https://colorlib.com/wp/themes/pinbin/" class="sf-with-ul">
                                  <span class="link-inner">Pinbin<span class="nav-arrow second-level ticon ticon-angle-right" aria-hidden="true"></span>
                                  </span></a>
                                <ul class="sub-menu"><li id="menu-item-22312" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22312"><a title="Pinbin – Beautiful &amp; Responsive WordPress Theme" href="https://colorlib.com/wp/themes/pinbin/">
                                  <span class="link-inner">About Pinbin</span></a>
                                </li><li id="menu-item-22058" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22058"><a title="Pinbin Theme Documentation" href="https://colorlib.com/wp/support/pinbin/">
                                  <span class="link-inner">Pinbin Documentation</span></a></li>
                                </ul></li><li id="menu-item-22307" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-22307"><a title="Free WordPress themes" href="https://colorlib.com/wp/category/free-themes/">
                                  <span class="link-inner">Other WP Themes</span>
                                </a></li>
                              <li id="menu-item-186965" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-186965">
                                <a title="Free HTML templates" href="https://colorlib.com/wp/templates/">
                                  <span class="link-inner">HTML Templates</span></a></li>
                            </ul></li><li id="menu-item-22305" class="megamenu col-4 menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children dropdown menu-item-22305">
                            <a href="https://colorlib.com/wp/category/collections/" class="sf-with-ul">
                              <span class="link-inner">Premium Themes</span>
                            </a><ul class="sub-menu">
                              <li id="menu-item-22315" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children dropdown menu-item-22315">
                                <a href="https://colorlib.com/wp/category/collections/" class="sf-with-ul">
                                  <span class="link-inner">Theme Collections<span class="nav-arrow second-level ticon ticon-angle-right" aria-hidden="true"></span>
                                  </span></a>
                                <ul class="sub-menu" >
                                  <li id="menu-item-22317" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-22317">
                                    <a href="https://colorlib.com/wp/three-column-wordpress-themes/">
                                      <span class="link-inner">3 Column</span></a></li>
                                  <li id="menu-item-27128" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-27128">
                                    <a href="https://colorlib.com/wp/affiliate-wordpress-themes/"><span class="link-inner">Affiliate Marketing</span></a>
                                  </li><li id="menu-item-22327" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-22327">
                                    <a href="https://colorlib.com/wp/creative-wordpress-themes/">
                                      <span class="link-inner">Creative</span>
                                    </a></li><li id="menu-item-22323" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-22323">
                                    <a href="https://colorlib.com/wp/genesis-child-themes/"><span class="link-inner">Genesis Child Themes</span>
                                    </a></li>
                                  <li id="menu-item-22326" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-22326"><a href="https://colorlib.com/wp/best-ecommerce-wordpress-themes/"><span class="link-inner">eCommerce</span></a></li>
                                  <li id="menu-item-22365" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22365">
                                    <a href="https://colorlib.com/wp/best-education-wordpress-themes/"><span class="link-inner">Education</span></a>
                                  </li><li id="menu-item-22320" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-22320"><a href="https://colorlib.com/wp/health-medical-wordpress-themes/"><span class="link-inner">Health &amp; Medical</span>
                                  </a></li><li id="menu-item-22325" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-22325"><a href="https://colorlib.com/wp/top-20-high-quality-wordpress-themes/"><span class="link-inner">HQ Themes</span></a>
                                  </li><li id="menu-item-22324" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-22324"><a href="https://colorlib.com/wp/landing-page-wordpress-themes/"><span class="link-inner">Landing Page</span></a>
                                  </li><li id="menu-item-22318" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-22318"><a href="https://colorlib.com/wp/best-news-wordpress-themes/"><span class="link-inner">Magazine</span></a>
                                  </li><li id="menu-item-22321" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-22321"><a href="https://colorlib.com/wp/popular-multipurpose-wordpress-themes/"><span class="link-inner">Multipurpose</span></a>
                                  </li><li id="menu-item-22322" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-22322"><a href="https://colorlib.com/wp/popular-wordpress-themes/"><span class="link-inner">Most Popular</span></a>
                                  </li><li id="menu-item-22351" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22351"><a href="https://colorlib.com/wp/best-spa-salon-wordpress-themes/">
                                    <span class="link-inner">SPA &amp; Hair Salon</span></a></li></ul>
                              </li><li id="menu-item-22306" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children dropdown menu-item-22306"><a href="https://colorlib.com/wp/category/collections/" class="sf-with-ul">
                                <span class="link-inner">Theme Collections<span class="nav-arrow second-level ticon ticon-angle-right" aria-hidden="true"></span></span>
                              </a><ul class="sub-menu"><li id="menu-item-22338" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22338">
                                <a href="https://colorlib.com/wp/best-app-showcase-wordpress-themes/"><span class="link-inner">App Showcase</span></a>
                              </li><li id="menu-item-22339" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22339">
                                    <a href="https://colorlib.com/wp/adsense-optimized-wordpress-themes/"><span class="link-inner">AdSense Ready</span></a>
                                  </li><li id="menu-item-22313" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22313">
                                    <a href="https://colorlib.com/wp/best-personal-blog-wordpress-themes/"><span class="link-inner">Blog</span></a>
                                  </li><li id="menu-item-22336" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22336"><a href="https://colorlib.com/wp/best-wordpress-business-themes/">
                                    <span class="link-inner">Business</span></a></li><li id="menu-item-22337" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22337"><a href="https://colorlib.com/wp/coming-soon-wordpress-themes/"><span class="link-inner">Coming Soon</span></a></li><li id="menu-item-22354" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22354"><a href="https://colorlib.com/wp/church-wordpress-themes/"><span class="link-inner">Church</span></a></li><li id="menu-item-22364" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22364"><a href="https://colorlib.com/wp/best-directory-wordpress-themes/"><span class="link-inner">Directory</span></a></li><li id="menu-item-22333" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22333"><a href="https://colorlib.com/wp/green-eco-friendly-wordpress-themes/"><span class="link-inner">Eco &amp; Green</span></a></li><li id="menu-item-22334" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22334"><a href="https://colorlib.com/wp/flat-design-wordpress-theme/"><span class="link-inner">Flat Design</span></a></li><li id="menu-item-22332" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22332"><a href="https://colorlib.com/wp/best-portfolio-wordpress-themes/"><span class="link-inner">Portfolio</span></a></li><li id="menu-item-22335" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22335"><a href="https://colorlib.com/wp/best-one-page-wordpress-themes/"><span class="link-inner">One Page</span></a></li><li id="menu-item-22340" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22340"><a href="https://colorlib.com/wp/seo-optimized-wordpress-themes/"><span class="link-inner">SEO Friendly</span></a></li></ul></li><li id="menu-item-22355" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children dropdown menu-item-22355"><a href="https://colorlib.com/wp/category/collections/" class="sf-with-ul"><span class="link-inner">Theme Collections<span class="nav-arrow second-level ticon ticon-angle-right" aria-hidden="true"></span></span></a><ul class="sub-menu"><li id="menu-item-22343" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22343"><a href="https://colorlib.com/wp/best-wordpress-themes-for-architects/"><span class="link-inner">Architect</span></a></li><li id="menu-item-22353" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22353"><a href="https://colorlib.com/wp/best-bootstrap-wordpress-themes/"><span class="link-inner">Bootstrap</span></a></li><li id="menu-item-22344" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22344"><a href="https://colorlib.com/wp/fashion-wordpress-themes/"><span class="link-inner">Fashion</span></a></li><li id="menu-item-22341" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22341"><a href="https://colorlib.com/wp/best-wordpress-job-board-themes/"><span class="link-inner">Job Board</span></a></li><li id="menu-item-22347" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22347"><a href="https://colorlib.com/wp/best-full-screen-wordpress-themes/"><span class="link-inner">FullScreen</span></a></li><li id="menu-item-22349" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22349"><a href="https://colorlib.com/wp/fast-loading-wordpress-themes/"><span class="link-inner">Fast Loading</span></a></li><li id="menu-item-27127" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-27127"><a href="https://colorlib.com/wp/feminine-wordpress-themes/"><span class="link-inner">Feminine</span></a></li><li id="menu-item-22350" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22350"><a href="https://colorlib.com/wp/hotel-booking-wordpress-themes/"><span class="link-inner">Hotel Booking</span></a></li><li id="menu-item-22345" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22345"><a href="https://colorlib.com/wp/music-wordpress-themes/"><span class="link-inner">Music</span></a></li><li id="menu-item-22348" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22348"><a href="https://colorlib.com/wp/masonry-grid-wordpress-themes/"><span class="link-inner">Masonry Grid</span></a></li><li id="menu-item-22346" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22346"><a href="https://colorlib.com/wp/wordpress-nightclub-themes/"><span class="link-inner">Nightclub</span></a></li><li id="menu-item-22342" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22342"><a href="https://colorlib.com/wp/best-wordpress-travel-themes/"><span class="link-inner">Travel</span></a></li><li id="menu-item-22363" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22363"><a href="https://colorlib.com/wp/it-company-wordpress-themes/"><span class="link-inner">Tech Startups</span></a></li></ul></li><li id="menu-item-22314" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children dropdown menu-item-22314"><a href="https://colorlib.com/wp/category/collections/" class="sf-with-ul"><span class="link-inner">Theme Collections<span class="nav-arrow second-level ticon ticon-angle-right" aria-hidden="true"></span></span></a><ul class="sub-menu">
                                      <li id="menu-item-22360" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22360"><a href="https://colorlib.com/wp/wordpress-bbpress-forum-themes/"><span class="link-inner">bbPress</span></a></li><li id="menu-item-22329" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22329"><a href="https://colorlib.com/wp/clean-wordpress-themes/"><span class="link-inner">Clean</span></a></li><li id="menu-item-22358" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22358"><a href="https://colorlib.com/wp/construction-company-wordpress-themes/"><span class="link-inner">Construction</span></a></li><li id="menu-item-22362" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22362"><a href="https://colorlib.com/wp/best-wordpress-fitness-themes/"><span class="link-inner">Fitness &amp; Gym</span></a></li><li id="menu-item-22352" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22352"><a href="https://colorlib.com/wp/best-hosting-wordpress-themes/"><span class="link-inner">Hosting</span></a></li><li id="menu-item-22316" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22316"><a href="https://colorlib.com/wp/parallax-wordpress-themes/"><span class="link-inner">Parallax</span></a></li><li id="menu-item-22328" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22328"><a href="https://colorlib.com/wp/simple-wordpress-themes/"><span class="link-inner">Simple</span></a></li><li id="menu-item-22331" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22331"><a href="https://colorlib.com/wp/best-vcard-wordpress-themes/"><span class="link-inner">Resume and vCard</span></a></li><li id="menu-item-22356" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22356"><a href="https://colorlib.com/wp/knowledge-base-wiki-faq-support-wordpress-themes/"><span class="link-inner">Knowledge Base</span></a></li><li id="menu-item-22359" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22359"><a href="https://colorlib.com/wp/best-lawyer-wordpress-themes/"><span class="link-inner">Lawyer</span></a></li><li id="menu-item-22361" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22361"><a href="https://colorlib.com/wp/category/photography/"><span class="link-inner">Photography</span></a></li><li id="menu-item-22357" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22357"><a href="https://colorlib.com/wp/wordpress-restaurant-themes/"><span class="link-inner">Restaurant</span></a></li><li id="menu-item-27126" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-27126"><a href="https://colorlib.com/wp/real-estate-wordpress-themes/"><span class="link-inner">Real Estate</span></a></li></ul></li></ul></li><li id="menu-item-22067" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children dropdown menu-item-22067"><a href="https://colorlib.com/wp/" class="sf-with-ul"><span class="link-inner">Blog</span></a><ul class="sub-menu" ><li id="menu-item-22064" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22064"><a href="https://colorlib.com/wp/coupons/"><span class="link-inner">WordPress Coupons</span></a></li><li id="menu-item-22068" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-22068"><a href="https://colorlib.com/wp/category/collections/"><span class="link-inner">Theme Collections</span></a></li><li id="menu-item-22069" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-22069"><a href="https://colorlib.com/wp/category/news/"><span class="link-inner">News</span></a></li><li id="menu-item-22070" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-22070"><a href="https://colorlib.com/wp/category/tutorial/"><span class="link-inner">Tutorial</span></a></li><li id="menu-item-22071" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-22071"><a href="https://colorlib.com/wp/category/giveaway/"><span class="link-inner">Giveaway</span></a></li><li id="menu-item-22072" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-22072"><a href="https://colorlib.com/wp/category/reviews/"><span class="link-inner">Reviews</span></a></li></ul></li><li class="woo-menu-icon wpex-menu-extra menu-item wcmenucart-toggle-drop_down toggle-cart-widget"><a href="https://colorlib.com/wp/cart/" class="wcmenucart wcmenucart-items-0"><span class="link-inner"><span class="wcmenucart-count"><span class="wcmenucart-icon ticon ticon-shopping-cart"></span><span class="wcmenucart-text">Cart</span><span class="wcmenucart-details count t-bubble">0</span></span></span></a></li><li class="menu-item wpex-mm-menu-item"><a href="https://colorlib.com/wp/cart/"><span class="link-inner">Cart</span></a></li><li class="search-toggle-li wpex-menu-extra menu-item"><a href="#" class="site-search-toggle search-header-replace-toggle"><span class="link-inner"><span class="wpex-menu-search-text">Search</span><span class="wpex-menu-search-icon ticon ticon-search" aria-hidden="true"></span></span></a></li></ul></nav></div><div id="mobile-menu" class="wpex-mobile-menu-toggle show-at-mm-breakpoint wpex-clr"><a href="#" class="mobile-menu-toggle" role="button" aria-label="Toggle mobile menu" aria-expanded="false"><span class="wpex-bars" aria-hidden="true"><span></span></span></a></div><div id="current-shop-items-dropdown"><div id="current-shop-items-inner"><div class="widget woocommerce widget_shopping_cart"><h2 class="widgettitle">Cart</h2><div class="widget_shopping_cart_content">

                                        <p class="woocommerce-mini-cart__empty-message">No products in the cart.</p>


                                      </div>
                                      </div>
                                      </div></div>
                    <div id="searchform-header-replace" class="clr header-searchform-wrap" data-placeholder="Type then hit enter to search…" data-disable-autocomplete="true"><form method="get" class="searchform" action="https://colorlib.com/wp/"> <label> <span class="screen-reader-text">Search</span>
                      <input type="search" class="field" name="s" placeholder="Type then hit enter to search…" autocomplete="off" /> </label> <button type="submit" class="searchform-submit"><span class="ticon ticon-search" aria-hidden="true">
                      </span><span class="screen-reader-text">Submit</span></button></form> <span id="searchform-header-replace-close" class="wpex-disable-user-select">×<span class="screen-reader-text">Close search</span></span></div></div></header></div><main id="main" class="site-main clr">
                <header class="page-header wpex-supports-mods"><div class="page-header-inner container clr"><h1 class="page-header-title wpex-clr" itemprop="headline"><span>Contact us</span></h1><nav class="site-breadcrumbs wpex-clr hidden-phone position-absolute has-js-fix"><span class="breadcrumb-trail"><span><span><a href="https://colorlib.com/wp/">Home</a> » <span class="breadcrumb_last">Contact us</span></span></span></span></nav></div></header><div id="content-wrap" class="container clr">
                  <div id="primary" class="content-area clr"><div id="content" class="site-content clr"><article id="single-blocks" class="single-page-article wpex-clr"><div class="single-content single-page-content entry clr"><h1>Please note:</h1><p><strong>Please don’t contact us for theme support related questions as they will be ignored. Use our&nbsp;<a title="Support Forum" href="https://colorlib.com/wp/forums">Support Forum</a>.&nbsp;</strong></p>
                    <div role="form" class="wpcf7" id="wpcf7-f2620-p58-o1" lang="en-US" dir="ltr">
                      <div class="screen-reader-response">
                      </div>
                      <form action="/wp/contact-us/#wpcf7-f2620-p58-o1" method="post" class="wpcf7-form" enctype="multipart/form-data" novalidate="novalidate" onSubmit={this.onSubmit}>
                        <div> 
                          <input type="hidden" name="_wpcf7" value="2620" />
                          <input type="hidden" name="_wpcf7_version" value="5.1.7" />
                          <input type="hidden" name="_wpcf7_locale" value="en_US" />
                          <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f2620-p58-o1" />
                          <input type="hidden" name="_wpcf7_container_post" value="58" />
                          <input type="hidden" name="g-recaptcha-response" value="03AHaCkAZk2kxkqhlUKGPu8gk1VxJEHoTLLsT1A3KW_IwrToA7wDPLbwegzktKu3UxVsq0PIx5hgh7DvIUloNSM_9J3T_iphI10bTgGOUOX3sTHBW-7qv9bEkWDFaUtBYD3k_i6Kfz6TV7GKUg3g5mloIK6BZRpHOcIHIlt154fnw1EbGR-AWhF8rLhKEZW0pjQtGdEOHB9sQagwRgxnMevx2q5WdmaGhpirX-iRe14cE9OCuQoYE9yMjTF2QCLtxmfZr9EWIAVqeCMwzaP898HVQnjBrzs2ZIk3zFWkI7KgyFreKWTai1Q8adNr63BEaFemglOD6giFrgCfC_GajMhOugfM97hqp1ayMYd_orTWbFgx1sjB9XGkT36uZglDiSxe53lvNealgsOmAs4dtimuzdJnswbstPKwLMHaXE6tXI-_nhLby20dK_TV3g_3lWgZbKvkq4RKE9" />
                        </div>
                        <p>
                          <strong>Your Name (required)</strong><br />
                          <span class="wpcf7-form-control-wrap your-name">
                            <input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" id="name" value={this.state.name} onChange={this.onChange} 
                          
                            />
                        <span className="red-text" value={errors.name}>{errors.name}</span>
                        
                        
                          </span>
                        </p>
                        <p>
                          <strong>Your Email (required)</strong><br /> <span class="wpcf7-form-control-wrap your-email">
                            <input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" id="email" value={this.state.email} onChange={this.onChange} />
                          </span>
                        </p>
                        <p>
                          <strong>Your Website (optional)</strong><br /> <span class="wpcf7-form-control-wrap url-512"><input type="url" name="url-512"  size="40" class="wpcf7-form-control wpcf7-text wpcf7-url wpcf7-validates-as-url" aria-invalid="false"  onChange={this.onChange}
                            value={this.state.website}
                        
                            id="website"/>
                          </span>
                        </p>
                        <p><strong>Subject</strong><br /> <span class="wpcf7-form-control-wrap your-subject"><input type="text" name="your-subject"  size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" onChange={this.onChange}
                            value={this.state.subject}
                        
                            id="subject"/></span></p><p><strong>Your Message (Support requests won't be answered. For that use our <a href="https://colorlib.com/wp/forums">support forum</a>.)</strong><br /> <span class="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" onChange={this.onChange}
                            value={this.state.message}
                      
                            id="message" ></textarea></span></p>
                        <p>Attach file (translation files, screenshot, etc)<br /> <span class="wpcf7-form-control-wrap your-file"><input type="file" name="your-file" size="40" class="wpcf7-form-control wpcf7-file" accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.odt,.avi,.ogg,.m4a,.mov,.mp3,.mp4,.mpg,.wav,.wmv,.po,.mo,.zip,.rar" aria-invalid="false"  onClick={this.onChangeFile} />
                        </span></p><p><input type="submit" value="Send" class="wpcf7-form-control wpcf7-submit" />
                          <span class="ticon ticon-refresh ticon-spin wpex-wpcf7-loader"></span></p><div class="wpcf7-response-output wpcf7-display-none"></div>
                      </form>
                    </div>
                  </div>
                  </article>
                    <div class="aff-disclosure"><strong>Disclosure:</strong> This page contains external affiliate links that may result in us receiving a commission if you choose to purchase mentioned product. The opinions on this page are our own and we don't receive additional bonus for positive reviews.</div>
                  </div></div><aside id="sidebar" class="sidebar-container sidebar-primary" itemscope="itemscope" itemtype="http://schema.org/WPSideBar"><div id="sidebar-inner" class="clr q2w3-fixed-widget-container"><div id="wpex_fontawesome_social_widget-3" class="sidebar-box widget widget_wpex_fontawesome_social_widget clr">
                    <div class="widget-title">Follow Us</div><div class="wpex-fa-social-widget clr textleft"><ul>
                      <li><a href="https://www.facebook.com/colorlib" title="Facebook" class="wpex-facebook wpex-social-btn wpex-social-btn-flat wpex-social-bg" rel="" target="blank" ><span class="ticon ticon-facebook" aria-hidden="true">
                      </span><span class="screen-reader-text">Facebook</span></a></li><li><a href="https://www.instagram.com/colorlib/" title="Instagram" class="wpex-instagram wpex-social-btn wpex-social-btn-flat wpex-social-bg" rel="" target="blank"><span class="ticon ticon-instagram" aria-hidden="true">
                      </span><span class="screen-reader-text">Instagram</span></a></li><li><a href="https://www.linkedin.com/company/colorlib" title="LinkedIn" class="wpex-linkedin wpex-social-btn wpex-social-btn-flat wpex-social-bg" rel="" target="blank" >
                        <span class="ticon ticon-linkedin" aria-hidden="true"></span><span class="screen-reader-text">LinkedIn</span></a></li><li><a href="https://twitter.com/colorlib" title="Twitter" class="wpex-twitter wpex-social-btn wpex-social-btn-flat wpex-social-bg" rel="" target="blank">
                          <span class="ticon ticon-twitter" aria-hidden="true"></span><span class="screen-reader-text">Twitter</span>
                        </a></li><li><a href="https://www.youtube.com/channel/UCOaovjLNXdIch2vLFsw_uew" title="Youtube" class="wpex-youtube wpex-social-btn wpex-social-btn-flat wpex-social-bg" rel="" target="blank"><span class="ticon ticon-youtube-play" aria-hidden="true"></span><span class="screen-reader-text">Youtube</span>
                        </a></li></ul></div></div><div id="nav_menu-7" class="sidebar-box widget widget_nav_menu clr"><div class="widget-title">Colorlib themes</div><div class="menu-our-themes-container"><ul id="menu-our-themes" class="menu"><li id="menu-item-117655" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-117655">
                          <a href="https://colorlib.com/wp/themes/">All Free Themes</a></li><li id="menu-item-35770" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35770"><a title="Activello – Simple Multipurpose Blog Theme" href="https://colorlib.com/wp/themes/activello/">Activello Theme</a>
                          </li><li id="menu-item-44646" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-44646"><a title="Illdy – Free One Page WordPress Business Theme" href="https://colorlib.com/wp/themes/illdy/">Illdy Theme</a></li><li id="menu-item-48603" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48603"><a title="Shapely – One Page WordPress Theme" href="https://colorlib.com/wp/themes/shapely/">Shapely</a>
                          </li><li id="menu-item-5857" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5857"><a title="Sparkling – Free Flat Design WordPress Theme" href="https://colorlib.com/wp/themes/sparkling/">Sparkling Theme</a></li><li id="menu-item-5315" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5315"><a title="Free Flat Design WordPress Theme" href="https://colorlib.com/wp/themes/dazzling/">Dazzling Theme</a>
                          </li><li id="menu-item-4593" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4593">
                            <a title="Travelify – Awesome &amp; Responsive Travel WordPress Theme" href="https://colorlib.com/wp/themes/travelify/">Travelify WordPress Theme</a></li><li id="menu-item-4599" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4599"><a title="Unite – Free WordPress Wedding Theme" href="https://colorlib.com/wp/unite/">Unite WordPress Theme</a></li>
                          <li id="menu-item-4594" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4594"><a title="Pinbin – Beautiful &amp; Responsive WordPress Theme" href="https://colorlib.com/wp/themes/pinbin/">Pinbin WordPress Theme</a></li><li id="menu-item-117654" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-117654"><a href="https://colorlib.com/wp/forums/">Support Forum</a></li></ul></div></div><div id="custom_html-7" class="widget_text sidebar-box widget widget_custom_html clr"><div class="widget-title">We recommend:</div><div class="textwidget custom-html-widget"><a href="https://1.envato.market/c/369282/275988/4415?subId1=cons-side&amp;u=https%3A%2F%2Fthemeforest.net%2Fitem%2Fconsulting-business-finance-wordpress-theme%2F14740561" target="_blank" rel="nofollow noopener noreferrer">
                            <img class="aligncenter size-full sidebar-img lazyloaded" src="https://colorlib.com/wp/wp-content/uploads/sites/2/consulting-theme-colorlib.jpg" alt="Consulting Themes on Colorlib" width="500" height="500" data-lazy-src="https://colorlib.com/wp/wp-content/uploads/sites/2/consulting-theme-colorlib.jpg" data-was-processed="true" />
                            <noscript>
                              <img class="aligncenter size-full sidebar-img" src="https://colorlib.com/wp/wp-content/uploads/sites/2/consulting-theme-colorlib.jpg" alt="Consulting Themes on Colorlib" width="500" height="500" />
                            </noscript>
                          </a> <br /> <a href="https://colorlib.com/out/thegembn" target="_blank" rel="nofollow noopener noreferrer"><img class="aligncenter size-full sidebar-img" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20500'%3E%3C/svg%3E" alt="TheGem Multipurpose Themes" width="500" height="500" data-lazy-src="https://colorlib.com/wp/wp-content/uploads/sites/2/thegem-v5.jpg" />
                              <noscript>
                                <img class="aligncenter size-full sidebar-img" src="https://colorlib.com/wp/wp-content/uploads/sites/2/thegem-v5.jpg" alt="TheGem Multipurpose Themes" width="500" height="500" />
                              </noscript>
                            </a> <br /> <a href="https://hasthemes.sjv.io/dd9zM" target="_blank" rel="nofollow noopener noreferrer">
                              <img class="aligncenter size-full sidebar-img" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20500'%3E%3C/svg%3E" alt="Elementor theme by HashThemes" width="500" height="500" data-lazy-src="https://colorlib.com/wp/wp-content/uploads/sites/2/hasthemes-elementor-guru.png" />
                              <noscript>
                                <img class="aligncenter size-full sidebar-img" src="https://colorlib.com/wp/wp-content/uploads/sites/2/hasthemes-elementor-guru.png" alt="Elementor theme by HashThemes" width="500" height="500" />
                              </noscript></a></div>
                    </div><div id="categories-2" class="sidebar-box widget widget_categories clr"><div class="widget-title">Categories</div><ul><li class="cat-item cat-item-3"><a href="https://colorlib.com/wp/category/coupons/">Coupons</a></li><li class="cat-item cat-item-36"><a href="https://colorlib.com/wp/category/ecommerce/">eCommerce</a></li><li class="cat-item cat-item-4"><a href="https://colorlib.com/wp/category/frameworks/">Frameworks</a></li><li class="cat-item cat-item-2161"><a href="https://colorlib.com/wp/category/free-themes/" title="Probably the best free WordPress themes for wedding, photography, news, travel, business, portfolio, magazine and other websites. On Colorlib you will find dozens of WordPress theme collections with hundreds of free WordPress themes for any website. All themes are hand picked and tested by our reviews. We list only fast, SEO friendly, responsive and mobile-friendly themes. Collections are regularly updated to include the latest themes. Feel free to ask questions on comments section below each collection in case you have any questions. ">Free Themes</a></li><li class="cat-item cat-item-1148"><a href="https://colorlib.com/wp/category/giveaway/">Giveaway</a></li><li class="cat-item cat-item-2246">
                      <a href="https://colorlib.com/wp/category/hosting/">Hosting</a></li><li class="cat-item cat-item-6"><a href="https://colorlib.com/wp/category/inspiration/">Inspiration</a></li><li class="cat-item cat-item-7"><a href="https://colorlib.com/wp/category/logo-design/">Logo Design</a></li><li class="cat-item cat-item-8802"><a href="https://colorlib.com/wp/category/mockups/">Mockups</a></li><li class="cat-item cat-item-8"><a href="https://colorlib.com/wp/category/news/">News</a></li><li class="cat-item cat-item-9"><a href="https://colorlib.com/wp/category/photography/">Photography</a></li><li class="cat-item cat-item-582"><a href="https://colorlib.com/wp/category/plugins/">Plugins</a></li><li class="cat-item cat-item-77"><a href="https://colorlib.com/wp/category/portfolio/">Portfolio</a></li><li class="cat-item cat-item-670"><a href="https://colorlib.com/wp/category/promotions/">Promotions</a></li><li class="cat-item cat-item-2349"><a href="https://colorlib.com/wp/category/psd-templates/" title="Free mockups for hoodies, t-shirts, mugs, bottles, billboards, books and even websites. We mainly focus on PSD and AI mockups but other files formats are available too such as Sketch.">PSD Templates</a></li><li class="cat-item cat-item-1609"><a href="https://colorlib.com/wp/category/reviews/">Reviews</a></li><li class="cat-item cat-item-27213"><a href="https://colorlib.com/wp/category/snippets/">Snippets</a></li><li class="cat-item cat-item-2"><a href="https://colorlib.com/wp/category/collections/" title="Awesome WordPress theme collection classified by domain these themes are designed for. Currently there are over 150 theme collection for various topics and we strive to deliver at least 3 new theme collection each week. We make sure to select the best themes on each category helping users to choose the right theme for their website. Premium themes you will find on Colorlib are SEO friendly, fast to load, well maintained, responsive and mobile-friendly. All themes are carefully reviewed to make your life easier. The most popular categories are WooCommerce, eCommerce, Multi-Purpose, Portfolio, Photography, Blog, Corporate, Minimal, One Page, Parallax, Real Estate and many others. ">Theme Collections</a></li><li class="cat-item cat-item-2682"><a href="https://colorlib.com/wp/category/tools/">Tools</a></li><li class="cat-item cat-item-10"><a href="https://colorlib.com/wp/category/tutorial/">Tutorial</a></li><li class="cat-item cat-item-6900"><a href="https://colorlib.com/wp/category/website-builders/">Website Builders</a></li><li class="cat-item cat-item-43791"><a href="https://colorlib.com/wp/category/website-design/">Website Design</a></li><li class="cat-item cat-item-1687"><a href="https://colorlib.com/wp/category/website-templates/">Website Templates</a></li></ul></div><div id="nav_menu-4" class="sidebar-box widget widget_nav_menu clr"><div class="menu-tools-container"><ul id="menu-tools" class="menu"><li id="menu-item-4606" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4606"><a title="Metro UI Colors" href="/etc/metro-colors">Metro Colors</a></li><li id="menu-item-8" class="menu-item menu-item-type- menu-item-object- menu-item-8"><a title="Color Mixer – Blender">Color Mixer</a></li></ul></div></div><div id="custom_html-2" class="widget_text sidebar-box widget widget_custom_html clr"><div class="textwidget custom-html-widget"><a href="https://1.envato.market/nvrNa" target="_blank" rel="nofollow noopener noreferrer">
                        <img class="aligncenter wp-image-29562 size-full sidebar-img" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20500'%3E%3C/svg%3E" alt="kalium-on-colorlib" width="500" height="500" data-lazy-src="https://kaliumthemecom-laborator.netdna-ssl.com/images/banner-colorlib.png" /><noscript>
                          <img class="aligncenter wp-image-29562 size-full sidebar-img" src="https://kaliumthemecom-laborator.netdna-ssl.com/images/banner-colorlib.png" alt="kalium-on-colorlib" width="500" height="500" />
                        </noscript></a> <br /></div></div></div></aside></div></main><div id="footer-callout-wrap" class="clr"><div id="footer-callout" class="clr container"><div id="footer-callout-left" class="footer-callout-content clr">We change everything WordPress. One WordPress theme at a time.</div><div id="footer-callout-right" class="footer-callout-button wpex-clr"><a href="https://colorlib.com/wp/themes/" class="theme-button" target="_blank">Find out more!</a></div></div></div><footer id="footer" class="site-footer" itemscope="itemscope" itemtype="http://schema.org/WPFooter"><div id="footer-inner" class="site-footer-inner container clr"><div id="footer-widgets" class="wpex-row clr gap-30"><div class="footer-box span_1_of_3 col col-1"><div id="nav_menu-8" class="footer-widget widget widget_nav_menu clr"><div class="widget-title">Our Themes</div><div class="menu-our-themes-container"><ul id="menu-our-themes-1" class="menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-117655"><a href="https://colorlib.com/wp/themes/">All Free Themes</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35770"><a title="Activello – Simple Multipurpose Blog Theme" href="https://colorlib.com/wp/themes/activello/">Activello Theme</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-44646"><a title="Illdy – Free One Page WordPress Business Theme" href="https://colorlib.com/wp/themes/illdy/">Illdy Theme</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48603"><a title="Shapely – One Page WordPress Theme" href="https://colorlib.com/wp/themes/shapely/">Shapely</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5857"><a title="Sparkling – Free Flat Design WordPress Theme" href="https://colorlib.com/wp/themes/sparkling/">Sparkling Theme</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5315"><a title="Free Flat Design WordPress Theme" href="https://colorlib.com/wp/themes/dazzling/">Dazzling Theme</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4593"><a title="Travelify – Awesome &amp; Responsive Travel WordPress Theme" href="https://colorlib.com/wp/themes/travelify/">Travelify WordPress Theme</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4599"><a title="Unite – Free WordPress Wedding Theme" href="https://colorlib.com/wp/unite/">Unite WordPress Theme</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4594"><a title="Pinbin – Beautiful &amp; Responsive WordPress Theme" href="https://colorlib.com/wp/themes/pinbin/">Pinbin WordPress Theme</a></li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-117654"><a href="https://colorlib.com/wp/forums/">Support Forum</a></li></ul></div></div></div><div class="footer-box span_1_of_3 col col-2"><div id="nav_menu-6" class="footer-widget widget widget_nav_menu clr"><div class="widget-title">Useful</div><div class="menu-useful-container"><ul id="menu-useful" class="menu"><li id="menu-item-16463" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-16463"><a href="https://colorlib.com/wp/about/">About Colorlib</a></li><li id="menu-item-16464" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-16464"><a title="Advertise on Colorlib" href="https://colorlib.com/wp/advertise/">Advertise</a></li><li id="menu-item-16465" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-16465"><a title="Free WordPress Themes 2019" href="https://colorlib.com/wp/themes/">WordPress Themes</a></li><li id="menu-item-133453" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-133453"><a title="HTML website templates" href="https://colorlib.com/wp/templates/">Website Templates</a></li><li id="menu-item-211142" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-211142"><a title="Free Bootstrap templates" href="https://colorlib.com/wp/cat/bootstrap/">Bootstrap Templates</a></li><li id="menu-item-16467" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-16467"><a title="Our Contributors and Theme Translators" href="https://colorlib.com/wp/contributors/">Our Contributors</a></li><li id="menu-item-16766" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16766"><a href="https://colorlib.com/wp/forums/">Support Forum</a><ul class="sub-menu"><li id="menu-item-144353" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-144353"><a href="https://colorlib.com/wp/support-policy/">– Support Policy</a></li></ul></li><li id="menu-item-16466" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-58 current_page_item menu-item-16466"><a href="https://colorlib.com/wp/contact-us/" aria-current="page">Contact us</a></li><li id="menu-item-23229" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-23229"><a href="https://colorlib.com/wp/jobs/">We Are Hiring!</a></li></ul></div></div></div><div class="footer-box span_1_of_3 col col-3"><div id="bbp_login_widget-4" class="footer-widget widget bbp_widget_login clr"><form method="post" action="https://colorlib.com/wp/wp-login.php" class="bbp-login-form"><fieldset class="bbp-form"><legend>Log In</legend><div class="bbp-username"> <label for="user_login">Username: </label>
                          <input type="text" name="log" value="" size="20" maxlength="100" id="user_login" autocomplete="off" /></div><div class="bbp-password"> <label for="user_pass">Password: </label>
                            <input type="password" name="pwd" value="" size="20" id="user_pass" autocomplete="off" /></div><div class="bbp-remember-me"> <input type="checkbox" name="rememberme" value="forever" id="rememberme" />
                            <label for="rememberme">Keep me signed in</label></div><div class="bbp-submit-wrapper"> <button type="submit" name="user-submit" id="user-submit" class="button submit user-submit">Log In</button> <input type="hidden" name="user-cookie" value="1" /> <input type="hidden" id="bbp_redirect_to" name="redirect_to" value="https://colorlib.com/wp/contact-us/" />
                            <input type="hidden" id="_wpnonce" name="_wpnonce" value="b5defad425" />
                            <input type="hidden" name="_wp_http_referer" value="/wp/contact-us/" />
                          </div><div class="bbp-login-links"> <a href="https://colorlib.com/wp-signup.php" title="Register" class="bbp-register-link">Register</a>
                            <a href="https://colorlib.com/wp-login.php?action=lostpassword" title="Lost Password" class="bbp-lostpass-link">Lost Password</a></div></fieldset></form></div></div></div></div></footer><div id="footer-bottom" class="clr"><div id="footer-bottom-inner" class="container clr"><div class="footer-bottom-flex clr"><div id="copyright" class="clr"> Copyright 2013-2020 Colorlib - All Rights Reserved.&nbsp;<a title="Privacy Policy" href="https://colorlib.com/privacy-policy/" target="_blank">Privacy Policy</a>&nbsp;| <a title="Terms and Conditions" href="https://colorlib.com/wp/terms-conditions/" target="_blank">Site Terms &amp; Disclosures</a>. <span>Hosted by <a href="https://colorlib.com/wp/kinsta-review/">Kinsta</a></span></div></div></div></div></div></div><div id="mobile-menu-search" class="clr wpex-hidden"><form method="get" action="https://colorlib.com/wp/" class="mobile-menu-searchform"> <input type="search" name="s" autocomplete="off" aria-label="Search" placeholder="Search" /> <button type="submit" class="searchform-submit" aria-label="Submit search"><span class="ticon ticon-search"></span></button></form></div> <a href="#outer-wrap" id="site-scroll-top"><span class="ticon ticon-chevron-up" aria-hidden="true"></span><span class="screen-reader-text">Back To Top</span></a><div id="sidr-close"><div class="wpex-close"><a href="#" aria-expanded="false" role="button" aria-label="Toggle mobile menu">×</a></div></div>
          <div id="om-cjlghhevexevoddn-holder"></div>


          <div class="wpex-sidr-overlay wpex-hidden"></div><div id="sidr-main" class="sidr right" ><div class="sidr-inner"><div class="sidr-class-wpex-close"><a href="#" aria-expanded="false" role="button" aria-label="Toggle mobile menu">×</a></div></div><div class="sidr-inner"><div class="sidr-class-menu-useful-container"><ul id="sidr-id-menu-useful-1" class="sidr-class-dropdown-menu"><li class="sidr-class-menu-item sidr-class-menu-item-type-post_type sidr-class-menu-item-object-page sidr-class-menu-item-16463"><a href="https://colorlib.com/wp/about/">About Colorlib</a></li><li class="sidr-class-menu-item sidr-class-menu-item-type-post_type sidr-class-menu-item-object-page sidr-class-menu-item-16464"><a title="Advertise on Colorlib" href="https://colorlib.com/wp/advertise/">Advertise</a></li><li class="sidr-class-menu-item sidr-class-menu-item-type-post_type sidr-class-menu-item-object-page sidr-class-menu-item-16465"><a title="Free WordPress Themes 2019" href="https://colorlib.com/wp/themes/">WordPress Themes</a></li><li class="sidr-class-menu-item sidr-class-menu-item-type-post_type sidr-class-menu-item-object-page sidr-class-menu-item-133453"><a title="HTML website templates" href="https://colorlib.com/wp/templates/">Website Templates</a></li><li class="sidr-class-menu-item sidr-class-menu-item-type-custom sidr-class-menu-item-object-custom sidr-class-menu-item-211142"><a title="Free Bootstrap templates" href="https://colorlib.com/wp/cat/bootstrap/">Bootstrap Templates</a></li><li class="sidr-class-menu-item sidr-class-menu-item-type-post_type sidr-class-menu-item-object-page sidr-class-menu-item-16467"><a title="Our Contributors and Theme Translators" href="https://colorlib.com/wp/contributors/">Our Contributors</a></li><li class="sidr-class-menu-item sidr-class-menu-item-type-custom sidr-class-menu-item-object-custom sidr-class-menu-item-has-children sidr-class-menu-item-16766"><a href="https://colorlib.com/wp/forums/">Support Forum<div class="wpex-open-submenu" tabindex="0" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open submenu of Support Forum"><span class="ticon ticon-angle-down" aria-hidden="true"></span></div></a><ul class="sidr-class-sub-menu"><li class="sidr-class-menu-item sidr-class-menu-item-type-post_type sidr-class-menu-item-object-page sidr-class-menu-item-144353"><a href="https://colorlib.com/wp/support-policy/">– Support Policy</a></li></ul></li><li class="sidr-class-menu-item sidr-class-menu-item-type-post_type sidr-class-menu-item-object-page sidr-class-current-menu-item sidr-class-page_item sidr-class-page-item-58 sidr-class-current_page_item sidr-class-menu-item-16466"><a href="https://colorlib.com/wp/contact-us/" aria-current="page">Contact us</a></li><li class="sidr-class-menu-item sidr-class-menu-item-type-post_type sidr-class-menu-item-object-page sidr-class-menu-item-23229"><a href="https://colorlib.com/wp/jobs/">We Are Hiring!</a></li></ul></div></div><div class="sidr-inner"><form method="get" action="https://colorlib.com/wp/" class="sidr-class-mobile-menu-searchform"> <input type="search" name="s" autocomplete="off" aria-label="Search" placeholder="Search" /> <button type="submit" class="sidr-class-searchform-submit" aria-label="Submit search"><span class="ticon ticon-search"></span></button></form></div></div><div><div class="grecaptcha-badge" data-style="bottomright" ><div class="grecaptcha-logo"><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Ld5E4AUAAAAANexkqeo4eNlAQsZt6amOkj6re6d&amp;co=aHR0cHM6Ly9jb2xvcmxpYi5jb206NDQz&amp;hl=en&amp;v=zItNOfzbrqVGbb4QFYpPpcrw&amp;size=invisible&amp;cb=ra5iux2w4bpw" width="256" height="60" role="presentation" name="a-2ins3mjfp7t9" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><div class="grecaptcha-error"></div><textarea id="g-recaptcha-response-100000" name="g-recaptcha-response" class="g-recaptcha-response"></textarea></div><iframe></iframe></div></body>
      </div>


    );

  }
}
export default App;
