import { en } from "../../../public/static/locales/en/common";
import { Title } from "../sections/finansial-check/FinansialCheck";
import { SubTitleSection } from "../text/SubtitleSection";
import { TitleSectionBlack } from "../text/TitleSection";

const Footer = () => {
  return (
      <>
      <div className="flex lg:flex-row flex-col justify-between h-max px-8">

        <div className="flex flex-col w-fit justify-between align-middle h-full py-14">

            <div className="flex flex-col justify-between align-middle">
                <div>
                    <Title.Provider value={en.footer.dokupedia}>
                        <TitleSectionBlack />
                    </Title.Provider>
                    <Title.Provider value={en.footer.why}>
                        <TitleSectionBlack />
                    </Title.Provider>
                </div>
            </div>
            <div className="flex flex-row justify-between align-middle">
            <Title.Provider value={en.footer.imprint}>
                    <SubTitleSection />
                </Title.Provider>
                <Title.Provider value={en.footer.term}>
                    <SubTitleSection />
                </Title.Provider>
                <Title.Provider value={en.footer.policy}>
                    <SubTitleSection />
                </Title.Provider>
            </div>
        </div>

        <div className="flex flex-col w-fit justify-between align-middle h-full py-14">

            <div className="flex flex-row justify-between text-right">
                <div>
                <Title.Provider value={en.footer.work}>
                        <TitleSectionBlack />
                    </Title.Provider>
                </div>
            </div>
            <div className="flex flex-row lg:justify-end text-right">
                <Title.Provider value={en.footer.copyright}>
                    <SubTitleSection />
                </Title.Provider>
            </div>
        </div>
{/* 
        <div className="flex flex-row w-1/2 justify-between align-middle h-full">
                <Title.Provider value={en.footer.imprint}>
                    <SubTitleSection />
                </Title.Provider>
                <Title.Provider value={en.footer.term}>
                    <SubTitleSection />
                </Title.Provider>
                <Title.Provider value={en.footer.policy}>
                    <SubTitleSection />
                </Title.Provider>

        </div> */}
        {/* <div className="flex w-fit justify-between align-middle mx-8 h-full">

            <div className="flex flex-col justify-between text-right">
                <div>
                <Title.Provider value={en.footer.copyright}>
                    <SubTitleSection />
                </Title.Provider>
                </div>
            </div>

        </div> */}

      </div>
      {/* <div className="mx-6 grid md:grid-cols-2 md:gap-2 relative h-max pb-10">

        <div className="flex flex-row w-1/2 justify-between align-middle h-full">
                <Title.Provider value={en.footer.imprint}>
                    <SubTitleSection />
                </Title.Provider>
                <Title.Provider value={en.footer.term}>
                    <SubTitleSection />
                </Title.Provider>
                <Title.Provider value={en.footer.policy}>
                    <SubTitleSection />
                </Title.Provider>

        </div>
        <div className="flex w-fit justify-between align-middle mx-8 h-full">

            <div className="flex flex-col justify-between text-right">
                <div>
                <Title.Provider value={en.footer.copyright}>
                    <SubTitleSection />
                </Title.Provider>
                </div>
            </div>

        </div>

      </div> */}
      </>
  )
};

export default Footer;