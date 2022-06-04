//Check whether triangle is acute or obtuse

const Triangle_Check = (A,B,C) => {
    if(A<90 && B<90 && C<90){
      return 'acute';
    }
    else if(B>90 && (A+B+C)==180){
      return 'obtuse';
    }
    else if(C>90 && (A+B+C)==180){
      return 'obtuse';
    }
    else if(A>90 && (A+B+C)==180){
      return 'obtuse';
    }
  };