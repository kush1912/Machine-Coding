package Services;
import java.util.Comparator;
import java.util.HashMap;
import java.util.TreeSet;

import Model.Car;
import Model.Parking;
import Model.Slot;

public class parkingService {
	private class SlotComparator implements Comparator<Slot>{
        
        public int compare(Slot s1, Slot s2) {
            if (s1.getId() > s2.getId())
                return 1;
            else if (s1.getId() < s2.getId())
                return -1;
                          return 0;
            }
    }
	
	Parking parking;
	
	
	/*
	 * Creates a parking lot with a user defined capacity
	 */
	public void createParking(int capacity) {
		this.parking = new Parking(capacity);
	}
	
	/*
	 * Storing Slots in hashmap with color as key to increase the efficiency of query commands
	 * White = s1, s3, s4
	 * Black = s2, s5, s6
	*/
	
	/*
	 * Parks particular car in a given slot
	*/
	public void park(String registrationNumber, String Color) {
		try {
			boolean allocated=false;
			Car car = new Car(registrationNumber, Color);
			Slot [] slots = this.parking.getSlots();
			
			for(int i=0;i<slots.length;i++) {
				if(slots[i].isEmpty()) {
					allocated=true;
					slots[i].setCar(car);
					
					if(this.parking.getCarMap().containsKey(car.getColor())) {
						this.parking.getCarMap().get(car.getColor()).add(slots[i]);
					}
					else {
						this.parking.getCarMap().put(car.getColor(), new TreeSet<Slot>(new SlotComparator()));
						this.parking.getCarMap().get(car.getColor()).add(slots[i]);
					}
					break;
				}
			}
			if(!allocated)System.out.println("Sorry, parking lot is full");
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("Sorry, parking lot is not created");
		}
	}
	
	
	/*
	 * Empties the slot with given id
	 */
	public void leave(int id) {
		try {
			if(id>parking.getCapacity() || id<=0)
				System.out.println("Invalid Slot number");
			Slot [] slots = this.parking.getSlots();
			if(!slots[id-1].isEmpty()) {
				this.parking.getCarMap().get(slots[id-1].getCar().getColor()).remove(slots[id-1]);
				slots[id-1].leaveCar(id);
			}
			System.out.println("Slot number "+id+" is free");
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("Sorry, parking lot is not created");
		}
		
	}
	
	/*
	 * Provides Status of the given parking lot
	 */
	public void status() {
		try {
			Slot [] slots = this.parking.getSlots();
			System.out.println("Slot No. Registration No Colour");
			for(int i=0;i<slots.length;i++) {
				if(!slots[i].isEmpty()) {
					System.out.println(slots[i].getId() + " " +
										slots[i].getCar().getRegistrationNumber() + " " +
										slots[i].getCar().getColor());				
				}
			}
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("Sorry, parking lot is not created");
		}
		System.out.println();
	}
	
	/*
	 * queries registration Number For Cars With given Colour
	 */
	public void registrationNumberForCarsWithColour(String color) {
		int i=1;
		TreeSet<Slot> slots = this.parking.getCarMap().get(color);
		for (Slot slot : slots) {
			System.out.print(slot.getCar().getRegistrationNumber());
			if(i++!=slots.size()) {
				System.out.print(", ");
			}
		}
		
		System.out.println();
	}
	
	/*
	 * queries Slot Number For Cars With given Colour
	 */
	public void slotNumbersForCarsWithColour(String color) {
		TreeSet<Slot> slots = this.parking.getCarMap().get(color);
		
		int i=1;
		for (Slot slot : slots) {
			System.out.print(slot.getId());
			if(i++!=slots.size()) {
				System.out.print(", ");
			}
		}
		System.out.println();
	}
	
	/*
	 * queries Slot Number For Car With given registration Number
	 */
	public void slotNumberForRegistrationNumber(String registrationNumber) {
		boolean found=false;
		Slot [] slots = this.parking.getSlots();
		for(int i=0;i<slots.length;i++) {
			if(!slots[i].isEmpty() && slots[i].getCar().getRegistrationNumber().equals(registrationNumber)) {
				found=true;
				System.out.print(slots[i].getId());
				break;
			}
		}
		if(!found)System.out.print("Not found");
		
		System.out.println();
	}
}
