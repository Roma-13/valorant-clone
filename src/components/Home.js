import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import styles from "./home.module.css"; 
import logo from "../assets/image-removebg-preview.png";
import logo2 from "../assets/Riot_Games_logo_circle_black_white.png";
import IMG1 from "../assets/vct-ch24-logo-riot-homepage.png";
import IMG2 from "../assets/lol-devupdate-thumbnail-honorskinsandmore-16x9.png"
import IMG3 from "../assets/ab6761610000e5ebe80d1ffb81aa6503ad41c574.png"
import IMG4 from "../assets/vyse-cinematic-thumb-a-textless-16x9-v1-primary.png"
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftSection}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <img src={logo2} alt="logo2" className={styles.logo2} />
          <ul className={isMobile ? styles["nav-links-mobile"] : styles["nav-links"]} onClick={() => setIsMobile(false)}>
            <li 
              onMouseEnter={() => setIsDropdownOpen(true)} 
              onMouseLeave={() => setIsDropdownOpen(false)}
              className={styles.dropdown}
            >
              <a href="/"> {t('about')} <IoMdArrowDropdown className={styles.icon} /></a>
              {isDropdownOpen && (
                <ul className={styles.dropdownMenu}>
                  <li><a href="/about-riot">{t('about')}</a></li>
                  <li><a href="/diversity-inclusion">{t('diversity')}</a></li>
                  <li><a href="/social-impact">{t('social_impact')}</a></li>
                </ul>
              )}
            </li>
            <li 
              onMouseEnter={() => setIsWorkDropdownOpen(true)} 
              onMouseLeave={() => setIsWorkDropdownOpen(false)}
              className={styles.dropdown}
            >
              <a href="/workwithus"> {t('work_with_us')} <IoMdArrowDropdown className={styles.icon} /></a> 
              {isWorkDropdownOpen && (
                <ul className={styles.dropdownMenu}>
                  <li><a href="/Jobs">{t('jobs')}</a></li>
                  <li><a href="/Benefits">{t('benefits')}</a></li>
                  <li><a href="/Offices">{t('offices')}</a></li>
                  <li><a href="/lifeatriot">{t('life_at_riot')}</a></li>
                </ul>
              )}
            </li>
            <li><a href="/news">{t('news')}</a></li>
          </ul>
        </div>
  
        <div className={styles.rightSection}>
          <div className={`${styles.languageDropdown} ${isLanguageDropdownOpen ? styles.show : ""}`}>
            <button className={styles.languageBtn} onClick={toggleLanguageDropdown}>
              <TbWorld />
            </button>
            
            <ul className={styles.languageDropdownMenu}>
              <li>
                <a 
                  href="#" 
                  onClick={() => changeLanguage('en')} 
                  className={i18n.language === 'en' ? styles.selectedLanguage : ''}
                >
                  English
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={() => changeLanguage('ind')} 
                  className={i18n.language === 'ind' ? styles.selectedLanguage : ''}
                >
                  Indonesian
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={() => changeLanguage('mal')} 
                  className={i18n.language === 'mal' ? styles.selectedLanguage : ''}
                >
                  Malaysian
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={() => changeLanguage('pt')} 
                  className={i18n.language === 'pt' ? styles.selectedLanguage : ''}
                >
                  Português
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={() => changeLanguage('cz')} 
                  className={i18n.language === 'cz' ? styles.selectedLanguage : ''}
                >
                  Čeština
                </a>
              </li>

              <li>
                <a 
                  href="#" 
                  onClick={() => changeLanguage('fr')} 
                  className={i18n.language === 'fr' ? styles.selectedLanguage : ''}
                >
                  Français
                </a>
              </li>

            </ul>
          </div>
          <div className={styles.searchContainer}>
            <input 
              type="text" 
              className={styles.searchInput} 
              placeholder={t('search')}
            />
            <FaSearch className={styles.searchIcon} />
          </div>
          <button className={styles.signInBtn}>{t('sign_in')}</button>
          <button className={styles["mobile-menu-icon"]} onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </button>
        </div>
      </nav>
      <div className={styles.content}>
        <img src={IMG1} alt="1" className={styles.contentimg} />
      </div>
      <div className={styles.heading}>
        <h1>{t('heading')}</h1>
      </div>
      <div className={styles.texts}>
        <p>
          <span className={styles.highlight}>{t('finals_weekend')}</span>
          <br />
          {t('top_teams')}
        </p>
        <button className={styles.learnMoreBtn}>
          <span>{t('learn_more')}</span>
          <div className={styles.btnicon}><IoArrowForwardSharp /></div>
        </button>
      </div>



    </>
  );
};

export default Navbar;
