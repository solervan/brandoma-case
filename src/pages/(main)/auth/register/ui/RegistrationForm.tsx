import './RegistrationForm.scss';
import { Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Notification } from 'rsuite';
import firstPhoto from '../../../../../app/assets/images/background/pexels-bidvine-517980-1249611.jpg'
import secondPhoto from '../../../../../app/assets/images/background/pexels-rezwan-1216589.jpg'
import thirdPhoto from '../../../../../app/assets/images/background/pexels-clickerhappy-38070.jpg'

export default function RegistrationForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const itemsPhoto = [firstPhoto, secondPhoto, thirdPhoto]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const nextPhoto = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPhotoIndex((prevIndex) => 
        prevIndex === itemsPhoto.length - 1 ? 0 : prevIndex + 1
      )
      setIsTransitioning(false)
    }, 500) 
  }

  useEffect(() => {
    const interval = setInterval(nextPhoto, 5000)
    return () => clearInterval(interval)
  }, [])

  const handlePhotoClick = () => {
    nextPhoto()
  }

  return (
    <div className="registration-form">
      <div className="registration-form__container">
        {/* Левая часть с слайдером фото */}
        <div className="registration-form__logo-side">
          <div 
            className={`registration-form__photo-container ${isTransitioning ? 'registration-form__photo-container--transitioning' : ''}`}
            onClick={handlePhotoClick}
          >
            <img 
              src={itemsPhoto[currentPhotoIndex]} 
              alt={`Background ${currentPhotoIndex + 1}`}
              className="registration-form__photo"
            />
            <div className="registration-form__photo-overlay">
              <div className="registration-form__logo-text">
               BRANDOMA
              </div>
              <div className="registration-form__photo-indicators">
                {itemsPhoto.map((_, index) => (
                  <div 
                    key={index}
                    className={`registration-form__indicator ${index === currentPhotoIndex ? 'registration-form__indicator--active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="registration-form__form-side">
          <div className="registration-form__content">
            <form className="registration-form__form" onSubmit={handleSubmit}>
              <div className="registration-form__paragraph">Welcome!</div>
              <div className="registration-form__text">Create your account</div>
              
              <div className="registration-form__field">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="registration-form__input"
                />  
              </div>

              <div className="registration-form__field">
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="registration-form__input"
                />
              </div>

              <div className="registration-form__field">
                <input 
                  type="password" 
                  placeholder="Confirm Password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="registration-form__input"
                />
              </div>

              <div className="registration-form__button-form">
                <button type="submit" className="registration-form__submit-btn">
                  Register
                </button>
              </div>

              <div className="registration-form__login-link">
                Already have an account? {""}
                <Link to="/auth/signin" className="registration-form__link">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}