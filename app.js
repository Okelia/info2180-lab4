document.addEventListener("DOMContentLoaded", ()=>{
    /*var btn = document.getElementById("hero")[0].onclick=function (e){*/
    var btn = document.getElementsByClassName("btn")[0].onclick = function (e){
        e.preventDefault();
        var url = "http://localhost/info2180-lab4/superheroes.php";
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = heroList;
        httpRequest.open("GET", url);
        httpRequest.send();
        


        function heroList(){
            if(httpRequest.readyState === XMLHttpRequest.DONE){
                if (httpRequest.status === 200){
                    var resopnse = httpRequest.responseText;
                    alert (resopnse);
                } else{
                    alert("Erro, problem with request");
                }
            }
        }
    }
})