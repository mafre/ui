//import typescript from 'typescript';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import clean from 'postcss-clean';
import babili from 'rollup-plugin-babili';

const dev = 'development';
const prod = 'production';
const env = (process.env.NODE_ENV === prod || process.env.NODE_ENV === dev) ? process.env.NODE_ENV : dev;

const plugins = [
	replace({'process.env.NODE_ENV': JSON.stringify(env)}),
	resolve(),
	commonjs({
		include: 'node_modules/**',
		namedExports: {
			'node_modules/react/index.js': [
				'Component',
				'PropTypes',
				'createElement',
			]
		},
	}),
	postcss({
		extract: true,
		plugins: [autoprefixer, clean],
		writeDefinitions: true
	}),
	typescript()
];

if (env === prod) {
  	plugins.push(babili({ comments: false }));
}

export default {
	plugins,
	external: [
		'react',
	],
	input: './src/index.js',
	output: {
		sourcemap: true,
		file: './dist/index.js',
		format: 'cjs'
	}
};
