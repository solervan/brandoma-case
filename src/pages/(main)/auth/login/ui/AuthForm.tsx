import './AuthForm.scss'
import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Input } from 'rsuite'
import firstPhoto from '../../../../../app/assets/images/background/pexels-bidvine-517980-1249611.jpg'
import secondPhoto from '../../../../../app/assets/images/background/pexels-rezwan-1216589.jpg'
import thirdPhoto from '../../../../../app/assets/images/background/pexels-clickerhappy-38070.jpg'

export default function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const itemsPhoto = [firstPhoto, secondPhoto, thirdPhoto]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

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
    <div className="auth-form">
      <div className="auth-form__container">
        <div className="auth-form__logo-side">
          <div 
            className={`auth-form__photo-container ${isTransitioning ? 'auth-form__photo-container--transitioning' : ''}`}
            onClick={handlePhotoClick}
          >
            <img 
              src={itemsPhoto[currentPhotoIndex]} 
              alt={`Background ${currentPhotoIndex + 1}`}
              className="auth-form__photo"
            />
            <div className="auth-form__photo-overlay">
              <div className="auth-form__logo-text">
                Solare Studio
              </div>
              <div className="auth-form__photo-indicators">
                {itemsPhoto.map((_, index) => (
                  <div 
                    key={index}
                    className={`auth-form__indicator ${index === currentPhotoIndex ? 'auth-form__indicator--active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="auth-form__form-side">
          <div className="auth-form__content">
            <form className="auth-form__form" onSubmit={handleSubmit}>
              <div className="auth-form__paragraph">Hello!</div>
              <div className="auth-form__text">Sign Up to get start</div>
              
              <div className="auth-form__field">
                <Input 
                  type="email" 
                  id="email"
                  placeholder="Email Address" 
                  size='lg'
                  value={email}
                  onChange={(value) => setEmail(value)}
                  className="auth-form__input"
                />  
              </div>

              <div className="auth-form__field">
                <Input 
                  type="password" 
                  id="password"
                  placeholder="Password" 
                  size='lg'
                  value={password}
                  onChange={(value) => setPassword(value)}
                  className="auth-form__input"
                />
              </div>

              <div className="auth-form__button-form">
                <button type="submit" className="auth-form__submit-btn">
                  Sign in
                </button>
              </div>

              <div className="auth-form__register-link">
                New Customer? {""}
                <Link to="/auth/registration" className="auth-form__link">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}