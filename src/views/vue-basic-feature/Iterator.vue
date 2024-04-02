<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-button @click="back">
                        <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>Iterator</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Iterator</ion-title>
                </ion-toolbar>
            </ion-header>
            
            <ion-list>
                <ion-list-header>Iterator dengan variable biasa</ion-list-header>

                <ion-item v-for="item in contacts">
                    <ion-label>
                        <h2>{{ item.nama }}</h2>
                        <p>{{ item.phone }}</p>
                        <p>{{ item.email }}</p>
                    </ion-label>
                </ion-item>

            </ion-list>

            <ion-list>
                <ion-list-header>Iterator dengan variable ref</ion-list-header>

                <ion-item v-for="item in contactRefs">
                    <ion-label>
                        <h2>{{ item.nama }}</h2>
                        <p>{{ item.phone }}</p>
                        <p>{{ item.email }}</p>
                    </ion-label>
                </ion-item>
                
            </ion-list>
        
        
        </ion-content>
    </ion-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { arrowBackOutline } from 'ionicons/icons';

const router = useRouter()

const back = () => {
  router.back()
}

const contacts = [
    {
        nama: 'SI A',
        phone: '0854387658',
        email: 'si.a@mail.com',
    },
    {
        nama: 'SI B',
        phone: '0854387658',
        email: 'si.b@mail.com',
    },
    {
        nama: 'SI C',
        phone: '0854387658',
        email: 'si.c@mail.com',
    },
    {
        nama: 'SI D',
        phone: '0854387658',
        email: 'si.d@mail.com',
    },
]

const contactRefs = ref([
{
        nama: 'SI A',
        phone: '0854387658',
        email: 'si.a@mail.com',
    },
    {
        nama: 'SI B',
        phone: '0854387658',
        email: 'si.b@mail.com',
    },
    {
        nama: 'SI C',
        phone: '0854387658',
        email: 'si.c@mail.com',
    },
    {
        nama: 'SI D',
        phone: '0854387658',
        email: 'si.d@mail.com',
    },
])

</script>

<syle></syle>