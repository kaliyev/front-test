import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Quasar, QInput, QBtn, QForm, QLayout, QHeader, QToolbar, QToolbarTitle, QAvatar, QSpace, QFooter, QPageContainer, QItem, QItemSection, QList, QDrawer, Ripple, Notify, Dialog } from 'quasar';
import 'quasar/dist/quasar.css';

const app = createApp(App);

app.use(router);
app.use(Quasar, {
  plugins: { Notify, Dialog },
  components: { QInput, QBtn, QForm, QLayout, QHeader, QToolbar, QToolbarTitle, QAvatar, QSpace, QFooter, QPageContainer, QItem, QItemSection, QList, QDrawer },
  directives: { Ripple }
});

app.mount('#app');
