import Image from "next/image";
import { Title } from "../../../core/helper/TitleContext";
import { TitleSectionWhite, TitleSectionPrimaryContainer } from "../../text/TitleSection";
import { en } from "../../../../public/static/locales/en/common";
import CardTools from "../../card/card-tools";


const Tools = () => {
    return (
        <>
        <div className="m-6 flex relative flex-row h-max">

            <div className="slider">

                <div className="slides-primary">

                    <div id="slide-1" className="m-auto">
                        <div className="flex w-full justify-between mx-8 h-max py-14">

                            <div className="flex flex-col justify-between">
                                <div>
                                    <Title.Provider value={en.section6.title}>
                                        <TitleSectionWhite />
                                    </Title.Provider>
                                    <Title.Provider value={en.section6.subtitle}>
                                        <TitleSectionPrimaryContainer />
                                    </Title.Provider>
                                </div>
        
                                <div className="grid md:grid-cols-3 lg:gap-3 grid-cols-2 gap-2 mt-10">
                                    <CardTools />
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

export default Tools;
export {Title};