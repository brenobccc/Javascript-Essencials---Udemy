/*function name(){
    var fullname ="Breno b";

    function concat(name)
    {
        return "Sr. " + name + " Stark.";
    }

    return concat(fullname);
}

*/

function name(fullname){
    return fullname.firstname+fullname.lastname;
}

console.log
(
    name({firstname:"Lawrence", lastname:"Turton"})
);

var obj = function(){};

console.log(
    name(function(){ return "embed"})
);