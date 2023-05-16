import { prepareStylesSSR } from '@svelteuidev/core';
import { connectDB } from './db/mongo';

export const handle = prepareStylesSSR;

connectDB().then((): void => {
    console.log("Successful connection");
}).catch((e: Error) => {
    console.error(e);
})