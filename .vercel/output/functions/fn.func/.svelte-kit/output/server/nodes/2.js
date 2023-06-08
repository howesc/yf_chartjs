import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.a5a56342.js","_app/immutable/chunks/index.838feb98.js"];
export const stylesheets = ["_app/immutable/assets/2.9b5acf9b.css"];
export const fonts = [];
