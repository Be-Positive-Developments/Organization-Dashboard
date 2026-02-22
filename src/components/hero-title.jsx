import { useLanguage } from '../contexts/language-context';

export function HeroTitle() {
  const { language } = useLanguage();

  if (language === 'ar') {
    return (
      <span className="text-7xl font-bold">
        <span className="text-gray-900">كن</span>{' '}
        <span className="text-red-600">إيجابياً</span>
      </span>);

  }

  return (
    <span className="text-7xl font-bold">
      <span className="text-gray-900">Be</span>{' '}
      <span className="text-red-600">Positive</span>
    </span>);

}