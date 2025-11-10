import defaultConfig from "@forsakringskassan/eslint-config";
import cliConfig from "@forsakringskassan/eslint-config-cli";
import typescriptConfig from "@forsakringskassan/eslint-config-typescript";
import vueConfig from "@forsakringskassan/eslint-config-vue";

export default [
    {
        name: "Ignored files",
        ignores: [
            "**/coverage/**",
            "**/dist/**",
            "**/node_modules/**",
            "**/public/**",
            "**/temp/**",
            "**/typedoc/**",
        ],
    },

    ...defaultConfig,

    cliConfig(),
    typescriptConfig(),
    vueConfig(),

    {
        /* @todo technical debt */
        name: "local/technical-debt",
        rules: {
            "@typescript-eslint/explicit-function-return-type": "off",
            "vue/no-restricted-block": "off",
        },
    },
];
