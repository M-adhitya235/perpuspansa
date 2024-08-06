import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import Layout from './Layout';
import FormEditMember from "../components/FormEditMember";

const EditMember = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state => state.auth));
  
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if(isError){
      navigate("/");
    }
    if (user && user.role !== "admin"){
      navigate("/dash")
    }
  }, [isError, user, navigate]);

  return (
    <Layout>
        <FormEditMember />
    </Layout>
  )
}

export default EditMember