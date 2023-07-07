import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
import { App } from './App';

const root = createRoot(container!);
root.render(<App />);