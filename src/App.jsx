import { useState,useRef,useEffect } from 'react'
import './App.css'
import logo from './assets/logoSolace.svg'
import signup from './assets/signup.png'
import login from './assets/login.png'
import upload from './assets/upload.png'
import loginImg from './assets/loginVector.png'
import uploadSvg from './assets/upload.gif'
import chat from './assets/chat.png'
import chatTut from './assets/solaceChatTut.mp4'
import document from './assets/document.png'
import downloading from './assets/downloading.gif'
import 'aos/dist/aos.css';

function App() {
  const signupRef = useRef(null);
  const loginRef = useRef(null);
  const uploadRef=useRef(null);
  const chatRef = useRef(null);
  const documentRef=useRef(null);
  const faqsRef = useRef(null);

  const handleGetStartedClick = () => {
    signupRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleNextClick = () => {
    loginRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleNextLoginClick = () => {
    uploadRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleNextUploadClick = () => {
    chatRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleNextChatClick = () => {
    documentRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleNextAcessClick = () => {
    faqsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
   useEffect(() => {
    AOS.init(); 
  }, []);
  
  return (
    <div className='container'>
    <div className='startContainer'>
      <h1 className='getHeading'>Getting Started <br/>with <img src={logo} className='logo'/></h1>
      <p className='p'>Welcome to <spam className="solaceH">SOLACE</spam> This guide will help you get started with our platform.</p>
      <button className='getBtn' onClick={handleGetStartedClick}>Get Started</button>
    </div>
    <div className='evenContainer'  ref={signupRef}>
      <img src='https://cdni.iconscout.com/illustration/premium/thumb/sign-up-4922762-4097209.png?f=webp'  className='signupImg' data-aos="fade-right"/>
      {/* <img src={signup}  className='signupImg'/> */}

      <div className='rightContainer'>
        <h1 className='cardH'>New to Solace? Dive In!</h1>
      <p className='signP'>Begin your Solace journey by providing a username, password and email on our signup page. Verify your account with the code sent to your email or opt for a quick signup via Google. Click <spam>Sign Up</spam> to unlock a world where connections thrive and creativity ignites.<br/><br/> Ready to get started? Click below to create your account and start exploring.</p>
      <div>
      <button className='Signbtn' >Sign Up</button>
      <button className='NxtBtn' onClick={handleNextClick} >Next</button>
</div>
      </div>
    </div>
    <div className='LoginContainer'  ref={loginRef}>
      <div className='rightContainer'>
        <h1 className='cardH'>Already have an account?</h1>
      <p className='signP'>Welcome Back to Solace: Log In to Continue Your Journey! Enter your Username and password or opt for quick login with Google. Forgot your password? Reset it easily.<br/><br/> Ready to reconnect? Log in now to resume your Solace adventure!</p>
      <div>
      <button className='Signbtn' >Login </button>
      <button className='NxtBtn' onClick={handleNextLoginClick} >Next</button>
</div>
      </div>
            <img src={loginImg} className='loginImg'data-aos="fade-left"/>
    </div>
    <div className='evenContainer upload'  ref={uploadRef}>
      {/* <img src='https://cdni.iconscout.com/illustration/premium/thumb/sign-up-4922762-4097209.png?f=webp'  className='signupImg'/> */}
      <img src={upload}  className='uploadImg' data-aos="zoom-in"/>

      <div className='rightContainer'>
        <div className='upload'>
          <h1 className='cardH uploadH'>Uploading PDFs</h1><img src={uploadSvg} className='uploadSvg'/>
        </div>
      <p className='signP'>Navigate to the <spam>UPLOAD</spam> page, where you can select the desired PDF from your device. After selecting the file, click the Upload button to initiate the process. You'll receive a confirmation message once the upload is complete, and then you'll be ready to start chatting with your PDF content.</p>
      <div>
      <button className='Signbtn' >Upload</button>
      <button className='NxtBtn' onClick={handleNextUploadClick} >Next</button>
</div>
      </div>
    </div>
    <div className='LoginContainer chatContainer'  ref={chatRef}>
      <div className='rightContainer'>
        <h1 className='cardH'>Initiating a Chat</h1>
      <p className='signP chatP'>Clicking the <spam>Upload</spam> button directs you to a page displaying your uploaded PDF. Select specific text to reveal a <spam>CHAT</spam> option. Clicking Chat initiates a session, facilitating real-time discussion on the selected text. This seamless process enhances collaboration and user experience with uploaded PDFs.</p>
      <div>
      <button className='Signbtn' >Chat </button>
      <button className='NxtBtn' onClick={handleNextChatClick} >Next</button>
</div>
      </div>
            {/* <img src={chat} className='loginImg'data-aos="fade-left"/> */}
            <video width="600" height="360" controls  className='chatVideo' data-aos="zoom-in">
        <source src={chatTut} type="video/mp4" autoPlay />
    </video>
    </div>
     <div className='evenContainer upload'  ref={documentRef}>
      <img src={document}  className='accessImg' data-aos="zoom-in"/>
      <div className='rightContainer'>
        <div className='upload'>
          <h1 className='cardH uploadH'>Accessing Uploaded Files</h1><img src={downloading} className='uploadSvg'/>
        </div>
      <p className='signP'>Authenticated users can access their uploads within the exclusive realm of <spam>My documents</spam> section. Dive into a personalized sanctuary where your documents reside, ready to be revisited or downloaded at your command.</p>
      <div>
      <button className='Signbtn' >Excited</button>
      <button className='NxtBtn' onClick={handleNextAcessClick} >Next</button>
  </div>
      </div>
    </div>
    <div ref={faqsRef} className='FaqContainer'>
    <h1 className='getHeading'>FAQs</h1>
    <div className='Faqs'>
    <div className='FaqContainerBox' ref={faqsRef}>
      <h1>Which type of files I can upload?</h1>
      <p>You can only upload PDF (.pdf) files at the moment. However, we are working to support more file types in the future.</p>
    </div>
    <div className='FaqContainerBox'>
      <h1>How can I see my old chats?</h1>
      <p>Navigate to the "Chats" section in your account dashboard to view your previous conversations.</p>
    </div>
    <div className='FaqContainerBox'>
      <h1>How can I chat with images present in PDF?</h1>
      <p>You can chat about images in the PDF by selecting them and clicking on the "Chat" button. To select an area highlight hold ⌥ Option key (Alt), then click and drag.</p>
    </div>
    <div className='FaqContainerBox'>
      <h1>How can I chat with a portion of the PDF?</h1>
      <p>Highlight the text or image you want to discuss and click on the "Chat" button.</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default App
