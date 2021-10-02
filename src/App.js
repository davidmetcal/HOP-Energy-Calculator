import Header from './Components/Header';
import Steps from './Components/Steps';
import { ThemeProvider } from '@material-ui/core';
import theme from "./Components/theme";


function App() {
  return (
      <ThemeProvider theme={theme}>
    
        <Header />  
        <div className="container">

        <Steps />

       </div>


       </ThemeProvider>
  );
}

export default App;
