import React, { useState } from 'react';
import Helmet from '../components/Helmet';
import CommonSection from '../components/CommonSection';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/login.scss';


import {db, auth, storage } from '../firebase/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const defaultFormFields = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const Signup= () => {

    const [file, setFile] =useState(null);
    const[formFields, setFormFields] = useState(defaultFormFields);
    const{ username, email, password, confirmPassword} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
        }

    const signup = async(event) =>{
        event.preventDefault();

        if(password !== confirmPassword) {
           toast ("passwords do not match");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                email, 
                password
                );

                const user = userCredential.user;

                const storageRef = ref(storage, `Images/${Date.now() + username}`);
                await uploadBytesResumable(storageRef, file);
     
                getDownloadURL(storageRef)
                    .then(async(downloadURL)=>{
                        console.log(downloadURL);

                        await updateProfile(user, {
                            displayName: username,
                            photoURL: downloadURL
                            });
                            
                        // store user data in firestore database
        
                        await setDoc(doc(db, 'users', user.uid),{
                            uid: user.uid,
                            displayName: username,
                            email,
                            photoURL: downloadURL
                        });
                    });
                    toast.success('successsfully added');
                    resetFormFields();

        }catch(error) {
            toast.error('something went wrong');
            resetFormFields();
        }
        
       

    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]:value});
    };

  

    return <Helmet title = 'Signup'>
            <CommonSection title='Signup'/>
        <section>
            <Container>
                <Row>
                    <Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold fs-4 mb-4' >Signup</h3>

                        <Form className='auth_form' onSubmit={signup}>
                            <FormGroup className='form_group'>
                                <Input type='input' placeholder='Enter your name'
                                name='username'
                                value={username} onChange={handleChange} />
                            </FormGroup>

                            <FormGroup className='form_group'>
                                <Input type='email' placeholder='Enter your email'
                                name='email'
                                value={email} onChange={handleChange} />
                            </FormGroup>

                            <FormGroup className='form_group'>
                                <Input type='password' placeholder='Enter your password'
                                name='password'
                                value={password} onChange={handleChange}/>
                            </FormGroup>

                            <FormGroup className='form_group'>
                                <Input type='password' placeholder='Confirm your password' 
                                name='confirmPassword'
                                value={confirmPassword} onChange={handleChange}/>
                            </FormGroup>

                            <FormGroup className='form_group'>
                                <Input type='file' 
                                        name='file'
                                        onChange={event=>setFile(event.target.files[0])}/>
                            </FormGroup>

                            <Button type='submit' className="buy_btn auth_btn">
                                Create an Account
                            </Button>
                            <p>Already hava an account? { " " }
                                <Link to='/login'>
                                    Login
                                </Link>
                            </p>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
    }

export default Signup;