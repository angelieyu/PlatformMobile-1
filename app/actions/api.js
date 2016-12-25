const url = 'http://10.1.100.145:8080/api'
//const url = 'http://localhost:8082/certs.json';

let api = {
    getCertList(){
        let listURL = url + '/certificates';
        //let listURL = url;
        return fetch(listURL).then((res) => res.json());
    },

    getCertImageUrl(certId){
      //http://10.1.100.234:8080/api/certificates/891/images
      let listURL = url + '/certificates/' + certId + '/images';
      return listURL;
      //return fetch(listURL).then((res) => res.json());
    }

};

export default api;
