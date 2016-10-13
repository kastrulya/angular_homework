import appModule from '../../app.module';
import './footer.scss';
import template from './footer.html';

function FooterController () {}

appModule.component('footerApp', {
    template,
    controller: FooterController
});