import { Title } from "../sections/finansial-check/FinansialCheck";


const TitleSectionPrimary = () => {
    return (
        <>
        <Title.Consumer>
        {(titleSection) => {
            return <h1 className="text-left text-4xl font-bold">{titleSection}</h1>;
        }}
        </Title.Consumer>
        </>
    )
}

const TitleSectionPrimaryCenter = () => {
    return (
        <>
        <Title.Consumer>
        {(titleSection) => {
            return <h1 className="text-center text-4xl font-bold">{titleSection}</h1>;
        }}
        </Title.Consumer>
        </>
    )
}

const TitleSectionSecondary = () => {
    return (
        <>
        <Title.Consumer>
        {(titleSection) => {
            return <h1 className="text-left text-4xl font-bold text-secondary">{titleSection}</h1>;
        }}
        </Title.Consumer>
        </>
    )
}

const TitleSectionWhite = () => {
    return (
        <>
        <Title.Consumer>
        {(titleSection) => {
            return <h1 className="text-left text-4xl font-bold text-white">{titleSection}</h1>;
        }}
        </Title.Consumer>
        </>
    )
}

const TitleSectionWhiteCenter = () => {
    return (
        <>
        <Title.Consumer>
        {(titleSection) => {
            return <h1 className="text-center text-4xl font-bold text-white">{titleSection}</h1>;
        }}
        </Title.Consumer>
        </>
    )
}

const TitleSectionBlack = () => {
    return (
        <>
        <Title.Consumer>
        {(titleSection) => {
            return <h1 className="text-left text-4xl font-bold text-black">{titleSection}</h1>;
        }}
        </Title.Consumer>
        </>
    )
}

const TitleSectionPrimaryContainer = () => {
    return (
        <>
        <Title.Consumer>
        {(titleSection) => {
            return <h1 className="text-left text-4xl font-bold text-primaryContainer">{titleSection}</h1>;
        }}
        </Title.Consumer>
        </>
    )
}

const TitleSectionPrimaryOnContainer = () => {
    return (
        <>
        <Title.Consumer>
        {(titleSection) => {
            return <h1 className="text-left text-4xl font-bold text-onPrimaryContainer">{titleSection}</h1>;
        }}
        </Title.Consumer>
        </>
    )
}

const TitleSectionPrimaryContainerCenter = () => {
    return (
        <>
        <Title.Consumer>
        {(titleSection) => {
            return <h1 className="text-center text-2xl font-bold mt-4 text-primaryContainer">{titleSection}</h1>;
        }}
        </Title.Consumer>
        </>
    )
}

export {
    TitleSectionPrimary, TitleSectionSecondary, TitleSectionWhite, 
    TitleSectionPrimaryContainer, TitleSectionPrimaryCenter, 
    TitleSectionBlack, TitleSectionPrimaryContainerCenter, TitleSectionWhiteCenter, TitleSectionPrimaryOnContainer};