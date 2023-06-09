function cal(){
    const pi = 3.141;
    let r = parseFloat(document.getElementById("radius").value);
    document.getElementById("perimeter").value=2*pi*r;
    document.getElementById("area").value=pi*r*r;
}