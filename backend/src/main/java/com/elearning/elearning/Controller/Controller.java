package com.elearning.elearning.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elearning.elearning.Repository.StudentRepository;
import com.elearning.elearning.Repository.TeacherRepo;
import com.elearning.elearning.models.Student;
import com.elearning.elearning.models.Teacher;

@SpringBootApplication
@RequestMapping("/Api/v1")
@RestController
public class Controller {
	@Autowired
	StudentRepository stdrepo;
	@Autowired
	TeacherRepo trepo;
	@GetMapping("/students")
	public List<Student> getAll() {
		return stdrepo.findAll();
	}
	@PostMapping("/addstudent")
	public Object addStudent(@RequestBody Student st) {
		return stdrepo.save(st);
		
	}
	@PostMapping("/addteacher")
	public Object addTeacher(@RequestBody Teacher tch) {
		return trepo.save(tch);
		
	}
	@GetMapping("/login")
	public String login() {
		return "login page";

	}
	@GetMapping("/protectedroute")
	public Object protectedroute(@RequestBody Student st) {
		return stdrepo.save(st);

	}
}
