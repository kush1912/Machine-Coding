package Services;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Parameter;
import java.util.Scanner;

public class commandService {
	parkingService parkingService = new parkingService();
	
	/*
	 * Handles Inputs from Command Line
	 */
	public void parseCliInput() {
		while(true) {
			Scanner in = new Scanner(System.in);
			
			String input = in.nextLine();
	        String[] splited = input.split(" ");
	        String command = splited[0], parameter1=null, parameter2=null;
	        if(splited.length>1)
	        	parameter1 = splited[1];
	        if(splited.length>2)
	        	parameter2 = splited[2];
			this.call(command, parameter1, parameter2);
		}
	}
	
	/*
	 * Handles Inputs from File
	 */
	public void parseFileInput(String filePath) {
        try {
		FileReader inputFile = new FileReader(filePath);
	        BufferedReader br = new BufferedReader(inputFile);
	        String line;
	        try {
	            while ((line = br.readLine()) != null) {
//	            	System.out.println(line.trim());
	            	String[] splited = line.split(" ");
	    	        String command = splited[0].trim(), parameter1=null, parameter2=null;
	    	        if(splited.length>1)
	    	        	parameter1 = splited[1].trim();
	    	        if(splited.length>2)
	    	        	parameter2 = splited[2].trim();
	    
	    			this.call(command, parameter1, parameter2);
	            }
	        } catch (IOException ex) {
	            System.out.println("Error in reading the input file.");
	            ex.printStackTrace();
	        }
	    } catch (FileNotFoundException e) {
	        System.out.println("File not found in the path specified.");
	        e.printStackTrace();
	    }
	}

	
	/*
	 * Mapping of functions with respect to command provided.
	 */
	void call(String command, String parameter1, String parameter2) {
		switch (command) {
		case "create_parking_lot": {
			parkingService.createParking(Integer.parseInt(parameter1));
			break;
		}
		
		case "park":{
			parkingService.park(parameter1, parameter2);
			break;
		}
		
		case "leave":{
			parkingService.leave(Integer.parseInt(parameter1));
			break;
		}
		
		case "status":{
			parkingService.status();
			break;
		}
		
		case "registration_numbers_for_cars_with_colour":{
			parkingService.registrationNumberForCarsWithColour(parameter1);
			break;
		}
		
		case "slot_numbers_for_cars_with_colour":{
			parkingService.slotNumbersForCarsWithColour(parameter1);
			break;
		}
		
		case "slot_number_for_registration_number":{
			parkingService.slotNumberForRegistrationNumber(parameter1);
			break;
		}
		
		default:
			System.out.println("Invalid Command");
		}
	}

}    

