import { Button } from '@mui/base';
import { useState } from 'react';
import './AccessibilityBar.css';

const AccessibilityBar = () => {

    const [invertColors, setInvertColors] = useState(false);
    const [fontSize, setFontSize] = useState(100);

    const toggleColors = () => {
        setInvertColors(!invertColors);
        if (!invertColors) {
        document.body.style.filter = 'invert(1)';
        document.body.style.backgroundColor = 'black';
        } else {
        document.body.style.filter = 'none';
        document.body.style.backgroundColor = 'white';
        }
    };
    const increaseFontSize = () => {
        setFontSize(prevFontSize => prevFontSize + 10);
        document.documentElement.style.fontSize = `${fontSize}%`;
      };
    const decreaseFontSize = () => {
        setFontSize(prevFontSize => Math.max(prevFontSize - 10, 50));
        document.documentElement.style.fontSize = `${fontSize}%`;
      };
    return (
        <div className="accessibility-bar" >
            <Button onClick={toggleColors}>
                Toggle Colors
            </Button>
            <Button onClick={increaseFontSize}>
                Increase Font Size
            </Button>
            <Button onClick={decreaseFontSize}>
                Decrease Font Size
            </Button>
        </div>
    );
};

export default AccessibilityBar;
