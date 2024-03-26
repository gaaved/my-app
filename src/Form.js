import { useForm, Controller } from "react-hook-form";
import { Flex, Input } from "antd";
import SubmitButton from "./SubmitButton";
import { useSimulatedRequest } from "./SimulatedRequest";

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading, triggerRequest } = useSimulatedRequest();

  return (
    <form onSubmit={handleSubmit(triggerRequest)}>
      <Flex align="flex-start" gap="small" vertical>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <div className="input">
              <Input
                {...field}
                status={errors?.email ? "error" : ""}
                placeholder="Enter your email"
              />
              <div className="inputError">
                <span hidden={!errors?.email}>{errors?.email?.message}</span>
              </div>
            </div>
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[',"+\-_])/,
              message: "Invalid password",
            },
          }}
          render={({ field }) => (
            <div className="input">
              <Input.Password
                {...field}
                status={errors?.password ? "error" : ""}
                placeholder="Enter your password"
              />
              <div className="inputError">
                <span hidden={!errors?.password}>
                  {errors?.password?.message}
                </span>
              </div>
            </div>
          )}
        />
        <SubmitButton isLoading={loading} />
      </Flex>
    </form>
  );
};

export default Form;
