document.addEventListener("DOMContentLoaded", ()=> {
    var btn = document.getElementsByClassName("btn")[0].onclick= async function(e){
        e.preventDefault();
        //var url = "http://localhost/info2180-lab4/superheroes.php";
        var heroInput = document.getElementById("hero").value;
        var heroname = document.getElementsByClassName("realname")[0];
        var alias = document.getElementsByClassName("alias")[0];
        var biography = document.getElementsByClassName("bio")[0];
        
       
        if (heroInput === ''){
            fetch ("superheroes.php")
            .then(response => {
                if(response.status === 200){
                     return response.text()
                } else {
                    return Promise.reject("Error, problem with request")
                }  
            })
            .then(displayhero =>{
                heroname.innerHTML=displayhero;
            })
        }else{
            fetch("superheroes.php", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(heroInput)
            })
            .then(resopnse => {
                if (resopnse.status === 200){
                    return resopnse.text()
                }else{
                    return Promise.reject("Error, problem with request")
                }
            })
            .then (displayhero => {
                var superh = JSON.parse(displayhero);
                var supername= superh["name"];
                //supername= supername + "<h4>{$superhero['name']}</h4>";
                var superalias = "A.K.A          " + superh["alias"];
                var superbio = superh ["biography"];
                

                console.log(supername);
                heroname.innerHTML=supername;
                alias.innerHTML = superalias;
                biography.innerHTML = superbio;
            })
        }
    }
});