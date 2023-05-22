import {writable} from 'svelte/store';

const initialUser = {
    loggedIn: false,
    username: '',
}

export const user = writable(initialUser);