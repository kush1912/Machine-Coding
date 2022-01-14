Covid-19 Vaccination Center Booking
Design a vaccination appointment booking system with below assumptions.

Assumptions:
Vaccination centers are scattered across multiple states and multiple districts and each district can have multiple vaccination centers, but each vaccination center should be uniquely identifiable.
Appointments will be booked for a Day (appointments are for 24 hours duration by default). Day can be taken in integer format eg. Book for day 3 or Book for day 5
Appointment can be booked, given unless the capacity of the day is consumed.
E.g: Day 2 had 5 as the capacity of appointments. So it can be booked until 5 bookings for the day 2 are done for a particular vaccination center.
1 citizen can book his/her appointment only once per vaccination dose based on a unique citizen identification number. (Assume there is only one dose) Only if a person cancels the reservation, he/she will be able to book an appointment again
Cancelation is allowed for an appointment.
The user below 18 is not eligible for vaccination or uses this system.

Features:
Users should be able to register themselves with a unique identification number.
Onboard a vaccination center along with mentioned attributes
Add capacity to a vaccination center per day.
List All Vaccination Centers with day and capacity details for a given district
Users should be able to book a center in their district by a day if capacity is available for that day.
List down all the bookings made for a particular vaccination center.
Users should be able to cancel the existing booking and vaccination centers should be free to be booked again for that appointment.
The user should be able to search all the vaccination centers available in the district where the user is currently located. Eg: A user, currently in Karnal, should be able to list down all vaccination centers in Karnal.

Note* All the input params given below are for demonstration purposes only, user can create his/her own  vaccination center name.

Commands:
ADD_USER <unique_identification> <name> <gender> <age> <current_state> <current_district>
Eg: ADD_USER U123 Harry Male 35 Karnataka Bangalore
ADD_VACCINATION_CENTER <state_name> <district_name> <center_id>
Eg: ADD_VACCINATION_CENTER Karnataka Bangalore VC123
ADD_CAPACITY <center_id> <day> <capacity>
Eg :  ADD_CAPACITY VC123 5 10
LIST_VACCINATION_CENTERS <district_name>
Eg: LIST_VACCINATION_CENTERS Bangalore
BOOK_VACCINATION <center_id> <day> <user_id>
Eg: BOOK_VACCINATION VC123 5  Harry
LIST_ALL_BOOKINGS <center_id> <day>
Should list down all the bookings for a particular center for a given day
Output format for each booking:  <booking_id> <user_name> <center_id> <district>
E.g : BK123 Harry VC123 Bangalore
CANCEL_BOOKING  <center_id> <booking_id> <user_id>
Eg: CANCEL KABU12334  <booking_Id> pava.k
Cancels the appointment booked for the particular center for a given day


Bonus Point:


SEARCH_VACCINATION_CENTER <day> <district_name>
Search should return possible available vaccination centers for given parameters.
SEARCH_VACCINATION_CENTER 6 Bangalore -> Search vaccination center available on 6th day, in Bangalore Urban
Output : Output : VC12334, VC12335, VC12336
If no vaccination center is available for booking for a given day, the search will return the list of available vaccination centers for upcoming 3 days in the district.



Expectation
Code should be Demo able and functionally complete.
Code should fail gracefully with a proper error message for corner/invalid cases.
Code should be modular, try thinking in terms of Object-Oriented Design.
Input can be taken from the command line or in the main function.
Do not use any database or NoSQL store, use in-memory data structure.
Do not create any UI for the application.
Write a driver class for demo purposes. Which will execute all the commands in one place.
Please prioritize code compilation, execution, and completion.
Work on the expected output first and then only work on bonus features.


Example :

ADD_USER U1 Harry Male 35 Karnataka Bangalore
ADD_USER U2 Ron Male 30 Karnataka Bangalore
ADD_USER U3 Albus Male 30 Karnataka Bangalore
ADD_USER U4 Draco Male 15 Karnataka Bangalore
ADD_USER U5 Dobby Male 30 Gujarat Surat
ADD_VACCINATION_CENTER Karnataka Bangalore VC1
ADD_VACCINATION_CENTER Karnataka Bangalore VC2
ADD_VACCINATION_CENTER Karnataka Mysore VC3
ADD_CAPACITY VC1 1 1
ADD_CAPACITY VC2 1 3
ADD_CAPACITY VC1 5 10
ADD_CAPACITY VC3 3 4
LIST_VACCINATION_CENTERS Bangalore
VC1 1 1
VC1 5 10
VC2 1 3
BOOK_VACCINATION VC1 1 U1
LIST_ALL_BOOKINGS VC1 1
 BK1 Harry VC1 Bangalore
BOOK_VACCINATION VC2 1 U2
BOOK_VACCINATION VC2 1 U3
LIST_ALL_BOOKINGS VC2 1
 BK2 Ron VC2 Bangalore
 BK3 Albus VC2 Bangalore
BOOK_VACCINATION VC1 1 U5