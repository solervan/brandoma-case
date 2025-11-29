import './RegistrationForm.scss';
import { Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Notification, Loader } from 'rsuite';
import { useRegisterMutation } from '../../../../../app/redux/apiSlice/UserApiSlice';
import firstPhoto from '../../../../../app/assets/images/background/pexels-bidvine-517980-1249611.jpg';
import secondPhoto from '../../../../../app/assets/images/background/pexels-rezwan-1216589.jpg';
import thirdPhoto from '../../../../../app/assets/images/background/pexels-clickerhappy-38070.jpg';

interface FormData {
  username: string; // Изменено с name на username
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    username: '', // Изменено с name на username
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [register, { isLoading }] = useRegisterMutation();

  const itemsPhoto = [firstPhoto, secondPhoto, thirdPhoto];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.trim().length < 2) {
      newErrors.username = 'Username must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      const registerData: RegisterData = {
        username: formData.username.trim(),
        email: formData.email.trim(),
        password: formData.password
      };

      console.log('Sending registration data:', registerData); // Для отладки

      const result = await register(registerData).unwrap();

      console.log('Registration success:', result); // Для отладки

      Notification.success({
        title: 'Success',
        description: 'Registration successful! Please check your email to verify your account.',
        duration: 5000
      });

      // Очистка формы после успешной регистрации
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

    } catch (error: any) {
      console.error('Registration error:', error);
      
      let errorMessage = 'Registration failed. Please try again.';
      
      if (error.data?.message) {
        errorMessage = error.data.message;
      } else if (error.status === 400) {
        errorMessage = 'Invalid data provided';
      } else if (error.status === 409) {
        errorMessage = 'User with this email already exists';
      } else if (error.status === 500) {
        errorMessage = 'Server error. Please try again later.';
      }

      Notification.error({
        title: 'Registration Failed',
        description: errorMessage,
        duration: 5000
      });
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const nextPhoto = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPhotoIndex((prevIndex) => 
        prevIndex === itemsPhoto.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextPhoto, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePhotoClick = () => {
    nextPhoto();
  };

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
              
              {/* Username Field */}
              <div className="registration-form__field">
                <input 
                  type="text" 
                  placeholder="Username" 
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  className={`registration-form__input ${errors.username ? 'registration-form__input--error' : ''}`}
                  disabled={isLoading}
                />
                {errors.username && (
                  <div className="registration-form__error">{errors.username}</div>
                )}
              </div>

              {/* Email Field */}
              <div className="registration-form__field">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`registration-form__input ${errors.email ? 'registration-form__input--error' : ''}`}
                  disabled={isLoading}
                />
                {errors.email && (
                  <div className="registration-form__error">{errors.email}</div>
                )}
              </div>

              {/* Password Field */}
              <div className="registration-form__field">
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`registration-form__input ${errors.password ? 'registration-form__input--error' : ''}`}
                  disabled={isLoading}
                />
                {errors.password && (
                  <div className="registration-form__error">{errors.password}</div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="registration-form__field">
                <input 
                  type="password" 
                  placeholder="Confirm Password" 
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className={`registration-form__input ${errors.confirmPassword ? 'registration-form__input--error' : ''}`}
                  disabled={isLoading}
                />
                {errors.confirmPassword && (
                  <div className="registration-form__error">{errors.confirmPassword}</div>
                )}
              </div>

              {/* Submit Button */}
              <div className="registration-form__button-form">
                <button 
                  type="submit" 
                  className="registration-form__submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader size="sm" />
                      Registering...
                    </>
                  ) : (
                    'Register'
                  )}
                </button>
              </div>

              {/* Login Link */}
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