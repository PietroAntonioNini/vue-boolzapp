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

            //booleano per il menu di opzioni della chat
            showChatOptions: false,

            //indice del messaggio selezionato, necessario per il menu a tendina nel messaggio
            selectedMessage: null,

            //indice per filtrare le chat nella sidebar
            searchQuery: '',

            //controllo se l'utente sta digitando qualcosa
            isTyping: false,

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
            ],

            checcoResponses: [
                "Angela, amore mio, io e te sempre insieme sia nella brutta che nella cattiva sorte.",
                "Ecco, questo è il Sud! Questa è l'obertà!",
                "Mi dispiace per quello che ho detto prima, il fatto del treno, il fatto che ho detto che è salito il ri… l’uomo… come si dice la razza vostra in italiano?",
                "Figlio mio… Non voglio che tu pensi che questa è la felicità… Guarda laggiù… Quella è la felicità…",
                "Vai a dormire che poi domani ti sblocco!",
                "Scusi, della 'Che Guevara' c’avete anche i borselli?",
                "Non puoi scancellare sei anni d’amore con il fotoshock.",
                "Se ce l’ho fatta io… ce la puoi farcela anche tu!",
                "Ehi, Checco, ogni volta che dedichi questa canzone ad una ragazza lei ti ammolla.",
                "Qualche gradazione zio, cioè non dà fastidio, capito?",
                "Ho avuto altre storie, ma erano 4ª coppa c, 5ª coppa b, anche una 6ª!",
                "Ah i debiti da saldare… domani ti mando il fabbro.",
                "Don’t play in house of the player!",
                "Aah Nicolò, le parolacce te le devo prima autorizzare io!",
                "Dove siamo? Migrante, mi dia la posizione",
                "Emigro in Liechtenstein, dove non c’è il segreto bancario",
                "L'Italia è un paese bellissimo, pieno di storia e di cultura. Peccato che ci vivono gli italiani",
                "Il problema dell'Italia è che è un paese pieno di furbi. E io sono il più furbo di tutti",
                "Non è vero che l'Italia è un paese in declino. È solo che sta scendendo una curva molto ripida",
                "Le donne sono come le lavatrici: se non le capisci, ti lasciano sempre con i panni sporchi",
                "Se il cervello fosse tasse, molti italiani sarebbero evasori seriali!",
                "Le relazioni sono come le autostrade italiane, piene di buche e deviazioni impreviste!",
                "La politica italiana è come un film di fantascienza: piena di alieni che cercano di rapire i nostri soldi!",
                "Se la pazienza fosse un superpotere, gli italiani sarebbero tutti supereroi in incognito!",
                "La burocrazia italiana è come un labirinto senza uscita, solo che qui il Minotauro è l'inefficienza!",
                "Gli italiani e la puntualità sono come l'olio e l'acqua: si scontrano sempre, ma nessuno vuole ammetterlo!",
                "Se il sarcasmo fosse oro, l'Italia sarebbe il paese più ricco del mondo!",
                "L'amore in Italia è come una partita a scacchi: ci sono regole complesse, mosse imprevedibili e spesso finisce in stallo!",
                "Gli italiani e la tecnologia sono come gatti e acqua: una combinazione che spesso porta a situazioni disastrose!",
                "La dieta mediterranea? Più che un regime alimentare, sembra un test di resistenza alla tentazione per gli italiani!",
                "In Italia, l'aperitivo è sacro: è l'unico momento in cui l'italiano medio è puntuale, anzi, in anticipo!",
                "L'italiano quando guida non usa le frecce, usa la fede: si affida alla Madonna e spera nel meglio!",
                "In Italia, l'unico sport nazionale più popolare del calcio è il salto delle tasse!",
                "L'italiano medio tratta la palestra come la politica: si iscrive con entusiasmo e poi non si presenta mai!",
                "La puntualità in Italia è come un unicorno, tutti ne parlano ma nessuno l'ha mai vista!",
                "In Italia, la dieta mediterranea è come un semaforo: verde per l'olio d'oliva, giallo per la pasta e rosso... beh, rosso non lo usiamo mai!",
                "Gli italiani sono così affezionati alla mamma che anche a 40 anni, se si perdono al supermercato, chiamano 'Mammaaa!'",
                "Il segreto della longevità italiana? Evitare le riunioni di condominio, più pericolose di una dieta a base di burro!",
            ],
            
        }
    },
    methods: {

        //funzione per selezionare la chat attiva
        selectChat(index) {
            //memorizzo l'indice della chat attiva
            this.activeChat = 0;

            //memorizzo temporaneamente la chat selezionata
            const selectedChat = this.contacts[index];
            
            //rimuovo la chat dalla posizione corrente nell'array
            this.contacts.splice(index, 1);
            
            //inserisco la chat all'inizio dell'array
            this.contacts.unshift(selectedChat);

            //scroll automatico all'ultimo messaggio
            this.$nextTick(() => {
                const messages = document.querySelector('.mid-body');
                if (messages) {
                    messages.scrollTop = messages.scrollHeight;
                }
            });
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
                return {
                    
                    date: '',
                    message: '',
                    status: '',
                };
            }
        
            //restituisco l'ultimo messaggio della chat
            return messages[messages.length - 1];
        },

        //funzione per inviare un messaggio nella chat
        sendMessage() {

            //rimuovo gli spazi bianchi all'inizio e alla fine del messaggio
            const trimmedMessage = this.newMessageText.trim();

            //se il messaggio è vuoto, interrompo l'esecuzione del metodo
            if (!trimmedMessage) {
                return;
            }

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

            //imposto lo stato "Sta scrivendo..." prima di inviare il messaggio
            this.isTyping = true;

            //risposta automatica dopo 1 secondo
            setTimeout(() => {
                this.responseMessage(activeChatAtMessageTime);
            }, 1000);
        },

        //funzione per la risposta
        responseMessage(activeChat) {

            //selezione casuale di una risposta dai Griffin
            const randomIndex = Math.floor(Math.random() * this.checcoResponses.length);
            const autoResponse = this.checcoResponses[randomIndex];

            //aggiungo la risposta al contatto corrente
            const newAutoResponse = {
                date: new Date().toLocaleString(),
                message: autoResponse,
                status: "received",
            };
          
            //aggiungo il messaggio all'array di messaggi della chat attiva
            this.contacts[activeChat].messages.push(newAutoResponse);

            //ripristino lo stato "Ultimo accesso" dopo aver inviato la risposta
            setTimeout(() => {
                this.isTyping = false;
            }, 500);
        },

        //funzione per aprire il menu a tendina
        openContextMessageMenu(event, message) {

            //impedisco la propagazione dell'evento per evitare la chiusura immediata del dropdown
            event.stopPropagation();

            //verifico se il messaggio selezionato è lo stesso della volta precedente
            if (this.selectedMessage === message) {
                //se è lo stesso, chiudi il dropdown
                this.selectedMessage = null;

            } else {
                //se è diverso, apri il dropdown
                this.selectedMessage = message;

                //aggiungo un listener per l'evento di click al documento per la chiusura
                document.addEventListener('click', this.closeDropdownOnClickOutside);
            }
        },

        //funzione per chiudere il menu a tendina
        closeDropdownOnClickOutside(event) {
            const dropdown = document.querySelector('.dropdown-message');

            //verifico se l'evento di click si verifica fuori dal dropdown
            if (dropdown && this.selectedMessage && !dropdown.contains(event.target)) {
                //chiudo il dropdown
                this.selectedMessage = null;

                //rimuovo il listener quando il dropdown viene chiuso
                document.removeEventListener('click', this.closeDropdownOnClickOutside);
            }
        },
        
        //funzione per eliminare un messaggio
        deleteMessage(message) {
            const chat = this.contacts[this.activeChat];
            const messageIndex = chat.messages.findIndex(msg => msg === message);
          
            if (messageIndex !== -1) {
                chat.messages.splice(messageIndex, 1);
                this.selectedMessage = null;
            }
        },

        //funzione per aprire il dropdown menu per eliminare l'intera chat
        openChatOptions(event) {
            //inverto lo stato di showChatOptions
            this.showChatOptions = !this.showChatOptions;
      
            if (this.showChatOptions) {
              //aggiungo un listener per l'evento di click al documento
              document.addEventListener('click', this.closeChatOptionsOnClickOutside);

            } else {
              //rimuovo il listener quando il dropdown viene chiuso
              document.removeEventListener('click', this.closeChatOptionsOnClickOutside);
            }
      
            //fermo la propagazione dell'evento per evitare che il dropdown si chiuda immediatamente
            event.stopPropagation();
        },

        //funzione per chiudere il dropdown menu per eliminare l'intera chat
        closeChatOptionsOnClickOutside(event) {
            const dropdown = document.querySelector('.dropdown-chat');
            const dropdownToggle = document.querySelector('.fa-ellipsis-vertical');

            //verifico se l'evento di click si verifica fuori dal dropdown e dal suo trigger
            if (dropdown && this.showChatOptions && !dropdown.contains(event.target) && !dropdownToggle.contains(event.target)) {
                this.showChatOptions = false;
                document.removeEventListener('click', this.closeChatOptionsOnClickOutside);
            }
        },
    
        //funzione per eliminare l'intera chat
        deleteChat() {
            //rimuovo la chat corrente dall'array contacts
            this.contacts.splice(this.activeChat, 1);
    
            //chiudo il menu a tendina dopo l'eliminazione della chat
            this.showChatOptions = false;
    
            //imposto l'activeChat a -1 per indicare che non c'è una chat attiva
            this.activeChat = 0;
             
            //rimuovo l'ascoltatore di eventi se è ancora presente
            document.removeEventListener('click', this.closeChatOptionsOnClickOutside);
        },

        //funzione per svuotare la chat dai messaggi
        clearChat() {
            this.contacts[this.activeChat].messages = [];
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