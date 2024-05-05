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
                <ion-item @click="edit(i)">
                  <ion-label>
                    <h2>{{ i.name }}</h2>
                    <p>{{ i.phone }}</p>
                    <p>{{ i.email }}</p>
                  </ion-label>
                </ion-item>

                <ion-item-options>
                  <ion-item-option color="light">

                    <ion-icon @click="fav(i, false)" v-if="i.isFav" color="danger" slot="icon-only" :icon="heart"></ion-icon>
                    <ion-icon @click="fav(i, true)" v-else color="danger" slot="icon-only" :icon="heartOutline"></ion-icon>

                  </ion-item-option>
                  <ion-item-option @click="hapus(i)" color="light">
                    <ion-icon color="danger" slot="icon-only" :icon="trash"></ion-icon>
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
    import { heartOutline, heart, trash, personCircleOutline, add, colorPalette, document, globe } from 'ionicons/icons';

    const router = useRouter()
    
    const tambah = () => {
      router.push('/add')
    }

    const hapus = (item: any) => {
      const index = data.value.indexOf(item)
      data.value.splice(index, 1)
    }

    const edit = (item: any) => {
      router.push('/add/' + item.id)
    }

    const fav = (item: any, isFav: boolean) => {
      const index = data.value.findIndex(i => i.id == item.id)

      data.value[index].isFav = isFav
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
