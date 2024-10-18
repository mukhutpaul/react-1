import { CallToActionView } from "@/ui/design_system/call-to-action.view.tsx/call-to-action.view";
import { CodersMonkeySlack } from "./coders-monkey-slack/coders-monkey-slack-view";
import { CurrentCourseCtaView } from "./current-course-cta/current-course-cta-view";
import { FeaturedView } from "./featuread/featured-view";
import {  HighLightListView } from "./highlight-list.tsx/highlight-list";
import { HiroTopView } from "./hiro-top/hiro-top-view";

export const LandingPageView  = () =>{
    return(
    <>
        <HiroTopView/>
        <FeaturedView/>
        <CodersMonkeySlack/>
        <CurrentCourseCtaView/>
        <HighLightListView/>
        <CallToActionView/>
    </>
    )
};