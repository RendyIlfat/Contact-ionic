<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">This is the menu content.</ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title><h1>Contact</h1></ion-title>
      </ion-toolbar>
    </ion-header>

        <ion-content> 
          
          <ion-list>
            <ion-list-header>
              <ion-label>Daftar Kontak</ion-label>
            </ion-list-header>

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
                  <ion-item-option>
                    <ion-icon slot="start" :icon="heart"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="danger">
                    <ion-icon slot="start" :icon="trash"></ion-icon>
                  </ion-item-option>
                </ion-item-options>
              </ion-card>
            </ion-item-sliding>
            
          </ion-list>

          <ion-fab slot="fixed" horizontal="end" vertical="bottom" style="bottom: 30px">
            <ion-fab-button>
              <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="start">
              <ion-fab-button @click="tambah">
                <ion-icon :icon="personCircleOutline"></ion-icon>
              </ion-fab-button>
              <ion-fab-button>
                <ion-icon :icon="colorPalette"></ion-icon>
              </ion-fab-button>
              <ion-fab-button>
                <ion-icon :icon="globe"></ion-icon>
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>

        </ion-content>

  </ion-page>

  </template>
  
  <script setup lang="ts">
    import { data } from "../services/contacts";
    import { useRouter } from "vue-router";
    import { heart, trash, personCircleOutline, add, colorPalette, document, globe } from 'ionicons/icons';

    const router = useRouter()
    
    const tambah = () => {
      router.push('/add')
    }

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
