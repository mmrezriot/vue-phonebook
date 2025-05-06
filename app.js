const app = Vue.createApp({
    data() {
        return {
            activeDisplay : 'all',
            contacts : [

            ],
            contact :{
                name : '',
                phone :'',
                email:''
            }

        }
    },
    methods: {
        clickDisplay(display){
        this.activeDisplay = display
        },

        addContact(){
           this.contacts.push(this.contact);
           this.activeDisplay='all';
           this.contact= {};


        }
        

    },
});

app.mount("#app");