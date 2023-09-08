export type Question = {
  value: string;
  variants: any[];
};

export type Answer = {
  question: Question["value"];
  answer: Question["variants"][number];
};

export type Survey = {
  questions: Question[];
  demographic: Question[];
};

export type CompetedSurvey = {
  questions: Answer[];
  demographic: Answer[];
};
