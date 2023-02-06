### Syncfusion dependencies
    we add dependecies to our package.json

### index.css
    import some styles to use
### Tailwind configure
we add the setup to the tailwind.config.js
### craco.config.js

### DEPENDENCIES
 "devDependencies": {
    "autoprefixer": "^10.4.2",
    "eslint": "^8.9.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-react": "^7.28.0",
    "eslint-plugin-react-hooks": "^4.3.0",
    "postcss": "^8.4.6",
    "tailwindcss": "^3.2.4"
  }

### Imports reacts components to App.js
mport './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

### Browser Routers

### Context Api
 we want to make out context know when we click a specific icon to render the icon properties