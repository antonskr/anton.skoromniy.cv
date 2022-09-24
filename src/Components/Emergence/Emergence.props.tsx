import { ReactNode } from "react";

interface EmergenceProps {
    children: ReactNode
    callbackFn?: Function
    direction: 'top' | 'right' | 'bottom' | 'left';
    threshold: number
}

export default EmergenceProps;
