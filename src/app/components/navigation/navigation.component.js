import appModule from '../../app.module';
import './navigation.scss';
import template from './navigation.html';

function NavigationController () {}

appModule.component('navApp', {
    template,
    controller: NavigationController
});