package Model;

public class Slot {
	private int id;
	private boolean isEmpty=true;
	private Car car;
	
	public Slot(int id) {
		super();
		this.id = id;
	}
	
	public int getId() {
		return id;
	}
	
	public boolean isEmpty() {
		return isEmpty;
	}
	public void setEmpty(boolean isEmpty) {
		this.isEmpty = isEmpty;
	}
	public Car getCar() {
		return car;
	}
	public void setCar(Car car) {
		this.car = car;
		this.isEmpty=false;
		System.out.println("Allocated slot number: "+ this.getId() );
	}
	
	public void leaveCar(int id) {
		this.setEmpty(true);
		this.car=null;	
	}
}
