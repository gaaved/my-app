import {useRequest} from "ahooks";

export const simulateRequest = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                email: 'test@gmail.com',
                password: '123Hi+',
                userName: 'test'
            });
        }, 5000);
    }).then((resolve) => {
        console.log(resolve)
        console.log(data)
        Validation(resolve, data)
    });
};

export const Validation = (resolve, data) => {
    if (resolve.email === data.email && resolve.password === data.password) {
        // Данные совпадают
        console.log('Data from request matches form data');
        localStorage.setItem('isAuth', true);

        console.log(localStorage);
        window.location.reload();

    } else {
        // Данные не совпадают
        console.log('Data from request does not match form data');
    }

};

export const useSimulatedRequest = () => {
    const { run, loading } = useRequest(simulateRequest, {
        manual: true,
    });

    const triggerRequest = (data) => {
        run(data);
    };

    return {
        loading,
        triggerRequest,
    };
};