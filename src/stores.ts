
import type { UserWithoutPassword } from "./types/user";
import type { Writable } from "svelte/store";
import { writable} from "svelte/store";


export const authToken:Writable<string|undefined> = writable(undefined);

export const user:Writable<UserWithoutPassword|undefined> = writable(undefined);
export const displayUser:Writable<UserWithoutPassword|undefined> = writable(undefined);

export const layout:Writable<string> = writable('top');




