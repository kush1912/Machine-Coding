#include<bits/stdc++.h>
using namespace std;

// Submitted By: Ajay Kumar Kushwaha
//Contact: ajaykushwaha242@gmail.com / 8349649515
//Intructions:just run the file


class User{
private:
    string userId;
    string name;
    int age;
    string gender;
    string state;
    int counter=1;
    bool bstatus;
public:
    User(string userId,string name,int age,string gender, string state){
        if(age<18){
            cout<<"User should be 18+! Registration Failed!"<<endl<<endl;
        }
        else if(!checkValid(userId)){
            cout<<"User has been already present!"<<endl<<endl;
        }
        else{
            this->userId= userId;
            this->name=name;
            this->gender=gender;
            this->state = state;
            this->age = age;
            this->bstatus=false;
            cout<<"User registered Successfully with User ID: "<<this->userId<<endl<<endl;
        }
    }
    bool checkValid(string userId);
    string getUserId(){return this->userId;}
    string getName(){return this->name;}
    int getAge(){ return this->age;}
    void bconfirmed(int day){
        this->bstatus = true;
        cout<<"Your Booking has been confirmed on day:"<<day<<endl;
    }
    void bcancelled(){
        this->bstatus = false;
        cout<<"Your Booking has been cancelled!"<<endl<<endl;
    }
};
vector<User *>userList;



class Capacity{
    int day;
    int cap;
public:
    Capacity(int day,int cap){
        this->day=day;
        this->cap = cap;
        cout<<"Capacity Added to: ";
    }
};

class Vcentre{
private:
    string sname;
    string dname;
    string vcid;
    int Vcounter=1;
public:
    map<int,int>days;
    vector<Capacity *>capList;
    Vcentre(string vcid, string sname,string dname){
        this->vcid=vcid;
        this->sname = sname;
        this->dname= dname;
        cout<<"VCentre created with VCID: "<<this->vcid<<endl<<endl;
    }
    string getVCId(){return this->vcid;}
    string getstate(){return this->sname;}
    string getdname(){return this->dname;}
    void addCapacity(int day, int cap);
   // void ListCentres(string sname);
};
vector<Vcentre *>vcList;

void ListCentres(string sname){
  //  cout<<vcList.size()<<endl;
//    cout<<sname<<endl;

    if(vcList.size()!=0){
        cout<<"Booking Centres: "<<endl;
            for(auto v:vcList){
            if(v->getdname()==sname){
                cout<<v->getVCId()<<" "<<v->getdname()<<endl;
                }
            }
        cout<<endl;
    }
    else
        cout<<"No centres Present in your State!"<<endl;

}

void Vcentre::addCapacity(int day, int cap){

    days.insert({day,cap});
    Capacity c(day,cap);
    capList.push_back(&c);
    cout<<this->getVCId()<<endl<<endl;
}

User findUser(string uid){
        for(auto u:userList){
            if(u->getUserId()==uid){
                //cout<<u->getUserId()<<"found";
                return *u;
            }
        }
}

Vcentre findCentrer(string vid){
        for(auto v:vcList){
            if(v->getVCId()==vid){
               // cout<<u->getVCId()<<"found";
                return *v;
            }
        }
}

map<int, pair<User,Vcentre> >BookList;

class Booking{
private:
    string bid;
    string cid;
    string uid;
    int day;
public:
    //map<int, pair<User,Vcentre> >BookList;
    Booking(string bid, string uid, string vcid, int day){
        auto u = findUser(uid);
        auto v = findCentrer(vcid);
        BookList.insert({day,{u,v}});
        u.bconfirmed(day);
        this->bid= bid;
        cout<<"Booking Made Succesfully with Booking Id: "<<this->bid<<endl<<endl;
    }
};

void ListBooking(string cid, int day){
    cout<<"Bookings are as follows: "<<endl;
    for(auto b:BookList){
        if(b.first==day){
            auto v = b.second.second;
            auto u = b.second.first;
            if(v.getVCId()==cid){
                cout<<u.getName()<<" "<<v.getVCId()<<endl;
            }
        }
    }
    cout<<endl;
}

bool User::checkValid(string uid){
    for(auto u:userList){
        if(u->getUserId()==uid)
            return false;
            cout<<"User present!";
    }

    return true;
}

//void CancelBooking(string vcid, string bid, string uid, int day){
//    for(auto b:BookList){
//        auto u=b.second.first;
//        auto v=b.second.second;
//        if(v.getVCId==vcid && u.getUserId==uid){
//                bookList.erase(day);
//                cout<<"Booking cancelled"<<endl;
//        }
//
//    }
//}


int main(){
    User *u0= new User("U1","Alex",12,"M","Delhi");
 //   User *u1= new User("U1","Alex",20,"M","Delhi");

    User u1("U1","Alex",20,"M","Delhi");
    userList.push_back(&u1);


    User u2("U1","Bob",25,"M","Rewa");
    userList.push_back(&u2);

    Vcentre vc1("VC1", "Delhi", "CP");
    vcList.push_back(&vc1);
    Vcentre vc2("VC2", "MP", "Rewa");
    vcList.push_back(&vc2);
    Vcentre vc3("VC3", "MP", "Gwalior");
    vcList.push_back(&vc3);
    Vcentre vc4("VC4", "MP", "Jabalpur");
    vcList.push_back(&vc4);
    Vcentre vc5("VC5", "MP", "Gwalior");
    vcList.push_back(&vc5);


    vc1.addCapacity(5,10);

    ListCentres("Gwalior");

    Booking b1("B1","U1","VC2",5);

    Booking b2("B2","U1","VC3",5);

    ListBooking("VC2",5);

    //CancelBooking("VC2","B1","U1",5)
    //cout<<"Hello World!";
    return 0;
}
