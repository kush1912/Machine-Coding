#include<bits/stdc++.h>
using namespace std;

// Inheritence
// Difference between two ways of creating classes
// friend function

class Book{
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
        cout<<"Book Created Successfully with Book Id: "<<this->id<<endl<<endl;
    }
    string getCopyId(){return copyId;}
    string getTitle(){return this->title;}
    string getId(){return this->id;}
};

class Rack{
private:
    int rackId;
    int limit=5;
    int c=0;
public:
    vector<Book *> bookList;
    Rack(int n){
        this->rackId=n;
        this->limit=5;
        this->c=0;
        cout<<"Rack Created with Rack Id: "<<this->rackId<<endl<<endl;
    }
    int getCount(){return this->c;}
    int getRackId(){return this->rackId;}
    int getLimit(){return this->limit;}
    void setRackLimit(int l){ this->limit=l;}
    void setRackValue(){this->c++;}
    bool checkAvailable(Book &b);
    void addToRack(Book &b);
};

class Library{
private:
    int racks;
public:
    vector<Rack *>rackList;
    Library(int racks){
        this->racks=racks;
        for (int i=1;i<=racks;i++) {
                Rack *r=new Rack(i);  // empty constructors cannot be called without parameter, the object can't differentiate
                this->rackList.push_back(r);
            }
        cout<<"Library created with "<<racks<<" Racks!"<<endl<<endl;
    }
    int getRacks(){return racks;}
    void getRackInfo();
    void addBook(string id, string title, string author, string copyId, int copies);
    void deleteBook(string bookId);
};

class User{
private:
    string id, name;
    int borrowed;
public:
    User(string id, string name){
    this->id=id;
    this->name= name;
    this->borrowed=0;
    }
    string getId(){return id;}
    string getName(){return name;}
    int getBorrowedBooks(){return this->borrowed;}

    void borrowBook(){this->borrowed++;}

};

bool Rack::checkAvailable(Book &b){
    //<<"Enter";
    //cout<<this->getLimit()<<" "<<this->getCount()<<endl<<endl;
    if(getLimit()==getCount()){
        cout<<"Rack not Available!"<<endl<<endl;
        return false;
    }

    for(int i=0;i<this->bookList.size();i++){
        auto b = this->bookList[i];
        if(b->getCopyId()==b->getCopyId()){
            return false;
        }
     }
    return true;
}

void Rack::addToRack(Book &b){
    this->bookList.push_back(&b);
    cout<<"Book Added to Rack with RackID: "<<this->getRackId()<<endl<<endl;
}

void Library::getRackInfo(){
    //int rackNo=1;
    //cout<<this->rackList.size()<<endl;
    for(int i=1;i<=this->rackList.size();i++){
        auto r = this->rackList[i];
        cout<<"Rack with ID: "<<r->getRackId()<<endl;
        if(!r->bookList.empty()){
            cout<<"Books in Rack "<<i<<endl;
            for(int j=0;j<r->bookList.size();j++){
                auto b=r->bookList[j];
                cout<<"Book Details: "<<b->getTitle()<<endl;
            }
        }
        cout<<endl;
    }
}

void Library::addBook(string id, string title, string author, string copyId, int copies){
    Book *b = new Book(id,title,author,copyId,copies);
    //getRackInfo();
    int no = getRacks();
    for(int i=0;i<this->rackList.size();i++){
            auto r = this->rackList[i];
        if(r->checkAvailable(*b)){
                r->addToRack(*b);
                cout<<"Book Added Successfully!"<<endl<<endl;
                break;
        }
    }
}

void Library::deleteBook(string id){
    for(int i=0;i<this->rackList.size();i++){
        auto r = this->rackList[i];
//        auto b = r->bookList;
        for(auto b:r->bookList){
            if(b->getId()==id)
                r->bookList.erase(*b);
                cout<<"Book Removed Successfully!"<<endl<<endl;
                return;
        }
    }
}

int main(){
    Library l(3);
    //l.getRackInfo();
    l.addBook("B1","Alphabet","Mukherjee","c1",1);
    l.getRackInfo();
    l.deleteBook("B1");
    l.getRackInfo();

    return 0;
}
