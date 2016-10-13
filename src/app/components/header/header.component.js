import appModule from '../../app.module';
import './header.scss';
import template from './header.html';

function HeaderController () {}

appModule.component('headerApp', {
    template,
    controller: HeaderController
});