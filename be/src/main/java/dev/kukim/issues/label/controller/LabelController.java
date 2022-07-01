package dev.kukim.issues.label.controller;

import dev.kukim.issues.label.controller.request.LabelInsertRequest;
import dev.kukim.issues.label.controller.request.LabelUpdateRequest;
import dev.kukim.issues.label.controller.response.LabelListResponse;
import dev.kukim.issues.label.service.LabelService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public void insertLabel(@RequestBody LabelInsertRequest labelInsertRequest) {
		labelService.insertLabel(labelInsertRequest);
	}

	@PatchMapping("/{labelId}")
	public void updateLabel(@PathVariable Long labelId,
		@RequestBody LabelUpdateRequest labelUpdateRequest) {
		labelService.updateLabel(labelId, labelUpdateRequest);
	}

	@DeleteMapping("/{labelId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void removeLabel(@PathVariable Long labelId) {
		labelService.removeLabel(labelId);
	}

}
