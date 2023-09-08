"use client";

import "swiper/css";
import { FormContextProvider } from "./context/FormContext";
import { StageContextProvider } from "./context/StageContext";
import { Content, Layout } from "./components";

const AboutPage = () => {
    return (
        <>
            <FormContextProvider>
                <StageContextProvider stagesCount={17}>
                    <Layout>
                        <Content />
                    </Layout>
                </StageContextProvider>
            </FormContextProvider>
        </>
    );
};

export default AboutPage;
