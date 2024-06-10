### Steps to reproduce

1. Clone this minimal error reproduction. https://github.com/bgw-io/netlify-debounce-error-example.git
2. Install dependencies. `pnpm install`
3. Start the dev server `pnpm dev`
4. Change the console.log message in `src/functions/api-background.ts`
5. Observe that vite rebuilds it but `netlify dev` does not mention reloading it.
6. Navigate to `localhost:8888/.netlify/functions/api-background` and observe that the old console.log message is shown, not the new one.