import { Button } from '@mui/base';
import { useState } from 'react';

const AccessibilityBar = () => {

    const [invertColors, setInvertColors] = useState(false);
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
    return (
        <div className="accessibility-bar" >
            <Button onClick={toggleColors}>
                Toggle Colors
            </Button>
            <button>Button 2</button>
            <button>Button 3</button>
        </div>
    );
};

export default AccessibilityBar;
