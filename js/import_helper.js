function ImportStyleSheet(path){
    if (typeof path === 'string') {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = path;
        document.getElementsByTagName('head')[0].appendChild(link);
    } else {
        throw new Error('path must be a string');
    }
}

function  ImportJS(path){
    if (typeof path === 'string') {
        var script = document.createElement('script');
        script.src = path;
        document.getElementsByTagName('head')[0].appendChild(script);
    } else {
        throw new Error('path must be a string');
    }
}

function ImportSuchComponent(ComponentName){
    ImportStyleSheet(`Base/${ComponentName}/${ComponentName}_style.css`)
    ImportJS(`Base/${ComponentName}/${ComponentName}_script.js`)
}

