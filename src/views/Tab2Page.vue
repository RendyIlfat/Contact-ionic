<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title><h1>Favorite</h1></ion-title>
      </ion-toolbar>
    </ion-header>

        <ion-content> 
          
          <ion-list>

            <ion-item-sliding v-for="i in data">
              <ion-card>
                <ion-item>
                  <ion-label>
                    <h2>{{ i.name }}</h2>
                    <p>{{ i.phone }}</p>
                    <p>{{ i.email }}</p>
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

        </ion-content>

  </ion-page>

</template>
  
  <script setup lang="ts">
    import { data } from "../services/contacts";
    import { heart, trash, personCircleOutline, add, colorPalette, document, globe } from 'ionicons/icons';

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
