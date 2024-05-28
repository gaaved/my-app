import { Button } from "antd";

const SubmitButton = ({ isLoading }) => (
  <Button type="primary" htmlType="submit" loading={isLoading}>
    Submit
  </Button>
);

export default SubmitButton;
