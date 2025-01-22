import {
    forwardRef,
    InputHTMLAttributes,
    useImperativeHandle,
    useRef,
} from 'react';

export default forwardRef(function TextAreaInput(
    {
        className = '',
        rows = 6,
        ...props
    }: InputHTMLAttributes<HTMLTextAreaElement> & { rows?: number },
    ref,
) {
    const localRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));


    return (
        <textarea
            {...props}
            rows={rows}
            className={
                'rounded-md border-green-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-green-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 ' +
                className
            }
            ref={localRef}
        ></textarea>
    );
});
