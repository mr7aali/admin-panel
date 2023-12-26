"use client"
import Form from '@/hookForms/Form';
import FormInput from '@/hookForms/FormInput';
import React from 'react';

const ManagePost = () => {
    const onSubmit=(data:any)=>{
        console.log(data)
    }
    return (
        <div>
            <Form submitHandler={onSubmit}>
                <FormInput
                label='test'
                name='test'
                placeholder='Test'
              
            
                />
                <button type="submit">submit</button>
            </Form>
        </div>
    );
};

export default ManagePost;