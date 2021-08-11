 type="text/javascript">
    //writing to elements
    function showDate(){
    //DOM
    //innerHTML:write content
    document.getElementById('date').innerHTML=Date();
    //document.write("Hello from document.write");
    //styling
    document.getElementById('date').style.color="red";
    document.getElementById('date').style.fontSize="25px";
    //body styling
    document.body.style.background="yellow";
}
    //outerHTML to create elements
    function createE(){
    document.getElementById('date').outerHTML="<a href='https://google.com'>Google</a>";
    //changing value of an attribute
    document.getElementById('myimage').src="../images/image2.jpg";
    var x =document.querySelectaAll("p.para");
    document.getElementById('demo').innerHTML="The first paragraph with the class para is" + x[1].innerHTML;
}
