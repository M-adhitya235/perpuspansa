import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import Layout from './Layout';
import FormEditBook from '../components/FormEditBook';

const EditBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state => state.auth));
  
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if(isError){
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
        <FormEditBook />
    </Layout>
  )
}

export default EditBook