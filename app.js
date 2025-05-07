const app = Vue.createApp({
    data() {
        return {
            activeDisplay : 'all',
            contacts : [],
            contact :{
                name : '',
                phone :'',
                email:''
            },
            searchResults:[]

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
          },
          searchContact() {
            if (!this.searchQuery.trim()) {
              this.searchResults = [];
              return;
            }
          
            this.searchResults = this.contacts.filter(contact =>
              contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
          }
    },
    // computed: {
    //     filteredContacts() {
    //       if (!this.searchQuery.trim()) return [];
    //       return this.contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    //       );
    //     }
    //   }
});

app.mount("#app");