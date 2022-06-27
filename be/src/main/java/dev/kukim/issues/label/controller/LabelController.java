package dev.kukim.issues.label.controller;

import dev.kukim.issues.label.controller.request.LabelInsertRequest;
import dev.kukim.issues.label.controller.response.LabelListResponse;
import dev.kukim.issues.label.controller.response.LabelResponse;
import dev.kukim.issues.label.service.LabelService;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/labels")
public class LabelController {

	private final LabelService labelService;

	@GetMapping
	public LabelListResponse showLabels() {
		return labelService.showLabels();
	}

}
