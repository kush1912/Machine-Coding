package Model;
import java.util.Arrays;
import java.util.HashMap;
import java.util.PriorityQueue;
import java.util.TreeSet;

public class Parking {
	private int capacity;
	private Slot [] slots;
	private HashMap<String, TreeSet<Slot> > carMap = new HashMap<>();
	
	public Parking(int capacity) {
		super();
		if(capacity<=0)
			System.out.println("Can not create a parking lot with "+ this.capacity+ " slots");
		this.capacity = capacity;
		this.slots = new Slot[capacity];
		for(int i=0;i<capacity;i++) {
			this.slots[i] = new Slot(i+1);
		}
		System.out.println("Created a parking lot with "+ this.capacity+ " slots");
		
	}

	public HashMap<String, TreeSet<Slot>> getCarMap() {
		return carMap;
	}

	public void setCarMap(HashMap<String, TreeSet<Slot>> carMap) {
		this.carMap = carMap;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public Slot[] getSlots() {
		return slots;
	}

	public void setSlots(Slot[] slots) {
		this.slots = slots;
	}
	
}
