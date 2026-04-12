import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

  return {
    plugins: [react()],
    // GitHub Pages serves from /<repo>/ while Vercel serves from /
    base: isGitHubActions ? '/recipe-app/' : '/',
  }
})
