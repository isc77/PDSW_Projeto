import type { Config } from 'jest';

const config: Config = {
  // Habilitar a coleta de cobertura de código
  collectCoverage: true,

  // Diretório onde os relatórios de cobertura serão armazenados
  coverageDirectory: "coverage",

  // Fornecer um provedor para instrumentar o código para cobertura
  coverageProvider: "v8",

  // Definir quais arquivos terão cobertura coletada
  collectCoverageFrom: [
    "resolucoes/**/*.{js,jsx,ts,tsx}", // Inclui todos os arquivos na pasta resolucoes
    "!resolucoes/**/*.d.ts",           // Exclui arquivos de definição de tipos
    "!resolucoes/**/index.js",         // Exclui arquivos index.js, se necessário
  ],

  // Definir o limite mínimo de cobertura global (opcional)
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // Ativar relatórios detalhados no terminal
  verbose: true,

  // Configuração de mocks
  clearMocks: true,

  // Ambiente de teste
  testEnvironment: "node",

  // Usar arquivos de teste no formato "*.test.js"
  testMatch: [
    "**/?(*.)+(spec|test).[tj]s?(x)",  // Busca por arquivos de teste padrão
  ],
};

export default config;
