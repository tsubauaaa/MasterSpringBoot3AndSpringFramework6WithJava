import axios from 'axios'

export const apiClient = axios.create(
    {
        // baseURL: 'http://localhost:5000' //#CHANGE
        baseURL: 'http://03-rest-api-full-stack-h2-env.eba-cynp2ksa.ap-northeast-1.elasticbeanstalk.com/'
    }
);

/* For Best Practices https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables*/
