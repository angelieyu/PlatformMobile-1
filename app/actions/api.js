const url = 'http://10.1.51.48:9000/api';
// const url = 'http://192.168.1.5:8080/cert.json';
// const tempOrgUrl = 'http://192.168.1.5:8080/org.json'
//const url = 'http://localhost:8082/certs.json';

let api = {
    getCertList(page, perPage){
        let listURL = url + '/certificates?page='+page+(perPage!==0?'&perPage='+perPage:'');
        // let listURL = url;
        return fetch(listURL).then((res) => res.json());
    },

    getCertImageUrl(certId){
      // http://10.1.100.234:8080/api/certificates/891/images
      let listURL = url + '/certificates/' + certId + '/images';
      return listURL;
      //return fetch(listURL).then((res) => res.json());
    },

    readableTimeStamp(){
      var a = new Date();
      var year = a.getFullYear();
      var month = a.getMonth();
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = year +'_'+ month+1 +'_'+ date+'_'+ hour + min + sec;
      return time;
    },

    postCertImage(file, orgId, callback){
      let body = new FormData();
      body.append('file', {uri: file.uri, name: 'image'+this.readableTimeStamp(),fileName: 'image'+this.readableTimeStamp()+'.jpeg',type: 'image/jpeg'});
          body.append('Content-Type', 'image/jpeg');
          body.append('organizationId', orgId);

      fetch(url+'/certificates',{
        method: 'POST',
        headers:{
           "Content-Type": "multipart/form-data"
           } ,
           body :body
         })
        // .then((res) => checkStatus(res))
        .then((res) => res.json())
        .then((res) => { console.log("response" +JSON.stringify(res)); })
        .catch((e) => console.log(e))
        .done();

        //////////

      //
      // let formData = new FormData();
      // let todayDate = new Date();
      // formData.append('organizationId', orgId);
      // formData.append('fileName', 'image'+this.readableTimeStamp());
      // formData.append('file', file);
      // formData.append('type', 'image/jpeg');
      // fetch(url+'/certificates', {
      //   method: 'POST',
      //   body:formData,
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      //   timeout:10000
      // })
      //   .then((res)=>{
      //     console.log("image upload")
      //     if (callback){
      //       callback();
      //     }
      //     return res;
      //   })
      //   .catch((error)=>{
      //     console.log(error);
      //   });

    },

    getOrgList(){
      let listURL = url + '/configuration/organizations';
      // let orgURL = tempOrgUrl;
      return fetch(listURL)
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
