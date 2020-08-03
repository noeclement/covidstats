import Vue from 'vue'
Vue.filter('usFormat', number => parseInt(number).toLocaleString('en'))
