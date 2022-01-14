#include<bits/stdc++.h>
using namespace std;
//OOPS

class Parent{
private:
    int x;
public:
    Parent(int x){
    this->x=x;
    cout<<"Parent Class Created! - "<<x<<endl;
    }
};

class Child:public Parent{
private:
    int y;
public:
    Child(int x,int y):Parent(x){
    this->y=y;
    cout<<"Child Class Created! - "<<y<<endl;
    }
};


int main(){
    //Library l(3);
    //l.getRackInfo()
    //l.addBook("B1","Alphabet","Mukherjee","c1",1);
//    Library l(3);
//    Rack r= new Rack(3);
    Child obj(3,4);
    return 0;
}
