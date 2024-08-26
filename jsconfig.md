{
  "compilerOptions": {
    "baseUrl": ".",                 // Sets the base directory for resolving non-relative module imports.
    "paths": {                      // Configures path aliasing to make imports easier and more intuitive.
      "@/*": ["./src/*"]            // The "@" alias points to the "src" directory, allowing imports like "@/components/ComponentName".
    },
    "target": "esnext",             // Specifies the ECMAScript target version for compiled JavaScript. "esnext" uses the latest supported features.
    "module": "esnext",             // Specifies the module system to use for the project. "esnext" corresponds to ES modules.
    "lib": ["dom", "dom.iterable", "esnext"], // Specifies the default libraries to include in the project, supporting DOM features and the latest ECMAScript features.
    "allowJs": true,                // Allows JavaScript files to be included in the project, which is useful in mixed JS/TS projects.
    "skipLibCheck": true,           // Skips type checking of declaration files (.d.ts), which can improve compilation speed.
    "strict": true,                 // Enables strict type-checking options, ensuring more type safety and catching potential errors early.
    "forceConsistentCasingInFileNames": true, // Ensures that the case sensitivity of file names is consistent, preventing case-related errors.
    "noEmit": true,                 // Prevents the compiler from emitting output files; useful when you only want to type-check.
    "incremental": true,            // Enables incremental compilation to speed up the build process by reusing information from previous builds.
    "jsx": "preserve"               // Specifies how JSX is handled in the output. "preserve" means the JSX will not be changed and will be handled by Next.js.
  },
  "include": ["src"]                // Specifies the files to be included in the project. In this case, it includes all files in the "src" directory.
}
