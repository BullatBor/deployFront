module.exports = {
  types: [
    {
      value: 'build',
      name: 'build:     Сборка проекта или изменения внешних зависимостей',
    },
    { value: 'ci', name: 'ci:        Настройка CI и работа со скриптами' },
    { value: 'feat', name: 'feat:      Добавление нового функционала' },
    { value: 'fix', name: 'fix:       Исправление ошибок' },
    {
      value: 'refactor',
      name: 'refactor:  Правки кода без исправления ошибок или добавления новых функций',
    },
    { value: 'test', name: 'test:      Добавление тестов' },
  ],
  scopes: [
    { name: 'app' },
    { name: 'pages' },
    { name: 'widgets' },
    { name: 'features' },
    { name: 'entities' },
    { name: 'shared' },
  ],
  messages: {
    type: 'Какие изменения вы вносите?',
    scope: '\nВыберите область, которую вы изменили (опционально):',
    customScope: 'Укажите свою область:',
    subject: 'Напишите номер задачи и короткое описание не более 72-х символов:\n',
    confirmCommit: 'Вас устраивает получившийся коммит?',
  },
  allowCustomScopes: true,
  skipQuestions: ['body', 'footer'],
  allowBreakingChanges: false,
  subjectLimit: 72,
};
