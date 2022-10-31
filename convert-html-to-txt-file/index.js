const fs = require('fs');


async function getTemplate(){
    const inputDirectory = __dirname+'/files';
    const outputDirectory = __dirname+'/output/';
    let template = await fs.readFileSync(inputDirectory+'/index.html');

    if(template){
        // const text = template.toString().replace(/\s+/gm, '').replace(/="/g,'=/"').trim()
        const text = JSON.stringify(template.toString().replace(/\s+/gm, '').trim())

        const fileDate = new Date()

        if(!fs.existsSync(outputDirectory)){
            fs.mkdirSync(outputDirectory);
        }

        await fs.writeFileSync(outputDirectory+fileDate.getTime()+'.txt',text)
    }
}

getTemplate();