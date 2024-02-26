const {createApp} = Vue

createApp({
    data() {
        return {

            //indice della chat attiva
            activeChat: 0,

            //messaggio nel campo di input
            newMessageText: '',

            //memorizzo un indice della chat attiva (-1 indica che non c'è una chat atttiva)
            lastActiveChat: -1,

            selectedMessage: null,

            searchQuery: '',

            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 11:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 14:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 18:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 09:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 12:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 17:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luca',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/02/2023 18:30:55',
                            message: 'Ciao, è tanto che non usciamo insieme, andiamo a mangiare una pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/02/2023 19:50:00',
                            message: 'Scusa ma sto andando al ristorante ora con la mia fidanzata, se vuoi domani possiamo vederci per colazione e fare due chiacchiere',
                            status: 'sent'
                        },
                        {
                            date: '10/02/2023 22:51:00',
                            message: 'Nessun problema, a domani allora!',
                            status: 'received'
                        }
                    ],
                },
            ]
            
        }
    },
    methods: {

        //funzione per selezionare la chat attiva
        selectChat(index) {
            this.activeChat = index;
            this.lastActiveChat = index;
        },

        //funzione per prendere solo l'ora escludendo data e secondi dall'array
        extractTime(dateString) {

            //estraggo le prime 5 lettere (es. "15:30")
            return dateString.substring(11, 16);
        },

        //funzione per inserire l'ultimo mesaggio nella lista delle chat
        getLastMessage(user) {
            //recupero i messaggi dell'utente
            const messages = user.messages;
        
            //se non ci sono messaggi inserisco una stringa vuota
            if (!messages || messages.length === 0) {
              return "";
            }
        
            //restituisco l'ultimo messaggio della chat
            return messages[messages.length - 1].message;
        },

        //funzione per inviare un messaggio nella chat
        sendMessage() {

            //data corrente
            const timestamp = new Date().toLocaleString();
          
            //creo un nuovo messaggio con testo e data
            const newMessage = {
              date: timestamp,
              message: this.newMessageText,
              status: 'sent',
            };
          
            //inserisco il nuovo messaggio nell'array, precisamente nell'oggetto attivo
            this.contacts[this.activeChat].messages.push(newMessage);
          
            //svuoto il campo di input(newMessage)
            this.newMessageText = '';

            //memorizzo l'indice della chat attiva
            const activeChatAtMessageTime = this.activeChat;

            //risposta automatica dopo 1 secondo
            setTimeout(() => {
                this.responseMessage(activeChatAtMessageTime);
            }, 1000);
        },

        //funzione per la risposta
        responseMessage(activeChat) {

            //creo un nuovo messaggio con testo e data
            const autoResponse = {
              date: new Date().toLocaleString(),
              message: "Ok!",
              status: "received",
            };
          
            //aggiungo il messaggio all'array di messaggi della chat attiva
            this.contacts[activeChat].messages.push(autoResponse);
        },

        //funzione per aprire il menu a tendina
        openContextMenu(event, message) {
            event.preventDefault();
            this.selectedMessage = message;
        },

        //funzione per chiudere il menu a tendina
        closeDropdown() {
            if (this.selectedMessage) {
              this.selectedMessage = null;
            }
        },
        
        //funzione per eliminare un messaggio
        deleteMessage(message) {
            const index = this.contacts[this.activeChat].messages.indexOf(message);

            if (index !== -1) {
                this.contacts[this.activeChat].messages.splice(index, 1);
            }
            this.selectedMessage = null;
        },
    },
    computed : {
        //filtro lista chat nella sidebar
        filteredContacts() {
            if (this.searchQuery) {
                return this.contacts.filter(contact => 
                    contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            } else {
                return this.contacts;
            }
        },

    }
}).mount('#app');