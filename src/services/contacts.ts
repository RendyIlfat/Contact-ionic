import { ref } from "vue";
import { useStorage } from '@vueuse/core'

type Contact = {
    id?: any,
    name?: string
    phone?: string
    email?: string
    address?: string
    gender?: number
    isFav?: boolean
}

export const data = useStorage<Contact[]>('app.contacts', [])

// export const data = ref<any[]>([
//     {
//         name: "Abe",
//         phone: "089577432",
//         email: "abe@mail.com",
//         address: '',
//         gender: 1,
//         isFav: true
//     }
// ])