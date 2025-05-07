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
    mounted() {
        const savedContacts = JSON.parse(localStorage.getItem('contacts'));
        if (savedContacts) {
          this.contacts = savedContacts;
        }
      }
,
    methods: {
        clickDisplay(display){
        this.activeDisplay = display
        },

        addContact(){
           this.contacts.push(this.contact);
           this.activeDisplay='all';
           this.contact= {};
           toastr.success('مخاطب اضافه شد.');
           localStorage.setItem('contacts', JSON.stringify(this.contacts));

        },
        deleteContact(index){
          const confirmt = confirm('از حذف کاربر مطمئن هستید ؟');
          if (confirmt) {
            this.contacts.splice(index, 1);
            localStorage.setItem('contacts', JSON.stringify(this.contacts));
           toastr.error('کاربر حذف شد.');

        }
          }
            
        
        

    },
});

app.mount("#app");