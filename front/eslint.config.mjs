import js from "@eslint/js";

export default [
    {
        files: ["src/**/*.tsx"],
        ignores: ["**/*.config.js"],
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",
        },
    },
];
