import React from 'react';
import { Button } from 'antd';

const SubmitButton = ({ isSubmitting }) => {

    return (
        <Button type="primary" htmlType="submit" loading={isSubmitting}>Submit</Button>
    );
}

export default SubmitButton;