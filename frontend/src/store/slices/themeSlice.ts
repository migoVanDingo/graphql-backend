import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type ThemeMode = 'light' | 'dark'

interface ThemeState {
  mode: ThemeMode
}

// Initialize from localStorage or default to light
const getInitialMode = (): ThemeMode => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme-mode')
    if (saved === 'light' || saved === 'dark') {
      return saved
    }
  }
  return 'light'
}

const initialState: ThemeState = {
  mode: getInitialMode(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme-mode', action.payload)
      }
    },
    toggleTheme: (state) => {
      const newMode = state.mode === 'light' ? 'dark' : 'light'
      state.mode = newMode
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme-mode', newMode)
      }
    },
  },
})

export const { setThemeMode, toggleTheme } = themeSlice.actions
export default themeSlice.reducer
