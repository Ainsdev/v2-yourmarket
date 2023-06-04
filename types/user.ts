
enum UserStatus {
    "active" = "active",
    "no-store" = "no-store",
    "no-payment" = "no-payment",
    "banned" = "banned",
    "no-photo" = "no-photo",
}
//Data to use implicit data from supabase auth metadata
export interface StoreUser {
    name: string,
    age: number,
    instagram: string,
    personal_id: string,
    phone: string,
    location: string,
    adress: string,
    verified: boolean,
    store: boolean,
    store_id: string,
    premium: boolean,
    banned: boolean,
    status: UserStatus,
    failed_products: Array<string>,
    n_stores: number,
    stores: Array<string>,
    categories: Array<string>,
    favorites_brands: [],
}

