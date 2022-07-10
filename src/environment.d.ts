// declare global env variable to define types
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PRIV_KEY: string
      }
    }
  }
  
  export { };