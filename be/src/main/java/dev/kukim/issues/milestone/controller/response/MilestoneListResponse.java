package dev.kukim.issues.milestone.controller.response;

import java.util.List;
import lombok.Getter;

@Getter
public class MilestoneListResponse {

	private final Long labelsCount;
	private final Long openedMilestonesCount;
	private final Long closedMilestonesCount;
	private final List<MilestoneResponse> milestones;

	public MilestoneListResponse(Long labelsCount, Long openedMilestonesCount,
		Long closedMilestonesCount,
		List<MilestoneResponse> milestones) {
		this.labelsCount = labelsCount;
		this.openedMilestonesCount = openedMilestonesCount;
		this.closedMilestonesCount = closedMilestonesCount;
		this.milestones = milestones;
	}
}
