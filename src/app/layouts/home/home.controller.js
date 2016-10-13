import appModule from '../../app.module';
import eventComponent from '../../components/event/event.component';



const HomeController = function HomeController() {
    const vm = this;
    vm.events = events;
    vm.title = 'All events';
    vm.showEvents = function greet() {
        vm.list = '';
    };
};

angular.module(appModule.name).controller('HomeController', HomeController);
export default HomeController;
