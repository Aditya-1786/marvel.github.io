const form  = document.querySelector('form');
const body = document.querySelector('body');
form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    console.log(Date.now());
    const input = document.querySelector('select');
    const stt = `v1/public/${input.value}`;
    const st = Date.now()+"d7367a30a077ff8ba3d4798bb53b798e2d8f7b07b048af599ea129e66736c87920e1ef94";
    const param = {params:{apikey:'b048af599ea129e66736c87920e1ef94',ts:`${Date.now()}`,hash:`${md5(st)}`}};
    const api = await axios.get(`https://gateway.marvel.com/${stt}`,param);
    const list = api.data.data.results;
    console.log(list);
    for(let index of list){
        if(index.images.length!=0){
            const path = index.images[0].path;
            const img = document.createElement('img');
            img.src = `${path}.jpg`;
            body.append(img);
        }
        
    }
    
})