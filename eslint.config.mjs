// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: ['**/*.ts', '**/*.vue'],
  rules: {
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
  },
});
