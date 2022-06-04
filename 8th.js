//Smallest integer: Given three distinct integers and asked to find the smallest of the three

const findSndSmallest = (x,y,z) => {
    if(x > y && x > z && y>z){
      return y;
    }
    else if(x > y && x > z && y<z){
      return C;
    }
    else if(y > x && y > z && x>z){
      return x;
    }
    else if(y > x && y > z && x<z){
     return C;
    }
    else if(z > x && z > y && x>y){
        return x;
    }
    else if(z > x && z > y && x<y){
       return y;
    }
};