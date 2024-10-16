import { Heading } from './components/heading'

export default function Home() {
    return (
        <>
            <Heading textColour="red" />
            <Heading textColour="blue" />
            <div className="absolute top-1 mt-5 px-3"></div>
        </>
    )
}
