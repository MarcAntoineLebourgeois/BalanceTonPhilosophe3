import React,{useState} from "react";
import App from "./App";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue,yellow,red } from '@material-ui/core/colors';

const Maintheme = {
    palette: {
        primary: {
            main: "#ea8f8f",
          },
        secondary: {
            main: '#52CDD1',
          },
        type: 'light'
    }
}

const useDarkMode = () => {
    const [theme,setTheme] = useState(Maintheme)
    const { palette : {type}} = theme;
    const DarkModeOn = () => {
        const updatedTheme = {
            ...theme,
            palette:{
                ...theme.palette,
                type: type === 'light' ? 'dark' : 'light'
            }
        }
        setTheme(updatedTheme)
    }
    return[ theme, DarkModeOn ]
}

const MainApp = () => {
    const [ theme, DarkModeOn ] = useDarkMode();
    const Maintheme = createMuiTheme(theme)

    return(
        <MuiThemeProvider theme={Maintheme} >
            <App DarkModeOn={DarkModeOn}/>
        </MuiThemeProvider>
    );
}

export default MainApp;