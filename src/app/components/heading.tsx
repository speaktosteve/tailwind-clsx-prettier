import { clsx } from 'clsx'

export const Heading = ({ textColour }: { textColour: 'red' | 'blue' }) => {
    const classes = clsx(
        'mx-auto p-5 pt-5 text-5xl',
        textColour === 'red' && 'text-red-700',
        textColour === 'blue' && 'text-blue-700'
    )
    return <h1 className={classes}>Heading</h1>
}
