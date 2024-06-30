import { createInertiaApp } from '@inertiajs/vue3'
import { createApp, h } from 'vue'

// PrimeVue
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Listbox from 'primevue/listbox';
import InputOtp from 'primevue/inputotp';
import Chart from 'primevue/chart';
import DatePicker from 'primevue/datepicker';

// import Button from "primevue/button"


createInertiaApp({
  // Set default page title
  // see https://inertia-rails.netlify.app/guide/title-and-meta
  //
  // title: title => title ? `${title} - App` : 'App',

  // Disable progress bar
  //
  // see https://inertia-rails.netlify.app/guide/progress-indicators
  // progress: false,

  resolve: (name) => {
    const pages = import.meta.glob('../pages/**/*.vue', { eager: true })
    return pages[`../pages/${name}.vue`]

    // To use a default layout, import the Layout component
    // and use the following lines.
    // see https://inertia-rails.netlify.app/guide/pages#default-layouts
    //
    // const page = pages[`./pages/${name}.vue`]
    // page.default.layout ||= (page) => createElement(Layout, null, page)
    // return page
  },

  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(PrimeVue, {theme: {preset: Aura}})
      .component('Listbox', Listbox)
      .component('InputOtp', InputOtp)
      .component('Chart', Chart)
      .component('DatePicker', DatePicker)
      .mount(el)
    
    // const app = createApp(App);
    // App.component('Button', Button);

  },
})

