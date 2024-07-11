import { RuleConfigSeverity, UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [RuleConfigSeverity.Error, 'always', 80],
    'scope-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'scope-empty': [RuleConfigSeverity.Warning, 'never'],
    'subject-case': [
      RuleConfigSeverity.Error,
      'always',
      ['sentence-case', 'start-case', 'pascal-case'],
    ],
    'subject-empty': [RuleConfigSeverity.Error, 'never'],
    'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'type-empty': [RuleConfigSeverity.Error, 'never'],
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['build', 'ci', 'feat', 'fix', 'refactor', 'test'],
    ],
  },
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};

export default Configuration;
