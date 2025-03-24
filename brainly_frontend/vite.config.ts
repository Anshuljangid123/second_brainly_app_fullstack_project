import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // theme : {
  //   extend : {
  //     colors : {
  //       purple :{
  //         300 : "#e0e7fe",
  //         500 : "#3e38a7",
  //         600 : "#5046e4",
  //       }
  //     }
  //   }
  // },
  plugins: [tailwindcss(),react()],
})
