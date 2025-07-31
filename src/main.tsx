import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/fonts.css'
import App from './App.tsx'
import { ThemeProvider } from './components/providers/theme-provider.tsx'
import ContextProvider from './components/providers/context-provider.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<ContextProvider>
				<App />
			</ContextProvider>
		</ThemeProvider>
	</StrictMode>
)
