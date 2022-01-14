#include<bits/stdc++.h>
using namespace std;

// Inheritence
// Difference between two ways of creating classes
// friend function


class Library{
private:
    int racks;
public:
    Library(int racks){
        this->racks=racks;
        cout<<"Library created with "<<racks<<" Racks!"<<endl<<endl;
    }
    int getRacks(){return racks;}
    //void getRackInfo();
    //void addBook(string id, string title, string author, string copyId, int copies);
};

class Rack:public Library{
private:
    int rackId;
    int limit=5;
    int c=0;
    int counter=1;
public:
    Rack(int r):Library(r){
        this->rackId=this->counter++;
        this->limit=5;
        this->c=0;
        cout<<"Rack Created with Rack Id: "<<this->rackId<<endl<<endl;
    }
    int getCount(){return this->c;}
    //int getRackId(){return this->rackId;}
    int getLimit(){return this->limit;}
    void setRackLimit(int l){ this->limit=l;}
    void setRackValue(){this->c++;}
    //bool checkAvailable(Book &b);
    //void addToRack(Book b);
};


class Book:public{
private:
    string id;
    string title;
    string author;
    int copies;
    string copyId;
public:
    Book(string id, string title, string author, string copyId,int copies=1){
        this->id= id;
        this->title= title;
        this->author=author;
        this->copies=copies;
        this->copyId=copyId;
        cout<<"Book Created Successfully!"<<endl<<endl;
    }
    string getCopyId(){return copyId;}

};


int main(){
    //Library l(3);
    //l.getRackInfo()
    //l.addBook("B1","Alphabet","Mukherjee","c1",1);
//    Library l(3);
//    Rack r= new Rack(3);
    Library L(3);
    return 0;
}
