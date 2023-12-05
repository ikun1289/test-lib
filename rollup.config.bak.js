import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
import image from '@rollup/plugin-image';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import multiInput from 'rollup-plugin-multi-input';
import { terser } from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy'

export default {
    // input: pkg.source,
    // output: [
    //     { file: pkg.main, format: 'cjs' },
    //     { file: pkg.module, format: 'esm' }
    // ],
    input: [
        "src/components/coming-soon/*.js",
        "src/components/empty-data/*.js",
        "src/components/x-autocomplete/*.js",
        "src/components/x-layout/*.js",
        "src/components/loading-bar/*.js",
        "src/components/loading-circle/*.js",
        "src/components/x-vertical-menu/*.js",
        "src/components/x-avatar/*.js",
        "src/components/x-toolbar/*.js",
        "src/components/x-error-page/*.js",
        "src/components/x-empty-data/*.js",
        "src/components/x-filepreview/*.js",
        "src/components/x-fileupload/*.js",
        "src/components/x-dropdown-tree/*.js",
        "src/components/x-editor/*.js",
        "src/components/user-info/*.js",
        "src/components/x-comments/*.js",
        "src/components/x-calendar/*.js",
        "src/components/x-condition-builder/*.js",
        "src/components/x-horizontal-menu/*.js",
        "src/components/x-main-menu/*.js",
        "src/components/x-reaction/*.js",
        "src/components/x-workflow/*.js",
        "src/components/x-custom-field-setting/*.js",
        "src/components/x-field-dynamic-form/*.js",
        "src/components/x-cascade-select/*.js",
        "src/components/x-dictionary/*.js",
        "src/components/x-module-config/*.js",
        "src/components/x-api-action/*.js",
        "src/components/x-entity-config/*.js",
        "src/components/x-role-permission/*.js",
        "src/components/badges/*.js",
        "src/components/x-page/*.js",
        "src/components/x-task/*.js",
        "src/components/x-popover/*.js",
        "src/components/x-office/*.js",
        "src/components/x-template/*.js",
        "src/components/app-handler/*.js",
        "src/lib/common.js",
        "src/lib/sharedFunctionClass.js",
        "src/lib/cacheClass.js"
    ],
    output: {
        format: 'cjs',
        // file: 'xdp_bundle.js',
        dir: 'dist/xdp_bundle.js',
        plugins: [terser()]
    },
    plugins: [
        external(),
        babel({
            exclude: 'node_modules/**'
        }),
        del({ targets: ['dist/*'] }),
        scss({
            output: 'styles/_components.css',
            outputStyle: 'compressed'
        }),
        image(),
        multiInput(),
        copy({
            targets: [
                { src: 'styles/**/*', dest: 'dist/styles' },
            ]
        })
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};