package dev.kukim.issues.milestone.controller;

import dev.kukim.issues.milestone.controller.request.MilestoneCreateRequest;
import dev.kukim.issues.milestone.controller.request.MilestoneUpdateRequest;
import dev.kukim.issues.milestone.controller.response.MilestoneResponse;
import dev.kukim.issues.milestone.controller.response.MilestoneListResponse;
import dev.kukim.issues.milestone.service.MilestoneService;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/milestones")
public class MilestoneController {

	private final MilestoneService milestoneService;

	@GetMapping
	public MilestoneListResponse showMilestoneBySearch(@RequestParam String milestoneStatus) {
		return milestoneService.showMilestoneBySearch(milestoneStatus);
	}

	@PostMapping
	public MilestoneResponse insertMilestone(@Valid @RequestBody MilestoneCreateRequest milestoneCreateRequest) {
		return milestoneService.insertMilestone(milestoneCreateRequest);
	}

	@PatchMapping("/{milestoneId}")
	public MilestoneResponse updateMilestone(@PathVariable Long milestoneId,
		@RequestBody MilestoneUpdateRequest milestoneUpdateRequest) {
		return milestoneService.updateMilestone(milestoneId, milestoneUpdateRequest);
	}

	@DeleteMapping("/{milestoneId}")
	public void removeMilestone(@PathVariable Long milestoneId) {
		milestoneService.removeMilestone(milestoneId);
	}
}
