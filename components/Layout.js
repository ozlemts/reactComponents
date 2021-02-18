import React, {useState} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

export default function Layout({ children }) {
	const [theme, setTheme] = useState("dark")
	const value = { theme, setTheme }
	return (
		<ThemeContext.Provider value={value}>
			<div>{children}</div>
		</ThemeContext.Provider>
		)

}