import { Wrapper } from "./Settings.styles";
import { useTheme } from '../../context/ThemeContext';
import Button from "../../components/Button/Button";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Wrapper>
      <h1>Settings</h1>
      <p>Switch to {theme.name == 'lightTheme' ? 'Dark' : 'Light'} Mode using the button below:</p>
      <Button onClick={toggleTheme}>
        <span>Switch to {theme.name == 'lightTheme' ? 'Dark' : 'Light'} Mode</span>
      </Button>
    </Wrapper>
  );
}

export default Settings;
