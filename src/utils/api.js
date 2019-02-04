import wsmsAxios from './axios'

// import {screenToResourceMapper, dropDownToScreenMapper, AUTH_URL, USER_PERM_URL} from './config'
// import {notifySuccess, notifyError, notifyWarning} from '../utils/notifications'


// const BASE_URL = "http://10.0.8.122:8010"
const BASE_URL = "http://127.0.0.1:8000/"
// const BASE_URL = "http://api.governmentjobstore.in/"
// const BASE_URL = "http://10.0.3.6:8000"
//const BASE_URL = "http://10.0.3.6:8000"
//const BASE_URL = "http://10.0.3.147:3000"
//const BASE_URL = "http://10.0.3.147:3000"
//const BASE_URL = process.env.BASE_URL
const TOKEN_URL = "/rest-auth/login/"

export const makeAuth = ({ username, password }) => {

    return wsmsAxios.post(TOKEN_URL, { username, password })
        .then((token) => {
            //Setting the Auth token for subsequent api calls.
            Object.assign(wsmsAxios.defaults, { headers: { authorization: `Bearer ${token.data.token}` } });

            return{
                user: username, token: token.data.token
            }
            //Lets make another call for permissions
            // return wsmsAxios.get(`${USER_PERM_URL}?username=${username}`).then((permissions) => {
            //     if (permissions.data.results) {
            //         return { user: username, permissions: permissions.data.results[0], token: token.data.token }
            //     }

            // })

        })
        .catch((err) => {
            console.error("Err makeAuth ", err);
            throw Error("Something wrong with makeAuth" + err)
        })
}



export const readRecords = ({screen = "latest-job", query, limit}) => {
    //here we need to set offset and limit to the url
     
   
    let params = `?post_title=${query}`;
    
    const resource = `/web/PostApi/${params}`;
    // console.log("param",params,query,resource);
    // console.log("this is the get-call-uri", resource)
    return wsmsAxios.get(resource)
        .then((result) => {
// console.log('return',result);
            return result.data
        })
        .catch((err) => {
            console.error(
                `Error ${resource} ${err}`
            );
            throw Error(
                `Read for ${screen} with ${resource} err`
            )
        })
}

export const admitreadRecords = ({screen = "admit-cards", query, limit}) => {
    //here we need to set offset and limit to the url
   

    
    let params = `?post_title=${query}`;
    const resource = `/web/AdmitCardsApi/${params}`;
    // console.log("this is the get-call-uri", resource)
    return wsmsAxios.get(resource)
        .then((result) => {
// console.log('return',result);
            return result.data
        })
        .catch((err) => {
            console.error(
                `Error ${resource} ${err}`
            );
            throw Error(
                `Read for ${screen} with ${resource} err`
            )
        })
}

export const resultreadRecords = ({screen = "results", query, limit}) => {
    //here we need to set offset and limit to the url

    let params = `?post_title=${query}`;
    const resource = `/web/ResultApi/${params}`;
    // console.log("this is the get-call-uri", resource)
    return wsmsAxios.get(resource)
        .then((result) => {
// console.log('return',result);
            return result.data
        })
        .catch((err) => {
            console.error(
                `Error ${resource} ${err}`
            );
            throw Error(
                `Read for ${screen} with ${resource} err`
            )
        })
}


export const singlereadRecords =  ({screen= 'single-job', val}) => {
    //here we need to set offset and limit to the url
    console.log("ssqqww11",val);
    //Make match on screen and resource and use the resource
    const resource =   `/web/PostApi/${val}`
    console.log("this is the get-call-uri", resource)
    return wsmsAxios.get(resource)
        .then((result) => {
console.log('return',result.data);
            return result.data
        })
        .catch((err) => {
            console.error(
                `Error ${resource} ${err}`
            );
            throw Error(
                `Read for ${screen} with ${resource} err`
            )
        })
}



export const searchRecords = ({screen = "latest-job", query}) => {
    //here we need to set offset and limit to the url
    var param;
    var obj = `${query}`;
    var diffstate= ['Andhra-Pradesh','Arunachal-Pradesh','Assam','A-N-Islands','Bihar','Chhattisgarh','Chandigarh','Delhi','D-N-Haveli','Daman-Diu','Goa','Gujarat','Lakshadweep','Haryana','Himachal-Pradesh','Jammu-Kashmir','Jharkhand','Karnataka','Kerala','Madhya-Pradesh','Maharashtra','Manipur','Meghalaya','Nagaland','Orissa','Punjab','Puducherry','Rajasthan','Tamil-Nadu','Telangana','Tripura','Uttar-Pradesh','Uttarakhand','West-Bengal','All-india'];
    var diffcat = ['Accounts-Finance-Jobs','Agriculture-Jobs','Bank-Jobs','Clerk-Steno-Jobs','Defense-Jobs','Police-Jobs','Engineering-Jobs','Faculty-Teaching-Jobs','IT-Computer-Jobs','Indian-Postal-Jobs','Law-Judiciary-Jobs','Management-Jobs','Medical-Pharma-Jobs','Oil-Gas-Jobs','Power-Energy-Jobs','Railway-Jobs','Scientist-Research-Jobs','UPSC-Jobs','PSC-Jobs','SSC-Jobs','Other'];
    var diffqual =['10th','12th','8th','Bachelor','BA','B-Com','B-Ed','B-Pharma','B-Sc','BBA','BCA','BDS','B-Tech','CA-ICWA','CS-ICSA','Diploma','Graduate','ITI','LLB','LLM','Masters','MA','M-Com','M-Phil','M-Sc','MBA-PGDBM','MBBS','MCA','M-Tech','MSW','PhD','Other'];
           
    console.log("qwerasdfzsdsdfs",obj,diffstate);
     if (diffstate.indexOf(obj) > -1) {
        var param = `?post_title=&state=${query}&qualification=&category=`
    } else if (diffcat.indexOf(obj) > -1){
        var param = `?post_title=&state=&qualification=&category=${query}`
        
    }else if (diffqual.indexOf(obj) > -1){
        var param = `?post_title=&state=&qualification=${query}&category=`
    }
    //Make match on screen and resource and use the resource
    const resource = `/web/PostApi/${param}`
    console.log("this is the get-call-uri", resource)
    return wsmsAxios.get(resource)
        .then((result) => {
console.log('return',result);
            return result.data
        })
        .catch((err) => {
            console.error(
                `Error ${resource} ${err}`
            );
            throw Error(
                `Read for ${screen} with ${resource} err`
            )
        })
}


export const blogreadRecords =({screen = "blogs", query, limit}) => {
    //here we need to set offset and limit to the url

    let params = `?blog_title=${query}`;
    const resource = `/web/BlogsApi/${params}`;
    // console.log("this is the get-call-uri", resource)
    return wsmsAxios.get(resource)
        .then((blogs) => {
            console.log("hurry",blogs);
            
// console.log('return',blogs);
            return blogs.data
        })
        .catch((err) => {
            console.error(
                `Error ${resource} ${err}`
            );
            throw Error(
                `Read for ${screen} with ${resource} err`
            )
        })
}
