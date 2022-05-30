# 1. prettier

```js
// .prettierrc.js
{
  /**
   * Specify the line length that the printer will wrap on.
   */
  printWidth: 80,
  /**
   * Specify the number of spaces per indentation-level.
   */
  tabWidth: 2,
  /**
   * Indent lines with tabs instead of spaces.
   */
  useTabs: false,
  /**
   * Print semicolons at the ends of statements.
   */
  semi: true,
  /**
   * Use single quotes instead of double quotes.
   */
  singleQuote: true,
  /**
   * Change when properties in objects are quoted.
   */
  quoteProps: 'as-needed',
  /**
   * Print trailing commas wherever possible in multi-line comma-separated syntactic structures.
   */
  trailingComma: 'es5',
  /**
   * Print spaces between brackets in object literals.
   */
  bracketSpacing: true,
  /**
   * Include parentheses around a sole arrow function parameter.
   */
  arrowParens: 'always',
  /**
   * By default, Prettier will not change wrapping in markdown text since some services use a linebreak-sensitive renderer, e.g. GitHub comments and BitBucket.
   */
  proseWrap: 'preserve',
  /**
   * Maintain existing line endings (mixed values within one file are normalised by looking at what’s used after the first line)
   */
  endOfLine: 'auto',
  /**
   * Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars.
   */
  htmlWhitespaceSensitivity: 'css',
  /**
   * Control whether Prettier formats quoted code embedded in the file.
   */
  embeddedLanguageFormatting: 'off',
}
```

# 2. tsconfig

```js
{
  "compilerOptions": {
    // Base Options
    /**
     * Specifies which default library (lib.d.ts) to use. The values are "es3", "es5", "es6", "es2015", "es2016", "es2017", "es2018", "es2019", "es2020", "esnext".
     */
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    /**
     * Specifies the module system, when generating module code. The values are "amd", "commonJS", "es2015", "es6", "esnext", "none", "system", "umd".
     */
     "module": "esnext",
    /**
     * Allow JavaScript files to be imported inside your project, instead of just .ts and .tsx files.
     */
    "allowJs": true,
    /**
     * Controls how JSX constructs are emitted in JavaScript files. This only affects output of JS files that started in .tsx files.
     */
     "jsx": "react-jsx",
    /**
     * This makes room for another tool like Babel, or swc to handle converting the TypeScript file to a file which can run inside a JavaScript environment.
     */
     "noEmit": true,
     "isolatedModules": true,


     // Strict Type Option
    /**
     * The strict flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness.
     */
     "strict": true,
    /**
     * When strictNullChecks is true, null and undefined have their own distinct types and you’ll get a type error if you try to use them where a concrete value is expected.
     */
     "strictNullChecks": false,
    /**
     * In some cases where no type annotations are present, TypeScript will fall back to a type of any for a variable when it cannot infer the type.
     */
     "noImplicitAny": true,
    /**
     * When enabled, this flag causes functions parameters to be checked more correctly.
     */
     "strictFunctionTypes": true,

    /**
     * Report errors on unused local variables.
     */
     "noUnusedLocals": true,
    /**
     * Report errors on unused parameters in functions.
     */
     "noUnusedParameters": false,
    /**
     * When enabled, TypeScript will check all code paths in a function to ensure they return a value.
     */
     "noImplicitReturns": true,
    /**
     * Report errors for fallthrough cases in switch statements. Ensures that any non-empty case inside a switch statement includes either break or return.
     */
     "noFallthroughCasesInSwitch": true,


    // Module Options
    /**
     * Specifies how modules are resolved for imports. The values are "node" and "classic".
     */
     "moduleResolution": "node",
    /**
     * Allow default imports from modules with no default export. This does not affect code emit, just type checking.
     */
     "allowSyntheticDefaultImports": true,
    /**
     * By default (with esModuleInterop false or not set) TypeScript treats CommonJS/AMD/UMD modules similar to ES6 modules.
     */
     "esModuleInterop": false,
    /**
     * Allows importing modules with a ‘.json’ extension, which is a common practice in node projects.
     */
     "resolveJsonModule": true,
    /**
     * Base directory to resolve non-relative module names.
     */
     "baseUrl": "src",


    // Other Options
    /**
     * Skip type checking of declaration files.
     */
    "skipLibCheck": true,
    /**
     * When this option is set, TypeScript will issue an error if a program tries to include a file by a casing different from the casing on disk.
     */
    "forceConsistentCasingInFileNames": true,
  },
  /**
   * Specifies an array of filenames or patterns to include in the program.
   */
  "include": [
    "src"
  ],
  /**
   * Specifies an array of filenames or patterns that should be skipped when resolving include.
   */
  "exclude": [
    "node_modules"
  ]
}
```

# 3. eslint rules

```js
  rules: {
    'react/react-in-jsx-scope': 'off', // Prevent missing React when using JSX
    'react/prop-types': 'off', // Prevent missing props validation in a React component definition
    'react/jsx-boolean-value': 'warn', // Enforce boolean attributes notation in JSX
    'react/jsx-fragments': 'error', // Enforce shorthand or standard form for React fragments
    'react/jsx-no-useless-fragment': 'error', // Disallow unnecessary fragments
    'react/prefer-stateless-function': 'error', // Enforce stateless components to be written as a pure function
    'react/hook-use-state': 'error', // Ensure symmetric naming of useState hook value and setter variables
    'react/no-arrow-function-lifecycle': 'error', // Lifecycle methods should be methods on the prototype, not class fields
    'react/no-invalid-html-attribute': 'error', // Forbid attribute with an invalid values
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ], // Prevent extra closing tags for components without children
    'react/jsx-curly-newline': 'error', // Enforce consistent line breaks inside jsx curly
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'always',
        spacing: {
          objectLiterals: 'never',
        },
      },
    ], // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-equals-spacing': ['error', 'never'], // Disallow or enforce spaces around equal signs in JSX attributes
    'react/jsx-fragments': ['error', 'syntax'], // Enforce shorthand or standard form for React fragments
    'react/jsx-handler-names': 'error', // Enforce event handler naming conventions in JSX
    'react/jsx-props-no-multi-spaces': 'error', // Disallow multiple spaces between inline JSX props
    'react/jsx-pascal-case': ['error'], // Enforce PascalCase for user-defined JSX components
  }
```
