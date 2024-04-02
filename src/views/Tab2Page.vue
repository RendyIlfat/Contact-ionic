<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title><h1>Favorite</h1></ion-title>
      </ion-toolbar>
    </ion-header>

        <ion-content> 
          
          <ion-list>

            <ion-item-sliding>
              <ion-card>
                <ion-item>
                  <ion-label>
                    <h2>Nama Kontak</h2>
                    <p>Nomor</p>
                    <p>Email</p>
                  </ion-label>
                </ion-item>

                <ion-item-options>
                  <ion-item-option color="danger">
                    Hapus
                  </ion-item-option>
                </ion-item-options>
              </ion-card>
            </ion-item-sliding>

            <ion-item-sliding>
              <ion-card>
                <ion-item>
                  <ion-label>
                    <h2>Nama Kontak</h2>
                    <p>Nomor</p>
                    <p>Email</p>
                  </ion-label>
                </ion-item>

                <ion-item-options>
                  <ion-item-option color="danger">
                    Hapus
                  </ion-item-option>
                </ion-item-options>
              </ion-card>
              </ion-item-sliding>
            
          </ion-list>

          <!-- <ion-card>
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Here's a small text description for the card content. Nothing more, nothing less.
            </ion-card-content>
          </ion-card> -->

        </ion-content>

  </ion-page>

  </template>
  
  <script setup lang="ts">
    import { heart, trash, personCircleOutline, add, colorPalette, document, globe } from 'ionicons/icons';

    // export default defineComponent({
    //   components: {
    //     IonButtons,
    //     IonContent,
    //     IonHeader,
    //     IonMenu,
    //     IonMenuButton,
    //     IonPage,
    //     IonTitle,
    //     IonToolbar,

    //     IonFab, IonFabButton, IonFabList
    //   },
      
    //   setup() {
    //   return { personCircleOutline, add, colorPalette, document, globe };
    //   },
    // });
  </script>

  <style scoped>
  ion-card {
    --background: rgb(97, 97, 97);
    --color: #9efff0;
  }

  ion-card-title {
    --color: #22dcc0;
  }

  ion-card-subtitle {
    --color: #37b8a4;
  }
  </style>
