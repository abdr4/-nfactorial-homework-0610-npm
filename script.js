let clicked = false;
$("document").ready(function(){
    $('.mad-libs > button:nth-child(5)').on('click',function(e){
        clicked = true;
        let str1 = $("#name").val();
        let str2 = $("#name2").val();
        let verb = $("#verb").val();
        let adverb = $("#adverb").val();
        let ans = `<div id="ans">Lorem ipsum ${str1} dolor sit ${str2} amet consectetur ${verb} adipisicing elit. Eum, ${adverb} praesentium?</div>`;
        // $('body input').reset();
        // $("#name2").val('');
        // $("#verb").val('');
        // $("#adverb").val('');
        if (clicked) { 
            $("#ans").remove();
            $(".output").append(ans);
        } else {
            $(".output").append(ans);
        }
        
        // console.log("basyldy");
        // console.log(str1 + str2 + verb + adverb);
    });
});

function addCookie() {
    document.cookie = "user=Alibek; expires=Wed; 15 JUN 2022 00:00:00 GMT";
};

function setWhiteTheme() {
    localStorage.setItem("theme", "light");
    const root = document.getElementById("main");
    root.className = "light";
}
function setDarkTheme() {
    localStorage.setItem("theme", "dark");
    const root = document.getElementById("main");
    root.className = "dark";
}


function getValue() {
    const theme = localStorage.getItem("theme");   
    const root = document.getElementById("main");
    root.className = theme;
}
