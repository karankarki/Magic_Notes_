show();
function Add_note(){

    if(localStorage.getItem('notes')){
        console.log(localStorage.getItem('notes'));
        var  notesL = JSON.parse(localStorage.getItem('notes'));
        var headL = JSON.parse(localStorage.getItem('head'));
      
    }

    else{
        var notesL = []
        var headL = []
    }

    let ele1 = document.getElementById("inhead");
    let ele2 = document.getElementById("wnote");
    headL.push(ele1.value);
    notesL.push(ele2.value);
    ele1.value ="";
    ele2.value ="";

    localStorage.setItem("notes",JSON.stringify(notesL));
    localStorage.setItem("head",JSON.stringify(headL));


show();

}

function show(){

    let notelist = JSON.parse(localStorage.getItem("notes"));
    let headlist = JSON.parse(localStorage.getItem("head"));

    let main = document.getElementById("main");

    main.innerHTML = "";
    if(localStorage.getItem('notes')){
       
        for(let i = 0; i < notelist.length; i++){
            let new_ele = document.createElement("div");
            new_ele.className = "note";
            new_ele.id = `ne${i}`;
            new_ele.innerHTML = ` <h2>${headlist[i]}</h2>
        
            <div  class="n">
                <p>${notelist[i]}</p>
            </div>
            <button id = "${i}" onClick = "Del(this.id)" >Delete</button>
            `
            main.appendChild(new_ele);
    
        
        }
    }

}

function Del(id){
    notesL = JSON.parse(localStorage.getItem('notes'));
    headL = JSON.parse(localStorage.getItem('head'));

    notesL.splice(id,1);
    headL.splice(id,1);
    localStorage.setItem('notes',JSON.stringify(notesL));
    localStorage.setItem('head',JSON.stringify( headL));
    show();

}

let sh = document.getElementById("searchbox");

sh.addEventListener("input", function(){

    let con2 = document.getElementById("cn2");
    if(sh.value ==""){

        con2.style.display = "block";
    }

    else{
        con2.style.display = "none";
    }
    

    headL = JSON.parse(localStorage.getItem('head'));
    let shvalue = sh.value;
    for(let i=0;i<headL.length;i++){
        let ele_ = document.getElementById(`ne${i}`);
        if(headL[i].includes(shvalue)){

            
            ele_.style.display = "block";

        }

        

        else{
            ele_.style.display = "none";
        }
    }
})

