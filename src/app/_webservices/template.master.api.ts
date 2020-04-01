import api from './api'

function callLoginUser(payload : any) {
    console.log('payload', payload);
    return api.post( `/account/V1/Login`, payload);
}


export default  {callLoginUser};
