import { createApp } from 'vue';
import '../../style.css';
import App from './App.vue';

createApp(App).mount(
  (() => {
    const app = document.createElement('div');
    app.setAttribute('id', 'xb-douban');
    document.body.append(app);
    return app;
  })(),
);
