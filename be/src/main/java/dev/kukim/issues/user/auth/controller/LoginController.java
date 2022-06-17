package dev.kukim.issues.user.auth.controller;

import dev.kukim.issues.user.auth.controller.response.LoginResponse;
import dev.kukim.issues.user.auth.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/login")
public class LoginController {

	private final LoginService loginService;

	@GetMapping("/token")
	public LoginResponse login(@RequestParam String code) {
		return loginService.createToken(code);
	}

}
