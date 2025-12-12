import React, { useState } from 'react';
import { questions, Question } from './data/questions';
import Layout from './components/Layout';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import AnswerOption from './components/AnswerOption';
import NavigationControls from './components/NavigationControls';
import ResultsScreen from './components/ResultsScreen';

const App: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
    const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);

    const currentQuestion: Question = questions[currentQuestionIndex];
    const totalQuestions = questions.length;
    const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
    const isFirstQuestion = currentQuestionIndex === 0;

    const handleOptionSelect = (option: string) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [currentQuestion.id]: option
        }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const calculateScore = (): number => {
        let score = 0;
        questions.forEach(q => {
            if (selectedAnswers[q.id] === q.correctAnswer) {
                score += 1;
            }
        });
        return score;
    };

    const handleSubmit = () => {
        setIsQuizFinished(true);
    };

    const handleRetry = () => {
        setSelectedAnswers({});
        setCurrentQuestionIndex(0);
        setIsQuizFinished(false);
    };

    const score = calculateScore();

    return (
        <Layout checkPaw={!isQuizFinished}>
            {!isQuizFinished ? (
                <>
                    <Header />
                    <ProgressBar total={totalQuestions} current={currentQuestionIndex} />

                    <QuestionCard question={currentQuestion.question} />

                    <div className="flex flex-col gap-2">
                        {currentQuestion.options.map((option: string) => (
                            <AnswerOption
                                key={option}
                                text={option}
                                selected={selectedAnswers[currentQuestion.id] === option}
                                onClick={() => handleOptionSelect(option)}
                            />
                        ))}
                    </div>

                    <NavigationControls
                        onNext={handleNext}
                        onPrev={handlePrev}
                        isFirst={isFirstQuestion}
                        isLast={isLastQuestion}
                        canProceed={!!selectedAnswers[currentQuestion.id]}
                        onSubmit={handleSubmit}
                    />
                </>
            ) : (
                <ResultsScreen
                    score={score}
                    total={totalQuestions}
                    onRetry={handleRetry}
                />
            )}
        </Layout>
    );
};

export default App;
