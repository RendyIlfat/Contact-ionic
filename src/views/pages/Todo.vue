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
        <ion-title>Todo Apps</ion-title>
      </ion-toolbar>
    </ion-header>

        <ion-content class="ion-padding"> 
          
          <ion-card>
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Here's a small text description for the card content. Nothing more, nothing less.
            </ion-card-content>
          </ion-card>

          <ion-card>
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Here's a small text description for the card content. Nothing more, nothing less.
            </ion-card-content>
          </ion-card>

          <ion-card>
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Here's a small text description for the card content. Nothing more, nothing less.
            </ion-card-content>
          </ion-card>

          <ion-fab slot="fixed" horizontal="end" vertical="bottom">
            <ion-fab-button size="small">
              <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="start">
              <ion-fab-button>
                <ion-icon :icon="document"></ion-icon>
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

      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="/home">
            <ion-icon :icon="playCircle" />
            <ion-label>Listen now</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="radio" href="/radio">
            <ion-icon :icon="radio" />
            <ion-label>Radio</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="library" href="/library">
            <ion-icon :icon="library" />
            <ion-label>Library</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="search" href="/search">
            <ion-icon :icon="search" />
            <ion-label>Search</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>

  </ion-page>

  </template>
  
  <script lang="ts">
    import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import { defineComponent } from 'vue';

    import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
    import { playCircle, radio, library, search } from 'ionicons/icons';

    import { IonFab, IonFabButton, IonFabList } from '@ionic/vue';
    import { add, colorPalette, document, globe } from 'ionicons/icons';
  
    export default defineComponent({
      components: {
        IonButtons,
        IonContent,
        IonHeader,
        IonMenu,
        IonMenuButton,
        IonPage,
        IonTitle,
        IonToolbar,

        IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon,

        IonFab, IonFabButton, IonFabList
      },

      data() {
        return {
          playCircle,
          radio,
          library,
          search,
        };
      },

      setup() {
      return { add, colorPalette, document, globe };
      },
    });
  </script>

  <style scoped>
  ion-card {
    --background: #000;
    --color: #9efff0;
  }

  ion-card-title {
    --color: #22dcc0;
  }

  ion-card-subtitle {
    --color: #37b8a4;
  }
  </style>


<!-- <script lang="ts">
  import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/vue';
  import { add, colorPalette, document, globe } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonFab, IonFabButton, IonFabList, IonIcon },
    setup() {
      return { add, colorPalette, document, globe };
    },
  });
</script> -->

<!-- <template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="/home">
            <ion-icon :icon="playCircle" />
            <ion-label>Listen now</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="radio" href="/radio">
            <ion-icon :icon="radio" />
            <ion-label>Radio</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="library" href="/library">
            <ion-icon :icon="library" />
            <ion-label>Library</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="search" href="/search">
            <ion-icon :icon="search" />
            <ion-label>Search</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script lang="ts">
    import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
  
    import { playCircle, radio, library, search } from 'ionicons/icons';
  
    export default {
      components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
      data() {
        return {
          playCircle,
          radio,
          library,
          search,
        };
      },
    };
  </script> -->