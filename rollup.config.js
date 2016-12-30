import svelte from 'rollup-plugin-svelte';

export default {
    entry: 'main.html',
    dest: 'output.js',
    format: 'iife',
    moduleName: 'Main',
    plugins: [
        svelte()
    ]
}

