<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-button @click="back">
                        <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>Input Contact</ion-title>
            </ion-toolbar>
        </ion-header>
  
        <ion-content> 

            <ion-card>
                <ion-card-header>
                    <ion-card-title>Input Data Contact</ion-card-title>
                </ion-card-header>

                <ion-card-content>

                            <ion-list>
                                <ion-item>
                                    <ion-input label="Nama" label-placement="floating" placeholder="Masukkan Nama"></ion-input>
                                </ion-item>

                                <ion-item>
                                    <ion-input label="Email" label-placement="floating" placeholder="Masukkan Email"></ion-input>
                                </ion-item>

                                <ion-item>
                                    <ion-input label="Telp" label-placement="floating" placeholder="Masukkan Telepone"></ion-input>
                                </ion-item>
                                
                                <ion-list>
                                    <ion-list-header>Kelamin</ion-list-header>

                                    <ion-radio-group>
                                        <ion-item>
                                            <ion-radio value="1" justify="end">Laki-laki</ion-radio>
                                        </ion-item>
                                    </ion-radio-group>

                                    <ion-radio-group>
                                        <ion-item>
                                            <ion-radio value="2" justify="end">Perempuan</ion-radio>
                                        </ion-item>
                                    </ion-radio-group>
                                </ion-list>
                                    <ion-item>
                                        <ion-select label="Tipe" placeholder="Tipe Kontak">
                                            <ion-select-option value="0">Biasa</ion-select-option>
                                            <ion-select-option value="1">Faorite</ion-select-option>
                                        </ion-select>
                                    </ion-item>

                                    <ion-item>
                                        <ion-textarea label="Alamat" label-placement="floating"
                                        placeholder="Masukkan Alamat"></ion-textarea>
                                    </ion-item>
                            </ion-list>

                </ion-card-content>
            </ion-card>

        </ion-content>
    </ion-page>
</template>
    
<script setup lang="ts">
import { useRouter } from "vue-router";

import { IonList, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItemSliding, IonItemOption, IonIcon, IonItem, IonListHeader, IonLabel, IonItemOptions } from '@ionic/vue';

import { IonInput, IonRadio, IonRadioGroup, IonButton, IonSelectOption, IonSelect, IonTextarea, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

import { IonFab, IonFabButton, IonFabList } from '@ionic/vue';
import { arrowBackOutline, heart, trash, personCircleOutline, add, colorPalette, document, globe } from 'ionicons/icons';

const router = useRouter()

const back = () => {
  router.back()
}

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
  