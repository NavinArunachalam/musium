import { MUSEUMS, QUIZ_BANNER_IMAGES } from '@/utils/constants';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SmartImage from '@/components/ui/SmartImage';
import { Trophy, Clock, Zap, ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';

const MOCK_QUESTIONS = [
  {
    id: 1,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which art movement is characterized by small, distinct dots of color applied in patterns to form an image?",
    options: ["Cubism", "Surrealism", "Pointillism", "Impressionism"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Where is the Louvre museum located?",
    options: ["London", "Rome", "Paris", "Madrid"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Which artist is famous for cutting off part of his own ear?",
    options: ["Salvador Dalí", "Vincent van Gogh", "Rembrandt", "Michelangelo"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What material was Michelangelo's statue of David carved from?",
    options: ["Bronze", "Wood", "Granite", "Marble"],
    correctAnswer: 3
  }
];

function QuizRound({ museumId }: { museumId: string }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const museum = MUSEUMS.find(m => m.id === museumId);
  const question = MOCK_QUESTIONS[currentQuestion];

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === question.correctAnswer) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      if (currentQuestion < MOCK_QUESTIONS.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        setIsFinished(true);
      }
    }, 1500);
  };

  if (isFinished) {
    return (
      <div className="container mx-auto px-4 py-32 text-center min-h-[70vh] flex flex-col justify-center bg-stone-50/5">
        <div className="max-w-md mx-auto bg-midnight/90 p-10 rounded-2xl border border-gold/20 backdrop-blur-md w-full shadow-2xl">
          <Trophy className="w-20 h-20 text-gold mx-auto mb-6" />
          <h2 className="text-4xl font-display text-parchment mb-4">Quiz Complete!</h2>
          <p className="text-xl text-parchment/80 mb-8">
            You scored <span className="text-gold font-bold text-3xl mx-2">{score}</span> out of {MOCK_QUESTIONS.length}
          </p>
          <Link to="/quiz" className="btn btn-gold w-full text-center text-lg py-3">
            Back to Quizzes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <div className="max-w-3xl mx-auto">
        <Link to="/quiz" className="inline-flex items-center text-gold hover:text-gold/80 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Museum Selection
        </Link>
        
        <div className="bg-midnight/90 p-6 md:p-10 rounded-2xl border border-gold/20 backdrop-blur-md shadow-2xl">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
            <span className="text-sm md:text-base font-semibold text-gold tracking-wider uppercase flex items-center gap-2">
              <Zap className="w-4 h-4" /> {museum?.name || 'Art History'} Quiz
            </span>
            <span className="text-sm md:text-base font-medium bg-white/5 px-4 py-1.5 rounded-full text-parchment/80">
              Question {currentQuestion + 1} of {MOCK_QUESTIONS.length}
            </span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-display text-parchment mb-10 leading-tight">
            {question.question}
          </h3>
          
          <div className="space-y-4">
            {question.options.map((option, idx) => {
              let btnClass = "w-full text-left p-5 rounded-xl border-2 transition-all duration-300 flex justify-between items-center ";
              let icon = null;
              
              if (!isAnswered) {
                btnClass += "border-white/10 hover:border-gold/50 bg-white/5 hover:bg-white/10 text-parchment";
              } else {
                if (idx === question.correctAnswer) {
                  btnClass += "border-green-500/50 bg-green-500/10 text-green-400";
                  icon = <CheckCircle2 className="w-6 h-6 text-green-400" />;
                } else if (idx === selectedOption) {
                  btnClass += "border-red-500/50 bg-red-500/10 text-red-400";
                  icon = <XCircle className="w-6 h-6 text-red-400" />;
                } else {
                  btnClass += "border-white/5 bg-transparent text-parchment/40 opacity-50";
                }
              }
              
              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={isAnswered}
                  className={btnClass}
                >
                  <span className="font-medium text-lg md:text-xl">{option}</span>
                  {icon && icon}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QuizPage() {
  const { museumId } = useParams<{ museumId: string }>();

  // If there is a museumId, we show the quiz round instead of the list
  if (museumId) {
    return (
      <div className="pt-20 pb-20">
        <QuizRound museumId={museumId} />
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20">
      {/* Daily Challenge — uses Louvre building image */}
      <div className="relative overflow-hidden h-[40vh] min-h-[320px] flex items-center">
        <div className="absolute inset-0">
          <SmartImage
            src={MUSEUMS[5].buildingImageUrl}
            alt="Quiz banner"
            aspectRatio="auto"
            className="w-full h-full"
            priority
            showSkeleton={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <span className="section-kicker text-gold">✦ Daily Art Challenge</span>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-parchment tracking-tight mt-2 mb-4">
            Test Your Art Knowledge
          </h1>
          <p className="text-sm text-parchment/60 mb-6 max-w-md">
            Same 5 questions for everyone · Updated daily · Compete with art lovers worldwide
          </p>
          <button className="btn btn-gold btn-lg gap-2">
            <Zap className="w-4 h-4" /> Play Daily Challenge
          </button>
        </div>
      </div>

      {/* Museum Quiz Cards — each museum shows its own unique featured artwork */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <span className="section-kicker">✦ Choose Your Museum</span>
        <h2 className="section-title mb-8">Museum Quizzes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MUSEUMS.map(museum => (
            <motion.div
              key={museum.id}
              className="museum-card overflow-hidden group"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <SmartImage
                  src={QUIZ_BANNER_IMAGES[museum.id] || museum.buildingImageUrl}
                  alt={museum.name}
                  aspectRatio="16/9"
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="font-display text-lg font-semibold text-parchment">{museum.name}</h3>
                  <p className="text-[11px] text-parchment/60">{museum.city}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-4 text-xs text-museum-stone">
                  <span className="flex items-center gap-1"><Trophy className="w-3.5 h-3.5" /> 5 questions</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 30s per question</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {['Easy', 'Medium', 'Hard', 'Mixed'].map(d => (
                    <button key={d} className="tag text-[10px] flex-1 justify-center">{d}</button>
                  ))}
                </div>
                <Link
                  to={`/quiz/${museum.id}`}
                  className="btn btn-gold btn-sm w-full text-center block"
                >
                  Start Quiz →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
