function pH() 
{ 
    
    var C0 = document.getElementById('a').value;
        C0 = parseFloat(C0);    
    var V1 = document.getElementById('b').value;
        V1 = parseFloat(V1);    
    var V2 = document.getElementById('c').value;
        V2 = parseFloat(V2);    
    var C1 = document.getElementById('d').value;
        C1 = parseFloat(C1);    
    var V3 = document.getElementById('e').value;
        V3 = parseFloat(V3);    
    var V4 = document.getElementById('f').value;
        V4 = parseFloat(V4);    
    var C2 = document.getElementById('g').value;
        C2 = parseFloat(C2);
       
   var mass = document.getElementsByName('Group');
    var K0;
        if(mass[0].checked)
        {
            K0 = 0.00001754;  
        }
        else if(mass[1].checked)
        {
            K0 = 0.000177;
        }
        else if(mass[2].checked)
        {
            K0 = 0.000148;
        }
        else if(mass[3].checked)
        {
            K0 = 0.0332;
        }
        else if(mass[4].checked)
        {
            K0 = 0.0000151;
        }
        else if(mass[5].checked)
        {
            K0 = 0.000137;
        }        
        else if(mass[6].checked)
        {
            K0 = 0.20;
        }
        else if(mass[7].checked)
        {
            K0 = 0.00136;
        }
 
var x1 = -1 * (K0/2) + Math.sqrt(Math.pow(K0/2,2,2) + K0 * C0); 
var pH1 = -1 * Math.log10(x1);

var y = V1 + V2;
var z = (C0 * V1) / y;
var m = (C1 * V2) / y;
var x2 = K0 * z / m;    
var pH2 = -1 * Math.log10(x2 + m);

var n1 = V1 + V2;
var n2 = (V3*C0 - V4*C2) / n1;
var n3 = (V4*C2) / n1;
var x3 = -1 * (K0 + n3/2)+Math.sqrt(Math.pow(K0 + n3/2,2) + K0*n2);
var pH3 = -1 * Math.log10(x3); 
    
document.getElementById('element').innerHTML = 'При измерении на pH-метре получены следующие величины pH приготовленых растворов:';
document.getElementById('out1').innerHTML = 'Исходный раствор кислоты, pH = ' +pH1.toFixed(3);
document.getElementById('out2').innerHTML = 'Раствор кислоты + HCl, pH = ' + pH2.toFixed(3);
document.getElementById('out3').innerHTML = 'Раствор кислоты + NaOH, pH = ' + pH3.toFixed(3);
    
}
function SD()
{

    var C0 = document.getElementById('a').value;
        C0 = parseFloat(C0);    
    var V1 = document.getElementById('b').value;
        V1 = parseFloat(V1);    
    var V2 = document.getElementById('c').value;
        V2 = parseFloat(V2);    
    var C1 = document.getElementById('d').value;
        C1 = parseFloat(C1);   
    var V3 = document.getElementById('e').value;
        V3 = parseFloat(V3);    
    var V4 = document.getElementById('f').value;
        V4 = parseFloat(V4);   
    var C2 = document.getElementById('g').value;
        C2 = parseFloat(C2);
    
    var mass = document.getElementsByName('Group');
    var K0;
        if(mass[0].checked)
        {
            K0 = 0.00001754;  
        }
        else if(mass[1].checked)
        {
            K0 = 0.000177;
        }
        else if(mass[2].checked)
        {
            K0 = 0.000148;
        }
        else if(mass[3].checked)
        {
            K0 = 0.0332;
        }
        else if(mass[4].checked)
        {
            K0 = 0.0000151;
        }
        else if(mass[5].checked)
        {
            K0 = 0.000137;
        }        
        else if(mass[6].checked)
        {
            K0 = 0.20;
        }
        else if(mass[7].checked)
        {
            K0 = 0.00136;
        }
       
var x1 =-1*(K0/2)+Math.sqrt(Math.pow((K0/2),2)+K0*C0); 
var D1 =x1/C0 * 100;

var y = V1+V2;
var z = (C0*V1) / y;
var m = (C1*V2) / y;
var x2 = -1*(K0+m/2)+Math.sqrt(Math.pow(K0+m/2,2)+K0*z);    
var D2 = x2/z*100;

var n1 = V1+V4;
var n2 = (V3*C0-V4*C2);
var n3 = (V4*C2);
var n4 = n2/n1;
var n5 = n3/n1;
var x3 = -1*(K0+n5/2)+Math.sqrt(Math.pow((K0+n5/2),2)+K0*n4);
var D3 = x3/n4*100;
    
document.getElementById('element').innerHTML = 'Степень диссоциации кислоты равна:';
document.getElementById('out1').innerHTML = 'Исходный раствор кислоты, ст. дисс. = ' + D1.toExponential(3);
document.getElementById('out2').innerHTML = 'Раствор кислоты + HCl, ст. дисс. = ' + D2.toExponential(3);
document.getElementById('out3').innerHTML = 'Раствор кислоты + NaOH, ст. дисс. = ' + D3.toExponential(3);  
}