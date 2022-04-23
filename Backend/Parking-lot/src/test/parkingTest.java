import static org.junit.Assert.*;

import java.awt.image.RescaleOp;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import Services.parkingService;

public class parkingTest {
	
	
	parkingService parkingService = new parkingService();
    
	private ByteArrayOutputStream outContent = new ByteArrayOutputStream();
    @Before
    public void setUpStreams() {
        System.setOut(new PrintStream(outContent));
    }

    @After
    public void cleanUpStreams() {
        System.setOut(null);
    }
    
    @Test
    public void createParkingLot() throws Exception {
    	parkingService.createParking(6);
        assertTrue("createdaparkinglotwith6slots".equalsIgnoreCase(outContent.toString().trim().replace(" ", "")));
    }

    @Test
    public void park() throws Exception {
    	parkingService.park("KA-01-HH-1234", "White");
    	parkingService.park("KA-01-HH-9999", "White");
    	String text = "Sorry,parkinglotisnotcreated" +
                			"\n" +
                			"Sorry,parkinglotisnotcreated";
    	assertTrue(outContent.toString().trim().replace(" ", "").equalsIgnoreCase(text));
//    	
//        assertEquals("Sorry,parkinglotisnotcreated" +
//                "\n" +
//                "Sorry,parkinglotisnotcreated", outContent.toString().trim().replace(" ", ""));
//        parkingService.createParking(6);
//        parkingService.park("KA-01-HH-1234", "White");
//        parkingService.park("KA-01-HH-9999", "White");
//        
//        assertTrue("createdaparkinglotwith6slots"+
//        		"\n"+
//        		"allocatedslotnumber:1" +
//                "\n" +
//                "allocatedslotnumber:2".equalsIgnoreCase(outContent.toString().trim().replace(" ", "")));
//        
//        Allocated slot number: "+ this.getId() 
    }

    @Test
    public void leave() throws Exception {
    	parkingService.leave(2);
    	assertTrue("Sorry,parkinglotisnotcreated".equalsIgnoreCase(outContent.toString().trim().replace(" ", "")));
    	parkingService.createParking(6);
//    	assertTrue("Createdaparkinglotwith6slots".equalsIgnoreCase(outContent.toString().trim().replace(" ", "")));
    	parkingService.park("KA-01-HH-1234", "White");
    	
        parkingService.park("KA-01-HH-9999", "White");
//        cleanUpStreams();
//        System.setOut(null);
        outContent=new ByteArrayOutputStream();
        System.setOut(new PrintStream(outContent));
        parkingService.leave(4);
//        System.out.println(outContent.toString());
//        assertEquals("Slotnumber4isfree",outContent.toString().trim().replace(" ", ""));
    	  
//        
// 
        assertEquals("Sorry,parkinglotisnotcreated\n" +
                "Createdaparkinglotwith6slots\n" +
                "Allocatedslotnumber:1\n" +
                "Allocatedslotnumber:2\n" +
                "Slotnumber4isfree", outContent.toString().trim().replace(" ", ""));       
 }

    @Test
    public void status() throws Exception {
    	parkingService.status();
        assertEquals("Sorry,parkinglotisnotcreated", outContent.toString().trim().replace(" ", ""));
        parkingService.createParking(6);
        parkingService.park("KA-01-HH-1234", "White");
        parkingService.park("KA-01-HH-9999", "White");
        parkingService.status();
        assertEquals("Sorry,parkinglotisnotcreated\n" +
                "\n" +
                "Createdaparkinglotwith6slots\n" +
                "\n" +
                "Allocatedslotnumber:1\n" +
                "\n" +
                "Allocatedslotnumber:2\n" +
                "\n" +
                "SlotNo.\tRegistrationNo.\tColor\n" +
                "1\tKA-01-HH-1234\tWhite\n" +
                "2\tKA-01-HH-9999\tWhite", outContent.toString().trim().replace(" ", ""));
    }

    @Test
    public void getRegistrationNumbersFromColor() throws Exception {
    	parkingService.registrationNumberForCarsWithColour("White");
        assertEquals("Sorry,parkinglotisnotcreated", outContent.toString().trim().replace(" ", ""));
        parkingService.createParking(6);
        parkingService.park("KA-01-HH-1234", "White");
        parkingService.park("KA-01-HH-9999", "White");
        parkingService.registrationNumberForCarsWithColour("White");
        assertEquals("Sorry,parkinglotisnotcreated\n" +
                "\n" +
                "Createdparkinglotwith6slots\n" +
                "\n" +
                "Allocatedslotnumber:1\n" +
                "\n" +
                "Allocatedslotnumber:2\n" +
                "\n" +
                "\n" +
                "KA-01-HH-1234,KA-01-HH-9999", outContent.toString().trim().replace(" ", ""));
        parkingService.registrationNumberForCarsWithColour("Red");
        assertEquals("Sorry,parkinglotisnotcreated\n" +
                "\n" +
                "Createdparkinglotwith6slots\n" +
                "\n" +
                "Allocatedslotnumber:1\n" +
                "\n" +
                "Allocatedslotnumber:2\n" +
                "\n" +
                "\n" +
                "KA-01-HH-1234,KA-01-HH-9999Notfound", outContent.toString().trim().replace(" ", ""));
    }

    @Test
    public void getSlotNumbersFromColor() throws Exception {
    	parkingService.slotNumbersForCarsWithColour("White");
        assertEquals("Sorry,parkinglotisnotcreated", outContent.toString().trim().replace(" ", ""));
        parkingService.createParking(6);
        parkingService.park("KA-01-HH-1234", "White");
        parkingService.park("KA-01-HH-9999", "White");
        parkingService.slotNumbersForCarsWithColour("White");
        assertEquals("Sorry,parkinglotisnotcreated\n" +
                "\n" +
                "Createdparkinglotwith6slots\n" +
                "\n" +
                "Allocatedslotnumber:1\n" +
                "\n" +
                "Allocatedslotnumber:2\n" +
                "\n" +
                "\n" +
                "1,2", outContent.toString().trim().replace(" ", ""));
        parkingService.slotNumbersForCarsWithColour("Red");
        assertEquals("Sorry,parkinglotisnotcreated\n" +
                "\n" +
                "Createdparkinglotwith6slots\n" +
                "\n" +
                "Allocatedslotnumber:1\n" +
                "\n" +
                "Allocatedslotnumber:2\n" +
                "\n" +
                "\n" +
                "1,2\n" +
                "Notfound", outContent.toString().trim().replace(" ", ""));
    }

    @Test
    public void getSlotNumberFromRegNo() throws Exception {
    	parkingService.slotNumberForRegistrationNumber("KA-01-HH-1234");
        assertEquals("Sorry,parkinglotisnotcreated", outContent.toString().trim().replace(" ", ""));
        parkingService.createParking(6);
        parkingService.park("KA-01-HH-1234", "White");
        parkingService.park("KA-01-HH-9999", "White");
        parkingService.slotNumberForRegistrationNumber("KA-01-HH-1234");
        assertEquals("Sorry,parkinglotisnotcreated\n" +
                "\n" +
                "Createdparkinglotwith6slots\n" +
                "\n" +
                "Allocatedslotnumber:1\n" +
                "\n" +
                "Allocatedslotnumber:2\n" +
                "\n" +
                "1", outContent.toString().trim().replace(" ", ""));
        parkingService.slotNumberForRegistrationNumber("KA-01-HH-9999");
        assertEquals("Sorry,parkinglotisnotcreated\n" +
                "\n" +
                "Createdparkinglotwith6slots\n" +
                "\n" +
                "Allocatedslotnumber:1\n" +
                "\n" +
                "Allocatedslotnumber:2\n" +
                "\n" +
                "1\n" +
                "2", outContent.toString().trim().replace(" ", ""));
        parkingService.leave(1);
        parkingService.slotNumberForRegistrationNumber("KA-01-HH-1234");
        assertEquals("Sorry,parkinglotisnotcreated\n" +
                "\n" +
                "Createdparkinglotwith6slots\n" +
                "\n" +
                "Allocatedslotnumber:1\n" +
                "\n" +
                "Allocatedslotnumber:2\n" +
                "\n" +
                "1\n" +
                "2\n" +
                "Slotnumber1isfree\n" +
                "\n" +
                "Notfound", outContent.toString().trim().replace(" ", ""));
    }
	
}
