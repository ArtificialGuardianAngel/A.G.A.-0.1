import client from "./client";

const happinessApi = {
    submit: (
        question_answers: Record<string, Record<string, string>>,
        demographic_answers: Record<string, string>,
    ) =>
        client.post("happiness/submit", {
            question_answers,
            demographic_answers,
        }),
};

export default happinessApi;
