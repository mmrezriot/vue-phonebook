const app = Vue.createApp({
    data() {
        return {
            activeDisplay : 'all',

        }
    },
    methods: {
        clickDisplay(display){
        this.activeDisplay = display
        }
        

    },
});

app.mount("#app");