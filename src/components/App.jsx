import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Container } from './Section/Section.styled';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });


  const Increment = option => {
    setFeedback({ ...feedback, [option]: feedback[option] + 1 })
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(feedback.good / countTotalFeedback() * 100)
  }


  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={Increment} />
      </Section>

      <Section title="Statistics">

        {countTotalFeedback() > 0 ?
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          /> :
          <Notification message="There is no feedback" />}

      </Section>

    </Container>
  )

};
