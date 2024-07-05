'use client';

import Seperator from '@/components/seperator';
import { useState, useRef } from 'react';
import { Rubik } from 'next/font/google';
import { motion, useInView } from 'framer-motion';

const rubik = Rubik({ subsets: ['latin'] });

const variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const faqData = [
  {
    question: 'Is my data safe?',
    answer:
      'Yes, we use industry-standard encryption to ensure your data is secure.',
  },
  {
    question: 'Can I use the app for business expenses?',
    answer:
      'Absolutely! Our app can track both personal and business finances.',
  },
  {
    question: 'Is there a free version?',
    answer:
      'Yes, we offer a free version with basic features. For advanced features, you can upgrade to our premium plan.',
  },
];

const FAQ = () => {
  const [checkedId, setCheckedId] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="flex flex-col items-center justify-center max-w-4xl py-32 mx-auto space-y-16 md:space-y-20">
      <h1
        className={`${rubik.className} font-semibold text-4xl md:text-5xl text-center`}
      >
        Frequently Asked Questions
      </h1>
      <motion.div className="w-full space-y-4" ref={ref}>
        {faqData.map((chunk, id) => (
          <motion.div
            className="collapse collapse-plus"
            key={id}
            variants={variants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ delay: 0.2 * id, duration: 1.3 }}
          >
            <input
              type="radio"
              name="my-accordion-3"
              checked={id === checkedId}
              readOnly
            />
            <div
              className="text-xl font-medium collapse-title"
              onClick={() => setCheckedId(id)}
            >
              {chunk.question}
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 dark:text-gray-400">{chunk.answer}</p>
            </div>
            <Seperator />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FAQ;
