package dev.kukim.issues.label.controller;

import dev.kukim.issues.label.controller.request.LabelInsertRequest;
import dev.kukim.issues.label.controller.request.LabelUpdateRequest;
import dev.kukim.issues.label.controller.response.LabelListResponse;
import dev.kukim.issues.label.controller.response.LabelResponse;
import dev.kukim.issues.label.service.LabelService;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

	@PostMapping
	public LabelResponse insertLabel(@Valid @RequestBody LabelInsertRequest labelInsertRequest) {
		return labelService.insertLabel(labelInsertRequest);
	}

	@PatchMapping("/{labelId}")
	public LabelResponse updateLabel(@PathVariable Long labelId,
		@RequestBody LabelUpdateRequest labelUpdateRequest) {

		return labelService.updateLabel(labelId, labelUpdateRequest);
	}

	@DeleteMapping("/{labelId}")
	public void removeLabel(@PathVariable Long labelId) {
		labelService.removeLabel(labelId);
	}

}
