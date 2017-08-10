<template>
  <div id="app">
    <header class="c-page-head">
        <router-link to="/"><img class="c-logo" src="http://via.placeholder.com/250x100?text=hylf.de" alt=""></router-link>
    </header>
    <!-- <navigation></navigation> -->
    <router-view></router-view>

    <div class="u-bg-brand u-margin-top u-padding-vertical u-align-center">
        <div class="o-wrapper">
            <ul class="o-list-inline  u-margin-bottom-none u-text-default">
                <li class="o-list-inline__item"><a href="https://twitter.com/hylf_de" target="_blank">@hylf_de</a> //</li>
                <li class="o-list-inline__item"><router-link to="kontakt">Kontakt</router-link></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
// import Navigation from './components/Navigation';

export default {
  // components: { Navigation },
  name: 'app',
};
</script>
