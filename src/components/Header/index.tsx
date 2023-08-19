import { useTranslation } from 'react-i18next'

import en from '../../assets/img/en.png'
import es from '../../assets/img/es.png'
import fr from '../../assets/img/fr.png'
import it from '../../assets/img/it.png'
import styles from './styles.module.css'

const Header = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>{t('appTitle.main')}</h1>

      <button
        className={styles.flagButton}
        onClick={() => i18n.changeLanguage('en')}
      >
        <img src={en} alt='English' />
      </button>

      <button
        className={styles.flagButton}
        onClick={() => i18n.changeLanguage('es')}
      >
        <img src={es} alt='Español' />
      </button>

      <button
        className={styles.flagButton}
        onClick={() => i18n.changeLanguage('fr')}
      >
        <img src={fr} alt='Français' />
      </button>

      <button
        className={styles.flagButton}
        onClick={() => i18n.changeLanguage('it')}
      >
        <img src={it} alt='Italiano' />
      </button>
    </div>
  )
}

export default Header