

import Header from '../../../../shared/ui/header/Header';
import Footer from '../../../../shared/ui/footer/Footer';

const LayoutMain: React.FC<{ children: React.ReactNode }> = ({ children }) => {


  return (

    <>
        <Header />
        {children}
        <Footer/>
    </>
     
  );
};

export default LayoutMain;