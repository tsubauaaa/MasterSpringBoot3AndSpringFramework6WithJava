package programing;

import java.util.List;

public class FP01Exercise {

	public static void main(String[] args) {
		List<Integer> numbers = List.of(12, 9, 13, 4, 6, 2, 4, 12, 15);
		printCubesOfOddNumbersInListFunctional(numbers);
//		printOddNumbersInListFunctional(numbers);
		
		List<String> courses = 
				List.of("Spring", "Spring Boot", "API", "Microservices",
						"AWS", "PCF", "Azure", "Docker", "Kubernetes");
		
//		courses.stream()
//			.forEach(System.out::println);

//		courses.stream()
//			.filter(course -> course.contains("Spring"))
//			.forEach(System.out::println);

//		courses.stream()
//			.filter(course -> course.length() >= 4)
//			.forEach(System.out::println);
		
		courses.stream()
			.map(course -> course + " " + course.length())
			.forEach(System.out::println);
		
	}


	private static void printOddNumbersInListFunctional(List<Integer> numbers) {
		numbers.stream()
			.filter(number -> number%2!=0) //Lambda Expression
			.forEach(System.out::println);//Method Reference
		
	}
	
	private static void printCubesOfOddNumbersInListFunctional(List<Integer> numbers) {
		numbers.stream()
			.filter(number -> number%2!=0) //Lambda Expression
			.map(number -> number * number * number)
			.forEach(System.out::println);//Method Reference
	}
}
