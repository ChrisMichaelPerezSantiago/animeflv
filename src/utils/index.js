const imageToBase64 = require("image-to-base64")

const MergeRecursive = (obj1 , obj2) => {
  for(var p in obj2) {
    try{
      // Property in destination object set; update its value.
      if(obj2[p].constructor == Object){
        obj1[p] = MergeRecursive(obj1[p], obj2[p]);
      }else{
        obj1[p] = obj2[p];
      }
    }catch(e){
      // Property in destination object not set; create it and set its value.
      obj1[p] = obj2[p];
    }
  }
  return obj1;
}

const imgToBase64 = async(url) =>{
  const promises = [];
  await imageToBase64(url).then(res =>{
    promises.push(res)
  })
  return Promise.all(promises);
};

const urlify = async(text) =>{
  const urls = [];
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  text.replace(urlRegex , (url) =>{
    urls.push(url)
  });
  return Promise.all(urls);
};


module.exports = {
  MergeRecursive,
  imgToBase64,
  urlify
}