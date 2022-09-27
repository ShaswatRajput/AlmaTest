catAndMouse(5,7,9);
function catAndMouse(x, y, z) 

{
    let d1=0;
    let d2=0;
   
            if(x>z)
                {
                   d1=x-z;
                }
            else
                {
                    d1=z-x;
                }
            if(y>z)
                {
                   d2=y-z;
                }
            else
                {
                    d2=z-y;
                }
            if(d1>d2)
                {
                    console.log("Cat B");
                }
            else if(d2>d1)
                {
                     console.log("Cat A");
                }
            else
                {
                     console.log("Mouse C");
                }
}
