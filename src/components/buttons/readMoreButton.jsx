import { useTranslation } from 'react-i18next'
import ReusableButton from './reusableButton'

export default function ReadMoreButton({ href }) {
  const { t } = useTranslation()
  
  return (
    <ReusableButton
      text={t('common.buttons.readMore')}
      href={href}
      className="font-semibold md:text-2xl text-center w-fit"
    />
  );
}
