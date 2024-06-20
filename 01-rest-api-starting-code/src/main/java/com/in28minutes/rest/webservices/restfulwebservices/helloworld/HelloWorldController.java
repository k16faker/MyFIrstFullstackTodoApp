package com.in28minutes.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
	
	@GetMapping(path = "/hello-world")
	@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
	public String helloWorld() {
		return "Hello World v2"; 
	}
	
	@GetMapping(path = "/hello-world-bean")
	@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World Bean"); 
	}
	
	@GetMapping(path = "/hello-world/path-variable/{name}")
	@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name)); 
	}	
}
