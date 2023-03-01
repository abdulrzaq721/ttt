let xreq = new XMLHttpRequest();
xreq.open('GET','/firstjson.json');
xreq.send();
xreq.onreadystatechange = function(){
  if(this.readyState===4 && this.status===200){
    let c = JSON.parse(xreq.responseText);
    for(let i=0;i<20;i++){
      document.write(`${i+1})`+c.countrys[0].questions[i].query);
    }
  }
}
