package com.carservicing.registration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carservicing.registration.model.User;
import com.carservicing.registration.repository.RegistrationRepository;


@Service
public class RegistrationService {
	@Autowired
	private RegistrationRepository registrationRepository;
 public User saveUser(User user)
 {
	 return registrationRepository.save(user);
 }
 public User fetchUserByEmailId(String email)
 {
	 return registrationRepository.findByEmailId(email);
 }
 public User fetchUserByEmailIdAndPassword(String email,String password)
 {
	 return registrationRepository.findByEmailIdAndPassword(email, password);
 }
}
