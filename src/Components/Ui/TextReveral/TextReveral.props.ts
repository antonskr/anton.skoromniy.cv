export interface ITextReveralProps {
    text: string;
    delay?: number; // in seconds (default: 0)
    from ?: 'left' | 'right' | 'top' | 'bottom'; // (default: 'top')
}