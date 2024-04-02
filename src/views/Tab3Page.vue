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
        <ion-title><h1>Setting</h1></ion-title>
      </ion-toolbar>
    </ion-header>

        <ion-content> 
          
          <ion-list>
            <ion-list-header>Vue Basic Feature</ion-list-header>

            <ion-item @click="toState" class="ion-activatable ripple-parent">
              <ion-ripple-effect></ion-ripple-effect>
              <ion-label>
                <h2>State</h2>
                <p>State Management?</p>
              </ion-label>
            </ion-item>

            <ion-item @click="toIterator" class="ion-activatable ripple-parent">
              <ion-ripple-effect></ion-ripple-effect>
              <ion-label>
                <h2>Iterator - v-for</h2>
                <p> </p>
              </ion-label>
            </ion-item>

            <ion-item @click="toIF" class="ion-activatable ripple-parent">
              <ion-ripple-effect></ion-ripple-effect>
              <ion-label>
                <h2>If Statement - v-if</h2>
                <p></p>
              </ion-label>
            </ion-item>

            <ion-item @click="toModal" class="ion-activatable ripple-parent">
              <ion-ripple-effect></ion-ripple-effect>
              <ion-label>
                <h2>Model - Two Data Binding - v-if</h2>
                <p></p>
              </ion-label>
            </ion-item>

            <ion-item @click="toEvent" class="ion-activatable ripple-parent">
              <ion-ripple-effect></ion-ripple-effect>
              <ion-label>
                <h2>Event</h2>
                <p></p>
              </ion-label>
            </ion-item>

            <ion-item @click="toLifecycle" class="ion-activatable ripple-parent">
              <ion-ripple-effect></ion-ripple-effect>
              <ion-label>
                <h2>Lifecycle</h2>
                <p></p>
              </ion-label>
            </ion-item>
            
          </ion-list>

        </ion-content>
  </ion-page>
</template>
  
  <script setup lang="ts">
    import { useRouter } from "vue-router";

    const router = useRouter()
    
    const toEvent = () => router.push({ path: '/vue/event'})
    const toIF = () => router.push({ path: '/vue/if'})
    const toIterator = () => router.push({ path: '/vue/iterator'})
    const toLifecycle = () => router.push({ path: '/vue/lifecycle'})
    const toModal = () => router.push({ path: '/vue/modal'})
    const toState = () => router.push({ path: '/vue/state'})


    // VARIABLE let,var, const
    // penulisan variable dengan const
    // let tidaK bersifat constant. jadi nilai variable bisa di rubah
    let name ='abe'
    
    // penulisan variable dengan const
    // let tidaK bersifat constant. jadi nilai variable tidak bisa di rubah
    const kelas = 'ik2'

    // FUNCTION
    // menggunakan syntax function
    function gantiNama(name: string) {
      alert('ganti nama')
    }

    // menggunakan syntax coust
    const gantiKelas = (name: string) => {
      alert('ganti kelas')
    }

    // TIPE PRIMITIVE
    // string, number, boolean, any, Array
    // 1. string
    const peliharaan: string = 'kucing'

    // 2. number
    const umur: number = 10.5

    // 3. boolean
    const isHidup: boolean = false // true, false

    // 4. any
    const gakjelas: any = false

    // 5. Array
    const names: Array<string> = [
      'abe',
      'bea',
      'eab',
      'aeb',
    ]

    const nilais: number[] = [
      123,
      34,
      56,
      78,
    ]

    const mbuh: any[] = [
      'aku',
      123,
      true,
    ]

    // TIPE DATA OBJECT
    const orang = {
      nama: 'abe',
      kelas: 'ik2',
      umur: 30,
      pacars: [
        'iib',
        'bubu',
        'bebe',
      ],
      ayah: {
        nama: 'gak tau',
        jk: 1,
        alamat: 'jl. Tahmrin 35A'
      },
    }

    const siswas: any[] = [
      {
        name: 'si A',
        umur: 17,
      },
      {
        name: 'si B',
        umur: 18,
      },
      {
        name: 'si C',
        umur: 25,
      }
    ]

    // TYPE - CUSTOM
    type Orang = {
      name: string
      kelas: string
      umur: number
      isHidup?: boolean
      alamat?: string,
      jk?: KELAMIN
    }

    const orang1: Orang = {
      name: '',
      kelas: '',
      isHidup: false,
      umur: 12,
    }

    const orang2: Orang = {
      name: '',
      kelas: '',
      umur: 12,
      jk: "laki-laki"
    }

    // TYPE - enumable
    type KELAMIN = 'laki-laki' | 'perempuan'



  </script>


