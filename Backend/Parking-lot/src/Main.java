import java.util.Scanner;

import Services.commandService;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.File;
import java.io.IOException;
import java.io.PrintStream;
import java.io.FileNotFoundException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class Main {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		commandService commandService = new commandService();
		
		//Handle input from file
		if(args.length>0) {
			commandService.parseFileInput(args[0]);
		}
		
		//Handle input from CLI
		commandService.parseCliInput();
		
	}
}
