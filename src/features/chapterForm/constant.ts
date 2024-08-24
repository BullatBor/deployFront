import { IChapterData } from '@/shared';

export const CHAPTER_DATA_MOCK: IChapterData = {
  id: null,
  question_ru: '',
  type: 'text',
  answers: [
    { answer_ru: '', isCorrect: false },
    { answer_ru: '', isCorrect: false },
    { answer_ru: '', isCorrect: false },
    { answer_ru: '', isCorrect: false },
  ],
};

export const DocFileType = {
  'application/pdf': ['.pdf'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
};
