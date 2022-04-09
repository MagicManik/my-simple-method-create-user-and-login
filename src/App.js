import './App.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.init';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('');
  // console.log(email)
  const [password, setPassword] = useState('')
  // console.log(password)

  // toggle or switch register and login page
  const [toggle, setToggle] = useState(false);
  // console.log(toggle)

  // display error password error
  const [error, setError] = useState('');

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handlePasswor = e => {
    setPassword(e.target.value)
  }

  const createUserAndLogin = e => {
    e.preventDefault();

    if (!/^(?=.*[!@#$&*+]).{1,16}$/.test(password)) {
      setError('Password Should be at least one special charecter')
      return;
    }

    // erro না থাকলে erro empty sting করে দিবে। ফলে ui এ এরোর দেখাবে না।
    setError('');

    // toggle যদি ফলস হয় তাহলে লগইন করবে। আর টগল যদি ট্রু হয় তাহলে ইউজার তৈরি করবে।
    if (toggle) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          sendEmailVerification(auth.currentUser)
        })
        .catch((error) => {
          console.log(error.message)
        });
    }

    else {
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          console.log(result.user)
        })

        .catch(error => {
          console.log(error);
        })
    }
  }


  // check list এ ইভেন্ট হ্যান্ডেলার এ্যাড করা হয়েছে।
  const toggleLoginAndRegister = event => {
    setToggle(event.target.checked);
  }

  return (
    <div>
      <Form onSubmit={createUserAndLogin} className='mx-auto w-50 mt-5'>
        <h1 className='text-center text-primary'>{toggle ? "Register" : "Login"}</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswor} type="password" placeholder="Password" required />
          <p>{error}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onChange={toggleLoginAndRegister} type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          {toggle ? 'Register' : 'Login'}
        </Button>
      </Form>
    </div>
  );
}

export default App;
