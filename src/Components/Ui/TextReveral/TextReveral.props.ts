export interface ITextReveralProps {
    text: string;
    from ?: 'left' | 'right' | 'top' | 'bottom'; // (default: 'top')
    delay?: number; // in seconds (default: 0)
    afterDelay?: number; // in seconds (default: 0)
    desappearAfter?: boolean
}