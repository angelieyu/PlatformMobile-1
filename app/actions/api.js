// const url = 'http://10.1.100.145:8080/api'
const url = 'http://192.168.1.10:8080/cert.json';
const tempOrgUrl = 'http://192.168.1.10:8080/org.json'
//const url = 'http://localhost:8082/certs.json';

let api = {
    getCertList(page, perPage){
        // let listURL = url + '/certificates?page='+page+'&perPage='perPage!==0?perPage:'';
        let listURL = url;
        return fetch(listURL).then((res) => res.json());
    },

    getCertImageUrl(certId){
      //http://10.1.100.234:8080/api/certificates/891/images
      let listURL = url + '/certificates/' + certId + '/images';
      return listURL;
      //return fetch(listURL).then((res) => res.json());
    },

    postCertImage(file, orgId, callback){
      let formData = new FormData();
      formData.append('organizationId', orgId);
      formData.append('file', file);
      fetch(url+'/certificates', {
        method: 'POST',
        body:JSON.stringify(formData),
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout:10000
      })
        .then((res)=>{
          console.log("image upload")
          if (callback){
            callback();
          }
          return res;
        })
        .catch((error)=>{
          console.log(error);
        });

    },

    getOrgList(){
      // let listURL = url + '/configuration/organizations';
      let orgURL = tempOrgUrl;
      return fetch(orgURL)
          .then((res) => res.json())
          .then((responseJson)=>{
            return responseJson;
          })
          .catch((error)=>{
            console.error(error);
          })
    }
};

export default api;
