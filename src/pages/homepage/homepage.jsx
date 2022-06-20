
import AllFeature from "../../components/sections/all-feature/AllFeature";
import Explanation from "../../components/sections/explanation/Explanation";
import FinansialCheck from "../../components/sections/finansial-check/FinansialCheck";
import RegisterKudoku from "../../components/sections/register/RegisterKudoku"
import Team from "../../components/sections/team/Team";
import Swiper from '../../components/sections/swipe-feature/Swiper';
import items from "../../core/mock/swiper";
import Tools from "../../components/sections/tools/tools";
import Engagement from "../../components/sections/engagement/Engagement";
import Footer from "../../components/footer/Footer";

const Homepage = (props) => {
    return (
        <>
            <div className="flex flex-col h-screen w-full">
                <RegisterKudoku/>
                <Explanation />
                <AllFeature />
                <Swiper items={items} />
                <FinansialCheck />
                <Tools />
                <Team />
                <Engagement />
                <Footer />
            </div>
        </>
    )
  }

export default Homepage;