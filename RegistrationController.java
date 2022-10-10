package com.carservicing.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carservicing.registration.model.User;
import com.carservicing.registration.service.RegistrationService;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/registration")
public class RegistrationController {
	
	@Autowired
	private RegistrationService registrationService;
	
  @PostMapping("/registrationuser")
  //@CrossOrigin(origins = "http://localhost:4200")
  public User registerUser(@RequestBody User user) throws Exception
  {
		String tempemailId=user.getEmailId();
		if(tempemailId!=null &&!"".equals(tempemailId))
		{
			User userObj=registrationService.fetchUserByEmailId(tempemailId);
			if(userObj!=null)
			{
				throw new Exception("user with "+tempemailId+" is already exist");
			}
		}
	  User userObj=null;
	  userObj=registrationService.saveUser(user);
	  return userObj;
  }
  
  @PostMapping("/login")
  //@CrossOrigin(origins = "http://localhost:4200")
  public User loginUser(@RequestBody User user) throws Exception
  {
	  String tempEmailId=user.getEmailId();
	  String tempPassword=user.getPassword();
	  User  userObj=null;
	  System.out.println(" "+tempEmailId+" "+tempPassword);
	  System.out.println("Inside Controller");
	  if(tempEmailId != null && tempPassword != null)
	  {
		  userObj= registrationService.fetchUserByEmailId(tempEmailId);
		  System.out.println(userObj);
	  }
		  if(userObj==null)
	      {
	    	  throw new Exception("Bad credentials");
	      }
		  else if(!tempEmailId.equals(userObj.getEmailId()) || !tempPassword.equals(userObj.getPassword())) {
			  throw new Exception("Bad credentials");
		  }
	  return userObj;
  }
}
