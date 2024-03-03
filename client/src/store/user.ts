import { createEvent, createStore } from "effector";

export const $user = createStore<string>('');
export const setUser = createEvent<string>();

$user.on(setUser, (_, name) => name);