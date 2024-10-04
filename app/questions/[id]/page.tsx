// app/questions/[id]/page.tsx

'use client';

import React from 'react';
import Question1 from '../question1';
import Question2 from '../question2';
import Question3 from '../question3';
import Question4 from '../question4';
import Question5 from '../question5';
import Question6 from '../question6';
import Question7 from '../question7';
import Question8 from '../question8';

const questions = [
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8
];

export default function QuestionPage({ params }: { params: { id: string } }) {
  const questionNumber = parseInt(params.id);
  const QuestionComponent = questions[questionNumber - 1];

  return <QuestionComponent />;
}