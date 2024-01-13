import { persisted } from 'svelte-persisted-store';
import { ColorTheme } from '$lib/local/types.js';

let theme = persisted('theme', ColorTheme.Dark);

export default theme;
