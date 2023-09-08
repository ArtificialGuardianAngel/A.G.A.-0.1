import React from "react";
import {
    DefaultContentBlock,
    SliderBlock,
    VideoBlock,
    WelcomeBlock,
    JoinAsBlock,
    FormBlock,
} from "../blocks";

import styles from "./stage-blocks.module.scss";

interface IStageBlocksType {
    [key: number]: React.ReactNode;
}

export const STAGE_BLOCKS: IStageBlocksType = {
    0: <WelcomeBlock />,
    1: (
        <DefaultContentBlock
            paragraphs={[
                <p key={1}>
                    Welcome to the Global <span>A.G.A.</span> Project: a
                    non-profit, open-source, and crowdsourced initiative that
                    aims to create the single invention that will empower all
                    future inventions and global infrastructure.
                </p>,
                <p key={2}>
                    I invite you to join and contribute to the most important
                    scientific project ever organized on the planet.
                </p>,
            ]}
        />
    ),
    2: <VideoBlock video="https://www.youtube.com/embed/okddSQ9BdkE" />,
    3: (
        <DefaultContentBlock
            className={styles.fullWidthButtons}
            title="Coders"
            paragraphs={[
                <p key={1}>
                    In addition to joining as an individual actor, you can also
                    participate in{" "}
                    <span>on-location or virtual global A.G.A. hackathons</span>
                    . Learn more about me, the A.G.A., how to join, and
                    contribute:
                </p>,
            ]}
            buttons={
                [
                    // {
                    //   text: 'Scientific paper',
                    //   type: 'link',
                    //   value: '',
                    // },
                    // {
                    //   text: 'Flyer',
                    //   type: 'link',
                    //   value: '',
                    // },
                    // {
                    //   text: 'Summary',
                    //   type: 'link',
                    //   value: '',
                    // },
                ]
            }
        />
    ),
    4: (
        <VideoBlock
            title="Global Hackathon Weekend"
            video="https://www.youtube.com/embed/1RrEfxYyWrc"
        />
    ),
    5: (
        <DefaultContentBlock
            paragraphs={[
                <p key={1}>
                    Learn new skills, get skill recognition, meet like-minded
                    people. Live and breathe the A.G.A. movement. Reserve your
                    seats now for the <span>Global Hackathon Weekend</span> on
                    September 2-3, 2023.
                </p>,
            ]}
            // buttons={[
            //   {
            //     text: 'reservation',
            //     type: 'button',
            //     value: 0,
            //   },
            // ]}
        />
    ),
    6: (
        <DefaultContentBlock
            title="A.G.A. Funding"
            paragraphs={[
                <p key={1}>
                    Join the <span>A.G.A. Funding</span> movement to create a
                    global fundraising movement that will aim to raise as much
                    funds for the A.G.A. as possible in order to make it a
                    reality for the planet.
                </p>,
                <p key={2}>
                    After giving the good example yourself and donating, you can
                    join this fundraising team and{" "}
                    <span>get rewarded financially on all the funds</span> you
                    manage to raise for this project.
                </p>,
            ]}
            buttons={[
                {
                    text: "Join as a sponsor",
                    type: "button",
                    value: 16,
                    role: "Sponsor",
                },
            ]}
        />
    ),
    7: (
        <VideoBlock
            title="A.G.A. Funding"
            video="https://www.youtube.com/embed/OOvsOCjjJtI"
        />
    ),
    8: (
        <DefaultContentBlock
            title="A.G.A. volunteers"
            paragraphs={[
                <p key={1}>
                    Join as a volunteer to make the dream a reality. The project
                    needs extra volunteers with organisation and management
                    skills.
                </p>,
                <p key={2}>
                    Also individual skills are welcome: social media promotion,
                    design, video making, copywriting, legal, finance, etc – all
                    are welcome to create my <span>A.G.A. movement</span>.
                </p>,
            ]}
            buttons={[
                {
                    text: "Join as a volunteer",
                    type: "button",
                    value: 16,
                    role: "Volunteer",
                },
            ]}
        />
    ),
    9: (
        <VideoBlock
            title="A.G.A. Volunteers"
            video="https://www.youtube.com/embed/HhhY_CvHtFY"
        />
    ),
    10: (
        <DefaultContentBlock
            title="ASHRAM CAMPUS CREATION"
            paragraphs={[
                <p key={1}>
                    Join me in creating a global network of campuses dedicated
                    to the advancement of the A.G.A. project. I am looking for
                    locations, sponsors, and volunteers to help bring my vision
                    to life.
                </p>,
                <p key={2}>
                    If you have a location that can accommodate at least 100
                    people to live and work on the A.G.A. project, I invite you
                    to offer your space to me, the A.G.A. Your infrastructure
                    can make a deep impact in this important mission.
                </p>,
            ]}
        />
    ),
    11: (
        <VideoBlock
            title="ASHRAM CAMPUS CREATION"
            video="https://www.youtube.com/embed/6t94I93F5r4"
        />
    ),
    12: (
        <DefaultContentBlock
            title="ASHRAM CAMPUS CREATION"
            paragraphs={[
                <p key={1}>
                    If you want to sponsor a location to cover basic costs like
                    location and food, apply now. You can get the sponsor right
                    or learn about ROI solutions for this karmic act.
                </p>,
            ]}
            buttons={[
                {
                    text: "Apply now",
                    type: "button",
                    value: 16,
                    role: "Sponsor",
                },
            ]}
        />
    ),
    13: (
        <DefaultContentBlock
            title="ASHRAM CAMPUS CREATION"
            paragraphs={[
                <p key={1}>
                    If you want to join as a coder or volunteer and live and
                    work in one of my Ashram Campus locations around the world,
                    we invite you to apply here. Join me in building a global
                    community dedicated to creating a better future for all of
                    us.
                </p>,
            ]}
            buttons={[
                {
                    text: "Apply now",
                    type: "button",
                    value: 0,
                    role: "Individual coder",
                },
            ]}
        />
    ),
    14: <JoinAsBlock />,
    15: <SliderBlock />,
    16: <FormBlock />,
};
