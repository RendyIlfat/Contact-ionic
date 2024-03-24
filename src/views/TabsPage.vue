<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="personCircleOutline" />
          <ion-label>Contact</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="starOutline" />
          <ion-label>Favorite</ion-label>
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

  import { personCircleOutline, starOutline, playCircle, radio, library, search } from 'ionicons/icons';

  export default {
    components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
    data() {
      return {
        personCircleOutline,
        starOutline,
        playCircle,
        radio,
        library,
        search,
      };
    },
  };
</script>