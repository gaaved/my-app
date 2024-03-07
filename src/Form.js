import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Flex, Input } from 'antd';
import SubmitButton from './SubmitButton';
import { useSimulatedRequest } from "./SimulatedRequest";

const Form = ({ onSubmit }) => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const { loading, triggerRequest } = useSimulatedRequest();

    const handleFormSubmit = async (data) => {
        triggerRequest(data);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Flex align="flex-start" gap="small" vertical>
                <div>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: 'Email is required', pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                message: 'Invalid email address'
                            } }}
                        render={({ field }) => (
                            <div style={{ width: '300px' }}>
                                <Input {...field} placeholder="Enter your email" style={{ width: '100%' }} />
                                {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                            </div>
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: 'Password is required', pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[',"+\-_])/,
                                message: 'Invalid password'
                            } }}
                        render={({ field }) => (
                            <div style={{ width: '300px' }}>
                                <Input.Password {...field} placeholder="Enter your password" style={{ width: '100%' }} />
                                {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
                            </div>
                        )}
                    />
                </div>
                <SubmitButton isSubmitting={loading} />
            </Flex>
        </form>
    );
}

export default Form;