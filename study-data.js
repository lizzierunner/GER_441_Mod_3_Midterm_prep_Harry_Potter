// ===================================
// FLASHCARD DATA - Module 3 Content
// ===================================

const flashcards = [
  // Fairy Tale Basics
  {
    id: 'fc1',
    category: 'Fairy Tale Basics',
    front: 'What is a fairy tale?',
    back: 'A fairy tale is shorter than a novel and has a moral. It uses magical elements to teach lessons about real life problems and character development.',
    difficulty: 'easy'
  },
  {
    id: 'fc2',
    category: 'Fairy Tale Basics',
    front: 'Why did JK Rowling write Harry Potter?',
    back: 'JK Rowling wrote Harry Potter to show that everyone has magic inside them - suggesting that we all have special qualities and potential.',
    difficulty: 'easy'
  },
  {
    id: 'fc3',
    category: 'Fairy Tale Basics',
    front: 'Is Harry Potter a fairy tale? Why or why not?',
    back: 'DEBATE: YES - Has magical elements, moral lessons, hero\'s journey, good vs. evil. NO - Too long, complex world-building, series format. Consider both sides!',
    difficulty: 'medium'
  },
  
  // Gender & Fairy Tales
  {
    id: 'fc4',
    category: 'Gender Roles',
    front: 'What are traditional fairy tale gender roles?',
    back: 'Women: passive, domestic roles, focused on beauty and marriage. Men: active, heroic figures, protectors. These stereotypes have huge impact on readers, especially girls.',
    difficulty: 'easy'
  },
  {
    id: 'fc5',
    category: 'Gender Roles',
    front: 'How does Hermione Granger challenge fairy tale gender norms?',
    back: 'Hermione is a GENDER SWAP - she\'s the heroic one, the smart one, the tough one, the boldest, strongest, and bravest. She takes the traditional male hero role.',
    difficulty: 'medium'
  },
  {
    id: 'fc6',
    category: 'Gender Roles',
    front: 'Is Harry Potter a "princess"?',
    back: 'ANALYSIS: Harry is male but has princess characteristics: needs rescue, orphaned, special destiny, recognized for who he is. He CROSSES GENDER LINES by having both hero and princess traits.',
    difficulty: 'hard'
  },
  {
    id: 'fc7',
    category: 'Gender Roles',
    front: 'What is "male fairy tale norms"?',
    back: 'Male characters must be strong, must be the protector. Weakness is seen as something that needs to be overcome differently than for women. Men = action, women = waiting.',
    difficulty: 'medium'
  },
  
  // Disney Evolution
  {
    id: 'fc8',
    category: 'Disney Evolution',
    front: 'How has Disney changed female characters over time?',
    back: 'Started with weak female characters → NOW strong lead female characters who end movies without needing a man. Goal shifted from marriage to independence and self-actualization.',
    difficulty: 'easy'
  },
  {
    id: 'fc9',
    category: 'Disney Evolution',
    front: 'What modern awareness does Disney show?',
    back: 'More awareness for: race representation, gender diversity, body shape variety, and different definitions of attractiveness. Moving away from one "ideal" type.',
    difficulty: 'medium'
  },
  
  // Critical Analysis
  {
    id: 'fc10',
    category: 'Critical Analysis',
    front: 'What is the "princess as reward" concept (Lin)?',
    back: 'Marriage to the prince is the ULTIMATE REWARD for the heroine\'s suffering and virtue. The princess is won, not an active agent.',
    difficulty: 'medium'
  },
  {
    id: 'fc11',
    category: 'Critical Analysis',
    front: 'Archetype vs. Stereotype - what\'s the difference?',
    back: 'ARCHETYPE: Universal pattern driven by narrative needs. STEREOTYPE: Rigid cultural expectation that limits complexity. Archetypes become stereotypes when culture overrides story.',
    difficulty: 'hard'
  },
  {
    id: 'fc12',
    category: 'Critical Analysis',
    front: 'What is "maternal altruism" in fairy tales?',
    back: 'The expectation that women/mothers should be selfless, nurturing, and sacrificing. Often tied to emphasis on female beauty and traditional female roles.',
    difficulty: 'medium'
  },
  
  // Queer Representation
  {
    id: 'fc13',
    category: 'Queer Elements',
    front: 'What queer elements exist in Cinderella?',
    back: 'Cinderella\'s relationship with female relatives (stepmother/stepsisters) - complex female bonds. Also emphasis on female beauty can be read through queer lens.',
    difficulty: 'hard'
  },
  {
    id: 'fc14',
    category: 'Queer Elements',
    front: 'Are there queer characters in traditional fairy tales?',
    back: 'Often CODED rather than explicit. Look for: same-gender bonds, gender non-conformity, rejection of heteronormative marriage plots. Modern retellings make this more explicit.',
    difficulty: 'hard'
  },
  
  // Real Life Connections
  {
    id: 'fc15',
    category: 'Real Life',
    front: 'How do fairy tales represent real life?',
    back: 'Through: morals/lessons, universal problems (jealousy, love, loss), character development, and social issues. Magic is metaphor for real challenges.',
    difficulty: 'easy'
  },
  {
    id: 'fc16',
    category: 'Real Life',
    front: 'What modern "fairy tales" exist today?',
    back: 'Examples: Taylor Swift & Travis Kelce, sports stories (NHL), graduation ceremonies, "The Diamond" - any narrative with magical/special transformation and happy ending.',
    difficulty: 'easy'
  },
  
  // Books vs Movies
  {
    id: 'fc17',
    category: 'Media Analysis',
    front: 'How do HP books differ from movies for fairy tale analysis?',
    back: 'Books: More complex, more character depth, more moral ambiguity. Movies: More visual magic, simplified plot, more traditional hero journey. Consider which is MORE fairy tale-like!',
    difficulty: 'medium'
  },
  {
    id: 'fc18',
    category: 'Media Analysis',
    front: 'Who decides what is "attractive" in fairy tales?',
    back: 'Cultural standards, historical context, dominant society values. Beauty standards in fairy tales reflect power structures - who has power to define desirability?',
    difficulty: 'hard'
  }
];

// ===================================
// QUIZ QUESTIONS - Multiple Choice
// ===================================

const quizQuestions = [
  {
    id: 'q1',
    question: 'According to JK Rowling, what is the main message of Harry Potter?',
    options: [
      'That magic is real if you believe',
      'That everyone has magic inside them',
      'That good always defeats evil',
      'That friendship conquers all'
    ],
    correct: 1,
    explanation: 'Rowling wrote Harry Potter to show that everyone has magic inside them - meaning we all have special qualities and potential.',
    category: 'Fairy Tale Basics'
  },
  {
    id: 'q2',
    question: 'What is the difference between an archetype and a stereotype?',
    options: [
      'Archetypes are older, stereotypes are modern',
      'Archetypes are narrative-driven, stereotypes are culture-driven',
      'Archetypes are positive, stereotypes are negative',
      'There is no difference'
    ],
    correct: 1,
    explanation: 'An archetype is driven by narrative needs (universal patterns), while a stereotype is shaped by cultural expectations that limit complexity.',
    category: 'Critical Concepts'
  },
  {
    id: 'q3',
    question: 'How does Hermione Granger represent a "gender swap" in Harry Potter?',
    options: [
      'She dresses in masculine clothing',
      'She takes on traditional male hero characteristics',
      'She refuses to date anyone',
      'She plays Quidditch like the boys'
    ],
    correct: 1,
    explanation: 'Hermione is the heroic one, the smart one, the tough one, the boldest and bravest - traditionally male hero traits.',
    category: 'Gender Analysis'
  },
  {
    id: 'q4',
    question: 'What does it mean that Harry Potter might be a "princess"?',
    options: [
      'He wears fancy robes',
      'He lives in a castle',
      'He has princess characteristics like needing rescue and special destiny',
      'He is actually female'
    ],
    correct: 2,
    explanation: 'Harry crosses gender lines by having princess characteristics: orphaned, special destiny, needs rescue, recognized for who he is - while presenting as male.',
    category: 'Gender Analysis'
  },
  {
    id: 'q5',
    question: 'How have Disney female characters evolved over time?',
    options: [
      'From weak to strong, from marriage-focused to independent',
      'From passive to more passive',
      'From pretty to even prettier',
      'They haven\'t changed much'
    ],
    correct: 0,
    explanation: 'Disney evolved from weak female characters needing rescue to strong leads who end movies without needing a man, with goals beyond marriage.',
    category: 'Disney Evolution'
  },
  {
    id: 'q6',
    question: 'What is Lin\'s "princess as reward" concept?',
    options: [
      'The princess gets rewarded with a kingdom',
      'The princess rewards the hero with her hand',
      'Marriage to the princess is the ultimate reward for the hero',
      'The princess is rewarded for being beautiful'
    ],
    correct: 2,
    explanation: 'Lin argues that marriage to the princess is the ultimate reward for the hero\'s journey, making the princess a prize to be won rather than an active agent.',
    category: 'Critical Concepts'
  },
  {
    id: 'q7',
    question: 'What are traditional male fairy tale norms?',
    options: [
      'Men must be emotional and sensitive',
      'Men must be strong and protect others',
      'Men must be clever and use magic',
      'Men must be wealthy and powerful'
    ],
    correct: 1,
    explanation: 'Male characters must be strong and be the protector. Weakness is seen as something that needs to be overcome differently than for women.',
    category: 'Gender Roles'
  },
  {
    id: 'q8',
    question: 'How do fairy tales represent real life?',
    options: [
      'They don\'t - they\'re just fantasy',
      'Through morals, problems, and character development',
      'By showing actual historical events',
      'Through accurate depictions of magic'
    ],
    correct: 1,
    explanation: 'Fairy tales use magical elements to represent real life through morals, universal problems, and character development. Magic is metaphor.',
    category: 'Analysis'
  },
  {
    id: 'q9',
    question: 'What modern awareness does Disney now show?',
    options: [
      'Only awareness of race',
      'Only awareness of gender',
      'Awareness of race, gender, body shapes, and diverse beauty',
      'No new awareness'
    ],
    correct: 2,
    explanation: 'Disney now shows awareness for race representation, gender diversity, body shape variety, and different definitions of attractiveness.',
    category: 'Disney Evolution'
  },
  {
    id: 'q10',
    question: 'Is Harry Potter a fairy tale? (What\'s the debate?)',
    options: [
      'Definitely yes - it has magic',
      'Definitely no - it\'s too long',
      'Debate both sides: has fairy tale elements but also differs significantly',
      'Only the first book is a fairy tale'
    ],
    correct: 2,
    explanation: 'You should analyze arguments for BOTH sides: YES (magical elements, morals, hero\'s journey) and NO (too long, complex, series format).',
    category: 'Critical Thinking'
  },
  {
    id: 'q11',
    question: 'What is "maternal altruism" in fairy tales?',
    options: [
      'Mothers who use magic',
      'The expectation that women should be selfless and nurturing',
      'Good mothers vs evil stepmothers',
      'Women who help the hero'
    ],
    correct: 1,
    explanation: 'Maternal altruism is the expectation that women/mothers should be selfless, nurturing, and sacrificing - tied to emphasis on female beauty and traditional roles.',
    category: 'Gender Concepts'
  },
  {
    id: 'q12',
    question: 'Who decides what is "attractive" in fairy tales?',
    options: [
      'The characters themselves',
      'Cultural standards and power structures',
      'The fairy godmother',
      'It\'s natural and universal'
    ],
    correct: 1,
    explanation: 'Beauty standards reflect cultural values and power structures - whoever has power gets to define what is desirable and attractive.',
    category: 'Critical Analysis'
  },
  {
    id: 'q13',
    question: 'What queer elements can be found in Cinderella?',
    options: [
      'There are none',
      'The prince is coded as queer',
      'Cinderella\'s complex relationships with female relatives',
      'The fairy godmother is queer'
    ],
    correct: 2,
    explanation: 'Cinderella\'s relationship with female relatives (stepmother/stepsisters) and emphasis on female beauty can be read through a queer lens.',
    category: 'Queer Analysis'
  },
  {
    id: 'q14',
    question: 'How do HP books and movies differ for fairy tale analysis?',
    options: [
      'They\'re exactly the same',
      'Books have more complexity, movies simplify the hero journey',
      'Movies are better fairy tales',
      'Books aren\'t fairy tales at all'
    ],
    correct: 1,
    explanation: 'Books offer more complexity and moral ambiguity; movies have more visual magic and simplified plots - consider which is MORE fairy tale-like!',
    category: 'Media Analysis'
  },
  {
    id: 'q15',
    question: 'What are examples of modern "fairy tales"?',
    options: [
      'Only Disney movies',
      'Celebrity stories, sports narratives, graduation ceremonies',
      'There are no modern fairy tales',
      'Only superhero movies'
    ],
    correct: 1,
    explanation: 'Modern fairy tales include Taylor Swift & Travis Kelce, NHL stories, graduations, "The Diamond" - any narrative with special transformation and happy ending.',
    category: 'Modern Connections'
  }
];

// ===================================
// FILL-IN-THE-BLANK QUESTIONS
// ===================================

const fillInBlankQuestions = [
  {
    id: 'fib1',
    question: 'JK Rowling wrote Harry Potter to show that everyone has _____ inside them.',
    answer: 'magic',
    hint: '5 letters',
    category: 'Basics'
  },
  {
    id: 'fib2',
    question: 'An archetype becomes a _____ when it is shaped more by cultural expectations than narrative needs.',
    answer: 'stereotype',
    hint: 'Starts with S',
    category: 'Concepts'
  },
  {
    id: 'fib3',
    question: 'Hermione Granger represents a _____ _____ by taking on traditional male hero characteristics.',
    answer: 'gender swap',
    hint: 'Two words',
    category: 'Gender'
  },
  {
    id: 'fib4',
    question: 'Lin\'s concept of "princess as _____" shows marriage as the ultimate goal.',
    answer: 'reward',
    hint: 'What you get for achievement',
    category: 'Concepts'
  },
  {
    id: 'fib5',
    question: 'Disney has evolved from weak female characters to _____ female leads.',
    answer: 'strong',
    hint: 'Opposite of weak',
    category: 'Disney'
  }
];

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { flashcards, quizQuestions, fillInBlankQuestions };
}
