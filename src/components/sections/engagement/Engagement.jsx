import { en } from "../../../../public/static/locales/en/common";
import { SubTitleSectionMd, SubTitleSectionSecondaryCenterLg } from "../../text/SubtitleSection";
import { TitleSectionBlack, TitleSectionPrimaryCenter, TitleSectionWhite } from "../../text/TitleSection";
import { Title } from "../finansial-check/FinansialCheck";


const Engagement = () => {
    return (
        <>
        <div className="m-6 grid md:grid-cols-3 md:gap-4 relative h-max">

            <div className="slider md:col-span-2">

                <div className="slides">

                    <div id="slide-1" className="m-auto">
                        <div className="flex w-fit justify-between align-middle mx-8 h-full py-14">

                            <div className="flex flex-col justify-between align-middle">
                                <div className="md:mx-20">
                                    <Title.Provider value={en.section8.left.title}>
                                        <TitleSectionPrimaryCenter />
                                    </Title.Provider>
                                    <Title.Provider value={en.section8.left.description}>
                                        <SubTitleSectionSecondaryCenterLg />
                                    </Title.Provider>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="slider">

                <div className="slides-primary">

                    <div id="slide-1" className="m-auto">
                        <div className="flex w-fit justify-between align-middle mx-8 h-full py-14">

                            <div className="flex flex-col justify-between align-middle">
                                <div>
                                    <Title.Provider value={en.section8.right.title}>
                                        <TitleSectionWhite />
                                    </Title.Provider>
                                    <Title.Provider value={en.section8.right.description}>
                                        <TitleSectionBlack />
                                    </Title.Provider>
                                    <Title.Provider value={en.section8.right.waitlist + ' ' + '->'}>
                                        <SubTitleSectionMd />
                                    </Title.Provider>
                                    <Title.Provider value={en.section8.right.tweet + ' ' + '->'}>
                                        <SubTitleSectionMd />
                                    </Title.Provider>
                                    <Title.Provider value={en.section8.right.igFilter + ' ' + '->'}>
                                        <SubTitleSectionMd />
                                    </Title.Provider>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
        </div>
        </>
    )
}

export default Engagement;