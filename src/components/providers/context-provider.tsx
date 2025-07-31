import { ContextActiveBarIcons, contextEditorFiles } from '@/constants/vscode'
import type { IActiveBarIcon, IEditorFile } from '@/types'
import {
	createContext,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from 'react'

type EditorContextType = {
	editorFiles: IEditorFile[]
	setEditorFiles: Dispatch<SetStateAction<IEditorFile[]>>
	activeBarIcons: IActiveBarIcon[]
	setActiveBarIcons: Dispatch<SetStateAction<IActiveBarIcon[]>>
}

const defaultValue = {
	editorFiles: [],
	setEditorFiles: () => {},
	activeBarIcons: [],
	setActiveBarIcons: () => {},
} as EditorContextType

// eslint-disable-next-line react-refresh/only-export-components
export const EditorContext = createContext<EditorContextType>(defaultValue)

export default function ContextProvider({ children }: { children: ReactNode }) {
	const [editorFiles, setEditorFiles] =
		useState<IEditorFile[]>(contextEditorFiles)

	const [activeBarIcons, setActiveBarIcons] = useState<IActiveBarIcon[]>(
		ContextActiveBarIcons
	)

	return (
		<EditorContext.Provider
			value={{ editorFiles, setEditorFiles, activeBarIcons, setActiveBarIcons }}
		>
			{children}
		</EditorContext.Provider>
	)
}
